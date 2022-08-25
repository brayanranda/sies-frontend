document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const body = Object.fromEntries(new FormData(e.target));
    body.mesa_id = Number(body.mesa_id)
    fetch("http://siesplus.us-east-1.elasticbeanstalk.com/api/eventos", {
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
                window.location.href = `http://127.0.0.1:5501/html/listeventos.html`
            }
        });
});