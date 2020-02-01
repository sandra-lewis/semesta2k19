function openAbout() {
    document.getElementById('about').style.display = "block";
}

function closeAbout() {
    document.getElementById('about').style.display = "none";
}


function openContact() {
    document.getElementById('contact').style.display = "block";
}

function closeContact() {
    document.getElementById('contact').style.display = "none";
}


function openDate() {
    document.getElementById('date').style.display = "block";
}

function closeDate() {
    document.getElementById('date').style.display = "none";
}


function openVenue() {
    document.getElementById('venue').style.display = "block";
}

function closeVenue() {
    document.getElementById('venue').style.display = "none";
}


window.onclick = function(event) {
    if (event.target == about) {
        document.getElementById('about').style.display = "none";
    }
	else  if (event.target == contact) {
			document.getElementById('contact').style.display = "none";
		}
		else  if (event.target == date) {
				document.getElementById('date').style.display = "none";
			}
			else  if (event.target == venue) {
					document.getElementById('venue').style.display = "none";
				}
}