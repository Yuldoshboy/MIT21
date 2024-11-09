const moment = require("moment");

class Account {
    #amount
    #accound_id

    constructor(name, amount, accound_id) {
        this.name = name;
        this.#amount = amount;
        this.#accound_id = accound_id;
    }

    tellMeAmount() {
        console.log(`Sizning hisobingizdagi qoldiq: ${this.#amount}$`);
        return this.#amount;
    }

    withdrawMoney(amount) {
        if(this.#amount > amount) {
            this.#amount -= amount;
            console.log(`Sizning hisobingizdan soat ${moment().format("HH:mm:ss")} da ${amount} yechildi va hisobingizdagi qoldiq: ${this.#amount}`);
        }
        else {
            console.log(`Sizning hisobingizdagii mablag' yetarli emas!`);
        }            
    }

    makeDeposit(amount) {
        this.#amount += amount;
        console.log(`Sizning hisobingiz soat ${moment().format("HH:mm:ss")} da ${amount}$ ga to'ldirildi va hozirda sizning hisobingizdagi mablag': ${this.#amount}$`);
    }

    giveMeDetails() {
        console.log(`Salom ${this.name}, sizning hisob raqamingiz: ${this.#accound_id} va hozirda sizning hisobda mavjud bo'lgan mablag': ${this.#amount}$`);
    }

    static tellMeAboutClass() {
        console.log(`Bu class hisob raqamlarni yaratish uchun xizmat qiladi!`);
    }

    static tellMeTime() {
        console.log(`Hozirgi vaqt: ${moment().format("YYYY-MM-DD HH:mm:ss")}`);
    }
}

module.exports = Account;