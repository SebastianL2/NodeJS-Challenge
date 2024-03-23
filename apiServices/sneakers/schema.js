import z from 'zod'

const videoSchema = z.object({
  name: z.string({
    invalid_type_error: 'Senaker name must be a string',
    required_error: 'Senaker name is required.'
  }),
  description: z.string({
    invalid_type_error: 'Video description must be a string',
    required_error: 'Video description is required.'
  }),
  price: z.number().int().positive({
    invalid_type_error: 'Price must be a postivie number',
    required_error: 'price description is required.'
  }),
  special_price: z.number()
});

export function validateVideo (input) {
  return videoSchema.safeParse(input)
}

export function validatePartialVideo (input) {
  return videoSchema.partial().safeParse(input)
}
