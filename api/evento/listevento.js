export const get = () => {
    fetch("http://siesplus.us-east-1.elasticbeanstalk.com/api/eventos")
        .then((response) => response.json())
        .then((json) => {
            const HTMLResponse = document.querySelector("#tbody");
            const tpl = json.map(
                (evento) => `<tr class="py-2">
                <td class="p-2">${evento.nombre}</td>
                <td class="p-2">[${evento.fechaInicio.split("T")[0]}] <br> [${
          evento.fechaFin.split("T")[0]
        }]</td>
                <td class="p-2">${evento.descripcion}</td>
                <td class="p-2">${evento.lugar}</td>
                <td class="p-2">${evento.responsable}</td>
                <td class="p-2">${evento.contacto}</td>
                <td class="p-2"><a target="_blank" href="${
                  evento.url
                }"><i class="fas fa-link"></i></a></td>
                <td class="p-2">${evento.mesa_id}</td>
                <td class="p-2 text-xl">
                <i onClick="deleteEvento(${evento.id})" class="hover:bg-gray-200 p-2 rounded-md duration-300 cursor-pointer text-red-600 fa-solid fa-trash-can"></i>
                <i onClick="updateEvento({ 
                  id:${evento.id},
                  nombre:'${evento.nombre}', 
                  fechaInicio:'${evento.fechaInicio}', 
                  fechaFin:'${evento.fechaFin}', 
                  descripcion:'${evento.descripcion}',
                  lugar:'${evento.lugar}', 
                  responsable:'${evento.responsable}', 
                  contacto:'${evento.contacto}', 
                  mesa_id:${evento.mesa_id}, 
                  url:'${ evento.url}'
                })" class="cursor-pointer hover:bg-gray-200 p-2 rounded-md duration-300 fa-solid fa-pen-to-square"></i></td></tr>`
            );

            HTMLResponse.innerHTML = `${tpl}`;
            console.log(json);
        })
        .catch((err) => console.log(err));
};