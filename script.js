const form = document.querySelector('form')

//form.addEventListener('submit', executar)

//function executar(e) {
//e.preventDefault()
//}

form.addEventListener('submit', e => {
  e.preventDefault()
  try {
    geral()
  } catch (error) {
    alert(error.message)
  }
})

function geral() {
  const escala1 = document.querySelector('#escala1').value
  const escala2 = document.querySelector('#escala2').value
  const temperatura = document.querySelector('.temperatura').value
  const formulaFxC = temperatura * 1.8 - 32
  const formulaCxF = temperatura * 1.8 + 32

  if (escala1 === escala2 || temperatura === '') {
    alert('Valores invalidos, tente novamente')
    return
  }

  if ((escala1 === 'Farenheint', escala2 === 'Celsius')) {
    resultado(`Temperatura De ${formulaFxC}C°`)
  } else if ((escala1 === 'Celsius', escala2 === 'Farenheint')) {
    resultado(`Temperatura De ${formulaCxF}F°`)
  }
}

function resultado(message) {
  const resul = document.querySelector('.result')

  const container = `<div class="result-container">
   ${message}
  </div>`

  resul.innerHTML = container
}
