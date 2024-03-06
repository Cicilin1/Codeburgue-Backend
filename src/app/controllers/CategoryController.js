import * as Yup from "yup"
import Category from "../models/Product.js"

class CategoryController {
    async store(req, res) {

        const schema = Yup.object().shape({
            name: Yup.string().required(),
        })

        try {
            await schema.validateSync(req.body, { abortEarly: false })
        } catch (err) {
            return res.status(400).json({ error: err.errors })
        }

        const { name } = req.body

        const category = await Category.create({ name })
        return res.json(category)
    }

    async index(req, res) {
        const category = await Category.findAll()

        return res.json(category)
    }
}




export default new CategoryController();