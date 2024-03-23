import { ProductModel } from './model.js'
import { validateVideo, validatePartialVideo } from './schema.js'
import { uploadFiles } from '../../services/cloudinary/index.js';
export class VideoController {
  static async getAll (req, res) {
    const { genre } = req.query
    const users = await ProductModel.getAll({ genre })
    res.json(users)
  }

  static async getByStock (req, res) {
    const { genre } = req.query
    const users = await ProductModel.getAllStock({ genre })
    res.json(users)
  }
  
  static async getById (req, res) {
    const { id } = req.params
    const user = await ProductModel.getById({ id })
    if (user) return res.json(user)
    res.status(404).json({ message: 'user not found' })
  }


  static async create (req, res) {


    const result = validateVideo(req.body)

    if (!result.success) {
    // 422 Unprocessable Entity
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
     
    const newUser = await ProductModel.create({ input: result.data})

    res.status(201).json(newUser)
  }

  static async delete (req, res) {
    const { id } = req.params

    const result = await ProductModel.delete({ id })

    if (result === false) {
      return res.status(404).json({ message: 'User not found' })
    }

    return res.json({ message: 'User deleted' })
  }

  static async update (req, res) {
    const result = validatePartialVideo(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const { id } = req.params

    const updatedUser = await ProductModel.update({ id, input: result.data })

    return res.json(updatedUser)
  }
}
