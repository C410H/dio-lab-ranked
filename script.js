function meuRanked() {
    document.getElementById("resp").innerHTML = ""
    var vitoria = document.getElementById("vitoria").value;
    var derrota = document.getElementById("derrota").value;
    var nivel;

    var ranked = vitoria - derrota; 
    if(vitoria != 0 && derrota != 0){
        if(ranked <= 10){ 

            nivel = "Ferro";

        }else if(ranked <= 20){

            nivel = "Bronze";

        }else if(ranked <= 50){

            nivel = "Prata";

        }else if(ranked <= 80){

            nivel = "Ouro";

        }else if(ranked <= 90){

            nivel = "Diamante";

        }else if(ranked <= 100){

            nivel = "Lendário";

        }else if(ranked >= 101){

            nivel = "Imortal";

        }
        let texto = '<div class="fromRest col-10 offset-1 my-2 p-2">'
        texto += '<h2>🏆  O Herói tem de saldo de <b>'+ranked+'!</b> está no nível de <b>'+nivel+'!</b> 🏆</h2>'
        texto += '</div>'

        document.getElementById("resp").innerHTML = texto;
    }

}