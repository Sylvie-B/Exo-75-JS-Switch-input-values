let button = document.getElementById("switch");

button.addEventListener("click", function () {
    let champ01 = document.getElementById("input1").value;
    console.log(champ01);
    let champ02 = document.getElementById("input2").value;
    console.log(champ02);
    document.getElementById("input2").value = champ01;
    document.getElementById("input1").value = champ02;
})
