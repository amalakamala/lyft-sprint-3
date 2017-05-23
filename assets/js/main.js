
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
		return posicionX + posicionX;
	}
	this.retroceder = function(){
		return posicionX - posicionX;
	}
	this.derecha = function(){
		return posicionY + posicionY;
	}
	this.izquierda = function(){
		return posicionY - posicionY;
	}

}


var divStar = document.getElementsByClassName("juego")[0];
var areaJuego = document.getElementsByClassName("juego-final")[0];

var star = document.getElementById("boton-star");
star.addEventListener("click", function(e){
	e.preventDefault();


	var x = document.getElementById("la-x").value;
	var y = document.getElementById("la-y").value;
	if(parseInt(x) > 10 || parseInt(y) > 7){
		alert("ingresa un número menor a 10 para X y un número menor a 6 para Y");
	}

	var pista = document.createElement("div");
	pista.setAttribute("class", "la-pista");

	var monoCuadro = document.createElement("span");
	monoCuadro.setAttribute("class", "mono-cuadro");

	var mono = document.createElement("img");
	mono.setAttribute("class", "el-mono");

	monoCuadro.appendChild(mono);


	divStar.classList.toggle("desaparece");
	areaJuego.appendChild(pista);
})


