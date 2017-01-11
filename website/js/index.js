window.onload = function() {
  // alert("WARNING: AGES 18 AND OVER ONLY.");


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

  var radioInputs = document.querySelectorAll('input');
  for(var i = 0; i < radioInputs.length; i++) {
    radioInputs[i].onclick = function () {
      var imageRatingId = this.parentNode.parentNode.parentNode.id;
      $.ajax({
        type: 'GET',
        url: '/rating/' + imageRatingId + '/' + this.value,
        success: function (data) {
          $('#value-' + imageRatingId).text(' ' + data);
        },
        error: function () {
          console.log('did not work');
        }
      });
    };
  }


    // generate();
}
