const formulario = document.getElementById("reg-mesa");

formulario.addEventListener("submit", (event)=>{
    event.preventDefault();
    const formData = new FormData(formulario);
    const nombre = formData.get("nombre");
    const correo = formData.get("correo");
    const descripcion = formData.get("descripcion");
    const universidad_id = formData.get("universidad");
    fetch("http://localhost:3000/api/mesas",//Remplazar por la url
    {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            nombre,//Obligatorio
            correo,//Obligatorio
            descripcion,
            universidad_id//Obligatorio
        })
    })
    .then(data => data.json())
    .then(data => {
        if(!data.mesa) alert(data.message)
    })
});