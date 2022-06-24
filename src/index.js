import "./styles.css";

const getCats = function () {
  new Promise(function (resolve, reject) {
    fetch("https://cataas.com/cat?json=true")
      .then((res) => res.json())
      .then((cat) => {
        console.log(cat);
        var img = document.querySelector("img");
        img.src = "https://cataas.com" + cat.url;
      });
  });
};

var cntCats = 1;

var reloadCat = document.querySelector("button");
reloadCat.onclick = function () {
  getCats();
  var timer = document.querySelector(".timer");
  timer.innerHtml = "Котов просмотрено: " + cntCats;
  cntCats += 1;
};
