export const get = () => {
  fetch("http://siesplus.us-east-1.elasticbeanstalk.com/api/mesas")
    .then((response) => response.json())
    .then((json) => {
      const HTMLResponse = document.querySelector("#tbody");
      let tpl = "";
      json.map(function (mesa) {
        tpl += `<tr class="py-2">
                <th class="p-2">${mesa.id}</th>
                <td class="p-2">${mesa.nombre}</td>
                <td class="p-2">${mesa.descripcion}</td>
                <td class="p-2">${mesa.correo}</td>
                <td class="p-2">${mesa.universidad_id}</td>
                <td class="text-xl">
                <i onClick="deleteMesa(${mesa.id})" class="hover:bg-gray-200 p-2 rounded-md duration-300 cursor-pointer text-red-600 fa-solid fa-trash-can"></i>
                <i onClick="updateMesa({ id:${mesa.id}, nombre:'${mesa.nombre}', descripcion:'${mesa.descripcion}', correo:'${mesa.correo}', universidad_id:${mesa.universidad_id}})" class="cursor-pointer hover:bg-gray-200 p-2 rounded-md duration-300 fa-solid fa-pen-to-square"></i>
                </td>
                </tr>`;
      });
      return (HTMLResponse.innerHTML = tpl);
    })
    .catch((err) => console.log(err));
};
