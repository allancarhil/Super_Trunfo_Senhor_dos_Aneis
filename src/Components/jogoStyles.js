import styled from "styled-components";
import{
  fundoTela,
}from "../Imagens";

export const JogoStyles = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Montserrat:ital,wght@0,100;0,200;0,300;1,100;1,200&family=Nunito+Sans:wght@700&family=Oxygen:wght@300;400;700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap");
  body {
    font-family: "Roboto Mono", monospace;
    
    background-image: url(${fundoTela});
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    padding-bottom: 9.1vh;
  }

  .page-logo {
    width: 150px;
    top: 10px;
    left: 10px;
    position: absolute;
  }

  .lotr {
    width: 380px;
    margin-top: 50px;
  }
  .container {
    text-align: center;
    padding: 20px;
 
  }

  .page-title {
    color: #ffffff;
    font-weight: bold;
    font-size: 30px;
    font-family: "Oxygen", sans-serif;
    margin-top: 20px;
  }

  #btnSortear {
    padding: 0.8rem 1.5rem;
    border: 3px solid #7c724c;
    border-width: 5px;
    font-size: 1rem;
    margin-top: -5px;
    font-family: "Noto Serif", serif;
    text-transform: uppercase;
    background-color: #1e2326;
    color: #71745f;
    font-weight: bold;
    font-size: 20px;
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }

  .button-jogar {
    height: 50px;
    width: 100px;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    border: none;
    font-size: 1rem;
    border: 3px solid #7c724c;
    border-width: 5px;
    font-size: 1rem;
    margin-top: 10px;
    font-family: "Noto Serif", serif;
    text-transform: uppercase;
    background-color: #1e2326;
    color: #71745f;
    font-weight: bold;
    font-size: 20px;
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }

  h2 {
    color: white;
    margin-right: auto;
    margin-left: auto;
    font-family: "Montserrat", sans-serif;
  }

  #carta-jogador,
  #carta-maquina {
    width: 380px;
    height: 530px;
    overflow: auto;
    border-radius: 10px;
    margin-bottom: 20px;
   
    display: flex;
    align-items: flex-end;
    position: relative;
    background-size: 350px 300px;
    background-repeat: no-repeat;
    background-position-x: 5px;
    background-position-y: 10px;
    border-radius: 33px;
  }

  #carta-jogador h3 {
    text-align: center;
  }

  .carta-imagem {
    border: 1px solid black;
    height: 100px;
    margin: 10px;
  }

  .carta-imagem img {
    width: 100%;
    height: 100%;
  }

  .carta-status {
  
    margin: 2rem 5rem;
    color: black;
    z-index: 2;
    font-family: "Lora", serif;
    text-transform: capitalize;
    text-align: left;
    line-height: 1.6;
  }

  .duasCartas {
    margin: 0 10px 0 10px;
    display: inline-flex;
  }

  .supertrunfo{
    position:relative;
    display:flex;
    width:300px;
    height:80px;
    padding-left:780px;
    padding-bottom:50px;
  }

  .carta-status input {
    margin: 15px 10px;
  }

  .resultado-final {
    color: white;
    font-size: 40px;
    margin-top: 250px;
    text-transform: uppercase;
    font-weight: bolder;
    margin-left: 100px;
    margin-right: 100px;
    font-family: "Orbitron", sans-serif;
  }

  .--spacing {
    margin-left: 2.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .wrapper {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .carta-subtitle {
    z-index: 2;
    position: absolute;
    top: 5px;
    left: 90px;
    font-weight: 800;
    font-size:22px;
    color:white;
    font-family: "Lora", serif;
  }

  #cartas {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .carta-status p {
    margin-bottom: 1rem;
    margin-left: 15px;
    font-weight: 500;
    font-family: "Lora", serif;
    text-transform: capitalize;
  }

  #btnProximaRodada {
    height: 70px;
    width: 200px;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    border: none;
    font-size: 1rem;
    border: 3px solid #7c724c;
    border-width: 5px;
    font-size: 1rem;
    margin-top: 10px;
    font-family: "Noto Serif", serif;
    text-transform: uppercase;
    background-color: #1e2326;
    color: #71745f;
    font-weight: bold;
    font-size: 20px;
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }

 



`;
