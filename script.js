import adatok from "./data.json" with { "type" : "json" };

function versenyekKiirasa()
{
  let versenyek = adatok.Accordion.versenyek;
  let versenyekDiv = document.getElementById("accordionVerseny");

  versenyek.forEach(verseny => {
    if(verseny["id"] == versenyek.length) {
      versenyekDiv.innerHTML += "<h5>"+ verseny["nev"] +"</h5>";
      versenyekDiv.innerHTML += "<p>Rendező(k): "+ verseny["rendezok"] +"</p>";
      versenyekDiv.innerHTML += "<p>Országos/Helyi: "+ verseny["fajta"] +"</p>";
    }

    else {
      versenyekDiv.innerHTML += "<h5>"+ verseny["nev"] +"</h5>";
      versenyekDiv.innerHTML += "<p>Rendező(k): "+ verseny["rendezok"] +"</p>";
      versenyekDiv.innerHTML += "<p>"+ verseny["fajta"] +"</p><hr>";
    }
  });
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function showModal(btnId){
  for (const dia of adatok.Carousel) {
    if(dia["id"] == btnId) {
      document.getElementById('modalTitle').innerText = dia["title"];
      document.getElementById('modalBody').innerHTML = "<div class='row'><div class='col-5'><h4 class='mx-auto'>Tantárgyak</h4><hr><div>"+ dia["targyak"].join(",\ ") +"</div></div><div class='col-5'><h4 class='mx-auto'>Technológiák</h4><hr><div>"+ dia["technologiak"].join(",\ ") +"</div></div></div>";
  }
  }


  var modal = new bootstrap.Modal(document.getElementById('modal'));
  //modal.show();
  modal.show();
}


let buttons = document.querySelectorAll("button.btn-warning");

for(let i = 1; i <= buttons.length; i++)
{
  buttons[i-1].addEventListener("click", () => {
    showModal(i);
  })
}

window.addEventListener("load", () => {
    versenyekKiirasa();
})