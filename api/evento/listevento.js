export const get = () => {
  fetch("http://siesplus.us-east-1.elasticbeanstalk.com/api/eventos")
    .then((response) => response.json())
    .then((json) => {
      const HTMLResponse = document.querySelector("#tbody");
      const tpl = json.map(
        (evento) => `<tr class="py-2">
                <th>${evento.id}</th>
                <td>${evento.nombre}</td>
                <td>${evento.fechaInicio}</td>
                <td>${evento.fechaFin}</td>
                <td>${evento.descripcion}</td>
                <td>${evento.lugar}</td>
                <td>${evento.responsable}</td>
                <td>${evento.contacto}</td>
                <td>${evento.url}</td>
                <td>${evento.mesa}</td>
                <td class="text-xl"><i class="hover:bg-gray-200 p-2 rounded-md duration-300 cursor-pointer text-red-600 fa-solid fa-trash-can"></i><i class="cursor-pointer hover:bg-gray-200 p-2 rounded-md duration-300 fa-solid fa-pen-to-square"></i></td></tr>`
      );
      HTMLResponse.innerHTML = `${tpl}`;
      console.log(json);
    })
    .catch((err) => console.log(err));
};
