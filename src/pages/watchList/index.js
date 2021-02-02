import {
  Navigation
} from '/pages/navigation/index.js';

export const WatchList = () => {
  const nav = Navigation();
  const rootElement = document.createElement('div');

  rootElement.appendChild(nav);

  const contentElement = () => {
    const boxElement = document.createElement('div');
    boxElement.innerHTML = `
  <div class="backgroundPoster" id="">
    <img class="poster" src="" alt="Capa do filme ..."/>
    </div>
  </div>
  `;
    return boxElement
  }
  rootElement.appendChild(contentElement())

  return rootElement;
};
