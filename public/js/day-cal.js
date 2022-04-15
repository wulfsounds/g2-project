// Global Variables
let currentDate = moment().format("LL");
let currentTime = moment().format("LT");
let jumbo = $(".jumbotron");
let hour = $("#time");
let dayTrip = getLocal();
let btnIdx = 0;
// let appt = document.querySelectorAll('#textarea') // added for debugging

// Display Current Date and Time
$("h2").text(`${currentDate} ${currentTime}`);

// Activate planner and update with local storage  // DEBUG: #textarea is clearing on page refresh
$(".container").on("click", ".saveBtn", function () {
	getLocal();
	btnIdx = $(this).index(".saveBtn");

	var textContent = $(this).siblings(".text").val();
	dayTrip[btnIdx] = textContent;
	
	//Breakpoints


	pushLocal();
});

// Takes the call data, converts objects to string; push to local storage
function pushLocal() {
	textString = JSON.stringify(dayTrip);
	localStorage.setItem("appointment", textString);
}

// Recieve call data from local storage; assigns it to the description.
function getLocal() {
	let localItems = localStorage.getItem("appointment");
	if (localItems === null) {
		localItems = Array(9).fill("");
	} else {
		localItems = JSON.parse(localItems);
	}
	return localItems;
}

// let localItems = localStorage.getItem('appointment') // added for debugging
// appt.values = localStorage.getItem('appointment') // added for debugging

// Colorizes the container based on the time of day.
$(".container")
	.children()
	.each((i, e) => {
		// Current time based on a 24-hour clock
		let currentTime = moment().format("H");
		// past time
		if (i + 9 < currentTime) {
			$(e).css("background-color", "#8ce4f8");
		}
		// future time
		else if (i + 9 > currentTime) {
			$(e).css("background-color", "#41a436");
		}
		// present time
		else {
			$(e).css("background-color", "#fff9cc");
		}

		// Switch current day theme to night

		// Variables for Night Theme
	});

$(".container")
	.children()
	.find("#textarea")
	.each((i, e) => $(e).val(dayTrip[i]));
