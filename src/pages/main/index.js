/*import { header } from '../../components/header/index.js';*/

export const Main = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <section class="main-page">
    <section id="header-main"></section>
    <section id="catalogue-main"></section>
    <section id="info-main"></section>
    <section id="menu-main"></section>
  </section>
`;

/*const getHeaderSection = rootElement.querySelector('#header-main');

  getHeaderSection.appendChild(header());*/

  return rootElement;
};
