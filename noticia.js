const get = () => {
  fetch("http://siesplus.us-east-1.elasticbeanstalk.com/api/noticias")
    .then((response) => response.json())
    .then((json) => {
      const HTMLResponse = document.querySelector("#noticias");
      let tpl = "";
      json.map(function (noticia) {
        tpl += `
        <div
          class="transform hover:shadow-xl hover:scale-105 duration-300 md:flex flex-col w-full bg-white rounded-2xl shadow-md overflow-hidden">
            <div class="p-8">
                <div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">${noticia.titulo}</div>
                <p class="mt-2 text-slate-500">${noticia.descripcion}</p>
            </div>
          </div>
              `;
      });
      console.log("hola", json);
      return (HTMLResponse.innerHTML = tpl);
    })
    .catch((err) => console.log(err));
};
get();
