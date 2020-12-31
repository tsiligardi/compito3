function maggiorenne(eta){
    if (eta>17){
        return ("sei maggiorenne ")
    }
    else{return ("sei minorenne")}
}
function saluti(nome){
    let saluto="ciao " + nome
    if (nome ==="tommaso"){
        saluto+=" sei il mio padrone"
    }
    return saluto
}

module.exports={
    maggiorenne: maggiorenne,
    saluti: saluti
}
//La seconda parte del tutorial non funziona . ho usato questo https://stackabuse.com/how-to-use-module-exports-in-node-js/