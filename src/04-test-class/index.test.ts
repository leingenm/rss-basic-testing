// Uncomment the code below and write your tests
import {
  BankAccount,
  getBankAccount,
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
} from '.';

describe('BankAccount', () => {
  let bankAccount: BankAccount;

  beforeEach(() => {
    bankAccount = getBankAccount(100);
  });

  test('should create account with initial balance', () => {
    // Write your test here
    expect(bankAccount.getBalance()).toBe(100);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    // Write your test here
    expect(() => bankAccount.withdraw(200)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    // Write your test here
    const recipientBankAccount = getBankAccount(300);
    expect(() => bankAccount.transfer(200, recipientBankAccount)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', () => {
    // Write your test here
    const recipientBankAccount = bankAccount;
    expect(() => bankAccount.transfer(200, recipientBankAccount)).toThrow(
      TransferFailedError,
    );
  });

  test('should deposit money', () => {
    // Write your test here
    bankAccount.deposit(50);
    expect(bankAccount.getBalance()).toBe(150);
  });

  test('should withdraw money', () => {
    // Write your test here
    bankAccount.withdraw(50);
    expect(bankAccount.getBalance()).toBe(50);
  });

  test('should transfer money', () => {
    // Write your test here
    const recipientBankAccount = getBankAccount(500);
    bankAccount.transfer(50, recipientBankAccount);
    expect(bankAccount.getBalance()).toBe(50);
    expect(recipientBankAccount.getBalance()).toBe(550);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
    const mockFetchBalance = jest.spyOn(bankAccount, 'fetchBalance');
    mockFetchBalance.mockResolvedValue(70);

    expect(bankAccount.fetchBalance()).resolves.toBe(70);
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
    const mockFetchBalance = jest.spyOn(bankAccount, 'fetchBalance');
    mockFetchBalance.mockResolvedValue(80);

    await bankAccount.synchronizeBalance();
    expect(bankAccount.getBalance()).toBe(80);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
    const mockFetchBalance = jest.spyOn(bankAccount, 'fetchBalance');
    mockFetchBalance.mockResolvedValue(null);

    expect(bankAccount.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );
  });
});
