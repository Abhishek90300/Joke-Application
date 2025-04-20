const jokeContainer = document.getElementById("jokes");
const next_btn = document.getElementById("btn");
const para = document.getElementById("para");

const URL =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,explicit&type=single";

let getJokes = () => {
  fetch(URL)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
      para.textContent = "";
      if (item.category === "Dark") {
        para.textContent = "It's Just a joke 😅";
      }
    });
};
next_btn.addEventListener("click", getJokes);
getJokes();
