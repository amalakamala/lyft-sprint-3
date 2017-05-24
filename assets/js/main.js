
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
		arregloPista[y+1][x];
	};
	this.retroceder = function(){
		arregloPista[y-1][x];
	};
	this.derecha = function(){
		arregloPista[y][x+1];
	};
	this.izquierda = function(){
		arregloPista[y][x-1];
	};
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

var start = document.getElementById("boton-start");
start.addEventListener("click", function(e){
	e.preventDefault();


	var x = document.getElementById("la-x").value;
	var y = document.getElementById("la-y").value;

	var divCaja = document.createElement("div");
	divCaja.classList.add("la-caja");
	divCaja.setAttribute("id","caja");

	var imgAuto = document.createElement("img");
	imgAuto.classList.add("el-mono");
	imgAuto.setAttribute("id","monito");

	if(parseInt(x) == "" || parseInt(x) >= 11) {
		alert("ingresa un número menor o igual a 10 para X");
	}else if(parseInt(y) >= 7){
		alert("ingresa un número menor o igual a 6 para Y");
	}else{


		var usuario = new Auto(x,y);
		arregloPista[y-1][x-1] = "<img class='el-mono'>";

		var fila, cuadro;

		for(var i = 0; i< arregloPista.length; i++){
		  fila = document.createElement("div");
		  fila.classList.add("fila");
		  fila.setAttribute("id","rect")
		  for(var j = 0; j< arregloPista[i].length; j++){
		    cuadro = document.createElement("div");
		    cuadro.innerHTML = arregloPista[i][j];
		    cuadro.classList.add("mono-cuadro");
		    cuadro.setAttribute("id","box");
		    fila.appendChild(cuadro);

		  }
		  divCaja.appendChild(fila);
		  areaJuego.appendChild(divCaja);
		}

		divStar.classList.toggle("desaparece");	


		/*Movimiento con botones */


		var laCaja = document.getElementsByClassName("el-mono")[0];
		laCaja.addEventListener("keydown", function (e){
		
				if(e.keyCode == 39){
					this.derecha;
					console.log("derecha");
				}
				if(e.keyCode == 37){
					this.izquierda;
					console.log("izquierda");
				}
				if(e.keyCode == 38){
					this.avanzar;
				}
				if(e.keyCode == 40){
					this.retroceder;
				}
		})

	}
})


