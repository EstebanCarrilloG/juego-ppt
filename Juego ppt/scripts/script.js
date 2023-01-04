import { startGame } from "./game.js";
import { renderContent } from "./gameElements.js";
import { options } from "./database.js";

document.addEventListener("DOMContentLoaded", function () {
  

  resultContent.style.display = "none";
  renderContent(options);
  startGame(options);
});
