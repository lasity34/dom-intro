// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

const radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");

// "input[name='billItemType']:checked"
const callTotalTwoElement = document.querySelector(".callTotalTwo");
const smsTotalTwoElement = document.querySelector(".smsTotalTwo");
const totalTwoElement = document.querySelector(".totalTwo");

let smsTotalRadio = 0;
let callTotalRadio = 0;
let radioTotal = 0;
function calculateRadioBtn() {
  const checkedRadioBtnElement = document.querySelector(
    "input[name='billItemType']:checked"
  );

  if (checkedRadioBtnElement) {
    const billItemType = checkedRadioBtnElement.value;

    if (billItemType === "call") {
      callTotalRadio += 2.75;
    } else if (billItemType === "sms") {
      smsTotalRadio += 0.75;
    }
  }

  radioTotal = callTotalRadio + smsTotalRadio;

  updateRadioTemplate();

  const radioItem = document.querySelectorAll(".radioItem");

  radioItem[radioItem.length - 1].classList.remove("danger");
  radioItem[radioItem.length - 1].classList.remove("warning");

  if (radioTotal > 50) {
    const lastChild = radioItem[radioItem.length - 1];
    if (lastChild) {
      lastChild.classList.add("danger");
    }
  } else if (radioTotal > 30) {
    const lastChild = radioItem[radioItem.length - 1];
    if (lastChild) {
      lastChild.classList.add("warning");
    }
  }
}

function updateRadioTemplate() {
  const templateSource = document.querySelector("#radioTemplate").innerHTML;
  const userTemplate = Handlebars.compile(templateSource);
  const radioCostDataElem = document.querySelector(".radioTotals");
  const costData = {
    differentCosts: [
      { name: "Call", total: callTotalRadio.toFixed(2) },
      {
        name: "Sms",
        total: smsTotalRadio.toFixed(2),
      },
      {
        name: "",
        total: radioTotal.toFixed(2),
      },
    ],
  };

  const userDataHTML = userTemplate(costData);
  radioCostDataElem.innerHTML = userDataHTML;
}

document.addEventListener("DOMContentLoaded", function () {
  updateRadioTemplate();
});

radioBillAddBtnElement.addEventListener("click", calculateRadioBtn);
