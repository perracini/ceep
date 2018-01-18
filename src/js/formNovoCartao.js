;(function(){
    const form = document.querySelector(".formNovoCartao")

    let numeroDoCartao = 0

    form.addEventListener("submit", function(event){
        event.preventDefault()
        const textarea = form.querySelector(".formNovoCartao-conteudo")
        const isTextAreaVazio = textarea.value.trim().length === 0
        if (isTextAreaVazio) {
            const msgErro = document.createElement("div")
            msgErro.classList.add("formNovoCartao-msg")
            msgErro.textContent = "Formulário inválido.Não digite vários nada!"

            const btnSubmit = form.children[form.children.length-1]
            form.addEventListener("animationend", function(event){
                event.target.remove()
            })
            form.insertBefore(msgErro, btnSubmit)
        } else {
            adicionaCartaoNoMural({conteudo: textarea.value})
   	        /*numeroDoCartao++
            const conteudoDoCartao = textarea.value
            const cartao = $(`
            <article id="cartao_${numeroDoCartao}" tabindex="0" class="cartao">
            <div class="opcoesDoCartao">
             <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                <svg><use xlink href="#iconeRemover"></use></svg>
             </button>

             <input type="radio" name="corDoCartao${numeroDoCartao}" value="#EBEF40" id="corPadrao-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo" checked>
             <label for="corPadrao-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
              Padrão
              </label>

              <input type="radio" name="corDoCartao${numeroDoCartao}" value="#F05450" id="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
             <label for="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
              Importante
              </label>

              <input type="radio" name="corDoCartao${numeroDoCartao}" value="#92C4EC" id="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
             <label for="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
              Tarefa
              </label>

              <input type="radio" name="corDoCartao${numeroDoCartao}" value="#76EF40" id="corInspiracao-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
             <label for="corInspiracao-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
              Tarefa
              </label>
            </div>
            <p class="cartao-conteudo" contenteditable tabindex="0">${conteudoDoCartao}</p>
            </article>
            `)

            cartao.on("focusin", function(){
                cartao.addClass("cartao--focado")
            })
        
            cartao.on("focusout", function(){
                $(this).removeClass("cartao--focado")
            })
            // maisa simples usando delegate
            //cartao.on("change", ".opcoesDoCartao-radioTipo", function mudaCor(event){
            //   cartao.css("background-color", event.target.value)
            //})

            cartao.on("change", function(evento){
                const isRadioTipo = $(evento.target).hasClass("opcoesDoCartao-radioTipo")

                if(isRadioTipo){
                    cartao.css("background-color", evento.target.value)
                }
            })
        
            cartao.on("keydown", function deixarClicarComEnter(event){
               if(event.target.classList.contains("opcoesDoCartao-opcao") && (event.key === "Enter" || event.key === " ")) {
                event.target.click()
               }
            })
        
            cartao.on('click', function(event){
                const elementoSelecionado = event.target
                if (elementoSelecionado.classList.contains('opcoesDoCartao-remove')){
                cartao.addClass("cartao--some")
                    cartao.on("transitionend", function(){
                        cartao.remove()
                    })
                }
            }) 

            $(".mural").append(cartao)*/
          
	    } 
    })

    form.classList.remove("no-js")


})()
