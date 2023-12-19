const logRequest = (req, res, next) => {
    console.log('Telah terjadi request ke PATH: ', req.path);
    next();
}

module.exports = logRequest