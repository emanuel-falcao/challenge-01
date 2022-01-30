var botaoEncriptar = document.querySelector("#btn-cripto");
botaoEncriptar.addEventListener("click",function(event){
	event.preventDefault();
	
	var form = document.querySelector("#form-texto");
	
	var entrada = form.texto.value;
	
	var saidaCripto = criptografar(entrada);
	console.log(saidaCripto);

	function criptografar(enigma){
	var cripto=[];
	for (var i = 0; i < enigma.length; i++) {
  	  	switch(entrada[i]){
  		case("e"):
  			cripto.push("enter");
  			break;
  		case("a"):
  			cripto.push("ai");
  			break;
		case("i"):
  			cripto.push("imes");
  			break;
		case("o"):
  			cripto.push("ober");
  			break;
		case("u"):
  			cripto.push("ufat");
  			break;
  		default:
  			cripto.push(enigma[i]);
		}
	}
 	var finalSaida=cripto.join('');
	return finalSaida;
}
	var show = document.querySelector("#msg");
	show.value = saidaCripto;
});

var botaoDesencriptar = document.querySelector("#btn-descripto");
botaoDesencriptar.addEventListener("click",function(event){
	event.preventDefault();
	
	var form2 = document.querySelector("#form-texto");
	
	var entrada2 = form2.texto.value;
	
	var saidaDescripto = desencriptografar(entrada2);
	console.log(saidaDescripto);

	function desencriptografar(enigma){
	// Ourstring.replace(Specificvalue, Newvalue)
		var finalSaida2;
		finalSaida2 = enigma.replace(/enter/gi, "e").replace(/ai/gi, "a").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");
		return finalSaida2;
	}
	var show = document.querySelector("#msg");
	show.value = saidaDescripto;
});


	


/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para 	
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/