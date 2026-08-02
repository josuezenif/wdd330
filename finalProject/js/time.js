const fullYear = document.querySelector('#fullyear');
const year = new Date().getFullYear();

fullYear.innerHTML = year;

// LAST MODIFIED CODE
const last_Modified = document.querySelector('#lastModified');
last_Modified.innerHTML = "Last Modified: " + document.lastModified;