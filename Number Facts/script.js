let userInput = document.querySelector('.container .userInput');  
let fact = document.querySelector('.container .fact-box p');

let getFact =()=>{
let number = userInput.value;      
 const url = "http://numbersapi.com/";
 fetch(url + number,{
    headers:{
      'x-requested-with': 'text/plain'
    }}).then(res => res.text()).then(data =>{
        fact.innerHTML = data;    
    })
}

/*userInput.addEventListener('onclick',(e)=>{
 if(e.key == "Enter"){
   getFact();     
 }  
})
getFact();