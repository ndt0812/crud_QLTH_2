import express from 'express';
let jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/QLTH/trangthongtin/:token", async (req, res, next) => {
    try {
        let token = req.params.token
        let ketqua = jwt.verify(token, 'bimat');

        if (ketqua) {
            next()
        }

    } catch (error) {
        return res.json('ban phai dang nhap')
    }
}, (req, res, next) => {
    res.json({
        status: 'oke, chao mung ban toi trang thong tin'
    })
});

export {
    router as trangThongTin
}