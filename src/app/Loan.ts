export class Loan{
    constructor(
        public loanId:number,
        public loanCustomerNAme:string,
        public loanAmount:number,
        public rateOfInterest:number,
        public tenure:string,
        public dateOfLoan:number,
    ){}
}