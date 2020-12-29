module.exports.maggiorenne= function maggiorenne(eta){
    if (eta>17){
        return ("sei maggiorenne ")
    }
    else{return ("sei minorenne")}
}
module.exports.saluti= function saluti(nome){
    let saluto="ciao " + nome
    if (nome ==="tommaso"){
        saluto+=" sei il mio padrone"
    }
    return saluto
}
//La seconda parte del tutorial non funziona . ho usato questo https://stackabuse.com/how-to-use-module-exports-in-node-js/