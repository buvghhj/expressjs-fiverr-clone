import gigModel from "../models/gig.model.js"
import { createError } from "../utils/error.js"

export const createGig = async (req, res, next) => {

    if (!req.isSeller) {

        return next(createError(403, "Bạn không phải người bán"))

    } else {

        try {

<<<<<<< HEAD
            const newGig = new gigModel({ ...req.body, userId: req.userId })
=======
            const newGig = new gigModel({

                ...req.body,
                userId: req.userId

            })
>>>>>>> c6d5b74f9876146c998c1b016ecedd71396add77

            const savedGig = await newGig.save()

            res.status(200).json(savedGig)

        } catch (err) {

            next(err)

        }

    }
}

export const deleteGig = async (req, res, next) => {

    try {

        const gig = await gigModel.findById(req.params.id)

<<<<<<< HEAD
        if (gig.userId !== req.userId) {

            return next(createError(403, "Bạn chỉ có thể xóa dịch vụ của mình"))

        }

=======
        if (gig.userId !== req.userId)
            return next(createError(403, "Bạn chỉ có thể xóa dịch vụ của mình"))

>>>>>>> c6d5b74f9876146c998c1b016ecedd71396add77
        await gigModel.findByIdAndDelete(req.params.id)

        res.status(200).json("Xóa dịch vụ thành công")

    } catch (err) {

        next(err)

    }

}

export const getGig = async (req, res, next) => {

    try {

        const gigId = req.params.id

        const gig = await gigModel.findById(gigId)

<<<<<<< HEAD
        if (!gig) {

            return next(createError(404, "Không tìm thấy dịch vụ nào"))

        }

=======
        if (!gig)
            return next(createError(404, "Không tìm thấy dịch vụ nào"))

>>>>>>> c6d5b74f9876146c998c1b016ecedd71396add77
        res.status(200).json(gig)

    } catch (err) {

        next(err)

    }

}

export const getGigs = async (req, res, next) => {

    const q = req.query

    const filters = {

        ...(q.userId && { userId: q.userId }),

        ...(q.cat && { cat: q.cat }),

        ... ((q.min || q.max) && {

            price: {

                ...(q.min && { $gt: q.min }),
                ...(q.max && { $lt: q.max })

            }

        }),

        ...(q.search && { title: { $regex: q.search, $options: "i" } })

    }

    try {

        const gigs = await gigModel.find(filters).sort({ [q.sort]: -1 })

        res.status(200).json(gigs)

    } catch (err) {

        next(err)

    }

}



