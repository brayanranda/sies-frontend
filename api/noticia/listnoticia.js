export const get = () => {
    fetch("http://siesplus.us-east-1.elasticbeanstalk.com/api/noticias")
        .then((response) => response.json())
        .then((json) => {
            const HTMLResponse = document.querySelector("#tbody");
            const tpl = json.map(
                (noticia) => `<tr class="py-2">
                <th>${noticia.id}</th>
                <td>${noticia.titulo}</td>
                <td>${noticia.descripcion}</td>
                <td>${noticia.autor}</td>
                <td>${noticia.categoria}</td>
                <td>${noticia.mesa_id}</td>
                <td class="text-xl">
                <i onClick="deleteNoticia(${noticia.id})" class="hover:bg-gray-200 p-2 rounded-md duration-300 cursor-pointer text-red-600 fa-solid fa-trash-can"></i>
                <i onClick="updateNoticia({ id:${noticia.id}, titulo:'${noticia.titulo}', descripcion:'${noticia.descripcion}', autor:'${noticia.autor}', categoria:'${noticia.categoria}', mesa_id:${noticia.mesa_id}})" class="cursor-pointer hover:bg-gray-200 p-2 rounded-md duration-300 fa-solid fa-pen-to-square"></i></td></tr>`
            );
            HTMLResponse.innerHTML = `${tpl}`;
            console.log(json);
        })
        .catch((err) => console.log(err));
};