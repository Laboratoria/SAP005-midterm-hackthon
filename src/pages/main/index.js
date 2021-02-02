import { createFooter } from '../../components/menu/footer/index.js'
/*import { header } from '../../components/header/index.js';*/

export const Main = () => {

  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <section class="main-page">
    <section id="header-main"></section>
    <section id="catalogue-main"></section>
    <section id="info-main"></section>
    <section id="footer-main"></section>
  </section>
`;

const getFooterSection = rootElement.querySelector('#footer-main');
getFooterSection.appendChild(createFooter());
/*const getHeaderSection = rootElement.querySelector('#header-main');
  getHeaderSection.appendChild(header());*/

  return rootElement;
};
