 function doPay() {
  window.Mercadopago.createToken(sdkResponseHandler);
}

function sdkResponseHandler(status, response) {
  if (status != 200 && status != 201) {
    alert("verify filled data");
  } else {
    var form = document.querySelector("#pay");
    var card = document.createElement("input");
    card.setAttribute("name", "token");
    card.setAttribute("type", "hidden");
    card.setAttribute("value", response.id);
    console.log(response)
    form.appendChild(card);
    form.submit();
  }
}
