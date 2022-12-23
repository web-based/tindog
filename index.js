const dogAPI = "https://random.dog/woof.json"
let nextBtn = document.getElementById("next__btn");

let renderImage = document.getElementById("dog__image");

function renderDogImages(data) {
  renderImage.src = data.url;
}

nextBtn.addEventListener("click", function () {
  fetch(dogAPI)
    .then((res) => res.json())
    .then(renderDogImages);
  renderImage.src = data.url;

  nextBtn.append(renderDogImages);
});







