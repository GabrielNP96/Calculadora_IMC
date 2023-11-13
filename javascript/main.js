const btn = document.querySelector('.result')

btn.addEventListener('click', () => {
    const answer = document.querySelector('.answer')

    let weight = document.querySelector('#weight')
    let height = document.querySelector('#height')

    weight = Number(weight.value)
    height = Number(height.value)
    const imc = weight/(height * height)

    function imcMenssage(num) {
        if(num < 16.9){
            answer.innerHTML = `Seu imc é ${num.toFixed(2)} e você está muito abaixo do peso.`
        } else if(num > 16.9 && num < 18.5) {
            answer.innerHTML = `Seu imc é ${num.toFixed(2)} e você está abaixo do peso.` 
        } else if(num > 18.4 && num < 25) {
            answer.innerHTML = `Seu imc é ${num.toFixed(2)} e você está no peso ideal.`
        } else if(num > 24.9 && num < 30) {
            answer.innerHTML = `Seu imc é ${num.toFixed(2)} e você está acima do peso.`
        } else if(num > 29.9 && num < 35) {
            answer.innerHTML = `Seu imc é ${num.toFixed(2)} e você está em obsidade grau I`
        } else if(num > 34.9 && num < 40) {
            answer.innerHTML = `Seu imc é ${num.toFixed(2)} e você está em obsidade grau II`
        } else if(num > 39.9) {
            answer.innerHTML = `Seu imc é ${num.toFixed(2)} e você está em obsidade grau III`
        } else {
            answer.innerHTML = `Erro`
        }
    }

    if(isNaN(imc) || imc <= 0) {
        answer.innerHTML = '<p>Por favor, insira valores válidos.</p>'
    } else {
        imcMenssage(imc)    
        
    }   
})