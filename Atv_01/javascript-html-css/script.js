var nomeGlobal;
var mensagemGlobal;

function conferirMensagemWhatsApp(){
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;

    nomeGlobal = nome;
    mensagemGlobal = mensagem;

    document.getElementById("confMsg").textContent = nome;
    document.getElementById("confNome").textContent = mensagem;
    
    
}
function enviar(){
    var numeroTelefone = "41984666011";

    var linkWhatsApp = 
    "https://wa.me/" + 
    numeroTelefone + 
    "?text=Nome:" + 
    nomeGlobal + 
    "? - " + 
    mensagemGlobal;

    window.open(linkWhatsApp, "_blank")
}