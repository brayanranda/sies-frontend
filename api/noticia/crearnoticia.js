window.onload = async () => {
  createDataListMesas();
};

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const body = Object.fromEntries(new FormData(e.target));
  body.mesa = Number(body.mesa);
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
      // let tpl = `
      //   <label data-aos=" zoom-in" class="w-1/2 mr-1" for="">
      //       <p class="ml-2 mb-1">Mesa</p>
      //       <input
      //           class="placeholder-indigo-400 p-3 bg-gray-200 appearance-none border border-transparent w-full text-indigo-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-600 border-indigo-600 rounded-xl"
      //           id="mesa_id" name="mesa_id" />
      //   <datalist id="mesa_id" name="mesa_id" class="">
      // `;
      // json.map((mesa) => (tpl += `<option value="${mesa.id}.${mesa.nombre}">`));
      // tpl += `</datalist>`;
      json.map((mesa) => {
        const option = document.createElement("option");
        option.value = `Id: ${mesa.id} Nombre: ${mesa.nombre}`;
        HTMLResponse.appendChild(option);
      });
      // HTMLResponse.innerHTML = tpl;
      // console.log(tpl);
    })
    .catch((err) => console.log(err));
}
