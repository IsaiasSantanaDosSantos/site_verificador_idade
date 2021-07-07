function verificar() { //Função para que será chamanda ao clicar no botão "Verificar"
    var data = new Date() //Pegar data atual do sistema
    var ano = data.getFullYear()  //variável para pegar ano atual
    var fano = document.getElementById('txtano') //Variável para pegar ano digitado no site
    var res = document.querySelector('div#res') //Variável para mostrar o resultado no site
    if (fano.value.length == 0 || fano.value > ano) { //Se ano for valor igual a '0' ou ano for maior que ano atual mostrar erro em uma janela 'alert'
        window.alert('[ERRO] verificar os dados e teste novamente!') //Alert de erro
    } else { // Se não der erro...
        var fsex = document.getElementsByName('radsex') //Variável para pegar sexo preenchido na caixa radio
        var idade = ano - Number(fano.value) //Variável para calcular idade
        var gênero = '' //Variável criada para pegar genero, que será preenchido no 'if'
        var img = document.createElement('img')//Criar uma variável com img para carregar imagem
        img.setAttribute('id', 'foto') //Com esse comando, será atribuido um id="foto" na variável, assim como  é feito no html.
        if (fsex[0].checked) { //Se a caixa radio de indece = 0 for 'checada'...
            gênero = 'Homem'   //A variável 'gênero' será homem...
            if (idade >=0 && idade < 10) { //Se idade for maior ou igual a 0 e nemor que 10 'criança'...
                img.setAttribute('src', 'img/crianca-m.png') //Mostrará está imagem.
                res.innerHTML=`Detectamos uma criança com ${idade} ano(s)` //Mostrará este texto com a idade.
            } else if (idade < 21) { //Se idade for menor que 21 'jovem'...
                img.setAttribute('src', 'img/jovem-m.png') //Mostrará está imagem.
                res.innerHTML=`Detectamos um jovem com ${idade} ano(s)` //Mostrará este texto com a idade.
            } else if (idade < 50) { //Se idade for menor 50...
                img.setAttribute('src', 'img/adulto-.png') //Mostrará está imagem.
                res.innerHTML=`Detectamos um homem com ${idade} ano(s)` //Mostrará este texto com a idade.
            } else { //Se nenhuma das opções acima forem verdadeiras 'idoso'
                img.setAttribute('src', 'img/idoso-m.png') //Mostrará está imagem.
                res.innerHTML=`Detectamos um senhor com ${idade} ano(s)` //Mostrará este texto com a idade.
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) { //Se idade for maior ou igual a 0 e nemor que 10 'criança'...
                img.setAttribute('src', 'img/crianca-f.png') //Mostrará está imagem.
                res.innerHTML=`Detectamos uma criança com ${idade} ano(s)` //Mostrará este texto com a idade.
            } else if (idade < 21) { //Se idade for menor que 21 'jovem'...
                img.setAttribute('src', 'img/jovem-f.png') //Mostrará está imagem.
                res.innerHTML=`Detectamos uma jovem com ${idade} ano(s)` //Mostrará este texto com a idade.
            } else if (idade < 50) { //adulto
                img.setAttribute('src', 'img/adulto-m.png')
                res.innerHTML=`Detectamos uma mulher com ${idade} ano(s)`
            } else { //idoso
                img.setAttribute('src', 'img/idosa-f.png')
                res.innerHTML=`Detectamos uma senhora com ${idade} ano(s)`
            }
        }
        res.style.textAlign= "center" //Alinha texto no centro
        res.appendChild(img) //Adicionar elemento após mostrar a variável 'res'.
        img.style.margin = '20px 0px 0px 0px' //Margem da 'img' de 20px no topo
    }
}
