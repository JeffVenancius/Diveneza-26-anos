const with_desc = `
		<div class="placeholder">
    <section class="description">
        <p>É com imensa alegria que celebramos 26 anos de excelência e dedicação na Ótica Diveneza.<br>Para marcar essa ocasião especial, estamos trazendo uma inovação revolucionária para você: Lentes com inteligência Artificial. Essas lentes são projetadas para proporcionar a melhor experiência visual, adaptando-se perfeitamente às suas necessidades.</p>
    </section>
</div>
`

	if ( window.screen.width < 1422) {
		document.querySelector(".placeholder").innerHTML = ""
	} else {
		document.querySelector(".placeholder").innerHTML = with_desc
	}

window.addEventListener('resize', function(event) {
	if ( window.screen.width < 1422) {
		document.querySelector(".placeholder").innerHTML = ""
	} else {
		document.querySelector(".placeholder").innerHTML = with_desc
	}

});

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
