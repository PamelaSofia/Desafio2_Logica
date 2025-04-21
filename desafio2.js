let resultado = saldo(10, 5)
let result = valorNivel(1)

function saldo(vitorias, derrotas){
    let saldoVitorias = (vitorias - derrotas)
    return saldoVitorias
}

function valorNivel(nivel){
    if(nivel <=10) {
        return "ferro"
    }
    else if(nivel >= 11 && nivel <= 20) {
        return "bronze"
    }
    else if(nivel >= 21 && nivel <= 50){
       return "prata"
    }
    else if(nivel >= 51 && nivel <= 80){
        return "ouro"
     }
     else if(nivel >= 81 && nivel <= 90){
       return "diamante"
     }
     else if(nivel >= 91 && nivel <= 100){
        return "lendário"
     }
     else{
        return "radiante"
     }
}

console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível " + result)
