const BASE_URL = "https://v6.exchangerate-api.com/v6/dda3ca722fb236a1506ddbe3/latest";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }
    
    const URL = `${BASE_URL}/${fromCurr.value}`;
    let response = await fetch(URL);
    let data = await response.json();
    
    if (data.result === "success") {
        let rate = data.conversion_rates[toCurr.value];
        let finalAmount = amtVal * rate;
        msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
    } else {
        msg.innerText = "Failed to retrieve data";
    }
};

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

window.addEventListener("load", () => {
   updateExchangeRate();
});



// // Base URL for the currency API
// const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

// // Selecting necessary DOM elements
// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// // Populate dropdown options from countryList
// for (let select of dropdowns) {
//     for (let currCode in countryList) {
//         let newOption = document.createElement("option");
//         newOption.innerText = currCode;
//         newOption.value = currCode;
//         // Set default selected currencies: USD for "from" and INR for "to"
//         if (select.name === "from" && currCode === "USD") {
//             newOption.selected = "selected";
//         } else if (select.name === "to" && currCode === "INR") {
//             newOption.selected = "selected";
//         }
//         select.append(newOption);
//     }
//     // Attach event listener to update flags when currency is changed
//     select.addEventListener("change", (evt) => {
//         updateFlag(evt.target);
//     });
// }

// // Fetch and update the exchange rate
// const updateExchangeRate = async () => {
//     let amount = document.querySelector(".amount input");
//     let amtVal = amount.value;

//     // Ensure that amount is at least 1
//     if (amtVal === "" || amtVal < 1) {
//         amtVal = 1;
//         amount.value = "1";
//     }

//     // Fetch exchange rate using the selected currencies
//     const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
//     try {
//         let response = await fetch(URL);
//         let data = await response.json();
//         let rate = data[toCurr.value.toLowerCase()];
//         let finalAmount = amtVal * rate;
        
//         // Display the converted amount
//         msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
//     } catch (error) {
//         msg.innerText = "Error fetching the exchange rate. Please try again.";
//     }
// };

// // Update the flag displayed next to the dropdown based on the selected currency
// const updateFlag = (element) => {
//     let currCode = element.value;
//     let countryCode = countryList[currCode];
//     let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//     let img = element.parentElement.querySelector("img");
//     img.src = newSrc;
// };

// // Event listener to update the exchange rate when the form is submitted
// btn.addEventListener("click", (evt) => {
//     evt.preventDefault(); // Prevent form from submitting
//     updateExchangeRate();  // Call the function to update the rate
// });

// // Automatically update the exchange rate when the page loads
// window.addEventListener("load", () => {
//     updateExchangeRate();
// });




// // const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

// // const dropdowns = document.querySelectorAll(".dropdown select");
// // const btn = document.querySelector("form button");
// // const fromCurr = document.querySelector(".from select");
// // const toCurr = document.querySelector(".to select");
// // const msg = document.querySelector(".msg");

// // for (let select of dropdowns) {
// //     for (currCode in countryList) {
// //         let newOption = document.createElement("option");
// //         newOption.innerText = currCode;
// //         newOption.value = currCode;
// //         if (select.name === "from" && currCode === "USD") {
// //             newOption.selected = "selected";
// //         } else if (select.name === "to" && currCode === "INR") {
// //             newOption.selected = "selected";
// //         }
// //         select.append(newOption);
// //     }
// //     select.addEventListener("change", (evt) => {
// //         updateFlag(evt.target);
// //     });
// // }
// // const updateExchangeRate = async () => {
// //     let amount = document.querySelector(".amount input");
// //     let amtVal = amount.value;
// //     if (amtVal === "" || amtVal < 1) {
// //         amtVal = 1;
// //         amount.value = "1";
// //     }
// //     const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
// //     let response = await fetch(URL);
// //     let data = await response.json();
// //     let rate = data[toCurr.value.toLowerCase()];
// //     let finalAmount = amtVal * rate;
// //     msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
// // };
// // const updateFlag = (element) => {
// //     let currCode = element.value;
// //     let countryCode = countryList[currCode];
// //     let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
// //     let img = element.parentElement.querySelector("img");
// //     img.src = newSrc;
// // };

// // btn.addEventListener("click", (evt) => {
// //     evt.preventDefault();
// //     updateExchangeRate();
// // });

// // window.addEventListener("load", () => {
// //    updateExchangeRate();
// // });
