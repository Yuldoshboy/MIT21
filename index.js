const Account = require("./account");
const calculate = require("./hisob");
const natija = calculate.multiply(80, 30);
console.log("Result:", natija );
console.log("==========================")
const natija1 = calculate.divide(80, 30);
console.log("Result:", natija1 );
console.log("==========================")
const natija2 = calculate.adding(80, 30);
console.log("Result:", natija2 );
console.log("==========================")
const natija3 = calculate.subtract(80, 30);
console.log("Result:", natija3 );

// NodeJS dagi wrapper element ichidagi syttaxlar haqida. Require va exports modullar qayerdan kelayotganini tekshiramz
console.log(require("module").wrapper);
console.log("==========================")
// Modullarni search qilishi va tekshirish fazasi-----    
//1)npm minstall moment --save  ===> bu faqat uzimiz turgan folder ichiga modulni ustanovka qiberadi!;  
//2) npm install momment --global ===> bu esa mashinamizga yani nodeni asosiy fileiga ustanovak qiladi va uni biz hamma proyektda foydalana olamiz.
console.log(arguments);

const account = require("./account.js");
const account_number = new Account("Jacob", 245000, 3021546774211);

account_number.makeDeposit(5000);
account_number.withdrawMoney(200000);
Account.tellMeAboutClass();
Account.tellMeTime();