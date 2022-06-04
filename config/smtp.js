require('dotenv').config();

module.exports = {
    host: process.env.HOST_SMTP,
    port: process.env.PORT_SMTP,
    user: process.env.USER_SMTP,
    pass: process.env.PASS_SMTP,
}