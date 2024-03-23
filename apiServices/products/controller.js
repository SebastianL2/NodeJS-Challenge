import { ProductModel } from './model.js'
import { validateproduct, validatePartialproduct} from './schema.js'
import { uploadFiles } from '../../services/cloudinary/index.js';
import { UserModel } from '../users/model.js';
export class VideoController {
  static async getAll (req, res) {
    const { genre } = req.query
    const products = await ProductModel.getAll({ genre })
    res.json(products)
  }

  static async getByStock ( req,res) {
    
    const products = await ProductModel.getAllStock()
    res.json(products)
  }
  
  static async getById (req, res) {
    const { id } = req.params
    const product = await ProductModel.getById({ id })
    if (product) return res.json(product)
    res.status(404).json({ message: 'product not found' })
  }

  static async getByEspecialPrice (req, res) {
    const { user_id, nombre_producto } = req.params;
    console.log(user_id, nombre_producto)

    const user = await UserModel.getById({ user_id })
    if (!user) return res.status(404).json({ message: 'User not found' })
    const product = await ProductModel.getByName({ nombre_producto })
    let price = product.price; 

    
    for (const obj of product.brand_special_price) {
      if (obj.userId === user_id) {
          price = obj.special_price;
          break; 
      }
    }
    const simplifiedProduct = {
      name: product.name,
      description: product.description,
      price: price
    };

    if (product) return res.json(simplifiedProduct)
    res.status(404).json({ message: 'product not found' })
  }



  static async create (req, res) {


    const result = validateproduct(req.body)

    if (!result.success) {
    // 422 Unprocessable Entity
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }
     
    const newproduct = await ProductModel.create({ input: result.data})

    res.status(201).json(newproduct)
  }

  static async delete (req, res) {
    const { id } = req.params

    const result = await ProductModel.delete({ id })

    if (result === false) {
      return res.status(404).json({ message: 'product not found' })
    }

    return res.json({ message: 'product deleted' })
  }

  static async update (req, res) {
        const { id } = req.params
    const product = await ProductModel.getById({id})
    if(!product)return res.status(400).json({ message: 'product not found' })
    const result = validatePartialproduct(req.body)

    if (!result.success) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }


    const updatedproduct = await ProductModel.update({ id, input: result.data })
    if(updatedproduct)return res.json(updatedproduct)
    res.status(200).json({ message: 'product updated' })
  }
}
