let rates = document.querySelectorAll(".rate");
let submit = document.querySelector("button");
let selected = document.querySelector(".selected");
let rating = document.querySelector(".rating-state");
let thanks = document.querySelector(".thank-state");

rates.forEach(rate => {
    rate.onclick = () => {
        rates.forEach(notSelected => { notSelected.classList.remove("active");});
        rate.classList.add("active");
        
        submit.onclick = () => {
            selected.textContent = "You selected " + rate.id +" out of 5";
            rating.style.display = "none";
            thanks.style.display= "block";
        }
    }
});