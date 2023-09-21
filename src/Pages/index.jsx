import React from "react";
import { useLocation } from "react-router-dom";

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
        window.location.href = "https://www.youtube.com/";
        break;

      default:
        window.location.href = linkAleatorio(links);
        break;
    }
  };
  return <div>{redirectRender()}</div>;
};

export default RedirectPage;
