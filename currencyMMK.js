// St Ives Body Lotion Price ------------------------------------------

// function calculateMMKPrice() {
//     const currencyRate = parseFloat(document.getElementById('currencyRate').value);
//     const sgdPrice = parseFloat(document.getElementById('sgdPrice').innerText);

//     if (isNaN(currencyRate) || isNaN(sgdPrice)) {
//         alert("Please enter a valid number for the currency rate.");
//         return;
//     }
//     const mmkPrice = currencyRate * sgdPrice;
//     document.getElementById('mmkPrice').innerText = mmkPrice.toLocaleString('en-US', { maximumFractionDigits: 0 });
// }
// function savePrice() {
//     const mmkPrice = document.getElementById('mmkPrice').innerText;
//     if (mmkPrice) {
//         localStorage.setItem('mmkPrice', mmkPrice);
//         alert("Price saved. You can now navigate to other pages to see the updated price.");
//     } else {
//         alert("Please calculate the price before saving.");
//     }
// }
// function updateBodycarePrice() {
//     const mmkPrice = localStorage.getItem('mmkPrice');
//     if (mmkPrice) {
//         document.getElementById('bodycarePrice').innerText = mmkPrice;
//     }
// }



function convertPrices() {
    const currencyRate = parseFloat(document.getElementById('currencyRate').value);
    if (isNaN(currencyRate)) {
        alert("Please enter a valid number for the currency rate.");
        return;
    }

    const sgdPrices = document.querySelectorAll('.sgdPrice');
    sgdPrices.forEach(function(sgdPriceElement) {
        const sgdPrice = parseFloat(sgdPriceElement.innerText);
        const mmkPrice = sgdPrice * currencyRate;
        const mmkPriceElement = sgdPriceElement.parentElement.nextElementSibling.querySelector('.mmkPrice');
        mmkPriceElement.innerText = mmkPrice.toLocaleString('en-US', { maximumFractionDigits: 0 });
    });
}



