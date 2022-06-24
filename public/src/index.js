// import "./styles.css";

const getCats = function () {
  new Promise(function (resolve, reject) {
    fetch("https://cataas.com/cat?json=true")
      .then((res) => res.json())
      .then((cat) => {
        var img = document.querySelector("img");
        img.src = "https://cataas.com" + cat.url;
      });
  });
};

var cntCats = 0;
var timer = document.querySelector('.timer');


var reloadCat = document.querySelector(".reload-btn");

reloadCat.onclick = function () {
  getCats();
  cntCats += 1;
  timer.innerHTML = `Просмотрено котов: ${cntCats}`;
};
