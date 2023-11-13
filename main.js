const ul = document.querySelector('ul')

function ProcessoAPI() {
    const url = 'https://api.github.com/users/guedesthi/repos';

    fetch(url)
        .then(async response => {

            if (!response.ok) {
                throw new Error(response.status)
            }

            var dados = await response.json()
            dados.map(x => {
                let lista = document.createElement('li')

                const dataAtualizada = new Date(x.updated_at);

                lista.innerHTML = `
                <a href=${x.html_url}>${x.name}</a>
                <br>
                <div class="informacoes">
                    <div class="linguagem">
                        <div class="bolinha"></div>
                        <p>${x.language}</p>
                    </div>
                    
                    <time>${dataAtualizada.toLocaleString('pt-BR', {
                        day: '2-digit',
                        month: 'long',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}</time>
                </div>
                `

                ul.appendChild(lista)
            })

        })
}

ProcessoAPI();






        