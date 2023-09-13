import { Router, Request, Response } from 'express'

// -- CONTROLLERS -- //
import { CreateEmployeeController } from './controllers/Employee/CreateEmployeeController'
import { GetEmployeeController } from './controllers/Employee/GetEmployeeController'
import { UpdateEmployeeController } from './controllers/Employee/UpdateEmployeeController'
import { DeleteEmployeeController } from './controllers/Employee/DeleteEmployeeController'
import { PopulateEmployeeController } from './controllers/Employee/PopulateEmployeeController'

const router = Router()

// Desafio 01

router.get('/hello', (req: Request, res: Response) => {
  return res.json({ message: "Hello, Cognum!" })
})

// Desafio 02

router.post('/employee', new CreateEmployeeController().handle)

router.get('/employee', new GetEmployeeController().handle)

router.put('/employee/:id', new UpdateEmployeeController().handle)

router.delete('/employee/:id', new DeleteEmployeeController().handle)

// Desafio 03

router.get('/populate', new PopulateEmployeeController().handle);

export { router }