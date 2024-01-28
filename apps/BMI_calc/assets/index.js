const btnEl = document.getElementById('btn');
const bmiInputEl = document.getElementById('bmi-result');
const weightConditionEl = document.getElementById('weight-condition');

const calcBmi = () =>{
    const heightVal = document.getElementById ('height').value / 100;
    const weightVal = document.getElementById("weight").value;
    console.log (heightVal, weightVal)
    const Bmi = weightVal / (heightVal * heightVal)
    // console.log(Bmi);
    bmiInputEl.value = Bmi;

    if (Bmi < 18.5){
        weightConditionEl.innerText = "You are THIN ooh"
    }else if (Bmi >=18.5 && Bmi <= 24.9){
         weightConditionEl.innerText = "Fine body weight naah"
    }else if (Bmi >=25 && Bmi <=29.9){
         weightConditionEl.innerText = "Overweight"
    }else if (Bmi >=30 ){
         weightConditionEl.innerText = "Obesity"
    }

}

btnEl.addEventListener('click', calcBmi)