let num = [3, 2, 1, 0]
num [4] = 4
num.push(0)
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)

//console.log(num[0])
console.log(`O primeiro valor do vetor é o ${num[0]}`)

pos = num.indexOf(4)
if (pos == -1) {
    console.log (`Valor não encontrado!`)
} else {
    console.log(`O valor 4 está na posição ${pos}`) 
}
