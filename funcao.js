function valida(erro,df){
erro='black';
df='red';


if (document.getElementById ("simValidacao").checked === false &&
document.getElementById("naoValidacao").checked === false){
   alert ("Selecione os Algum Campo da Selecção de Mensagem");
return false;

}

if(document.getElementById("cpf").value.length < 14){
alert('Digite o CPF!!');
document.getElementById("cpf").style.borderColor=erro;
document.getElementById("cpf").focus();
return false;   
}else{
     document.getElementById("cpf").style.borderColor=df;
}

if(document.getElementById("nome").value.length < 3){
alert('Digite seu nome.');
document.getElementById("nome").style.borderColor=erro;
document.getElementById("nome").focus();
return false;
}else{
     document.getElementById("nome").style.borderColor=df;
}

if(document.getElementById("cidade").value.length < 3){
alert('Informe sua cidade.');
document.getElementById("cidade").style.borderColor=erro;
document.getElementById("cidade").focus();
return false;
}else{
     document.getElementById("cidade").style.borderColor=df;
}

if(document.getElementById("senha").value.length < 6 ){
alert('Digite sua senha igual ou maior que 6 caracteres');
document.getElementById("senha").style.borderColor=erro;
document.getElementById("senha").focus();
return false;
}else{
     document.getElementById("senha").style.borderColor=df;
}


if (document.form1.sel.value===""){
   window.alert("Escolha um estado de Sexo !");
   document.form1.sel.focus();
   return false; 
} else{
   return true;
}

    if(document.getElementById ("observacao").value.length > 200){
        alert("Limite máximo de caractere: 200");
    return false; 
    
    }


}
// PARA EVITAR O ESPACO NO CAMPO DA SENHA PASSWORD
function Trim(str){
	return str.replace(/^\s+|\s+$/g,"");
}
// SER OBRIGATORIAMENTE MAIUSCULO O CAMPO
function maiuscula(z){
        v = z.value.toUpperCase();
        z.value = v;
}


function mascara(o,f){
    v_obj=o;
    v_fun=f;
    setTimeout('execmascara()',1);
}
 
function execmascara(){
    v_obj.value=v_fun(v_obj.value);
}
 
function cpfM(v){
 
    //Remove tudo o que não é dígito
    v=v.replace(/\D/g,"");
 
    if (v.length <= 14) { //CPF
 
        //Coloca um ponto entre o terceiro e o quarto dígitos
        v=v.replace(/(\d{3})(\d)/,"$1.$2");
 
        //Coloca um ponto entre o terceiro e o quarto dígitos
        //de novo (para o segundo bloco de números)
        v=v.replace(/(\d{3})(\d)/,"$1.$2");
 
        //Coloca um hífen entre o terceiro e o quarto dígitos
        v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
 
    } 
 
    return v;
 
}

function telM(v){
 
    //Remove tudo o que não é dígito
    v=v.replace(/\D/g,"");
 
    if (v.length <= 14) { //CPF
 
    
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    
 
    } 
 
    return v;
 
}



function checkBoxMarcando( obj ){
        var teste = document.getElementsByName( obj.name );
        var cont = 0;
        for ( var i = 0; i < teste.length; i++ )
        {
            if ( teste[i].checked )
                cont++;
            if ( cont > 1 )
            {
                obj.checked = false;
                break;
            }
        }
erro='black';
df='red';

			if (!obj.checked) {                  
return;
    	}else
 			
                            if(document.getElementById ("simValidacao").checked === true){
                               document.getElementById("msg").value = "A qualquer momento você podera cancelar o recebimento dos e-mail's de  promoção enviando um e-mail com o assunto STOP MAIL para o endereço contato@estacio.br";
                               document.getElementById("msg").style.borderColor=erro;
                           }else{
                               
                               document.getElementById("msg").value = " ";
                               document.getElementById("msg").style.borderColor=df;
                            }
     
}
