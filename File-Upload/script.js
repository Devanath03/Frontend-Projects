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

        //Creating left side type of the file
        const leftElem = document.createElement("div");
        leftElem.classList.add("left");
        const fileTypeElem = document.createElement("span");
        fileTypeElem.classList.add("filetype");
        fileTypeElem.innerHTML = fileType;
        leftElem.append(fileTypeElem);
        const filetitleElem = document.createElement("h3");
        filetitleElem.innerHTML = fileName;
        leftElem.append(filetitleElem);
        showfileboxElem.append(leftElem);
        const rightElem = document.createElement("div");
        rightElem.classList.add("right");
        showfileboxElem.append(rightElem);
        const crossElem = document.createElement("span");
        crossElem.innerHTML = "&#215;";
        rightElem.append(crossElem);
        filewrapper.append(showfileboxElem);

        crossElem.addEventListener("click", () => {
            filewrapper.removeChild(showfileboxElem);
        })
    }
})