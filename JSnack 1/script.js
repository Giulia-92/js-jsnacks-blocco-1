const lista = ['invitato1,invitato2,invitato3,invitato4,invitato5,invitato6']
document.getElementById('btn').addEventListener('click', function(){
    const nomeAccesso = document.getElementById('name').value
    let nomeInlista = false;
    for (let i = 0; i < lista.length; i++){
        const nomeTrovato = lista[i]
        if(nomeAccesso === lista[i]){
            nomeInlista = true;
        } else{
            nomeInlista = false;
        }
        if(nomeInlista){
            prompt('Sei in lista!')
        } else{
            prompt('Non sei in lista!')
        }
    }
})































/*const mail = prompt ("inserisci mail");
let arrayMail = ['mail1@mail.it','mail2@mail.it','mail3@mail.it','mail4@mail.it','mail5@mail.it'];
document.getElementById('check').addEventListener('click',function(){
const utente = document.getElementById('accesso-email').value
let convalida = false;
for (let i = 0; i< arrayMail.length; i++){
    if(mail === arrayMail){
        convalida = true
        
    } 
    if(convalida){
        alert('accesso consentito')
    }else {
        alert('accesso negato')
    }
}
})*/