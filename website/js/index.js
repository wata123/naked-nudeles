window.onload = function() {
  // alert("WARNING: AGES 18 AND OVER ONLY.");
  let response = window.prompt("What is your age?");

  function check() {
    if (Number(response) >= 18) {
      alert("Ok.");
    }
    else {
      alert("Sorry, you can't enter.")
      window.location.href = "error.html";
    }
  }
  check();

  let imagebox = document.getElementById("imagebox");

  //Generate animation boxes.
  function generate() {
    setTimeout(function() {
      requestID = requestAnimationFrame(generate);
      let div = document.createElement('div');
      div.className = "particle";
      let size = String(Math.random()*50) + "px";
      div.style.height = size;
      div.style.width = size;
      // div.style.color = "red";
      div.style.position = 'absolute';
      div.style.left = String(Math.random()*1000 + 100) + "px";
      div.style.top = String(Math.random()*1000 + 700) + "px";

      imagebox.appendChild(div);
    }, 1000/30);
    cancelAnimationFrame(requestID);
  }

    generate();
}
