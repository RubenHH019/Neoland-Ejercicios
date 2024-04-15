import { getUser } from "../global/state/globalState";
import {
  Login,
  PrintMemoryPage,
  PrintPokemonPage,
  printTemplateDashboard,
} from "../pages";

export const initControler = (pagesRender) => {
  switch (pagesRender) {
    case undefined:
      localStorage.getItem(getUser().name) ? printTemplateDashboard() : Login();
      break;
    case "Pokemon":
      PrintPokemonPage();
      break;
    case "Dashboard":
      printTemplateDashboard();
      break;
    case "Memory":
      PrintMemoryPage();
      break;
    case "Login":
      Login();
      break;
  }
};
