// For years
let selectYear = document.getElementById("yearSelect"); // Assuming the ID of the select element for years is "yearSelect"

for (let year = 1900; year <= 2024; year++) {
  let option = document.createElement("option");
  option.value = year;
  option.text = year;
  selectYear.appendChild(option);
}

// For days
let selectDay = document.getElementById("dias");

for (let i = 1; i <= 31; i++) {
  let option = document.createElement("option");
  option.value = i;
  option.text = i;
  selectDay.appendChild(option);
}