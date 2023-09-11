//javascriptpro_
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

userInput.addEventListener('keyup',(e)=>{
 if(e.target.value != '' && e.key == "Enter"){
   getFact();     
 }  
})

getFact();
