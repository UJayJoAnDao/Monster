try {
        const response = await fetch(`http://127.0.0.1:5000/user?name=${username}`);
        const data = await response.json();
        const userData = data.user;
        return userData[0];

    } catch (error) {
        console.error(error);
        return null;
    }