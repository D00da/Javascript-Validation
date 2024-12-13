function elementoExiste(elemento){
	if 	(elemento == null){
		alert("O elemento não existe");
		return false;
	}
	return true;
}

//Valida se uma caixa de texto com preenchida com caracteres vazios
function validaExiste(id){
	var elemento = document.getElementById(id);

	elementoExiste(elemento);

	if (elemento.value == null || elemento.value.length == 0 || (/^\s+$/.test(elemento.value))){
		alert("Coluna "+id+" não foi preenchida!");
		return false;
	}
	return true;
}

//Valida se a caixa de texto foi preenchida corretamente 
//(não vazia e entre 1 e 10 caracteres)
function validaCorretamente(id){
	var elemento = document.getElementById(id);
	var tamanho = elemento.value.length;

	elementoExiste(elemento);
	preenchidoExiste(elemento);

	if(tamanho < 1 || tamanho > 10 ){
		alert("Quantidade inválida de caracteres!");
		return false;
	}
	return true;
}

//Valida se o input foi um número inteiro positivo
function validaInteiro(id){
	var elemento = document.getElementById(id);
	elementoExiste(elemento);

	var valor = elemento.value;
	if(isNaN(valor)){
		alert("Digite um número");
		return false;
	}
	else if(valor <0){
		alert("Inteiro positivo válido não identificado!");
		return false;
	}
	return true;
}

//Valida se a opção da combobox escolhida não foi a inicial (00)
function validaCombobox(id){
	var elemento = document.getElementById(id);
	elementoExiste(elemento);
	if(elemento.value == "00"){
		alert("Selecione uma das caixas!");
		return false;
	}
	return true;
}

//Valida se a checkbox obrigatória foi marcada
function validaCheckbox(id){
	var elemento = document.getElementById(id);
	elementoExiste(elemento);
	if(!elemento.checked){
		alert("Selecione a caixa obrigatória");
		return false;
	}
	return true;
} 

//Conta quantas checkboxes foram selecionadas
function contaCheckbox(nome){
	var elementos = document.getElementsByName(nome);
	if (elementos == null || elementos.length == 0) {
		alert("Não existem elementos");
		return false;
	}
	var cont = 0;
	for(var i = 0; i < elementos.length; i++){
		if(elementos[i].checked){
			cont+=1;
		}
	}
	alert("Quantidade de caixas: "+cont);
	return true;
}

//Checa se ao menos 1 da opções radio foi selecionada
function checaRadio(nome){
	var elementos = document.getElementsByName(nome);
	if (elementos == null || elementos.length == 0) {
		alert("Não existem elementos");
		return false;
	}
	var escolha = false;
	for(var i = 0; i < elementos.length; i++){
		if(elementos[i].checked){
			escolha = true;
			alert(elementos[i].id);
			return escolha;
		}
	}
	return escolha;
}

//Valida se é maiúscula
function maiuscula(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
            return true;
        }
    }  
    return false;
}

//Valida se é minúscula
function minuscula(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase() && str[i] !== str[i].toUpperCase()) {
            return true;
        }
    }
    return false;
}

//Valida caracteres especiais
function especiais(str) {
    const char = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
    return char.test(str);
}

//Valida o login do usuário
function validaLogin(nome, login, senha){

	if(!preenchidoExiste(nome) || !preenchidoExiste(login) || !preenchidoExiste(senha)){
		alert("O elemento não existe");
		return false;
	}
	var senhaValue = document.getElementById(senha).value;
	if(!maiscula(senhaValue) || !minuscula(senhaValue) || !especiais(senhaValue) || senhaValue.length < 4){
		alert("senha inválida");
		return false;
	}
	return true;
}