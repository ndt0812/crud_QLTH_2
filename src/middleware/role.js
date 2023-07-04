let jwt = require("jsonwebtoken");
const { TaiKhoan } = require("../entities/taiKhoan");
var cookieParser = require('cookie-parser');

cookieParser()

const checkLogin = (req, res, next) => {
    try {
        let token = req.cookies.token
        let idTK = jwt.verify(token, 'bimat');

        TaiKhoan.findOne({
            where: {
                id: idTK.id
            }
        })
            .then((data) => {
                if (data) {
                    req.data = data
                    next()
                } else {
                    return res.json('ko co quyen')
                }
            })
            .catch((err) => {
                console.log(err)
            })

    } catch (error) {
        console.log(error)
    }
}


const checkStu = async (req, res, next) => {
    let role = req.data.role
    if (role === 'stu' || role === 'tea' || role === 'adm') {
        next()
    } else {
        res.json('ko co quyen truy cap')
    }
}

const checkTea = async (req, res, next) => {
    let role = req.data.role
    if (role === 'tea' || role === 'adm') {
        next()
    } else {
        res.json('ko co quyen truy cap')
    }
}

const checkAdm = async (req, res, next) => {
    let role = req.data.role
    if (role === 'adm') {
        next()
    } else {
        res.json('ko co quyen truy cap')
    }
}



module.exports = { checkLogin, checkStu, checkTea, checkAdm }