const buttonclicked = document.querySelector("#btn-calculate")
const buttonclear = document.querySelector("#btn-clear")
const MsgImc = document.querySelector(".msg-imc")
let height = document.querySelector('.height')
let weight = document.querySelector('.weight')
let description = document.querySelector('.descri')
const Imc = document.querySelector('.value-imc')

// Quando esta fora quer dizer que os elementos so valem o do html mas dentro do escopo ele pode receber os valores colocados quando clicar no evento
// os valores estao vazio pois fora do escopo do click nao recebem nada
//let calc_imc = parseFloat(heightinput) / (parseFloat(weightinput) * parseFloat(weightinput));


buttonclicked.addEventListener("click", function(event){
    event.preventDefault()
    if (MsgImc.style.visibility === 'hidden'){
        MsgImc.style.visibility = 'visible'
        
        // Obter os valores dos campos de entrada dentro do evento de clique

        let heightinput = parseFloat(height.value)
        let weightinput = parseFloat(weight.value)
        
        let calc_imc = parseFloat(heightinput) / (parseFloat(weightinput) * parseFloat(weightinput));
        Imc.textContent = calc_imc.toFixed(2)
        if(calc_imc <= 18.5){
            description.textContent = 'Seu peso está baixo'
            Imc.style.color = 'red'
        }else if (calc_imc >= 18.5 && calc_imc <= 24.9){
            description.textContent = 'Seu peso está normal'
            Imc.style.color = 'green'
        }else if (calc_imc >= 25 && calc_imc <= 29.9){
            description.textContent = 'Você está com Sobrepeso'
            Imc.style.color = 'yellow'
        }else if (calc_imc >= 30 && calc_imc <= 34.9){
            description.textContent = 'Você está com Obesidade grau I'
            Imc.style.color = 'red'
        }else if (calc_imc >= 35 && calc_imc <= 39.9){
            description.textContent = 'Você está com Obesidade grau II'
            Imc.style.color = 'red'
        }else{
            if (calc_imc >= 40){
                description.textContent = 'Você está com Obesidade grau III'
                Imc.style.color = 'red'
            }
            
        }
     }else{
        MsgImc.style.visibility = 'hidden'
    }
})

buttonclear.addEventListener('click', function(e){
    e.preventDefault()
    weight.value = ''
    height.value =''
    description.innerHTML = 'Texto para Peso'
    MsgImc.style.visibility = 'hidden'

})