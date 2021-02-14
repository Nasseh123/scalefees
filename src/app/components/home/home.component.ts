import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalFees:number
  feesOneValue:number
  feesTwoValue: number;
  feesThreeValue: number;
  feesFourValue: number;
  feesFiveValue: number;
  feesFive: number;
  feesFour: number;
  feesThree: number;
  feesTwo: number;
  feesOne: number;
  standardfees: any;
  constructor() { }

  ngOnInit(): void {
  }
  calculate(value){
    console.log(value.target.value);
    value=value.target.value
    
    this.clearInputs()
    // HANDLING VALUE BELOW 5,000,000
    if (value<=5000000){
      // this.clearInputs()

      this.feesOne=(2/100)*value
      this.feesOneValue = value

      if (this.feesOne<35000){
        
        this.totalFees=35000
        this.standardfees=35000
        console.log('heree');
        
      }else{
        this.totalFees=this.feesOne
        }
    }
    // HANDLING VALUE OVER 5,000,000
    if (value >=5000001){
      
      // document.getElementById('totalvalue').innerHTML=''
      console.log('over');
      // // FIRST (KSH1 - KSH5,000,000)
      
      this.feesOne=(2/100)*5000000
      let new_value=value-5000000

      this.feesOneValue = 5000000

      if (new_value >=1){
        // FEEES TWO
        this.feesTwo=(1.5/100)*new_value
        this.feesTwoValue = new_value
        
        new_value=new_value-100000000
        if (new_value>=1){
          // FEEES THREEE
          this.feesThree=(1.25/100)*new_value
          this.feesThreeValue = new_value

          new_value=new_value-250000000
          if (new_value>=1){
            // feees four
            this.feesFour=(1/100)*new_value
            this.feesFourValue = new_value

            new_value=new_value-1000000000
            if (new_value>=1){
              // feees FIVE
              this.feesFive=(0.1)*new_value
              this.feesFiveValue = new_value

              new_value=new_value-1000000000
              this.totalFees=this.feesOne+this.feesTwo+this.feesThree+this.feesFour+this.feesFive
              // document.getElementById('totalvalue').innerHTML=this.totalFees

            }else{
              this.totalFees=this.feesOne+this.feesTwo+this.feesThree+this.feesFour
              // document.getElementById('totalvalue').innerHTML=this.totalFees
            }
          }
          else{
            this.totalFees=this.feesOne+this.feesTwo+this.feesThree
            // document.getElementById('totalvalue').innerHTML=this.totalFees
          }
        }else{
          this.totalFees=this.feesTwo+this.feesOne
          // document.getElementById('totalvalue').innerHTML=this.totalFees
        }
        console.log('feestwo');
        
      }else{
        this.totalFees=this.feesOne
        // document.getElementById('totalvalue').innerHTML=this.totalFees
      }
      
    }
  }
  clearInputs(){
    this.totalFees=null
    this.feesOneValue=null
    this.feesTwoValue=null
    this.feesThreeValue=null
    this.feesFourValue=null
    this.feesFiveValue=null
    this.feesFive=null
    this.feesFour=null
    this.feesThree=null
    this.feesTwo=null
    this.feesOne=null
  }
}
