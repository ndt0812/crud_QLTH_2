let jwt = require('jsonwebtoken');
// let data = {
//     username: "thang",
//     password: "thang123",
// }
// let token = jwt.sign(data, 'bimat', {
//     expiresIn: 60
// })
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRoYW5nIiwicGFzc3dvcmQiOiJ0aGFuZzEyMyIsImlhdCI6MTY4ODAyMTk3MSwiZXhwIjoxNjg4MDIyMDMxfQ.6FP0j4smlMU-1Wn7tyv6FE7RkWYFQ40dAygZ3kZiYXs';

let data = jwt.verify(token, 'bimat')

console.log(data)