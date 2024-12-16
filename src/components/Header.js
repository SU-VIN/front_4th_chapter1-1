import { useAuth } from "../store/useAuth";

export const Header = () => {
  const auth = new useAuth();
  const currentPath = location.pathname;
  const activeMenu = "text-blue-600 font-bold";
  const inActiveMenu = "text-gray-600";

  const isActive = (path) => {
    return currentPath === path ? activeMenu : inActiveMenu;
  };

  return `<header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>

      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          <li><a href="/" class="${isActive("/")}">홈</a></li>
          <li><a href="/profile" class="${isActive("/profile")}">프로필</a></li>
          ${
            auth.isLogin()
              ? `<li>
                <a href="#" id="logout" class="text-gray-600">
                  로그아웃
                </a>
              </li>`
              : `<li>
                <a href="/login" class="text-gray-600">
                  로그인
                </a>
              </li>`
          }
          
        </ul>
      </nav>`;
};
