const form = document.getElementById("form")
const cep = document.getElementById("cep")
const rua = document.getElementById("rua")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    consultarCep(cep, rua)
})


/*Usar o fetch aqui*/
function consultarCep(c, r) {
    let cValue = c.value.replace(".", "").replace("-", "")
    
    if(cValor != "" || c.cValor !=  null ){
        if(validarCep(cValor)){
            cep.className = "form-control"
            p.style.display = "none"
        }else{
            cep.className = "form-control is-invalid"
            p.style.display = "block"
            
        }
    }
    console.log(cValue)
}

function validarCep(cv) {
    let re = /^[0-9]{8}$/
    return re.test(cv)
}




