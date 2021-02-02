import { header } from '../../components/header/index.js';
import { createMenu } from '../../components/menu/index.js';

export const WatchList = () => {
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `
    <section class="lists">
      <section id="header"></section>
      <section id="my-watch-list" class="lists"></section>
      <section id="menu"></section>
    </section>
    `;

    const getMenuSection = rootElement.querySelector('#menu');
    getMenuSection.appendChild(createMenu());

    const getHeaderSection = rootElement.querySelector('#header');
    getHeaderSection.appendChild(header());


    return rootElement;
  };
  