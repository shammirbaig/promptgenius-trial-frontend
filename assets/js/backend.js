function handleButtonClick() {
  fetch("https://promptgenius-backend.onrender.com/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [
        { id: 1, quantity: 3 },
        { id: 2, quantity: 1 },
      ],
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    })
    .then(({ url }) => {
      window.location = url;
    })
    .catch((e) => {
      console.error(e.error);
    });
}

const button = document.getElementById("checkout-button");
const unlockButton = document.getElementById("unlockPower");

button.addEventListener("click", handleButtonClick);
unlockButton.addEventListener("click", handleButtonClick);



const scriptURL = 'https://script.google.com/macros/s/AKfycbyixK7q1KYLMMJakly-Xv_BgqO8D-d7_xvCyTXmnJv9yBdBN-P2f8wRslyGGwC1NhASuA/exec'
const form = document.forms['google-sheet']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})
