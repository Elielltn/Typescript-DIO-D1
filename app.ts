import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { PremiumAccount } from "./class/PremiumAccount";

const peopleJoao: PeopleAccount = new PeopleAccount(1, "João", 1);
console.log(peopleJoao.getName());
peopleJoao.deposit(50);
peopleJoao.withdraw(10);
peopleJoao.getBalance();
console.log(peopleJoao.validateStatus());
const companyDIO: CompanyAccount = new CompanyAccount("DIO", 1);
companyDIO.getLoan(1);
companyDIO.getBalance();
const premiumLucas: PremiumAccount = new PremiumAccount("Lucas", 2);
premiumLucas.getName()
premiumLucas.premiumDeposit(10)
premiumLucas.getBalance()
