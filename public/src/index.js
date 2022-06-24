import "./styles.css";

const getCats = function (callback) {
  new Promise(function (resolve, reject) {
    fetch("https://cataas.com/cat?json=true")
      .then((res) => res.json())
      .then((cat) => {
        var img = document.querySelector("img");
        img.src = "https://cataas.com" + cat.url;
      });
  });
  callback();
};

var cntCats = 1;

var reloadCat = document.querySelector("button");

reloadCat.onclick = function () {
  getCats(() => {
    var timer = document.querySelector(".timer");
    console.log(timer);
    timer.innerHtml = "Котов просмотрено: " + this.cntCats;
    cntCats += 1;
  });
};
