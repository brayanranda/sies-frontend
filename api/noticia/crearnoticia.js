const formulario = document.getElementById("reg-noticia");

formulario.addEventListener("submit", (event)=>{
    event.preventDefault();
    const formData = new FormData(formulario);
    const titulo = formData.get("titulo");
    const descripcion = formData.get("descripcion");
    const autor = formData.get("autor");
    const categoria = formData.get("categoria");
    const mesa_id = formData.get("mesa");
    fetch("http://localhost:3000/api/noticias",//Remplazar por la url
    {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            titulo,//Obligatorio
            descripcion,//Obligatorio
            autor,
            categoria,
            mesa_id//Obligatorio
        })
    })
    .then(data => data.json())
    .then(data => {
        if(!data.noticia) alert(data.message)
    })
});