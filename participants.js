const url = "data.json";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let participants = document.getElementById("participants");
    data.data.map((obj) => {
      participants.innerHTML += `
        <figure data-aos="zoom-in" class="swiper-slide bg-white rounded-lg p-6 flex h-auto items-center justify-center">
            <img class="w-full" src="images/${obj.name}.png" alt="">
        </figure>
        `;
    });
  })
  .catch((err) => console.log(err));
