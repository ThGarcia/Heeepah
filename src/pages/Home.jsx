import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import img from "../assets/banner.png";
import vermelho from "../assets/vermelho.png";
import heeeph from "../assets/heeeph.png";
import verde from "../assets/verde.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <nav>
        <ul className="header-menu">
          <li>
            <i className="ri-quill-pen-line"></i>
          </li>
          <li>
            <Link to="/destaque">Temas variados</Link>
          </li>
          <li>
            <Link to="/produtos">Placas decorativas</Link>
          </li>
          <li>
            <Link to="/contato">Personalizaveis</Link>
          </li>
          <li className="login-button">
            <i className="ri-user-fill"></i>
            <button onClick={() => navigate("/login")}>Entrar/Cadastrar</button>
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

      <div className="categories-title">
        <hr />
        <h1>Destaques</h1>
        <hr />
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={4}
        spaceBetween={16}
        navigation
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
        }}
      >
        <SwiperSlide>
          <div className="categories-buttons">
            <Link to="/produtos/Rock">
              <p>Rock</p>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="categories-buttons">
            <Link to="/produtos/Bebidas">
              <p>Bebidas</p>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="categories-buttons">
            <Link to="/produtos/Decoração">
              <p>Decoração</p>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="categories-buttons">
            <Link to="/produtos/Psicodelicos">
              <p>Psicodélicos</p>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="categories-buttons">
            <Link to="/produtos/Jogos">
              <p>Jogos</p>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="categories-buttons">
            <Link to="/produtos/Carros">
              <p>Carros</p>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="categories-title">
        <hr></hr>
        <h1>Categorias</h1>
        <hr></hr>
      </div>
      <div className="categories">
        <div className="categories-buttons">
          <Link to="/produtos/Rock">
            <p>Rock</p>
          </Link>
        </div>
        <div className="categories-buttons">
          <Link to="/produtos/Bebidas">
            <p>Bebidas</p>
          </Link>
        </div>
        <div className="categories-buttons">
          <Link to="/produtos/Decoração">
            <p>Decoração</p>
          </Link>
        </div>
        <div className="categories-buttons">
          <Link to="/produtos/Pscidodelicos">
            <p>Psicodélicos</p>
          </Link>
        </div>
        <div className="categories-buttons">
          <Link to="/produtos/Jogos">
            <p>Jogos</p>
          </Link>
        </div>
        <div className="categories-buttons">
          <Link to="/produtos/Carros">
            <p>Carros</p>
          </Link>
        </div>
      </div>
      <hr></hr>
      <div className="promotion-container">
        <div className="promotion">
          <img
            className="promotion-vermelho"
            src={vermelho}
            alt="Imagem vermelha"
          />
          <img className="promotion-heeepah" src={heeeph} alt="Imagem heeeph" />
          <img className="promotion-verde" src={verde} alt="Imagem verde" />
        </div>
        <h3>Transforme sua parede com estilo!!!</h3>
      </div>
      <hr></hr>
      <nav>
        <ul className="footer-menu">
          <li>
            <h3>●</h3>
          </li>
          <li>
            <Link to="/heeeph">
              <h3>O que é Heeeph?</h3>
            </Link>
          </li>
          <li>
            <h3>●</h3>
          </li>
          <li>
            <Link to="/inicio">
              <h3>De onde surgiu?</h3>
            </Link>
          </li>
          <li>
            <h3>●</h3>
          </li>
          <li>
            <Link to="/produtos">
              <h3>Nossos trabalhos</h3>
            </Link>
          </li>
          <li>
            <h3>●</h3>
          </li>
          <li>
            <Link to="/agradecimentos">
              <h3>Agradecimentos</h3>
            </Link>
          </li>
          <li>
            <h3>●</h3>
          </li>
        </ul>
      </nav>

      <footer className="footer">
        <p>©heeeph.com.br</p>
        <div className="footer-social">
          <a
            href="https://api.whatsapp.com/send?phone=5548984972129&text=Olá,%20tenho%20interesse%20em%20mais%20informações."
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <i className="ri-whatsapp-line"></i>
            </span>
          </a>
          <a
            href="https://www.facebook.com/heeeph"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-facebook-fill"></i>
          </a>
          <a
            href="https://www.instagram.com/heeeph"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-instagram-fill"></i>
          </a>
          <a href="mailto:heeeph@outlook.com.br?subject=Contato%20por%20site&body=Olá,%20tenho%20interesse%20em%20mais%20informações.">
            <span>
              <i className="ri-mail-line"></i>
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
}
