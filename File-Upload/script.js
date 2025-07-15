window.addEventListener("load", () => {
    const input = document.getElementById("upload");
    const filewrapper = document.getElementById("filewrapper");
    
    input.addEventListener("change", (e) => {
        let fileName = e.target.files[0].name;
        let fileType = e.target.value.split(".").pop();
        console.log(fileName);
        console.log(fileType);

        fileshow(fileName, fileType);
    })

    const fileshow = (fileName, fileType) => {
        
         //For creating a new div for file-uploading 
        const showfileboxElem = document.createElement("div");
        showfileboxElem.classList.add("showfilebox");

        /*Creating left side type of the file 
        const leftElem = document.createElement("div"); 
        leftElem.classList.add("left"); 

        //Creating span element for adding it inside div 
        const fileTypeElem = document.createElement("span"); 
        fileTypeElem.classList.add("filetype"); 
        fileTypeElem.innerHTML = fileType; 
        leftElem.append(fileTypeElem);

        //Creating h3 element for indcating title name
        const filetitleElem = document.createElement("h3");
        filetitleElem.innerHTML = fileName;
        leftElem.append(filetitleElem);

        //Appending entire left element to the created div file-uploading
        showfileboxElem.append(leftElem);

        //Creating div in right side for cross mark
        const rightElem = document.createElement("div");
        rightElem.classList.add("right");
        showfileboxElem.append(rightElem);
        
        //Creating span for cross symbol
        const crossElem = document.createElement("span");
        crossElem.innerHTML = "&#215;";
        rightElem.append(crossElem);*/

        showfileboxElem.innerHTML = `
            <div class="left">
                <span class="filetype">${fileType}</span>
                <h3>${fileName}</h3>
            </div>
            <div class="right">
                <span>&#215;</span>
            </div>
        `;
        filewrapper.appendChild(showfileboxElem);

        //for removing the added file
        const crossElem = showfileboxElem.querySelector(".right span");
        crossElem.addEventListener("click", () => {
            filewrapper.removeChild(showfileboxElem);
        });
    }12
});