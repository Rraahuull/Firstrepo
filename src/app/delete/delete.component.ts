import { Component, OnInit } from '@angular/core';
import {  LoanServiceService } from '../loanService.service';
import { Loan } from '../Loan';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private ls:LoanServiceService) { }

  ngOnInit() {
  }
  delete(loanId){
    this.ls.deleteLoan(loanId)
}
}
