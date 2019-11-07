const player1 = "★";
const player2 = "Δ";
var playTime = player1;
var gameOver = false;

atualizaMostrador();
inicializarEspacos();

function atualizaMostrador(){
	if (gameOver) {return;}
	if (playTime == player1) {

		var player = document.querySelectorAll("div#mostrador img")[0];
		player.setAttribute("src", "imagens/estrela.png");
	}
	else{
		var player = document.querySelectorAll("div#mostrador img")[0];
		player.setAttribute("src", "imagens/triangulo.png");
	}
}

function inicializarEspacos(){
	var espacos = document.getElementsByClassName("espaco");
	for(var i=0; i < espacos.length; i++){

		espacos[i].addEventListener("click", function(){

			if (gameOver) {return;}
			if (this.getElementsByTagName("img").length == 0) {

				if (playTime == player1) {
					this.innerHTML = "<img src = 'imagens/estrela.png' border='0' height='50'>";
					this.setAttribute("jogada", player1);
					playTime = player2;

				}
				else{
					this.innerHTML = "<img src = 'imagens/triangulo.png' border='0' height='50'>";
					this.setAttribute("jogada", player2);
					playTime = player1;
				}
				atualizaMostrador();
				verificarVencedor();
			}

		}

		)
	}
}
async function verificarVencedor(){

	var a1 = document.getElementById("a1").getAttribute("jogada");
	var a2 = document.getElementById("a2").getAttribute("jogada");
	var a3 = document.getElementById("a3").getAttribute("jogada");

	var b1 = document.getElementById("b1").getAttribute("jogada");
	var b2 = document.getElementById("b2").getAttribute("jogada");
	var b3 = document.getElementById("b3").getAttribute("jogada");

	var c1 = document.getElementById("c1").getAttribute("jogada");
	var c2 = document.getElementById("c2").getAttribute("jogada");
	var c3 = document.getElementById("c3").getAttribute("jogada");

	var vencedor = "";
	var empate = "";

	

	if ((a1!=b1 && a1 == c1 && a1 != "")||(a1 == b1 && a1 != c1 && a1 != "")||(a1 != a2 && a1 == a3 && a1 != "")||(a1 == a2 && a1 != a3 && a1 != "")||(a1 == b2 && a1 != c3 && a1 != "")||(a1 != b2 && a1 == c3 && a1 != "")||
		(a2 == b2 && a2 != c2 && a2 != "")||(a2 != b2 && a2 == c2 && a2 !== "")||(a2 == a1 && a2 != a3 && a2 != "")||(a2 != a1 && a2 == a3 && a2 != "")||
		(a3 == b3 && a3 != c3 && a3 != "")||(a3 != b3 && a3 == c3 && a3 != "")||(a3 == a1 && a3 != a2 && a3 != "")||(a3 != a1 && a3 == a2 && a3 != "")||(a3 == b2 && a3 != c1 && a3 != "")||(a3 != b2 && a3 == c1 && a3 != "")||
		(b1 == b2 && b1 != b3 && b1 != "")||(b1 != b2 && b1 == b3 && b1 != "")||(b1 == c1 && b1 != a1 && b1 != "" )||(b1 != c1 && b1 == a1 && b1 != "")||(b1 == b3 && b1 != b2 && b1 != "")||(b1 != b3 && b1 == b2 && b1 != "")||
		(b2 == b3 && b2 != b1 && b2 != "")||(b2 != b3 && b2 == b1 && b2 != "")||(b2 == a2 && b2 != c2 && b2 != "")||(b2 != a2 && b2 == c2 &&b2 != "")||(b2 == a1 && b2 != c3 && b2 != "")||(b2 != a1 && b2 == c3 && b2 != "")||(b2 == a3 && b2 != c1 && b2 != "")||(b2 != a3 && b2 == c1 && b2 != "")||
		(b3 == a3 && b3 != c3 && b3 != "")||(b3 != a3 && b3 == c3 && b3!="")||(b3 == b2 && b3 != b1 && b3 != "")||(b3 != b2 && b3 == b1 && b3 != "")||
		(c1 == b1 && c1 != a1 && c1 != "")||(c1 != b1 && c1 == a1 && c1 != "")||(c1 == c2 && c1 != c3 && c1 != "")||(c1 != c2 && c1 == c3 && c1 != "")||
		(c2 == b2 && c2 != a2 && c2 != "")||(c2 != b2 && c2 == a2 && c2 != "")||(c2 == c1 && c2 != c3 && c2 != "")||(c2 != c1 && c2 ==c3 && c2 != "")||
		(c3 == c2 && c3 != c1 && c3 != "")||(c3 != c2 && c3 == c1 && c3 != "")||(c3 == b3 && c3 != a3 && c3 != "")||(c3 != b3 && c3 == a3 && c3 !="")) {
		empate != "";
		empate = a1;
		empate = b2;
		empate = c3;
	}
	
	


 if ((a1 == b1 && a1 == c1 && a1 != "") || (a1 == a2 && a1 == a3 && a1 != "" ) || (a1 == b2 && a1 == c3 && a1 != "")) {
		vencedor = a1;
	}

else if  ((b2 == b1 && b2 == b3 && b2 != "") || (b2 == a2 && b2 == c2 && b2 != "") || (b2 == a3 && b2 == c1 && b2 != "")){
		vencedor = b2;
	}
	else if((c3 == c2 && c3 == c1 && c3 != "") || (c3 == a3 && c3 == b3 && c3 != "")){
		vencedor = c3;
	}

	if (empate != "") {
		gameOver = true;
		await sleep(50);

		alert("Temos um empate:''"+empate+"''");
		location.reload(true);
	}

	if (vencedor != "") {
		gameOver = true;

		await sleep(50);

		alert("O vencedor foi:''" +vencedor+"''");
		location.reload(true);
	}

}
function sleep(ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}
