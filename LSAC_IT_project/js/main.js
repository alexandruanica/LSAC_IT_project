function popForm() {

  var materie, titlu;
  var getID = document.getElementById("warn");
  if(getID != null) {
    getID.remove();
  }


  materie = document.getElementById("materie").value;
  titlu = document.getElementById("titlu").value;


  if(materie == "Alege materia") {
    var warn = document.createElement("p");
    warn.id = "warn";
    myform = document.getElementById("my_popform");
    warn.innerHTML = "Alege o materie";
    myform.appendChild(warn);
  }
else
  if(titlu.length == 0) {
    var warn = document.createElement("p");
    warn.id = "warn";
    myform = document.getElementById("my_popform");
    warn.innerHTML = "Provide a valid title";
    myform.appendChild(warn);
  }
  else {
    var post_titlu = document.createElement("p");
    post_titlu.id = "post_titlu"
    var post_materie = document.createElement("p");
    post_materie.id = "post_materie"
    var div = document.createElement("div");
    div.classList.add("submission");
    div.classList.add("text-left");
    div.classList.add("ml-3");
    div.classList.add("container");

    post_materie.innerHTML = "(" + materie + ")";
    post_titlu.innerHTML = titlu;
    div.appendChild(post_titlu);
    div.appendChild(post_materie);
    var postIt = document.getElementById("subbb");
    postIt.appendChild(div);
  }
}

function formReset() {
  var reseter = document.getElementById("materie");
  reseter.remove();
  reseter = document.createElement("select");
  reseter.id = "materie";
  reseter.classList.add("form-control");
  reseter.attributes.name = "materie";
  reseter.attributes.required = "required";
  var selector = document.getElementById("selector");
  selector.appendChild(reseter);
  }

function formDrop() {
  const subjects = ["Alege materia", "PC", "USO", "Mate1", "Mate2"];
  var option;
  var i;
  for(i = 0; i < subjects.length; i++) {
    option = document.createElement("option");
    option.innerHTML = subjects[i];
    option.id = "optiune";
    var add_here = document.getElementById("materie");
    add_here.appendChild(option);
  }
}

formDrop();