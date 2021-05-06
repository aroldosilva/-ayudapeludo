// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

// Mi localización

if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(success, error, options);

} else {
    alert("puedes usar GEO")
}

var options = {
    EnableHighAccuracy: true,
    Timeout: 500,
    MaximunAge: 0
}

function success(geolocationPosition) {

    let coords = geolocationPosition.coords;

    document.getElementById("mymap").innerHTML = "Latitud: " + coords.latitude + "<br>" + "Longitud:" + coords.longitude;


}

function error(err) {

    document.getElementById("mymap").innerHTML = err.message;
}