let valores = [8, 1, 7, 4, 2, 9] 
//MODO TRADICIONAL
console.log (valores)

//MODO LONGO
// console.log(valores[0])

/*MODO DINAMICO
for (pos=0; pos<valores.length;pos++){
console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

//MODO DINAMICO NOVO
for (let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}