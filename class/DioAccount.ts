export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance = this.balance + value;
      console.log(
        this.name + ", o valor R$" + value + " foi depositado na sua conta."
      );
    } else {
      throw new Error("Conta inválida");
    }
  };

  withdraw = (value: number): void => {
    if (this.validateStatus()) {
      if (value <= this.balance) {
        this.balance = this.balance - value;
        console.log(
          this.name + ", o saque de R$" + value + " foi efetuado com sucesso."
        );
      } else {
        console.log(this.name + ", você não possui essa quantia para saque.");
      }
    } else {
      throw new Error("Conta inválida");
    }
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
