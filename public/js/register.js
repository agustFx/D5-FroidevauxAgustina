const registerForm = document.getElementById('registerForm')

if (registerForm instanceof HTMLFormElement) {
    registerForm.addEventListener('submit', e => {
        e.preventDefault()
        const data = new FormData(registerForm)
        const obj = {}
        data.forEach((value, key) => obj[key] = value)
        fetch('/api/usuarios', {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(result => {
                if (result.status === 200) {
                    window.location.replace('/login')
                }
            })
    })
}