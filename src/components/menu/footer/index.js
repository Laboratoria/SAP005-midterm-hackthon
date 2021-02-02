export const createFooter = () => {
  const footerContainer = document.createElement('footer');
  footerContainer.innerHTML = `
    <section class="footer">
            <section class="left-footer-side">
                    <h4 class="title-footer">About us</h4>
                    <p class="text-footer">Curta Curtas is a web app to help you find quickly the best short film to watch. 
                    If you are a short film lover, create a free account to save your favorite 
                    and enjoy our search system and choose the one you like the most. 
                    </p>
            </section>
            <section class="right-footer-side">
                    <section class="title-wrapper">
                            <h4 class="title-footer">Developed by:</h4>
                            <img src="../../img/github.svg">
                    </section>
                    <ul class="devas-list">
                            <li>
                                    <a class="devas" href="https://github.com/beatrizpenalva" target="blank" title="GITHUB PROFILE">Beatriz Penalva</a> 
                            </li>
                            <li>
                                    <a class="devas" href="https://github.com/crismantovani" target="blank" title="GITHUB PROFILE">Cris Mantovani</a> 
                            </li>
                            <li>
                                    <a class="devas" href="https://github.com/giomadeira" target="blank" title="GITHUB PROFILE">Giovana Madeira</a> 
                            </li>
                            <li>
                                    <a class="devas" href="https://github.com/JessicaCavalcante" target="blank" title="GITHUB PROFILE">Jessica Cavalcante</a> 
                            </li>
                    </ul>        
                    <ul class="devas-list">        
                            <li>
                                    <a class="devas" href="https://github.com/Juliane-C" target="blank" title="GITHUB PROFILE">Juliane Cristina</a> 
                            </li>
                            <li>
                                    <a class="devas" href="https://github.com/Nijoane" target="blank" title="GITHUB PROFILE">Nicaely Joane</a> 
                            </li>
                            <li>
                                    <a class="devas" href="https://github.com/Talita-8" target="blank" title="GITHUB PROFILE">Talita Silva</a> 
                            </li>
                    </ul>
    </section>
  `;
  return footerContainer;
};
