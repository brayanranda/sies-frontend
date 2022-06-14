const get = () => {
  fetch("http://siesplus.us-east-1.elasticbeanstalk.com/api/universidades")
    .then((response) => response.json())
    .then((json) => {
      const HTMLResponse = document.querySelector("#participants");
      const tpl = json.map(
        (universidad) => `
          <figure data-aos="zoom-in" class="swiper-slide bg-white rounded-lg p-6 flex h-auto items-center justify-center">
            <img class="w-full" src="${universidad.logo}" alt="${universidad.info}">
          </figure>
        `
      );
      HTMLResponse.innerHTML = `${tpl}`;
      console.log(json);
    })
    .catch((err) => console.log(err));
};
get();
