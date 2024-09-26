const htmlcode = document.querySelector("#html");
const csscode = document.querySelector("#css");
const jscode = document.querySelector("#js");
const output = document.querySelector("#output");

function run() {

    // Storing the data in Local Storage
    localStorage.setItem('htmlcode', htmlcode.value);
    localStorage.setItem('csscode', csscode.value);
    localStorage.setItem('jscode', jscode.value);

    // executing & Evaluating HTML, CSS & JS code
    output.contentDocument.body.innerHTML = `<style>${localStorage.csscode}</style>` + localStorage.htmlcode;
    output.contentWindow.eval(localStorage.jscode);
}

// If user type anything in the respective code element then it automatically runs and it will show in the output
htmlcode.addEventListener("keyup",()=>{run()})
csscode.addEventListener("keyup",()=>{run()})
jscode.addEventListener("keyup",()=>{run()})

// Accessing data stored in Local Storage.
htmlcode.value = localStorage.htmlcode;
csscode.value = localStorage.csscode;
jscode.value = localStorage.jscode;1234567890