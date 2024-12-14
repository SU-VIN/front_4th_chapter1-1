//라우팅 클래스
// 1. 라우트 주소를 등록
// 2. url 변경
// 3. url에 맞는 페이지 렌더
// 4. 현재 패스에 대한 페이지 렌더링

export class Router {
  constructor() {
    this.route = {};
    window.addEventListener("popstate", this.setting.bind(this));
  }

  registerRoute(path, render) {
    this.route[path] = render;
  }

  navigate(path) {
    history.pushState(path);
    this.render(path);
  }

  render(path) {
    const render = this.route[path];
    if (render) {
      render();
    } else {
      console.log("404");
    }
  }

  setting() {
    this.render(location.pathname);
  }
}
