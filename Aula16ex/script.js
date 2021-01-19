let num = document.querySelector('input#txtnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []    

function isnum (n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
    return true
    } else {
    return false 
    }
}

function inlista (n, l) {
    if (l.indexOf(Number(n)) != -1) {
    return true
    } else {
    return false
    }  
}

function adicionar() {
    if (isnum(num.value) && !inlista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text= `O valor ${num.value} foi adicionado`
    item.value= `tab${num.value}`
    lista.appendChild(item)
    res.innerHTML = ''
    } else {
    window.alert ('Número inválido ou já encontra-se Listado!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert ('Favor adicionar os números antes de Finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        
        for (let pos in valores) {
            soma += valores[pos]
            media = soma / total
            if (valores[pos] > maior) 
             maior = valores[pos]
            if (valores[pos] < menor) 
             menor = valores[pos]
        }
        res.innerHTML = ''
        res.innerHTML += `<p>${total} número(s) adicionado(s).</p>`
        res.innerHTML += `<p>O maior valor adicionado é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor adicionado é ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }

}