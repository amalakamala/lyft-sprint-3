
(function telefono() {
	var boton =	document.getElementById("boton-phone");

	boton.addEventListener("click", function(el){
		el.preventDefault();
	var phone = document.getElementById("phone").value;

	if(!(/\+569[0-9]{8}/.test(phone))){
 		alert("Ingrese Su teléfono \n+56912345678 ");
	}else{
		document.getElementById("phone").value ="";
	
		alert("Enviado");		
	}
	})
})()


function Auto(posicionX, posicionY){
	this.posicionX = posicionX;
	this.posicionY = posicionY;

	this.avanzar = function(){
		return posicionX + 1 ;
	}
	this.retroceder = function(){
		return posicionX - 1;
	}
	this.derecha = function(){
		return posicionY + 1;
	}
	this.izquierda = function(){
		return posicionY - 1;
	}
}


var arregloPista = [
	["","","","","","","","","",""],
	["","","","","","","","","",""],
	["","","","","","","","","",""],
	["","","","","","","","","",""],
	["","","","","","","","","",""],
	["","","","","","","","","",""]
];



var divStar = document.getElementsByClassName("juego")[0];
var areaJuego = document.getElementsByClassName("juego-final")[0];

var star = document.getElementById("boton-star");
star.addEventListener("click", function(e){
	e.preventDefault();


	var x = document.getElementById("la-x").value;
	var y = document.getElementById("la-y").value;

	var divCaja = document.createElement("div");
	divCaja.classList.add("la-caja");

	var imgAuto = document.createElement("img");
	imgAuto.classList.add("el-mono");

	if(parseInt(x) == "" || parseInt(x) >= 7) {
		alert("ingresa un número menor a 6 para X");
	}else if(parseInt(y) >= 11){
		alert("ingresa un número menor a 10 para Y");
	}else{


		var usuario = new Auto(x,y);
		arregloPista[y -1][x -1] = "<img class='el-mono'>";

		var fila, cuadro;

		for(var i = 0; i< arregloPista.length; i++){
		  fila = document.createElement("div");
		  fila.classList.add("fila");
		  for(var j = 0; j< arregloPista[i].length; j++){
		    cuadro = document.createElement("div");
		    cuadro.innerHTML = arregloPista[i][j];
		    cuadro.classList.add("mono-cuadro");
		    fila.appendChild(cuadro);

		  }
		  divCaja.appendChild(fila);
		  areaJuego.appendChild(divCaja);
		}
		divStar.classList.toggle("desaparece");	



	}
})


