import { Link } from "react-router-dom";

import whats from "../assets/button-whats.png";
import cart from "../assets/button-cart.png";
import guitarzone from "../assets/button-guitar-zone.png";
import gamezone from "../assets/button-game-zone.png";

import img from "../assets/heeepah-banner.png";
import h20x28 from "../assets/heeepah-20x28.png";
import cachacas from "../assets/placas-cachaca.png";
import heeeph from "../assets/heeeph-center.png";
import skates from "../assets/placas-skate.png";
import h10x15 from "../assets/heeepah-10x15.png";

import bandas from "../assets/button-bandas.png";
import bebidas from "../assets/button-bebidas.png";
import carros from "../assets/button-carros.png";
import games from "../assets/button-games.png";
import infantil from "../assets/button-infantil.png";
import motos from "../assets/button-motos.png";
import musica from "../assets/button-musica.png";
import trip from "../assets/button-trip.png";
import rpg from "../assets/button-rpg.png";
import street from "../assets/button-street.png";
import decorativas from "../assets/button-decoracao.png";
import fotos from "../assets/button-fotos.png";

import gta from "../assets/quadro-gta.png";
import naipes from "../assets/quadro-naipes.png";
import roblox from "../assets/quadro-roblox.png";
import skate from "../assets/quadro-skate.png";

