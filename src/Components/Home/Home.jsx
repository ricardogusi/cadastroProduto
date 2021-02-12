
import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="container">
      <h1>Cadastro de Produtos</h1>
      <span>O que você deseja fazer?</span>
      
      <Button variant="primary"><Link to="/produtos" className="link">Consultar Produtos</Link></Button>      

      <Button variant="primary"><Link to="/form" className="link">Cadastrar um novo Produto</Link></Button>
    </div>
  );
}
