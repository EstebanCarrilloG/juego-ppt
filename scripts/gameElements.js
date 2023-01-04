export function renderContent(options) {
  options.forEach((e) => {
    btnsContainer.innerHTML += `<button class="game-btn" data-type="${e.type}">
                                     <img src="${e.url}" alt="${e.type}">
                                </button>`;
  });
}
