const loginFunction = async (req, res) => {
    try {
        res.send('Login page')
    } catch (error) {
        console.log(error)
    }
}

module.exports = { loginFunction }
