function redirectToSelectedCampus() {
    var selectElement = document.getElementById("campusSelect");
    var selectedValue = selectElement.value;

    if (selectedValue === "campus1") {
        window.location.href = "marabaindustrial.html";
    } else if (selectedValue === "campus2") {
        window.location.href = "belem.html";
    } else if (selectedValue === "campus3") {
        window.location.href = "tucurui.html";
    } else if (selectedValue === "campus4") {
        window.location.href = "santarem.html";
    }
}