export default function Home() {
  return (
    <div className="page">
      <nav className="menu-container">
        <ul className="header-menu">
          <li>
            <Link to="/whatsapp">
              <img className="header-img" src={whats} alt="whatsapp" />
            </Link>
          </li>
          <li className="nav-menu">
            <Link to="/destaque">Placas decorativas</Link>
          </li>
          <li className="nav-menu">
              <img className="header-img" src={guitarzone} alt="guitar zone" />
          </li>
          <li className="nav-menu">
            <Link to="/contato">Placas Personalizadas</Link>
          </li>
          <li className="nav-menu">
              <img className="header-img" src={gamezone} alt="game zone" />
          </li>
          <li className="nav-menu">
            <Link to="/produtos">Placas com identidade</Link>
          </li>
          <li className="nav-img">
            <img src={heeeph} alt="heeeph nome" />
          </li>
          <li>
            <Link to="/carrinho">
              <img
                className="header-img"
                src={cart}
                alt="carrinho de compras"
              />
            </Link>
          </li>
        </ul>
      </nav>

      <div>
        <img className="home-image" src={img} alt="Imagem de destaque" />
      </div>

      <div className="destak">
        <Link to="/produtos/20x28">
          <img src={h20x28} alt="quadros 20x28cm" />
        </Link>
        <img className="destak-img" src={cachacas} alt="quadros cachaça" />
        <img src={heeeph} alt="heeeeph nome" />
        <img className="destak-img" src={skates} alt="quadros skate" />
        <Link to="produtos/10x15">
          <img src={h10x15} alt="quadros 10x15cm" />
        </Link>
      </div>

      <div className="categories-title">
        <hr></hr>
        <h1>Categorias</h1>
        <hr></hr>
      </div>
      <div className="categories">
        <div className="categories-buttons">
          <Link to="/produtos/bandas">
            <img
              className="categories-img"
              src={bandas}
              alt="categoria bandas"
            />
          </Link>
        </div>
        <div className="categories-buttons">
          <Link to="/produtos/bebidas">
            <img
              className="categories-img"
              src={bebidas}
              alt="categoria bebidas"
            />
          </Link>
        </div>
        <div className="categories-buttons">
          <Link to="/produtos/carros">
            <img
              className="categories-img"
              src={carros}
              alt="categoria carros"
            />
          </Link>
        </div>
        <div className="categories-buttons">
          <Link to="/produtos/games">
            <img className="categories-img" src={games} alt="categoria games" />
          </Link>
        </div>
        <div className="categories-buttons">
          <Link to="/produtos/infantil">
            <img
              className="categories-img"
              src={infantil}
              alt="categoria infantil"
            />
          </Link>
        </div>
        <div className="categories-buttons">
          <Link to="/produtos/motos">
            <img className="categories-img" src={motos} alt="categoria motos" />
          </Link>
        </div>
        <div className="categories-buttons">
          <Link to="/produtos/decorativas">
            <img
              className="categories-img"
              src={decorativas}
              alt="categoria decorativas"
            />
          </Link>
        </div>
        <div className="categories-buttons">
          <Link to="/produtos/musica">
            <img
              className="categories-img"
              src={musica}
              alt="categoria musica"
            />
          </Link>
        </div>
        <div className="categories-buttons">
          <Link to="/produtos/trip">
            <img className="categories-img" src={trip} alt="categoria trip" />
          </Link>
        </div>
        <div className="categories-buttons">
          <Link to="/produtos/rpg">
            <img className="categories-img" src={rpg} alt="categoria rpg" />
          </Link>
        </div>
        <div className="categories-buttons">
          <Link to="/produtos/street">
            <img
              className="categories-img"
              src={street}
              alt="categoria street"
            />
          </Link>
        </div>
        <div className="categories-buttons">
          <Link to="/produtos/fotos">
            <img
              className="categories-img"
              src={fotos}
              alt="categoria fotos reais"
            />
          </Link>
        </div>
      </div>

      <div className="categories-title">
        <hr></hr>
        <h1>Novidades</h1>
        <hr></hr>
      </div>
      <div className="categories-news">
        <div className="categories-buttons">
          <Link to="/produtos/gta">
            <img
              className="categories-quadros"
              src={gta}
              alt="quadro jogo gta"
            />
          </Link>
        </div>
        <div className="categories-buttons">
          <Link to="/produtos/roblox">
            <img
              className="categories-quadros"
              src={roblox}
              alt="quadro jogo roblox"
            />
          </Link>
        </div>
        <div className="categories-buttons">
          <Link to="/produtos/naipes">
            <img
              className="categories-quadros"
              src={naipes}
              alt="quadro ilustrativo de naipes de baralho"
            />
          </Link>
        </div>
        <div className="categories-buttons">
          <Link to="/produtos/skate">
            <img
              className="categories-quadros"
              src={skate}
              alt="quadro de um skatista"
            />
          </Link>
        </div>
      </div>
      <hr></hr>

      <div className="footer">
        <div>
          <h1 className="footer-title amarelo">O que é HEEEPH</h1>
          <p className="footer-text">
            A HEEEPH nao e so uma marca.<br/>É expressão.<br/>Nasceu da vontade de
            transformar parede vazia em personalidade.<br/>De pegar cultura, música,
            estrada, bar, oficina, videogame retrô, psicodelia, clássico, raiz
            ...<br/>e transformar isso em peca fisica.<br/><br/>Aqui não e decoração
            comum.<br/>É identidade pendurada na parede.<br/>Cada placa carrega atitude.<br/>
            Cada detalhe tem intenção.<br/>Cada tema fala com um estilo de vida.
            HEEEPH é pra quem vive o que gosta.<br/>Sem pedir permissão.
          </p>
        </div>
        <div>
          <h1 className="footer-title verde">De onde surgiu?</h1>
          <p className="footer-text">
            A HEEEPH surgiu do gosto pelo que é autêntico.<br/>Do rock alto.<br/>Da
            garagem.<br/>Da conversa de bar.<br/>Da nostalgia dos anos 80 e 90.<br/>Da
            cultura urbana.<br/>Do retrô que nunca morre.<br/>Começou pequena. Ideia
            simples.<br/>Criar placas que não fossem so bonitas, mas que
            representassem algo.<br/>Hoje cada arte nasce da mistura entre o
            classico e o ousado.<br/>Entre o tradicional e o brutal.<br/>Não seguimos
            tendência<br/>Criamos nosso proprio estilo.
          </p>
        </div>
        <div>
          <h1 className="footer-title azul">Agradecimentos</h1>
          <p className="footer-text">
            A cada pessoa que escolhe pendurar HEEEPH na parede.<br/>Voces não estão
            comprando so uma placa.<br/>Estão fortalecendo um projeto independente.<br/>
            Obrigado por fazer parte dessa história.<br/>A cada cliente que acredita
            na marca.<br/>A cada amigo que compartilha.<br/>Isso é só o começo.
          </p>
        </div>
      </div>
    </div>
  );
}
