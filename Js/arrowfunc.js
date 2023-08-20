
// Regulat function 
function registerform(event) {
    event.preventDefault()
    var fname = document.getElementById('input-name').value;
    var city = document.getElementById('input-city').value;

    var obj = {
        "fname": fname,
        "city": city,
        "fullname": function() {
            return this.city + " "+ this.fname;
        }
    }

     console.log(obj.fullname());
     console.log(obj);
}

// Arrow function

const myfunction = (a , b) => {
    return a + b ;
}

console.log(myfunction(5 , 10));




