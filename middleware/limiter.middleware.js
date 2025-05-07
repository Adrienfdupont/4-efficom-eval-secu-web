const limiter = rateLimit({
	windowMs: 5 * 60 * 1000,
	limit: 100,
	standardHeaders: 'draft-8',
	legacyHeaders: false,
})

module.exports = limiter;
