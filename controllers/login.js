const Joi = require('joi');
const jwt = require('jsonwebtoken');

const { JWT_SECRET, JWT_EMAIL } = process.env;
const validateBody = (body) =>

Joi.object({
email: Joi.string().email().required().messages({
    'string.empty': 'Email is required',
    'string.email': 'Email is invalid',
}),
password: Joi.string().min(5).required().messages({
    'string.min': '"password" length must be 5 characters long',
    'string.required': '"password" is required',
    }),
}).validate(body);

module.exports = async (req, res, next) => {
    const { error } = validateBody(req.body);
    if (error) return next(error);

    if (req.body.email !== JWT_EMAIL && req.body.password !== JWT_SECRET) {
        const err = new Error('Invalid username or password');
        err.statusCode = 401;
        return next(err);
    }

    const admin = req.body.email === JWT_EMAIL && req.body.password === JWT_SECRET;
    

    const payload = {
        username: req.body.username,
        admin,
    };

const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '7d',
});

res.status(200).json({ token });
};

