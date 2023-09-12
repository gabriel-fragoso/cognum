import { Request, Response } from "express";
import { DeleteEmployeeService } from "../../services/Employee/DeleteEmployeeService";

class DeleteEmployeeController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const deleteEmployeeService = new DeleteEmployeeService();

    const employee = await deleteEmployeeService.execute({
      id,
    });
    res.json({ message: "user successfully deleted", employee })
  }
}

export { DeleteEmployeeController }