/**Super Trunfo Lord of the Rings 1.0
  Autor: ALlan Landau de Carvalho Hilgemberg
  Data:11/09/2021
**/

import React from "react";
import { JogoStyles } from "./jogoStyles";

const jogo = () => {



  //DEFINIÇÃO DE CARTAS ESTÁTICAS

  var Legolas = {
    nome: "Legolas",
    imagem:
      "https://res.cloudinary.com/turing-tecnologia/image/upload/v1631331422/personagens/legolas_im0ygv.png",
    atributos: {
      Força: 8,
      Resistência: 7,
      Burden: 1,
      Companion: 8,
    },
  };
  var GilGalad = {
    nome: "Gil Galad - S.T.",
    imagem:
      "https://res.cloudinary.com/turing-tecnologia/image/upload/v1631331421/personagens/gil_galad_fjjah3.png",
    atributos: {
      Força: 10,
      Resistência: 10,
      Burden: 10,
      Companion: 10,
    },
  };
  var Elrond = {
    nome: "Elrond",
    imagem:
      "https://res.cloudinary.com/turing-tecnologia/image/upload/v1631331421/personagens/elrond_lnulnf.png",
    atributos: {
      Força: 8,
      Resistência: 9,
      Burden: 3,
      Companion: 7,
    },
  };
  var Galadriel = {
    nome: "Galadriel",
    imagem:
      "https://res.cloudinary.com/turing-tecnologia/image/upload/v1631331421/personagens/galadriel_nceqfx.png",
    atributos: {
      Força: 9,
      Resistência: 5,
      Burden: 7,
      Companion: 6,
    },
  };
  var Glorfindel = {
    nome: "Glorfindel",
    imagem:
      "https://res.cloudinary.com/turing-tecnologia/image/upload/v1631331421/personagens/glorfindel_puxnt9.png",
    atributos: {
      Força: 9,
      Resistência: 9,
      Burden: 1,
      Companion: 6,
    },
  };
  var Haldir = {
    nome: "Haldir",
    imagem:
      "https://res.cloudinary.com/turing-tecnologia/image/upload/v1631331421/personagens/haldir_ume3ai.png",
    atributos: {
      Força: 7,
      Resistência: 6,
      Burden: 5,
      Companion: 7,
    },
  };
  var Arwen = {
    nome: "Arwen",
    imagem:
      "https://res.cloudinary.com/turing-tecnologia/image/upload/v1631331421/personagens/arwen_iss8jz.png",
    atributos: {
      Força: 7,
      Resistência: 5,
      Burden: 7,
      Companion: 8,
    },
  };

  var cartaMaquina;
  var cartaJogador;
  var cartas = [
    Legolas,
    GilGalad,
    Elrond,
    Galadriel,
    Glorfindel,
    Haldir,
    Arwen,
  ];


  /**DEFINIÇÃO DE FUNÇÕES DO JOGO
    -Sorteio
    -Exibição de carta do jogador
    -Exibição de carta da máquina
    -Escolha de atributo
    -Jogo
    -Novo jogo  
  **/

  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 7);
    cartaMaquina = cartas[numeroCartaMaquina];
    var htmlResultado = "";
    var numeroCartaJogador = parseInt(Math.random() * 7);
    while (numeroCartaJogador === numeroCartaMaquina) {
      numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    document.getElementById("btnProximaRodada").disabled = true;
    htmlResultado = '<p class="resultado-final"></p>';
    exibeCartaJogador();
  }





  function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    var moldura =
      '<img src="https://res.cloudinary.com/turing-tecnologia/image/upload/v1631333617/componentes/carta_idifm0.png" style=" width: inherit; height: inherit; position: absolute;"/>';

    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    var opcoesTexto = "";

    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        ": " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }

    var html = "<div id='opcoes' class='carta-status'>";
    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + "</div>";
    var divCartaMaquina = document.getElementById("carta-maquina");
    var moldura =
      '<img src="https://res.cloudinary.com/turing-tecnologia/image/upload/v1631333617/componentes/carta_idifm0.png" style=" width: inherit; height: inherit; position: absolute;"/>';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value= '" +
        atributo +
        "'>" +
        atributo +
        ": " +
        "???" +
        "<br>";
    }
    var html = "<div id='opcoes' class='carta-status'>";
    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + "</div>";
  }






  function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    var moldura =
      '<img src="https://res.cloudinary.com/turing-tecnologia/image/upload/v1631406772/componentes/carta_kakjsa.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        ": " +
        cartaMaquina.atributos[atributo];
    }
    //opcoes.innerHTML = opcoesTexto;
    var html = "<div id='opcoes' class='carta-status'>";
    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + "</div>";
  }

  function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributo.length; i++) {
      if (radioAtributo[i].checked) {
        return radioAtributo[i].value;
      }
    
      document.getElementById("btnJogar").disabled = false;
      
    }
  }






  function jogar() {
    exibeCartaMaquina();
    document.getElementById("resultado").style.display = "inline-block";
    var divResultado = document.getElementById("resultado");
    var atributoSelecionado = obtemAtributoSelecionado();
    var htmlResultado = "";
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = '<p class="resultado-final">Venceu!</p>';
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = '<p class="resultado-final">Perdeu!</p>';
    } else {
      htmlResultado = '<p class="resultado-final">Empatou!</p>';
    }

    divResultado.innerHTML = htmlResultado;
    document.getElementById("btnJogar").disabled = false;
      document.getElementById("btnProximaRodada").disabled = false;
  }

  function novoJogo() {
    document.getElementById("resultado").style.display = "none";
    sortearCarta();
  }




//CONTENT DE PÁGINA

  return (
    <JogoStyles>
      <section class="container">
        <body>
          <div>
            <img
              class="lotr"
              src="https://res.cloudinary.com/turing-tecnologia/image/upload/v1631334189/componentes/The_Lord_of_the_Rings_logo_bqul3u.png"
              alt="logo"
            />
            <img
              class="supertrunfo"
              src="https://res.cloudinary.com/turing-tecnologia/image/upload/v1631335965/componentes/supertrunfo_b6rhjh.png"
              alt="supertrunfo"
            />

            <div class="botao">
              <button onClick={sortearCarta} id="btnSortear">
                Sortear carta
              </button>
            </div>
            <form id="form">
              <div class="wrapper">
                <div class="duasCartas">
                  <div class="cartaUm">
                    <h2>A sua carta é:</h2>
                    <div id="carta-jogador">
                      <img
                        src="https://res.cloudinary.com/turing-tecnologia/image/upload/v1631333617/componentes/carta_idifm0.png"
                        alt="cartaum"
                      />
                    </div>
                  </div>

                  <div id="resultado"></div>
                  <div class="cartaDois">
                    <h2>A carta da máquina é:</h2>
                    <div id="carta-maquina" class="carta">
                      <img
                        src="https://res.cloudinary.com/turing-tecnologia/image/upload/v1631333617/componentes/carta_idifm0.png"
                        alt="cartadois"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="button-jogar"
                type="button"
                id="btnJogar"
                onClick={jogar}
              >
                Jogar
              </button>
            </form>
            <button
              type="button"
              id="btnProximaRodada"
             onClick={novoJogo}
           
            >
              Nova Rodada
            </button>
          </div>
        </body>
      </section>
    </JogoStyles>
  );
};
export default jogo;
