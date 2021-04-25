

function printPrice() {
 var movie = document.getElementById("movie").value;
 var name = document.getElementById("textbox").value;
 var price = getRBtnName('tickets') * 1;
 var quantity = document.getElementById("quantity").value * 1;
 var total = 0;
 var sentence = "";
 for (var i = 1; i<=quantity; i++) {
  sentence += name + " purchased ticket \"";
  sentence += movie + "\" for Rs";
    
  sentence += price;
  total += price;
  sentence += "<br>";
 }
 sentence += 'Total cost: Rs'+total;
 document.getElementById("inserts").innerHTML=sentence;

}

function getRBtnName(GrpName) {
  var sel = document.getElementsByName(GrpName);
  var fnd = -1;
  var str = '';
  for (var i=0; i<sel.length; i++) {
    if (sel[i].checked == true) { str = sel[i].value;  fnd = i; }
  }


  return str;
}