import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'
import {
  type ZodTypeProvider,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { z } from 'zod'
import { createEvent } from './routes/create-event'
import { generateSlug } from './utils/generate-slug'

const app = fastify()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createEvent)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP serving running')
})
