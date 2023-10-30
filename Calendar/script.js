const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => { 
    icon.addEventListener("click", () => {
        if(icon.id === "prev"){
            currMonth = currMonth - 1;
        }
        else if(icon.id === "next"){
            currMonth = currMonth + 1;
        }
        else{
            console.log("Working");
            showDateInputDialog();
        }
        if(currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear();
            currMonth = date.getMonth(); 
        } else {
            date = new Date();
        }
        renderCalendar();
    });

    showDateInputDialog = () => {
        const formatDate = prompt("Enter a Date (DD-MM-YYYY):");
        const format = formatDate.split("-");
        let len = format.length;
        const inputDate = format[len-1]+"-"+format[len-2]+"-"+format[len-3];
        if (inputDate) {
            const selectedDate = new Date(inputDate);
            if (!isNaN(selectedDate.getTime())) {
                // Update currentYear and currentMonth based on the selected date
                currYear = selectedDate.getFullYear();
                currMonth = selectedDate.getMonth();
                renderCalendar();
            } else {
                alert("Invalid date format. Please use DD-MM-YYYY.");
            }
        }
    };
});

