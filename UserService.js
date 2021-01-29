class UserService {
    login(username, password) {
        console.log('Enter UserService.login()');
        console.log('Login Success!');
        return true
    }
}

module.exports = new UserService()