import jwt from 'jsonwebtoken'
import { createError } from '../utils/error.js'

export const verifyToken = (req, res, next) => {

    const token = req.cookies.accessToken

<<<<<<< HEAD
    if (!token) {

        return next(createError(401, "Bạn chưa đăng nhập"))

    }

=======
    if (!token)
        return next(createError(401, "Bạn chưa đăng nhập"))

>>>>>>> c6d5b74f9876146c998c1b016ecedd71396add77
    jwt.verify(token, process.env.JWT, (err, payload) => {

        if (err) {

            return next(createError(401, "Mã cookie không hợp lệ"))

        } else {

            req.userId = payload.id
            req.isSeller = payload.isSeller

        }

        next()

    })

}