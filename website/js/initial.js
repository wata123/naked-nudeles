window.onload = function() {
  let response = window.prompt("What is your age?");

  function check() {
    if (Number(response) >= 18) {
      alert("Ok.");
      window.location.href = "index.html";
    }
    else {
      alert("Sorry, you can't enter.")
      window.location.href = "http://mylittlepony.hasbro.com/en-us";
    }
  }
  check();
}
