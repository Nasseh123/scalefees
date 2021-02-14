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
    let initialValue=value
    this.clearInputs()
    // HANDLING VALUE BELOW 5,000,000
    // if (value<=5000000){
    //   // this.clearInputs()

    //   this.feesOne=(2/100)*value
    //   this.feesOneValue = value

    //   if (this.feesOne<35000){
        
    //     this.totalFees=35000
    //     this.standardfees=35000
    //     console.log('heree');
        
    //   }else{
    //     this.totalFees=this.feesOne
    //     }
    // }

    // // HANDLING VALUE OVER 5,000,000
    // if (value >=5000001){
      
    //   // document.getElementById('totalvalue').innerHTML=''
    //   console.log('over');
    //   // // FIRST (KSH1 - KSH5,000,000)
      
    //   this.feesOne=(2/100)*5000000
    //   let new_value=value-5000000

    //   this.feesOneValue = 5000000

    //   if (new_value >=1){
    //     // FEEES TWO
    //     console.log(new_value);
        
    //     this.feesTwo=(1.5/100)*new_value
    //     this.feesTwoValue = new_value
        
    //     new_value=new_value-100000000
    //     if (new_value>=1){
    //       // FEEES THREEE
    //       this.feesThree=(1.25/100)*new_value
    //       this.feesThreeValue = new_value

    //       new_value=new_value-250000000

    //       if (new_value>=1){
    //         // feees four
    //         this.feesFour=(1.5/100)*new_value
    //         this.feesFourValue = new_value

    //         new_value=new_value-1000000000
    //         if (new_value>=1){
    //           // feees FIVE
    //           this.feesFive=(1.25)*new_value
    //           this.feesFiveValue = new_value

    //           new_value=new_value-1000000000
    //           this.totalFees=this.feesOne+this.feesTwo+this.feesThree+this.feesFour+this.feesFive
    //           // document.getElementById('totalvalue').innerHTML=this.totalFees

    //         }else{
    //           this.totalFees=this.feesOne+this.feesTwo+this.feesThree+this.feesFour
    //           // document.getElementById('totalvalue').innerHTML=this.totalFees
    //         }
    //       }
    //       else{
    //         this.totalFees=this.feesOne+this.feesTwo+this.feesThree
    //         // document.getElementById('totalvalue').innerHTML=this.totalFees
    //       }
    //     }else{
    //       this.totalFees=this.feesTwo+this.feesOne
    //       // document.getElementById('totalvalue').innerHTML=this.totalFees
    //     }
    //     console.log('feestwo');
        
    //   }else{
    //     this.totalFees=this.feesOne
    //     // document.getElementById('totalvalue').innerHTML=this.totalFees
    //   }
      
    // }

    if (initialValue >=0 && initialValue<=5000000){
      this.clearInputs()
      console.log( 'BETWEEN 0-5000000');
      let feesoneVal=(initialValue-5000000)
      this.feesOne=(2/100) * initialValue
      this.feesOneValue = 5000000
      if (this.feesOne<35000){
        this.standardfees=35000
        this.totalFees=35000
      }else{
        this.totalFees=this.feesOne
      }
      
    }
    if (initialValue >=5000001 && initialValue<=100000000){
      this.clearInputs()
      console.log('BETWEEN 100000000');
      this.feesOne=(2/100) * 5000000
      this.feesOneValue = 5000000

      let feesTwoVal=(initialValue-5000000)
      this.feesTwo=(1.5/100) * feesTwoVal
      this.feesTwoValue=feesTwoVal
      this.totalFees = this.feesOne + this.feesTwo

      
    }
    if (initialValue >=100000001 && initialValue <=250000000){
      this.clearInputs()
      console.log(' BETWEEN 250000000');
      this.feesOne=(2/100) * 5000000
      this.feesOneValue = 5000000

      let feesTwoVal=(100000000-5000000)
      this.feesTwo=(1.5/100) * feesTwoVal
      this.feesTwoValue=feesTwoVal
      
      let feesThreeVal = (initialValue - 100000000)
      this.feesThree = (1.25/100 ) * feesThreeVal
      this.totalFees = this.feesOne + this.feesTwo + this.feesThree
      this.feesThreeValue = feesThreeVal
    }
    if (initialValue >=250000001 && initialValue <=1000000000){
      this.clearInputs()
      console.log(' BETWEEN 1000000000');
      this.feesOne=(2/100) * 5000000
      this.feesOneValue = 5000000

      let feesTwoVal=(100000000-5000000)
      this.feesTwo=(1.5/100) * feesTwoVal
      this.feesTwoValue=feesTwoVal
      
      let feesThreeVal = (250000000 - 100000000)
      this.feesThree = (1.25/100 ) * feesThreeVal
      this.feesThreeValue = feesThreeVal
      
      let feesFourVal = (initialValue - 250000000)
      this.feesFour = (1/100 ) * feesFourVal
      this.totalFees = this.feesOne + this.feesTwo + this.feesThree + this.feesFour
      this.feesFourValue = feesFourVal

    }
    if (initialValue >=1000000001){
      this.clearInputs()
      console.log(' over 1000000000');
      this.feesOne=(2/100) * 5000000
      this.feesOneValue = 5000000

      let feesTwoVal=(100000000-5000000)
      this.feesTwo=(1.5/100) * feesTwoVal
      this.feesTwoValue=feesTwoVal
      
      let feesThreeVal = (250000000 - 100000000)
      this.feesThree = (1.25/100 ) * feesThreeVal
      this.feesThreeValue = feesThreeVal
      
      let feesFourVal = (1000000000 - 250000000)
      this.feesFour = (1/100 ) * feesFourVal
      this.feesFourValue = feesFourVal

      let feesFiveVal = initialValue - 1000000000
      this.feesFive = (0.1/100 ) * feesFiveVal
      this.totalFees = this.feesOne + this.feesTwo + this.feesThree + this.feesFour +this.feesFive
      this.feesFiveValue = feesFiveVal

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
    this.standardfees=null
  }
}
