import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanServiceService {

  constructor() { }
    public loans=[];
    addLoan(loan){
      this.loans.push(loan)
      console.log(this.loans)
    }
    getAllLoan(){
      return this.loans
    }
    
    
    deleteLoan(loanId){
      for(let i=0;i<this.loans.length;i++){
        if(this.loans[i].loanId==loanId){
           this.loans.splice(i,1);
    }
  
      }
    }
  }