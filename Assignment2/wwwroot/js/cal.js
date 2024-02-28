
function add()
{
    let x = document.getElementById("value1").value
    let y = document.getElementById("value2").value;
    document.getElementById("output").value = parseInt(x) + parseInt(y);
}


function minus() {
    let x = document.getElementById("value1").value
    let y = document.getElementById("value2").value;
    document.getElementById("output").value = parseInt(x) - parseInt(y);
}

function multiplication() 
    {
        let x = document.getElementById("value1").value
        let y = document.getElementById("value2").value;
        document.getElementById("output").value = parseInt(x) * parseInt(y);
}


function division() {
    let x = document.getElementById("value1").value
    let y = document.getElementById("value2").value;
    document.getElementById("output").value = parseInt(x) / parseInt(y);
}

function mod() {
    let x = document.getElementById("value1").value
    let y = document.getElementById("value2").value;
    document.getElementById("output").value = parseInt(x) % parseInt(y);
}
