const get = () => {
  fetch("http://siesplus.us-east-1.elasticbeanstalk.com/api/eventos")
    .then((response) => response.json())
    .then((json) => {
      const HTMLResponse = document.querySelector("#eventos");
      let tpl = "";
      json.map(function (evento) {
        tpl += `
          <div
          class="transform hover:shadow-xl hover:scale-105 duration-300 md:flex flex-col w-full bg-white rounded-2xl shadow-md overflow-hidden">
            <div class="p-8">
                <p class="block mt-1 text-sm leading-tight font-medium text-black">${
                  evento.responsable
                }</p>
                <div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">${
                  evento.nombre
                }</div>
                <p class="mt-2 text-slate-500">${evento.descripcion}</p>
                <div class="flex items-center">
                    <p class="mt-2 text-xs mr-3"><b>Fecha inicio:</b> ${
                      evento.fechaInicio.split("T")[0]
                    }</p>
                    <p class="mt-2 text-xs"><b>Fecha fin:</b> ${
                      evento.fechaFin.split("T")[0]
                    }</p>
                </div>
            </div>
          </div>
            `;
      });
      return (HTMLResponse.innerHTML = tpl);
    })
    .catch((err) => console.log(err));
};
get();
