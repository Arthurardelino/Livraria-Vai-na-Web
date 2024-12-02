import { browserRouter, routes, route, Link } from 'react-router-dom'
import Inicio from '../../Pages/Inicio/Inicio';
import LivrosDoados from '../../Pages/LivrosDoados/LivrosDoados';
import QueroDoar from '../../Pages/QueroDoar/QueroDoar';
import logoLivro from '../../assets/logoLivro.png';
import lupa from '../../assets/Lupa.png';
import s from './header.module.scss';

export default function Header() {
    return (
      <browserRouter>
        <header className={s.header}>
          <section className={s.logoheader}>
            <img
              src={logoLivro}
              alt="imagem ilustrativa de um livro aberto azul"
            />
            <h1>Livros vai na Web</h1>
          </section>
          <nav className={s.navheader}>
            <ul>
              <li>
                <link className={s.link} to="/">
                  inicio
                </link>
              </li>
              <li>
                <link className={s.link} to="/livrosdoados">
                  Livros doados
                </link>
              </li>
              <li>
                <link className={s.link} to="/querodoar">
                  Quero doar
                </link>
              </li>
            </ul>
          </nav>
          <section className={s.barradepesquisa}>
            <input
              type="search"
              name=""
              id=""
              placeholder="o que você procura?"
            />
            <button>
              <img src={Lupa} alt="icone de lupa branca" />
            </button>
          </section>
        </header>
        <routes>
          <route path="/" element={<Inicio />} />
          ===
          <route path="/livrosdoados" element={<livrosdoados />} />
          <route path="/querodoar" element={<querodoar />} />
        </routes>
      </browserRouter>
    );
  }