class validate {
    isEmail(email) {
        const patterEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (email) {
            return patterEmail.test(email);
        } else {
            return false;
        }
    }
}

module.exports = validate
