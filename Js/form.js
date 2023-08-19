  
function formRegistartion(e) {
    
    var sname = document.getElementById('name-input').value;
    var lname = document.getElementById('lname-input').value;
    var age = document.getElementById('age-input').value;
    var city = document.getElementById('city-input').value;

    var obj = {
        "sname":sname,
        "lname":lname,
        "age":age,
        "city":city
    }

    console.log(obj);

    //     console.log(sname + " "+  lname +" " + age + " "+ city);

    //    console.log(e.sname);

}