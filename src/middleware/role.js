const role = permissions => {
    return (req, res, next) => {
        const { role } = req.body;

        if (!role) {
            return res.json('ban can phai nhap role');
        }
        if (!permissions.includes(role)) {
            return res.json('ban ko co quyen')
        }

        next();
    }
}

module.exports = {
    role
}