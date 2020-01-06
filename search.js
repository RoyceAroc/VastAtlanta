function Major() {
	let onsea = document.getElementById("leggo").value;
	let onsearch = onsea.toUpperCase()
/* search for tables */
if (onsearch.includes("TABL") == true) {
	document.getElementById("subject").innerHTML = onsearch;
	document.getElementById("subject").style.display = "block";
document.getElementById("Search_Tables").style.display = "block";
}
if (onsearch.includes("TABL") == false) {
	document.getElementById("subject").style.display = "none";
	document.getElementById("Search_Tables").style.display = "none";
}

/* search for tables */
if (onsearch.includes("CHAI") == true) {

	document.getElementById("subject").innerHTML = onsearch;
	document.getElementById("subject").style.display = "block";
document.getElementById("Search_Chairs").style.display = "block";
}
if (onsearch.includes("CHAI") == false) {
	document.getElementById("subject").style.display = "none";
	document.getElementById("Search_Chairs").style.display = "none";
}
/* search for Concession Machine (2) */

if (onsearch.includes("MACH") == true & onsearch.includes("CONC") == true) {
	document.getElementById("subject").innerHTML = onsearch;
	document.getElementById("subject").style.display = "block";
document.getElementById("Search_Concession_Machine").style.display = "block";
}
if (onsearch.includes("MACH") == false & onsearch.includes("CONC") == false) {
	document.getElementById("subject").style.display = "none";
	document.getElementById("Search_Concession_Machine").style.display = "none";
}
/* search for Party Equipment (2) */

if (onsearch.includes("PART") == true & onsearch.includes("EQUI") == true) {
	
	document.getElementById("subject").innerHTML = onsearch;
	document.getElementById("subject").style.display = "block";
document.getElementById("Search_Party_Equipment").style.display = "block";
}
if (onsearch.includes("PART") == false & onsearch.includes("EQUI") == false) {
	document.getElementById("subject").style.display = "none";
	document.getElementById("Search_Party_Equipment").style.display = "none";
}
/* search for interactive Games*/

if (onsearch.includes("INTE") == true & onsearch.includes("GAME") == true) {
	document.getElementById("subject").innerHTML = onsearch;
	document.getElementById("subject").style.display = "block";
document.getElementById("Search_Interactive_Games").style.display = "block";
}
if (onsearch.includes("INTE") == false & onsearch.includes("GAME") == false) {
	document.getElementById("subject").style.display = "none";
	document.getElementById("Search_Interactive_Games").style.display = "none";
}
/* search for Bouncers*/

if (onsearch.includes("BOU") == true) {
	document.getElementById("subject").innerHTML = onsearch;
	document.getElementById("subject").style.display = "block";
document.getElementById("Search_Bouncers").style.display = "block";
}
if (onsearch.includes("BOU") == false ) {
	document.getElementById("subject").style.display = "none";
	document.getElementById("Search_Bouncers").style.display = "none";
}
/* search for Dry Slides*/

if (onsearch.includes("DR") == true & onsearch.includes("SL") == true) {

	document.getElementById("subject").innerHTML = onsearch;
	document.getElementById("subject").style.display = "block";
document.getElementById("Search_Dry_Slides").style.display = "block";
}
if (onsearch.includes("DR") == false & onsearch.includes("SL") == false) {
	document.getElementById("subject").style.display = "none";
	document.getElementById("Search_Dry_Slides").style.display = "none";
}

/* search for Dry Slides*/

if (onsearch.includes("WA") == true & onsearch.includes("SL") == true) {

	document.getElementById("subject").innerHTML = onsearch;
	document.getElementById("subject").style.display = "block";
document.getElementById("Search_Water_Slides").style.display = "block";
}
if (onsearch.includes("WA") == false & onsearch.includes("SL") == false) {

	document.getElementById("subject").style.display = "none";
	document.getElementById("Search_Water_Slides").style.display = "none";
}

}




function Change(x) {
  x.style.backgroundColor = "white";
 
}

function ReverseChange(x) {
 x.style.backgroundColor = "lightgrey";
}
