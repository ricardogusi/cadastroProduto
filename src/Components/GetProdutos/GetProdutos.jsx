import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import "./GetProdutos.css"

import { Link } from "react-router-dom";

export default function GetProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const get = async () => {
      const response = await fetch("http://localhost:8081/api/produtos");
      const data = await response.json();
      setProdutos(data);
    };

    get();
  }, []);

  return (
    <div className="containerMain">
        <div className="containerLista" >              
        <ul className="listaHeader" >
            <li>ID</li>
            <li>Nome</li>
            <li>Preço</li>
        </ul>
      {produtos.map((produto) => {
        return (
            <ul className="lista" key={produto.id} >
              <div className="boxLinha">
              <li>{produto.id}</li>
              </div>  
              <div className="boxLinha">
              <li>{produto.nome}</li>
              </div>
              <div className="boxLinha">  
              <li>R$ {produto.preco}</li>
              </div>  
            </ul>
        );
    })}
      <Button variant="primary">
        <Link to="/" className="link">
          Voltar para Home
        </Link>
      </Button>
    </div>
    </div>
  );
}
