export const createFooter = () => {
  const footerContainer = document.createElement('footer');
  footerContainer.innerHTML = `
    <section class="footer">
            <article>
                    <h4>About us</h4>
                    <p>Curta Curtas is a web app to help you find quickly the best short film to watch. 
                    If you are a short film lover, create a free account to save your favorite 
                    and enjoy our search system and choose the one you like the most. 
                    </p>
            </article>
            <article>
                    <h4>Developed by:<h4>
                    <ul>
                            <li class="devas">
                                    <a href="https://github.com/beatrizpenalva" target="blank" title="GITHUB PROFILE"> Beatriz Penalva </a> 
                            </li>
                            <li class="devas">
                                    <a href="https://github.com/crismantovani" target="blank" title="GITHUB PROFILE"> Cris Mantovani  </a> 
                            </li>
                            <li class="devas">
                                    <a href="https://github.com/giomadeira" target="blank" title="GITHUB PROFILE"> Giovana Madeira </a> 
                            </li>
                            <li class="devas">
                                    <a href="https://github.com/JessicaCavalcante" target="blank" title="GITHUB PROFILE"> Jessica Cavalcante </a> 
                            </li>
                            <li class="devas">
                                    <a href="https://github.com/Juliane-C" target="blank" title="GITHUB PROFILE"> Juliane Cristin </a> 
                            </li>
                            <li class="devas">
                                    <a href="https://github.com/Nijoane" target="blank" title="GITHUB PROFILE"> Nicaely Joane </a> 
                            </li>
                            <li class="devas">
                                    <a href="https://github.com/Talita-8" target="blank" title="GITHUB PROFILE"> Talita Silva </a> 
                            </li>
                    </ul>
            </article>
    </section>
  `;
  return footerContainer;
};
