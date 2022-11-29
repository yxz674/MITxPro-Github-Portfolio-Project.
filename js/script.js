let popupCardsContainer = document.querySelector(".popup-cards");
let individualCardBox = popupCardsContainer.querySelectorAll(".card");
document
  .querySelectorAll(".right-grid .assignment .assignment-contents button")
  .forEach((button) => {
    button.onclick = () => {
      popupCardsContainer.style.display = "flex";
      let name = button.getAttribute("data-name");
      individualCardBox.forEach((card) => {
        let target = card.getAttribute("data-target");
        if (name == target) {
          card.classList.add("active");
        }
      });
    };
  });
individualCardBox.forEach((close) => {
  close.querySelector(".fa-circle-xmark").onclick = () => {
    close.classList.remove("active");
    popupCardsContainer.style.display = "none";
  };
});
