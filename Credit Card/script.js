//document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const cardNumberInput = document.querySelector(".card-num input");
  const cardNumberDisplay = document.querySelector(".number");
  const validThruInput = document.querySelector(".card-date input");
  const validThruDisplay = document.querySelector(".validity");
  const cardHolderNameInput = document.querySelector(".card-name input");
  const cardHolderNameDisplay = document.querySelector(".name");
  const cvvInput = document.querySelector(".card-cvv input");
  const cvvDisplay = document.querySelector(".cvv");

  container.addEventListener("click", () => {
        container.classList.toggle("is-flipped");//calling css defined class
   });

  cvvInput.addEventListener("click",() =>{
    container.classList.toggle("is-flipped");
  });

  cardNumberInput.addEventListener("input", function () { // for accessing this keyword using function type not arrow functions
    cardNumberDisplay.textContent = this.value
      ? formatCardNumber(this.value)
      : "#### #### #### ####";
  });

  validThruInput.addEventListener("input", function () {
        if(this.value.length===2 && event.inputType !== "deleteContentBackward"){
           this.value+="/";
        }
    validThruDisplay.textContent = this.value ? formatValidThru(this.value) : "00/00";
  });

  cardHolderNameInput.addEventListener("input", function () {
    cardHolderNameDisplay.textContent = this.value || "Card Holder Name";
  });

  cvvInput.addEventListener("input", function () {
        if(event.inputType==="click"){
           container.classList.toggle("is-flipped");//calling css defined class    
        }
    cvvDisplay.textContent = this.value || "000";
  });

  function formatCardNumber(value) {
    const normalizedValue = value.replace(/\s/g, "");
    const chunks = normalizedValue.match(/.{1,4}/g) || [];
    return chunks.join(" ");
  }

  function formatValidThru(value) {
    const normalizedValue = value.replace(/\s/g, "");
    const month = normalizedValue.slice(0, 2);
    const year = normalizedValue.slice(3, 5);
    return `${month}/${year}`;
  }      
//});
123456789