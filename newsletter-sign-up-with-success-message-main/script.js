const email = document.getElementById("email");
const button = document.getElementById("button");
const form = document.getElementById("form");
const errorMessage = document.getElementById("error");

form.addEventListener("submit", function (e) {
  if (
    /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(
      email.value
    )
  ) {
    null;
  } else {
    e.preventDefault();
    errorMessage.classList.add("visible");
    email.classList.add("red");
  }
});
