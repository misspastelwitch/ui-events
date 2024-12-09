/*
   De eerste interactie is al voor jullie uitgewerkt
   Als je op het 12e linkje klikt (“Interaction”), springt deze omhoog
*/

// Stap 1: selecteer het 12e linkje, en sla deze op in een variabele
let interaction = document.querySelector('a:nth-of-type(12)')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
interaction.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {

  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  interaction.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
interaction.addEventListener('animationend', jumpHandler)


// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een bibber animatie als je op iets klikt

// Stap 1: querySelector
// let bibberLink = document.querySelector...

// Stap 2: addEventListener
// bibberLink.addEventListener...

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// bibberLink.classList.toggle...


// Event 1
let frontend = document.querySelector('a:nth-of-type(1)')
window.addEventListener('keydown', changecolorHandler)
function changecolorHandler(event) {
  if (event.keyCode === 70) {
    frontend.classList.toggle('changecolor')
  }
}
frontend.addEventListener('animationend', changecolorHandler)

// Event 2
let design = document.querySelector('a:nth-of-type(2)')
design.addEventListener('mouseup', mouseupHandler)
function mouseupHandler(event) {
  if (event.mouseup = true) {
  design.classList.toggle('mouseup')
}
}
design.addEventListener('animationend', mouseupHandler)

// Event 3
let and = document.querySelector('a:nth-of-type(3)')
and.addEventListener('mousemove', mousemoveHandler)
function mousemoveHandler(event) {
  if (event.mousemove = true) {
  and.classList.toggle('mousemove')
}
}
and.addEventListener('animationend', mousemoveHandler)

// Event 4
let development = document.querySelector('a:nth-of-type(4)')
development.addEventListener('mouseenter', mouseenterHandler)
function mouseenterHandler(event) {
  if (event.mouseenter = true) {
  development.classList.toggle('mouseenter')
}
}
development.addEventListener('animationend', mouseenterHandler)

// Event 5
let sprint = document.querySelector('a:nth-of-type(5)')
sprint.addEventListener('click', clickHandler)
function clickHandler(event) {
  if (event.click = true) {
    sprint.classList.toggle('click')
}
}
sprint.addEventListener('animationend', clickHandler)

// Event 6
let fix = document.querySelector('a:nth-of-type(6)')
window.addEventListener('scroll', scrollHandler)
function scrollHandler(event) {
  if (event.scroll = true) {
    fix.classList.toggle('scroll')
}
}
fix.addEventListener('animationend', scrollHandler)

// Event 7
let the = document.querySelector('a:nth-of-type(7)')
the.addEventListener('dblclick', dblclickHandler)
function dblclickHandler(event) {
  if (event.dblclick = true) {
    the.classList.toggle('dblclick')
}
}
the.addEventListener('animationend', dblclickHandler)