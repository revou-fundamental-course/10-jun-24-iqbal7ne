// ini JS
function reset() {
    document.getElementById("input").value = '';
    document.getElementById("result").value = '';
}

function reverse() {
    var a = document.getElementById("fahrenheit-info");
    var b = document.getElementById("celcius-info");
    var c = document.getElementById("fahrenheit-info2");
    var d = document.getElementById("celcius-info2");
    var e = document.getElementById("input");
    var e1 = document.getElementById("input").value;
    var f = document.getElementById("result");
    var f1 = document.getElementById("result").value;
    if (a.style.display == "none") {
        a.style.display = "block";
        b.style.display = "none";
        c.style.display = "block";
        d.style.display = "none";
    } else {
        a.style.display = "none";
        b.style.display = "block";
        c.style.display = "none";
        d.style.display = "block";
    }
    e.value = f1;
    f.value = e1;
}

function konversi() {
    var a = document.getElementById("input").value;
    var b = document.getElementById("result").value;
    var c = document.getElementById("fahrenheit-info");
    if (c.style.display == "none") {
        document.getElementById("result").value = (a * 9 / 5) + 32;
    } else {
        document.getElementById("result").value = (a - 32) * 5 / 9;
    }
}