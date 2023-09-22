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
          <div style={{ maxWidth: '400px', paddingBottom: '40px'}}>
            <button class="button-27" role="button" onClick={() => redirectRender()}>Buy now</button>
          </div>

        </div>


      </section>
      <div className="Attetion">
        <h2 >
          ATTENTION: This New Discovery Could Help Support
          Your Virility And Stamina, Naturally...
        </h2>
      </div>

      <div className="letter">
        <p>Thanks to the latest research from top Ivy League schools, it’s now possible to “flip a switch” inside your body, and support a healthy libido, stamina, and virility — naturally.<sup class="superCit">4,5,6</sup></p>
        <p>The switch is a little-known organ (called the “endothelium”) that, when activated, can support your body’s natural flow of nitric oxide. As you may know, nitric oxide is the essential missing piece when it comes to a healthy libido.<sup class="superCit">7</sup></p>
        <p>Unfortunately, as men get older, this organ becomes weak and has a tough time pumping blood through blood vessels. Not only can this impact never, joint, and prostate health, but it can also impact performance, stamina, and virility — which can tank a man’s self confidence.<sup class="superCit">8,9,10</sup></p>
        <p>Fortunately, there’s a way to support this organ health at any age.</p>

      </div>
    </div>
  );
};

export default RedirectPage;
