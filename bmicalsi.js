  window.onload = () => {
        var btn = document.getElementById("btn");
        btn.addEventListener("click", calculatebmi)
    }
    function calculatebmi() {
        var height = parseInt(document.getElementById("height").value);
        var weight = parseInt(document.getElementById("weight").value);
        var result = document.querySelector(".result");

        if (height === "" || isNaN(height)) {
            result.innerHTML = "Enter valid height";
        }
        else if (weight === "" || isNaN(weight)) {
            {
                result.innerHTML = "Enter valid weight";
            }
        }
        else {

            var bmi = (weight / ((height * height) / 10000)).toFixed(2);
            if (bmi < 18.6) {
                result.innerHTML = `under weight ${bmi}`
            }
            else if (bmi >= 18.6 && bmi < 24.9) {
                result.innerHTML = `normal weight ${bmi}`

            }
            else {
                result.innerHTML = `overweight weight ${bmi}`

            }
        }
    }
