"use strict";
console.log("forms.js");

// nusitaikyti i forma
const formEl = document.getElementById("loginForm");
const usernameInputEl = document.getElementById("username");
const emailInputEl = document.getElementById("email");
const legalCheckboxEl = document.getElementById("legal");
const timeRadioEl = document.getElementById("timeRadio");

// console.log('formEl ===', formEl);

// btn.addEventListener('click', function (event) {
//   console.log(event);
// });

// uzdeti formai issiuntimo klausikli eventListener
formEl.addEventListener("submit", function (event) {
  // event = specialus objekas su informacija apie ivykusi ivyki
  // sutabdo numatytiji veiksma - issiuntima i kita psl
  event.preventDefault();
  console.log("submit ivyko");
  clearErrors();

  // surinkti input reikmes
  const usernameValue = usernameInputEl.value.trim();
  const emailValue = emailInputEl.value.trim();
  // paimti reiksme is timeRadioEl
  const bestTimeSelectedEl = timeRadioEl.querySelector("input:checked");
  // OBJ?.SAVYBE nebeiesko toliau objekte jei iki jo turim falsy reiksme
  const bestTimeValue = bestTimeSelectedEl?.value
    ? bestTimeSelectedEl.value
    : "nepasirinkta";
  console.log("bestTimeValue ===", bestTimeValue);
  // String.prototype.trim() = nutrina tuscius tarpus is abieju pusiu

  // console.log('usernameValue ===', usernameValue);
  // console.log('emailValue ===', emailValue);

  // pirmine validacija
  console.log("legalCheckboxEl.value ===", legalCheckboxEl.value);
  // ar varnele pazymeta input.checked === true|false
  if (legalCheckboxEl.checked === false) {
    // varnele neuzdeta, vartotojas nesutiko
    // pranesti apie klaida
    legalCheckboxEl.nextElementSibling.style.display = "block";
    // nutraukti fn vygdyma
    return;
  }

  // chekIfEmpty(usernameValue)
  // jei nera teksto ilgio
  if (usernameValue.length === 0) {
    console.log("iveskite varda");
    // nusitaikyti i usernameInputEl
    // po juo esanti elementa norim parodyti su display block (nextElementSibling)
    usernameInputEl.nextElementSibling.style.display = "block";
    // jei yra klaida kodas turetu nebevykti toliau
    return;
  }
  // ar usernameValue yra trumpenis nei 3 simboliai
  // checkLengh()
  // pirmine validacija email
  if (emailValue.length === 0) {
    emailInputEl.nextElementSibling.style.display = "block";
    // jei yra klaida kodas turetu nebevykti toliau
    return;
  }

  // ar ivestame emaile, yra raide '@'

  // If nera klaidu tai siunciam duomenis

  const formValuesObj = {
    username: usernameValue,
    email: emailValue,
    bestTime: bestTimeValue,
  };

  console.log("Sending.....", formValuesObj);
  // fetch()
});

/**
 * Su sia funkcija isvalau visas formos klaidas
 */
function clearErrors() {
  console.log("clearing errors");
  // klaidos elementai turi klase .errorFeedback
  // nusitaikyti ivisus el, gaunu kolekcija,
  // sukti cikla per kolekcija
  // slepti kiekviena el

  const errElArr = document.querySelectorAll(".errorFeedback");
  for (let oneErrEl of errElArr) {
    oneErrEl.style.display = "none";
  }
}
