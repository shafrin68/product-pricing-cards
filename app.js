const monthlyBtn = document.getElementById("monthly-btn");
const yearlyBtn = document.getElementById("yearly-btn");

const prices = document.querySelectorAll(".amount");
const periods = document.querySelectorAll(".period");

function showMonthlyPrices() {
    prices.forEach(function(price) {
        price.textContent = price.dataset.monthly;
    });

    periods.forEach(function(period) {
        period.textContent = "/month";
    });

    monthlyBtn.classList.add("active");
    yearlyBtn.classList.remove("active");

    monthlyBtn.setAttribute("aria-pressed", "true");
    yearlyBtn.setAttribute("aria-pressed", "false");
}

function showYearlyPrices() {
    prices.forEach(function(price) {
        price.textContent = price.dataset.yearly;
    });

    periods.forEach(function(period) {
        period.textContent = "/year";
    });

    yearlyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");

    yearlyBtn.setAttribute("aria-pressed", "true");
    monthlyBtn.setAttribute("aria-pressed", "false");
}

monthlyBtn.addEventListener("click", showMonthlyPrices);
yearlyBtn.addEventListener("click", showYearlyPrices);
