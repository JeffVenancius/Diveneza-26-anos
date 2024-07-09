const btn = document.querySelector(".submit_input")

btn.addEventListener("click", event => {
	event.preventDefault()
	nome = document.querySelector("#nome")
	wpp = document.querySelector("#wpp")
	texto = `Olá! Quero resgatar o meu cupom.%0A
Nome: ${nome.value}%0A
Whatsapp: ${wpp.value}`
	window.location.href = "https://wa.me/553598254687?text=" + texto
})
