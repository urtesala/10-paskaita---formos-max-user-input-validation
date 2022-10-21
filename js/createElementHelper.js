"use strict";
console.log("createElementHelper.js");

const appEl = document.getElementById("app");

// <h2 class="subTitle">Hello Friday</h2>
// <p class="text">I am text</p>

const h2El = document.createElement("h2");
h2El.className = "subTitle";
h2El.textContent = "Hello Friday";
appEl.append(h2El);

const pEl = document.createElement("p");
pEl.className = "text";
pEl.textContent = "I am text";
appEl.append(pEl);

function crEl(tagName, dest, className, text) {
  const el = document.createElement(tagName);
  if (className) el.className = className;
  if (text || text === 0) el.textContent = text;
  dest.append(el);
  console.log(el);
  return el;
}

crEl("h2", appEl, "subTitle", "Hello Friday");

{
  /* <ul>
  <li></li>
</ul> */
}

const seasons = ["summer", "autum", "winter", "spring"];
const colors = ["red", "green", "blue"];

function makeList(arrToMakeListFrom, dest) {
  let ulEl = crEl("ul", dest, "card");
  for (let item of arrToMakeListFrom) {
    crEl("li", ulEl, "", item);
  }
}

makeList(seasons, appEl);
makeList(colors, document.body);
