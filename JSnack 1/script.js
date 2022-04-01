const lista = ['invitato1,invitato2,invitato3,invitato4,invitato5,invitato6']
document.getElementById('btn').addEventListener('click', function () {
    const nomeAccesso = document.getElementById('name').value
    let nomeInlista = false;
    for (let i = 0; i < lista.length; i++) {
        const nomeTrovato = lista[i]
        if (nomeAccesso === lista[i]) {
            nomeInlista = true
        }
    }
        })