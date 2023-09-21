import React from "react";
import { useLocation } from "react-router-dom";

const RedirectPage = () => {
  const { pathname } = useLocation();

  const links = [
    "https://www.youtube.com/",
    "https://www.clickbank.com/",
    "https://www.instagram.com/",
  ];

  function linkAleatorio(arr) {
    const indiceAleatorio = Math.floor(Math.random() * arr.length);
    const linkSelecionado = arr[indiceAleatorio];
    return linkSelecionado;
  }

  const redirectRender = () => {
    switch (pathname) {
      case "/youtube":
        window.location.href = "https://www.youtube.com/";
        break;

      case "/clickbank":
        window.location.href = "https://www.clickbank.com/";
        break;

      case "/intagram":
        window.location.href = "https://www.instagram.com/";
        break;

      default:
        window.location.href = linkAleatorio(links);
        break;
    }
  };
  return <div>{redirectRender()}</div>;
};

export default RedirectPage;
