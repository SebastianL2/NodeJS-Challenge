import z from 'zod'
import { userSchema } from '../users/schema.js';

const productSchema = z.object({
  name: z.string({
    invalid_type_error: 'sneaker name must be a string',
    required_error: 'sneaker name is required.'
  }),
  description: z.string({
    invalid_type_error: 'product description must be a string',
    required_error: 'product description is required.'
  }),
  stock: z.number().int().nonnegative({
    invalid_type_error: 'Stock must be a postivie number',
    required_error: 'Stock description is required.'
  }),
  price: z.number().positive({
    invalid_type_error: 'Price must be a postivie number',
    required_error: 'price description is required.'
  }),
  brand_special_price: z.array(z.object({
    userId: z.union([z.string(), userSchema]), 
    special_price: z.number().positive({
      invalid_type_error: 'Special price must be a positive number',
      required_error: 'Special price is required.'
    })
  }))
});

export function validateproduct (input) {
  return productSchema.safeParse(input)
}

export function validatePartialproduct (input) {
  return productSchema.partial().safeParse(input)
}
