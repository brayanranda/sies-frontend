const formulario = document.getElementById("reg-universidad");

formulario.addEventListener("submit", (event)=>{
    event.preventDefault();
    const formData = new FormData(formulario);
    const nombre = formData.get("nombre");
    const info = formData.get("informacion");
    const url = formData.get("url");
    const ciudad = formData.get("ciudad");
    const responsable = formData.get("responsable");
    fetch("http://localhost:3000/api/universidades",//Remplazar por la url
    {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            nombre,//Obligatorio
            logo: url,//Obligatorio
            responsable,//Obligatorio
            ciudad,//Obligatorio
            info
        })
    })
    .then(data => data.json())
    .then(data => {
        if(!data.universidad) alert(data.message)
    })
});