const Knapp = document.getElementById("Knapp");
const litetNamn = document.getElementById("litetNamn")
Knapp.addEventListener("click", function(){
    let StoraNamn = litetNamn.value.toUpperCase();
    document.getElementById("litetNamn").value= StoraNamn;
});
