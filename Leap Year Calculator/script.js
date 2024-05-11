let result = document.getElementById("result");
let btn = document.getElementById("get-leap-years");

//Get Leap years when the button is clicked
btn.addEventListener("click", () => {
  //Get values from the input fields
  //Number() converts string value to number
  let startYear = Number(document.getElementById("start-year").value);
  let endYear = Number(document.getElementById("end-year").value);

  //If both start and end year are invalid
  if (
    (startYear < 1582 || startYear > 2999) &&
    (endYear < 1582 || endYear > 2999)
  ) {
    result.innerHTML = `<b>The start year and end year should be greater than 1581 and less than 3000.</b>`;
  }

  //If start year is greater than end year
  else if (startYear > endYear) {
    result.innerHTML = `<b>End year should be greater than the start year.</b>`;
  }

  //If start year is invalid
  else if (startYear < 1582 || startYear > 2999) {
    result.innerHTML = `<b>The start year should be greater than 1581 and less than 3000.</b>`;
  }

  //If end year is invalid
  else if (endYear < 1582 || endYear > 2999) {
    result.innerHTML = `<b>The end year should be greater than 1581 and less than 3000.</b>`;
  }

  //If both start and end years are valid
  else {
    //Empty array to store the leap years
    let leapYears = [];
    for (let i = startYear; i <= endYear; i++) {
      //Determine if a year is a leap year
      //If true push it into leapYears[]

      if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
        leapYears.push(i);
      }
    }
    //Display leap years in result div
    //toString() returns a string with comma seperated values
    //Use combo of split() and join() to replace ',' with ', '
    result.innerHTML = `<b>There are ${
      leapYears.length
    } leap years between ${startYear} & ${endYear}.</b><span>${leapYears
      .toString()
      .split(",")
      .join(", ")}</span>`;
  }
});12345678901