import { Navigation } from '../../components/navigation/navigation.js';

export const ToWatchList = () => {
  const nav = Navigation();
  const rootElement = document.createElement('div');

  rootElement.appendChild(nav);

  const contentElement = () => {
    const boxElement = document.createElement('div');
    boxElement.innerHTML = `
    <h1>Olá Mundo</h1>
  `;
    return boxElement;
  };
  rootElement.appendChild(contentElement());

  return rootElement;
};
