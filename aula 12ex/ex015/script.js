function verificar (){
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genêro = ""
        var img = document.getElementById('imagem')
        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >=0 && idade < 10){
                img.src = 'bebem.jpeg'
            }else if(idade < 21){
                img.src = 'jovemm.jpg'
            }else if(idade < 50){
                img.src = 'adultoh.jpg'
            }else{
                img.src = 'idosom.jpeg'
            }
        }else if (fsex[1].checked){
            gênero = 'Mulher'
            if(idade >=0 && idade < 10){
                img.src = 'bebef.jpg'
            }else if(idade < 21){
                img.src = 'jovemf.jpeg'
            }else if(idade < 50){
                img.src = 'adultof.jpg'
            }else{
                img.src = 'idosaf.jpeg'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}