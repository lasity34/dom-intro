

const billTypeTextEl = document.querySelector(".billTypeText");
const addBillToBtnEl = document.querySelector(".addBillToBtn");
const callTotalStr = document.querySelector(".callTotalOne");
const smsTotalStr = document.querySelector(".smsTotalOne")
const billTotalStr = document.querySelector(".totalOne");


let totalSms = 0;
let totalCall = 0;


    function calculateTextBill() {

       const billTypeText = billTypeTextEl.value

        let totalBill = 0;

       if (billTypeText.includes("sms")) {
            totalSms += 0.75
       } else if (billTypeText.includes("call")) {
            totalCall += 2.75
       }

       callTotalStr.innerHTML = totalSms.toFixed(2);
       smsTotalStr.innerHTML = totalCall.toFixed(2);
       total = callTotalStr + smsTotalStr
       billTotalStr.innerHTML = 


    }