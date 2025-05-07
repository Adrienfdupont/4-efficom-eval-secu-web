import forbidden from '../forbidden.json';

const limiter = rateLimit({
	windowMs: 5 * 60 * 1000,
	limit: 100,
	standardHeaders: 'draft-8',
	legacyHeaders: false,
	skip: (req, res) => !forbidden.addresses.includes(req.ip),
})

module.exports = limiter;
