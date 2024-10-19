import { DioAccount } from "./DioAccount";

export class PremiumAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  premiumDeposit = (value: number): void => {
    if (this.validateStatus()) {
      let finalValue = value + 10;
      this.deposit(finalValue);
    } else {
      throw new Error("Conta inválida");
    }
  };
}
