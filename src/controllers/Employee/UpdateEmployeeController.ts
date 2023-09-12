import { Request, Response } from "express";
import { UpdateEmployeeService } from "../../services/Employee/UpdateEmployeeService";

class UpdateEmployeeController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name, role } = req.body;

    const updateEmployeeService = new UpdateEmployeeService();

    const employee = await updateEmployeeService.execute({
      id,
      name,
      role
    });
    res.json(employee)
  }
}

export { UpdateEmployeeController }