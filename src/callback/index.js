function suma  (n1,n2){
    return n1 + n2;
}

function calculo(n1,n2, callback) {
    return callback(n1,n2);
};

console.log(calculo(4,5,suma));

setTimeout(function(){
    console.log('Hola JavaScript');
}, 2000)

function saludo(name,lastsname) {
    console.log(`Hola ${name} ${lastname}`);
}

setTimeout(saludo ,2000, 'Paulo','Galarza');