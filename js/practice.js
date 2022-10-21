"use strict";
console.log("register.js");

// nusitaikyti i forma
// const formEl = document.forms[0];
const formEl = document.forms.reg;
const emailEl = document.getElementById("email");
const pswEl = document.getElementById("psw");
const pswRepEl = document.getElementById("psw-repeat");

formEl.addEventListener("submit", (event) => {
  // 1. perimti formos valdyma su javascript, sutabdyti issiuntima
  event.preventDefault();
  console.log("Js is in control");

  // 2. funkcijos viduje gauti visu inputu reiksmes
  const formValuesObj = {
    email: emailEl.value.trim(),
    psw: pswEl.value.trim(),
    pswRep: pswRepEl.value.trim(),
  };

  // validacijos

  if (isValueEmtpy(formValuesObj.email)) {
    console.log("iveskite email");

    // NUTRAUKIA KODO VYGDYMA !!!!!!!!!!!
    return;
  }

  if (!isThereALetter(formValuesObj.email, "@")) {
    console.log("reiketu @ raides");
    return;
  }

  if (isValueEmtpy(formValuesObj.psw)) {
    console.log("iveskite slaptazodi");
    // NUTRAUKIA KODO VYGDYMA !!!!!!!!!!!
    return;
  }

  // 3. palyginti ir atspausdinti ar sutampa slaptazodziai
  if (formValuesObj.psw !== formValuesObj.pswRep) {
    console.log("slaptazodziai nesutampa");
    // NUTRAUKIA KODO VYGDYMA !!!!!!!!!!!
    return;
  }

  console.log("SENDDING.... ===", formValuesObj);
});

// HELPERS
/**
 *
 * @param {string} valueToCheck
 * @returns true if value is empty
 */

function isValueEmtpy(valueToCheck) {
  let rezult = valueToCheck.length === 0;
  // console.log('rezult ===', rezult);
  return rezult;
}

function isThereALetter(valueToCheck, needle) {
  if (!needle) console.error("iveskite needle");
  let arYra = valueToCheck.includes(needle);
  // console.log('arYra ===', arYra);
  return arYra;
}

isThereALetter("James", "@"); // false
// isThereALetter('James'); // false
isThereALetter("James", "a"); // true
isThereALetter("James.kazkas", "."); // true

const allErrors = {
  email: ["iveskite email", "butina @ raide"],
  psw: "iveskite slaptazodi",
};
