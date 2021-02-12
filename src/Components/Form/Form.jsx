import React, { useState } from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";


export default function FormProdutos() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState(0);
  const [produto,setProduto] = useState({Nome:'',Preco:0})

  let handleChangeNome = (event) => {
    let nome = event.target.value;
    setNome(nome);
  };

  let handleChangePreco = (event) => {
    let preco = event.target.value;
    setPreco(+preco);
  };
  
    
  
    
  let handleSubmit = (event) => {
    event.preventDefault();
    let postData = async () => {
      setProduto({Nome:nome, Preco:preco})
      const resp = await fetch("http://localhost:8081/api/produtos/", {
        method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "aplication/json",
          },
          body: JSON.stringify(produto),
        });
        const content = await resp.json();
        console.log(resp);
        console.log(content)
      };  
      postData()
    // window.alert("Produto cadastrado com sucesso!");
  };
  
  return (
    <div className="containerMain">
      <div>
        <Form className="containerForm" onClick={handleSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Nome do Produto
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Nome do produto"
                onChange={(handleChangeNome)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Preço
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="number"
                placeholder="Preço"
                onChange={handleChangePreco}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Cadastrar</Button>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button variant="primary">
                <Link to="/" className="link">
                  Voltar para Home
                </Link>
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
