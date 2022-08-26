let imagem_poke = document.getElementById("pokedex")
function mudar_poke(nome){
    imagem_poke.src = `_imagens_menu/${nome}`
}

let menu = document.querySelector("ul#menu")
let apar = true
function mudarMenu() {
    if (apar) {
        menu.style.display = "block"
        apar = false
    } else {
        menu.style.display = "none"
        apar = true
    }
}
/*
let inter = document.querySelector("div#menuFloat")
function menu_float(p) {
    if(p == 'a'){
        inter.style.display = "block"
        let menuF = document.createElement("div")
        menuF.setAttribute('id', 'menufloat')
        inter.appendChild(menuF)
    }
    if (p == 'd') {
        inter.innerHTML = ""
        inter.style.display = "none"
    }
}
*/