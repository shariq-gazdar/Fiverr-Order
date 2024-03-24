let logo = document.querySelector("#logoImg");
let searchIco = document.querySelector("#searchIcon");
logo.addEventListener("click", () => {
  window.location.href = "landingPage.html";
});
searchIco.addEventListener("click", () => {
  console.log("searchVal");
  window.location.href = "resultPage.html";
});
