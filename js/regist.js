const form = document.querySelector('form')

// form.addEventListener('submit', function(e){
//     e.preventDefault();

    // mendapatkan data dari inputan form
    // let name = document.querySelector('.name').value

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const number = document.getElementById('number');
    const courses = document.getElementById('courses');
    const gender = document.getElementById('gender');
    
form.addEventListener('submit', () => {
    // Validasi formulir
    if (!name.checkValidity() || !email.checkValidity() || !number.checkValidity() || !courses.checkValidity()  || !gender.checkValidity()) {
        // Validasi gagal, tampilkan pesan atau lakukan sesuatu
        alert('Silakan isi semua field dengan benar.');
        return; // Hentikan proses submit formulir
    }

    const data = {
        name: name.value,
        email: email.value,
        number: number.value,
        courses: courses.value,
        gender: gender.value 
    }

    fetch('https://be-balikpapan-13-production.up.railway.app/registration', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'Success POST/CREATE Peserta') {
            // Daftar berhasil, alert pesan
            alert('S!');
        } else {
            // Daftar gagal atau respons tidak sesuai
            console.error('Daftar Course Failed:', data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
})
