import { Component, OnInit } from '@angular/core';
import {  LoanServiceService } from '../loanService.service';
import { Loan } from '../Loan';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

   constructor(private ls:LoanServiceService) { }

  public loan = new Loan(0,"",0,0,"",0);

  ngOnInit() {

  }

  add(){

    let loann=new Loan(0,"",0,0,"",0);

    loann.loanId=this.loan.loanId;

    loann.loanCustomerNAme=this.loan.loanCustomerNAme;

   loann.loanAmount=this.loan.loanAmount;

    loann.rateOfInterest=this.loan.rateOfInterest;


  loann.tenure=this.loan.tenure;
loann.dateOfLoan=this.loan.dateOfLoan;    

    this.ls.addLoan(loann);

 }

}
