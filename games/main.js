// Variables:
		
		class Pieza {
		constructor(nombre, id, imagen) {
			this.nombre = nombre;
			this.id = id;
			this.imagen = imagen + nombre + ".png";
		}
		
	}
	const directorioRaiz = "../media/chess/";
	let casillasBlancas = [61, 60, 62, 59, 58, 63, 49, 57, 64, 50, 51, 52, 53, 54, 55, 56];
	let casillasNegras = [5, 4, 3, 6, 2, 7, 1, 8, 9, 10, 11, 12, 13, 14, 15, 16];
		
	const blancas = [
		new Pieza("rey-white", 1, directorioRaiz),
		new Pieza("reina-white", 2, directorioRaiz),
		new Pieza("alfil-white", 5, directorioRaiz),
		new Pieza("alfil-white", 7, directorioRaiz),
		new Pieza("caballo-white", 3, directorioRaiz),
		new Pieza("caballo-white", 6, directorioRaiz),
		new Pieza("torre-white", 4, directorioRaiz),
		new Pieza("torre-white", 8, directorioRaiz),
		new Pieza("peon-white", 9, directorioRaiz),
		new Pieza("peon-white", 10, directorioRaiz),
		new Pieza("peon-white", 11, directorioRaiz),
		new Pieza("peon-white", 12, directorioRaiz),
		new Pieza("peon-white", 13, directorioRaiz),
		new Pieza("peon-white", 14, directorioRaiz),
		new Pieza("peon-white", 15, directorioRaiz),
		new Pieza("peon-white", 16, directorioRaiz),
	];
		
	const negras = [
		new Pieza("rey-black", 17, directorioRaiz),
		new Pieza("reina-black", 18, directorioRaiz),
		new Pieza("alfil-black", 21, directorioRaiz),
		new Pieza("alfil-black", 23, directorioRaiz),
		new Pieza("caballo-black", 19, directorioRaiz),
		new Pieza("caballo-black", 22, directorioRaiz),
		new Pieza("torre-black", 20, directorioRaiz),
		new Pieza("torre-black", 24, directorioRaiz),
		new Pieza("peon-black", 25, directorioRaiz),
		new Pieza("peon-black", 26, directorioRaiz),
		new Pieza("peon-black", 27, directorioRaiz),
		new Pieza("peon-black", 28, directorioRaiz),
		new Pieza("peon-black", 29, directorioRaiz),
		new Pieza("peon-black", 30, directorioRaiz),
		new Pieza("peon-black", 31, directorioRaiz),
		new Pieza("peon-black", 32, directorioRaiz),
	];
		
	let drags = "draggable= \"true\" ondragstart=\"drag(event)\" id=\"drag1\" width=\"60\" height=\"60\"";
	
	// Creadores:
	
	function sAppend(a, b) {
		return a + b;
	}
	
	function setAttr(field, value) {
		return " " + field + "= " + value;
	}
	
	function createStyleAttrList() {
		var attrData;// i.e: color: blue; width: 4px; field: value;
		for (var i = 0; i < arguments.length; i++) {
			attrData += arguments[i];
		}
		return attrData;// color: blue; width: 4px; field: value;
	}
	
	function createDiv(numId) {
	var elId = "div" + numId;// ondrop=\"drop(event)\" ondragover=\"allowDrop(event)\"
	var styleAttrs = "background-color:transparent;width:60px;height:60px;";
	var attrList = setAttr("id", elId) + setAttr("style", styleAttrs) + setAttr("ondrop", "drop(event)") + setAttr("ondragover", "allowDrop(event)");
		return "<div" + attrList + "> </div>";
	}
	
	function createTD(numId, color) {
		return "<td" + setAttr("class", color) + ">" + createDiv(numId++) + "</td>";
//		return "<td" + setAttr("id", elId) + ">" + createDiv(numId) + "</td>";
	}
	
	function createRow(colorA, colorB, numeroId) {
		// @numeroId = 1 - inicialmente. Luego: 9, 17, 25, 33, 41, 49, 57.
		//alert(numeroId);
		var row = "<tr>";
		for (var i = 0; i < 8; i++) {
			if (i % 2 == 0) {
				row += createTD(numeroId, colorA);
			} else {
				row += createTD(numeroId, colorB);
			}
			numeroId++;
		}
		row += "</tr>";
		return row;
	}
  
     function createRows() {
		var tableRows = ["1", "2", "3", "4", "5", "6", "7", "8"];
		var contador = 1;
        for(var i = 0; i < 8; i++) {
			if (i % 2 == 0) {
				tableRows[i] = createRow("white", "black", contador);
			} else {
				tableRows[i] = createRow("black", "white", contador);
			}
			contador += 8;
        }
        return tableRows;
      }
	  
	  function loadTable() {
		var chessTable = document.getElementById("chessTab");
		var tablero = "";
		var tableRows = createRows();
		
		for (var i = 0; i < tableRows.length; i++) {
			tablero += tableRows[i];
		}
		chessTable.innerHTML = tablero;
		alert("Se ha construido el tablero");
		addImg();
	  }
	  
	  function addImg() {
			colocar(blancas, casillasBlancas);
			colocar(negras, casillasNegras);
		//document.getElementById("drag1").style.width = "25px";
		//document.getElementById("drag1").style.height = "25px";
	  }
		
		function colocar(piezas, casillas) {
			let temp;
			for (let i = 0; i < casillas.length; i++){
				temp = document.getElementById("div" + casillas[i]);
				temp.innerHTML = "<img src=" + piezas[i].imagen + " " + drags + ">";
			}
		}
	  
	function allowDrop(ev) {
		ev.preventDefault();
	}

	function drag(ev) {
		ev.dataTransfer.setData("text", ev.target.id);
	}

	function drop(ev) {
		ev.preventDefault();
		var data = ev.dataTransfer.getData("text");
		ev.target.appendChild(document.getElementById(data));
	}
	loadTable()
