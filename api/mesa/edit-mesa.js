window.onload = async() => {
    getMesaLocalStorage()
}

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const body = Object.fromEntries(new FormData(e.target))
    delete body.id
    const id = document.getElementById("idMesa").value
    fetch("http://siesplus.us-east-1.elasticbeanstalk.com/api/mesas/" + id, {
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
            } else {
                localStorage.removeItem('mesa-edit')
                window.location.href = `http://127.0.0.1:5501/html/listmesas.html`
            }
        });

})

function getMesaLocalStorage() {
    let mesa = localStorage.getItem('mesa-edit')
    if (mesa !== null) {
        mesa = JSON.parse(mesa)
        document.getElementById("idMesa").value = mesa.id
        document.getElementById("nameuser").value = mesa.nombre
        document.getElementById("descripcion").value = mesa.descripcion
        document.getElementById("correo").value = mesa.correo
        document.getElementById("universidad_id").value = mesa.universidad_id
    }
}