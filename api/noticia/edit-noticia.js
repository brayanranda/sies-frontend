window.onload = async () => {
  getMesaLocalStorage();
  createDataListMesas();
};

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const body = Object.fromEntries(new FormData(e.target));
  delete body.id;
  const mesaId = Number(body.mesa_id.split("Nombre")[0].split(" ")[1]);
  body.mesa_id = mesaId;
  const id = document.getElementById("idNoticia").value;
  console.log(body);
  fetch("http://siesplus.us-east-1.elasticbeanstalk.com/api/noticias/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((data) => data.json())
    .then((data) => {
      if (!data.mesa) {
        alert(data.message);
        localStorage.removeItem("noticia-edit");
        window.location.href = `http://127.0.0.1:5501/html/listnoticias.html`;
      }
    });
});

function createDataListMesas() {
  fetch("http://siesplus.us-east-1.elasticbeanstalk.com/api/mesas")
    .then((response) => response.json())
    .then((json) => {
      const HTMLResponse = document.getElementById("mesa_id");
      json.map((mesa) => {
        const option = document.createElement("option");
        option.value = `Id: ${mesa.id} Nombre: ${mesa.nombre}`;
        HTMLResponse.appendChild(option);
      });
    })
    .catch((err) => console.log(err));
}

function getMesaLocalStorage() {
  let noticia = localStorage.getItem("noticia-edit");
  if (noticia !== null) {
    noticia = JSON.parse(noticia);
    document.getElementById("idNoticia").value = noticia.id;
    document.getElementById("titulo").value = noticia.titulo;
    document.getElementById("descripcion").value = noticia.descripcion;
    document.getElementById("autor").value = noticia.autor;
    document.getElementById("categoria").value = noticia.categoria;
    document.getElementById("mesa_id").value = noticia.mesa_id;
  }
}
