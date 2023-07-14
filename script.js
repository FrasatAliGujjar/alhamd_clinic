// =================== Appointment Request Send ===================== 

// let namee = document.getElementById('name').value;
// let gender = document.getElementById('gender').value;
// let problem = document.getElementById('problem').value;
// let wa = document.getElementById('wa').value;

function whatsapp() {

    let url = "http://wa.me/923000174141?text="

        + "*Name :*" + " " + document.getElementById('name').value + "%0a"
        + "*Gender :*" + " " + document.getElementById('gender').value + "%0a"
        + "*Problem :*" + " " + document.getElementById('problem').value + "%0a"
        + "*Whatsapp :*" + " " + document.getElementById('wa').value + "%0a"

    window.open(url, "_blank");

}

function whatsapp2() {

    let url = "http://wa.me/923121718036?text="

        + "*Name :*" + " " + document.getElementById('name').value + "%0a"
        + "*Gender :*" + " " + document.getElementById('gender').value + "%0a"
        + "*Problem :*" + " " + document.getElementById('problem').value + "%0a"
        + "*Whatsapp :*" + " " + document.getElementById('wa').value + "%0a"

    window.open(url, "_blank");

}