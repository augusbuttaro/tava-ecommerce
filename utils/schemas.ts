import { z, ZodSchema } from 'zod'

export const productSchema = z.object({
    name:z.string(),
    company:z.string(),
    price:z.coerce.number().int().min(0, {
        message:'Price must be a positive number'
    }),
    description:z.string().refine(
        (description)=>{
            const wordCount = description.split(' ').length
            return wordCount>=10 && wordCount<=1000
        },
        {
            message:'Description must be between 10 and 1000 words long'
        }
    ),
    featured:z.coerce.boolean()
})

export const imageSchema = z.object({
    image:validateImageFile()
})

function validateImageFile(){
    const maxUploadSize = 1024 * 1024
    const acceptedFileTypes = ['image/']
    return z.instanceof(File).refine((file)=>{
        return !file || file.size <= maxUploadSize
    }, 'File must be less than 1MB').refine((file)=>{
        return !file || acceptedFileTypes.some((type)=> file.type.startsWith(type))
    },'File must be an image')
}

export function validateWithZodSchema<T>(schema:ZodSchema<T>, data:unknown):T{
    const result = schema.safeParse(data)
    if(!result.success){
        const errors = result.error.errors.map((error)=> error.message)
        throw new Error(errors.join(', '))
    }
    return result.data
}