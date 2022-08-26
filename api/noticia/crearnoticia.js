window.onload = async () => {
  createDataListMesas();
};

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const body = Object.fromEntries(new FormData(e.target));
  const mesaId = Number(body.mesa_id.split("Nombre")[0].split(" ")[1]);
  body.mesa_id = mesaId;
  fetch("http://siesplus.us-east-1.elasticbeanstalk.com/api/noticias", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((data) => data.json())
    .then((data) => {
      if (!data.mesa) {
        alert(data.message);
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
