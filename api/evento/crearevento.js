const formulario = document.getElementById("reg-evento");

formulario.addEventListener("submit", (event)=>{
    event.preventDefault();
    const formData = new FormData(formulario);

    const nombre = formData.get("nombre");
    const fechaInicio = formData.get("fecha-inicio");
    const fechaFin = formData.get("fecha-fin");
    const responsable = formData.get("responsable");
    const descripcion = formData.get("descripcion");
    const contacto = formData.get("contacto");
    const lugar = formData.get("lugar");
    const url = formData.get("url");
    const mesa_id = formData.get("mesa");
    fetch("http://localhost:3000/api/eventos",//Remplazar por la url
    {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            nombre,//Obligatorio
            fechaInicio,//Obligatorio
            fechaFin,
            descripcion,
            lugar,
            responsable,//Obligatorio
            contacto,//Obligatorio
            url,
            mesa_id//Obligatorio
        })
    })
    .then(data => data.json())//Este no retorna un mensaje si se crea el evento, solo retorna el objeto creado. Despues lo arreglo
    .then(data => {
        if(!data.noticia) alert(data.message)
    })
});