export async function sendData(email, password) {
        try {
        const response = await fetch('', {
            method: 'POST',
            headers: {'content-type': 'aplication/json'},
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
    } catch (error) {
        console.log("Error: " + error)
    }; 

    await new Promise(resolve => setTimeout(resolve, 5000));
}