import { createFooter } from '../../components/menu/footer/index.js'

export const Main = () => {

  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <section class="main-page">
      <h1>Aqui vai ser a página principal!</h1>
      <section id="header"></section>
      <section id="catalogue"></section>
      <section id="footer"></section>
    </section>
  `;

  const getFooterSection = rootElement.querySelector('#footer');
  getFooterSection.appendChild(createFooter());

  return rootElement;
};
