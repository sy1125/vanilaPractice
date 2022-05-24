const ajaxServer = new XMLHttpRequest();
const container = document.querySelector("#root");

function getData(url) {
  ajax.open('GET', url, false);
  ajax.send();
  return JSON.parse(ajax.response);
}

function logTemplate() {
  // const loginHTML = document.querySelector(".login");
  // loginHTML.innerHTML = `
  container.innerHTML = `
  <h1>SY's Page</h1>
  <form id="login-form" class="hidden">
    <input class="form-id" type="text" placeholder="ID" required />
    <input class="form-pw" type="password" placeholder="Password" />
    <input id="check-write" class="form-check" type="checkbox" />
    <label for="check-write" class="form-label">로그인 상태 유지</label>
    <button>Log In</button>
  </form>
  <ul class="find-container">
    <li><a href="#">비밀번호 찾기</a></li>
    <li><a href="#">아이디 찾기</a></li>
    <li><a href="#">회원가입</a></li>
  </ul>
  `
}
// logTemplate();
function mainTemplate() {
  container.innerHTML = `
    asd
  `
}
// mainTemplate();
// 라우터

function router() {
  const routePath = location.hash;
  if (routePath === '') {
    mainTemplate();
  } else {
    logTemplate();
  }
}

window.addEventListener('hashchange', router);