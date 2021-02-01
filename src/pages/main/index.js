export const Main = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <h1>Aqui vai ser a página principal!</h1>
  `;
  return rootElement;
};
