export const Home = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <h1>Olá, mundo!</h1>
  `;
  return rootElement;
};
