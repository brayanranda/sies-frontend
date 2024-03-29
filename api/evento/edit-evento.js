window.onload = async () => {
  await createDataListMesas();
  getMesaLocalStorage();
};

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const body = Object.fromEntries(new FormData(e.target));
  delete body.id;
  const mesaId = Number(body.mesa_id.split("Nombre")[0].split(" ")[1]);
  body.mesa_id = mesaId;
  const id = document.getElementById("idEvento").value;
  console.log(body);
  fetch("http://siesplus.us-east-1.elasticbeanstalk.com/api/eventos/" + id, {
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
        localStorage.removeItem("evento-edit");
        window.location.href = `http://127.0.0.1:5501/html/listeventos.html`;
      }
    });
});

async function createDataListMesas() {
  const response = await fetch(
    "http://siesplus.us-east-1.elasticbeanstalk.com/api/mesas"
  );
  const data = await response.json();
  const HTMLResponse = document.getElementById("mesa_id");
  data.map((mesa) => {
    const option = document.createElement("option");
    option.value = `Id: ${mesa.id} Nombre: ${mesa.nombre}`;
    HTMLResponse.appendChild(option);
  });
}

function getMesaLocalStorage() {
  let evento = localStorage.getItem("evento-edit");
  if (evento !== null) {
    evento = JSON.parse(evento);
    //Default
    let defa = "no entra";
    const id = (document.getElementById("mesa_id").value = evento.mesa_id);
    const dataList = document.getElementById("mesa_id");
    for (let i = 1; i < dataList.childNodes.length; i++) {
      if (dataList.childNodes[i].value.split("Nombre")[0].split(" ")[1] == id) {
        defa = dataList.childNodes[i].value;
      }
    }
    document.getElementById("idEvento").value = evento.id;
    document.getElementById("nombre").value = evento.nombre;
    document.getElementById("fechaInicio").value =
      evento.fechaInicio.split("T")[0];
    document.getElementById("fechaFin").value = evento.fechaFin.split("T")[0];
    document.getElementById("descripcion").value = evento.descripcion;
    document.getElementById("lugar").value = evento.lugar;
    document.getElementById("responsable").value = evento.responsable;
    document.getElementById("contacto").value = evento.contacto;
    document.getElementById("url").value = evento.url;
    document.getElementById("mesa_id").value = evento.mesa_id;
  }
}
