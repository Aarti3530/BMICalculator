import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {

    height = ''
    weight = ''
    bmiValue = ''
    result = ''

    inputHandler(event){
        // to ways

        const{name, value} = event.target
        if(name === 'height'){
            this.height = value
        }
        if(name === 'weight'){
            this.weight = value
        }

        //this[name] = event.target.value;
    }

    submitHandler(event){
        event.preventDefault();
        console.log('Height'+this.height)
        console.log('Weight'+this.weight)
        this.calculate()
    }

    calculate(){
        // BMI = weight(kg)/height (m) * height (m)
        let height = Number(this.height)/100
        let weight = Number(this.weight)

        let bmi = Number(this.weight) / (height * height)
        this.bmiValue = Number(bmi.toFixed())
        console.log('Answer '+ this.bmiValue)

        if(this.bmiValue < 18.5){
            this.result = 'Underweight'
        }
        else if(this.bmiValue >= 18.5 && this.bmiValue < 25){
            this.result = 'Healthy'
        }
        else if(this.bmiValue >= 25 && this.bmiValue < 30){
            this.result = 'Overweight'
        }
        else if(this.bmiValue > 30){
            this.result = 'Obese'
        }

        console.log('Value'+this.bmiValue)
        console.log('result'+this.result)
    }

    recalculate(){
        this.height = ''
        this.weight = ''
        this.bmiValue = ''
        this.result = ''
    }
}