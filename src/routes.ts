import { Router, Request, Response } from 'express'

// -- CONTROLLERS -- //

const router = Router()

router.get('/hello', (req: Request, res: Response) => {
  return res.json({ message: "Hello, Cognum!" })
})

export { router }