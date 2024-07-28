document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container"),
    inputText = document.getElementById("inputText"),
    findInput = document.getElementById("findInput"),
    replaceInput = document.getElementById("replaceInput"),
    replaceButton = document.getElementById("replaceButton"),
    countDisplay = document.getElementById("countDisplay");

    replaceButton.addEventListener("click", () => {
        const find = findInput.value;
        const replaceWith = replaceInput.value;
        let text = inputText.value;

        if(find && text){
            const regex = new RegExp(find, "gi");
            const relpacedText = text.replace(regex, replaceWith);
            const count = (text.match(regex) || []).length;
            
            inputText.value = relpacedText;
            countDisplay.textContent = `Replaced ${count} occurences...`;
            container.classList.add("active");
        }
    });

    findInput.addEventListener("input", () =>{
        const find = findInput.value;
        const text = inputText.value;

        if(find && text){
            const regex = new RegExp(find, "gi");
            const count = (text.match(regex) || []).length;
            countDisplay.textContent = `${count} occurences found...`;
            container.classList.add("active");
        }else{
            countDisplay.textContent = `No occurences found...`;
            container.classList.remove("active");
            countDisplay.textContent = "";
        }
    });
});12345678901