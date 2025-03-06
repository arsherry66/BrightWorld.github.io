
let loactionDisplay = document.getElementById('displayLocation');

    if (navigator.geolocation) {
        
        loactionDisplay.innerHTML = 'fetching location.....'

        navigator.geolocation.getCurrentPosition(
            function (position) {
              

                const {latitude, longitude} = position.coords
                loactionDisplay.innerHTML = `
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3618.544613861785!2d67.08007467537257!3d24.913510377894582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDU0JzQ4LjYiTiA2N8KwMDQnNTcuNSJF!5e0!3m2!1sen!2s!4v1735803624870!5m2!1sen!2s" width="100%" height="600px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                `
            },
            function (error) {
                loactionDisplay.innerHTML = `Error: ${error.message}`
            }
        )

    } else {
        loactionDisplay.innerHTML = 'Geoloaction does not suppported by browser'
    }

