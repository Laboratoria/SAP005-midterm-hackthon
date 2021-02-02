export const header = () => {
  const topHeader = document.createElement('header');
  topHeader.classList.add('header-container');

  topHeader.innerHTML = `
    <div class="header-body">
      <img class="logo-header" src='../../img/logo.cc.transparente.png' alt="Logo Curta Curtas"/>
      <input type="text" id="search" placeholder="Search by title or director" class="search-title-director">
      <span class="material-icons icon-search">
        search
      </span>
      <p class="header-user">Hi,Galera</p>
      <span class="material-icons icon-heart">
        favorite_border
      </span>
      <button type="button" class="btn-login">SIGN IN</button>
      <button type="button" class="btn-register">SIGN UP</button>
    </div>
  `;

  topHeader.querySelector('.search-title-director')
    .addEventListener('keyup', () => {
      console.log('foie');
    });

    const btnLogin = topHeader.querySelector('.btn-login');
    const btnRegister = topHeader.querySelector('.btn-register');
    const greetingUser = topHeader.querySelector('.header-user');
    const iconHeart = topHeader.querySelector('.icon-heart');

    let path = window.location.pathname;
    if(path === '/home') {
      btnLogin.classList.add('hidden');
      btnRegister.classList.add('hidden');
    } else if (path === '/') {
      btnLogin.classList.remove('hidden');
      btnRegister.classList.remove('hidden'); 
      greetingUser.classList.add('hidden');
      iconHeart.classList.add('hidden');
    }

  return topHeader;
};