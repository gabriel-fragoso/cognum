import { Request, Response } from "express";
import { CreateEmployeeService } from "../../services/Employee/CreateEmployeeService";

class CreateEmployeeController {
  async handle(req: Request, res: Response) {
    const { name, role } = req.body

    const createEmployeeService = new CreateEmployeeService()

    const employee = await createEmployeeService.execute({
      name,
      role
    })

    return res.json(employee)
  }
}

export { CreateEmployeeController }