window.onload = async() => {
    getMesaLocalStorage()
}

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const body = Object.fromEntries(new FormData(e.target))
    delete body.id
    body.mesa_id = Number(body.mesa_id)
    const id = document.getElementById("idUniversidad").value
    console.log(body)
    fetch("http://siesplus.us-east-1.elasticbeanstalk.com/api/universidades/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
        .then((data) => data.json())
        .then((data) => {
            if (!data.mesa) {
                alert(data.message)
                localStorage.removeItem('universidad-edit')
                window.location.href = `http://127.0.0.1:5501/html/listuniversidades.html`
            }
        });

})

function getMesaLocalStorage() {
    let universidad = localStorage.getItem('universidad-edit')
    if (universidad !== null) {
        universidad = JSON.parse(universidad)
        document.getElementById("idUniversidad").value = universidad.id
        document.getElementById("nombre").value = universidad.nombre
        document.getElementById("responsable").value = universidad.responsable
        document.getElementById("ciudad").value = universidad.ciudad
        document.getElementById("logo").value = universidad.logo
        document.getElementById("info").value = universidad.info
    }
}