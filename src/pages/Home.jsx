import { Link } from "react-router-dom";

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
import psicodelicos from "../assets/button-psicodelicos.png";
import rpg from "../assets/button-rpg.png";
import street from "../assets/button-street.png";

import gta from "../assets/quadro-gta.png";
import naipes from "../assets/quadro-naipes.png";
import roblox from "../assets/quadro-roblox.png";
import skate from "../assets/quadro-skate.png";

export default function Home() {
  return (
    <div className="page">
      <nav>
        <ul className="header-menu">
          <li>
            <Link to="/destaque">
              <i className="ri-menu-line"></i>
            </Link>
          </li>
          <li className="nav-menu">
            <Link to="/destaque">Placas decorativas</Link>
          </li>
          <li className="nav-menu">
            <Link to="/contato">Qualidade Garantida</Link>
          </li>
          <li className="nav-menu">
            <Link to="/contato">Placas Personalizadas</Link>
          </li>
          <li className="nav-menu">
            <Link to="/produtos">Todos Estilos</Link>
          </li>
          <li className="nav-img">
            <img src={heeeph} alt="heeeph nome" />
          </li>
          <li>
            <Link to="/carrinho">
              <i className="ri-shopping-cart-line"></i>
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
          <Link to="/produtos/musica">
            <img
              className="categories-img"
              src={musica}
              alt="categoria musica"
            />
          </Link>
        </div>
        <div className="categories-buttons">
          <Link to="/produtos/psicodelicos">
            <img
              className="categories-img"
              src={psicodelicos}
              alt="categoria psicodelicos"
            />
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
      </div>

      <div className="categories-title">
        <hr></hr>
        <h1>Novidades</h1>
        <hr></hr>
      </div>
      <div className="categories-news">
        <div className="categories-buttons">
          <Link to="/produtos/gta">
            <img className="categories-quadros" src={gta} alt="quadro jogo gta" />
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
      <nav>
        <ul className="footer-menu">
          <li>
            <h3 className="footer-point">●</h3>
          </li>
          <li>
            <Link to="/heeeph">
              <h3>O que é Heeeph?</h3>
            </Link>
          </li>
          <li>
            <h3 className="footer-point">●</h3>
          </li>
          <li>
            <Link to="/inicio">
              <h3>De onde surgiu?</h3>
            </Link>
          </li>
          <li>
            <h3 className="footer-point">●</h3>
          </li>
          <li>
            <Link to="/produtos">
              <h3>Nossos trabalhos</h3>
            </Link>
          </li>
          <li>
            <h3 className="footer-point">●</h3>
          </li>
          <li>
            <Link to="/agradecimentos">
              <h3>Agradecimentos</h3>
            </Link>
          </li>
          <li>
            <h3 className="footer-point">●</h3>
          </li>
        </ul>
      </nav>

    </div>
  );
}
