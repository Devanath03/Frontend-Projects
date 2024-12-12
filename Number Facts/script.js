let userInput = document.querySelector('.container .userInput');  
let fact = document.querySelector('.container .fact-box p');

function getFact(){
let number = userInput.value;      
const url = "http://numbersapi.com/";

 if(!number){
  fact.innerHTML = `Input field cannot be empty`;
  return;
 }

 fetch(url + number,{
    headers:{
      'x-requested-with': 'text/plain'
    }}).then(res => res.text()).then(data =>{
        fact.innerHTML = data;    
    })
}

userInput.addEventListener('keyup',(e)=>{
 if(e.key == "Enter"){
   getFact(); 
 }  123
})