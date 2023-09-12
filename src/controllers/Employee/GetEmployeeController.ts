import { Request, Response } from "express";
import { GetEmployeeService } from "../../services/Employee/GetEmployeeService";

class GetEmployeeController {
  async handle(req: Request, res: Response) {

    const getEmployeeService = new GetEmployeeService()

    const employee = await getEmployeeService.execute()

    return res.json(employee)
  }
}

export { GetEmployeeController }