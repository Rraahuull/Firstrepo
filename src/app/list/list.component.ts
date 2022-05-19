import { Component, OnInit } from '@angular/core';
import {  LoanServiceService } from '../loanService.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

 constructor(private ls:LoanServiceService) { }
  public loans=[];
  ngOnInit() {
    this.loans=this.ls.getAllLoan();
  }

}
