function Major() {
	let onsearch = document.getElementById("leggo").value;
/* search for tables */
if (onsearch.includes("Tables") == true) {
	document.getElementById("subject").innerHTML = onsearch;
	document.getElementById("subject").style.display = "block";
}
if (onsearch.includes("Tables") == false) {
	document.getElementById("subject").style.display = "none";
}

/*search for chairs*/
if (onsearch.includes("Chairs") == true) {
	document.getElementById("subject").innerHTML = onsearch;
}



}
function Change(x) {
  x.style.backgroundColor = "white";
 
}

function ReverseChange(x) {
 x.style.backgroundColor = "lightgrey";
}
