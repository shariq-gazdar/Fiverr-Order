let logo = document.querySelector("#logoImg");
let searchIco = document.querySelector("#searchIcon");
let searchVal = document.querySelector("#searchField").value;
let plusBtn = document.querySelector("#plusBtn1");
logo.addEventListener("click", () => {
  window.location.href = "landingPage.html";
});
if (searchVal != "") {
  console.log(`The value is ${searchVal}`);
  searchIco.addEventListener("click", () => {
    if (searchVal === "Gehakt") {
      console.log("searchVal");
      window.location.href = "resultPage.html";
    }
  });
}
plusBtn.addEventListener("click", () => {
  window.location.href = "resultPage2.html";
});
