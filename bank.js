var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(accid, names, balance) {
        this.accid = accid;
        this.names = names;
        this.balance = balance;
    }
    Account.prototype.disp = function () {
        return this.balance;
    };
    return Account;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(accid, names, balance, interest) {
        var _this = _super.call(this, accid, names, balance) || this;
        _this.interest = interest;
        return _this;
    }
    SavingsAccount.prototype.dispp = function () {
        return this.balance;
    };
    return SavingsAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(accid, names, balance, cashcredit) {
        var _this = _super.call(this, accid, names, balance) || this;
        _this.cashcredit = cashcredit;
        return _this;
    }
    CurrentAccount.prototype.disppp = function () {
        return this.cashcredit;
    };
    return CurrentAccount;
}(Account));
function total() {
    var savacc = new SavingsAccount(10, "Sanket", 100, 10);
    var curracc = new CurrentAccount(10, "Sanket", 100, 10);
    var sum = savacc.dispp() + curracc.disppp();
    document.write(" The sum  of money in account is : " + sum);
    console.log(sum);
}
total();
