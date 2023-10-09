const form = document.querySelector('form')

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const number = document.getElementById('number');
    const courses = document.getElementById('courses');
    
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Validasi formulir
    // if (!name.checkValidity() || !email.checkValidity() || !number.checkValidity() || !courses.checkValidity()  || !gender.checkValidity()) {
    //     // Validasi gagal, tampilkan pesan atau lakukan sesuatu
    //     alert('Silakan isi semua field dengan benar.');
    //     return; // Hentikan proses submit formulir
    // }

    const gender = document.querySelector('input[name="gender"]:checked')

    const data = {
        name: name.value,
        email: email.value,
        number: parseInt(number.value),
        course: courses.value,
        gender: gender.value 
    }

    console.log(data);

    fetch('https://be-balikpapan-13-production.up.railway.app/registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Selamat Pesan Anda Berhasil Terkirim');
        form.reset();
    })
    .catch(error => {
        console.error('Error:', error);
    });
})
