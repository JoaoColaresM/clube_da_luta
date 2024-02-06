var tyler = document.getElementById('tyler')
var narrador = document.getElementById('narrador')
var marla = document.getElementById('marla')
var diretor = document.getElementById('diretor')
var autor = document.getElementById('autor')

var foto1 = document.getElementsByClassName('foto1')[0]
var foto2 = document.getElementsByClassName('foto2')[0]
var foto3 = document.getElementsByClassName('foto3')[0]
var foto4 = document.getElementsByClassName('foto4')[0]
var foto5 = document.getElementsByClassName('foto5')[0]

tyler.addEventListener('mouseenter', mostrarFoto1)
tyler.addEventListener('mouseout', mostrarFoto1)
narrador.addEventListener('mouseenter', mostrarFoto2)
narrador.addEventListener('mouseout', mostrarFoto2)
marla.addEventListener('mouseenter', mostrarFoto3)
marla.addEventListener('mouseout', mostrarFoto3)
diretor.addEventListener('mouseenter', mostrarFoto4)
diretor.addEventListener('mouseout', mostrarFoto4)
autor.addEventListener('mouseenter', mostrarFoto5)
autor.addEventListener('mouseout', mostrarFoto5)

function mostrarFoto1() {
    foto1.classList.toggle('visivel')
}
function mostrarFoto2() {
    foto2.classList.toggle('visivel')
}
function mostrarFoto3() {
    foto3.classList.toggle('visivel')
}
function mostrarFoto4() {
    foto4.classList.toggle('visivel')
}
function mostrarFoto5() {
    foto5.classList.toggle('visivel')
}