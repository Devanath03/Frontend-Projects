const age = document.getElementById("age");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const male = document.getElementById("m");
const female = document.getElementById("f");
const form = document.getElementById("form");

function validateForm(){
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    alert("All fields are required!");
    document.getElementById("submit").removeEventListener("click", countBmi);
  }else{
    countBmi();
  }
}
document.getElementById("submit").addEventListener("click", validateForm);

function countBmi(){
  let p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }
  form.reset();
  let bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  if(bmi<18.5){
    result = 'Underweight';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Healthy';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Overweight';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'Obese';
     }else if(35<=bmi){
    result = 'Extremely obese';
     }
  
  let h1 = document.createElement("h1");
  let h2 = document.createElement("h2");

  let t = document.createTextNode(result);
  let b = document.createTextNode('BMI: ');
  let r = document.createTextNode(parseFloat(bmi).toFixed(2));
  
  h1.appendChild(t);
  h2.appendChild(b);
  h2.appendChild(r);
  
  document.body.appendChild(h1);
  document.body.appendChild(h2);
  document.getElementById("submit").removeEventListener("click", countBmi);
  document.getElementById("submit").removeEventListener("click", validateForm);
}
document.getElementById("submit").addEventListener("click", countBmi);
12345678