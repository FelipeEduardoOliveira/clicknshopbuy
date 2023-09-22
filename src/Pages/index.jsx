import React from "react";
import { useLocation } from "react-router-dom";
import logo from '../assert/logo.png'
import bottle from '../assert/Bottle.png'
import './global.css'

const RedirectPage = () => {
  const { pathname } = useLocation();

  const links = [
    "https://14e31jjjq5s-xhd4wczb4a3w7s.hop.clickbank.net/?tid=wallacepsa",
  ];

  function linkAleatorio(arr) {
    const indiceAleatorio = Math.floor(Math.random() * arr.length);
    const linkSelecionado = arr[indiceAleatorio];
    return linkSelecionado;
  }

  const redirectRender = () => {
    switch (pathname) {
      case "/endopump":
        window.location.href = "https://14e31jjjq5s-xhd4wczb4a3w7s.hop.clickbank.net/?tid=wallacepsa";
        break;

      default:
        window.location.href = linkAleatorio(links);
        break;
    }
  };
  return (
    <div>
      <div className="header">
        <img src={logo} style={{ height: '45px' }} />
      </div>

      <section>

        <div className="produto">
          <div className="headerinner">
            <img src={bottle} style={{ maxWidth: '300px' }} />
            <h1 className="textStyle">
              U.S. Scientists Discover Secret For Stamina & Virility
              At Any Age
            </h1>
          </div>
          <div style={{ maxWidth: '400px' }}>
            <button class="button-27" role="button" onClick={() => redirectRender()}>Buy now</button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default RedirectPage;
