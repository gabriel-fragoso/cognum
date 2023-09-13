import { Request, Response } from "express";
import { PopulateEmployeeService } from "../../services/Employee/PopulateEmployeeService";

class PopulateEmployeeController {
  async handle(req: Request, res: Response) {
    const populateService = new PopulateEmployeeService();

    try {
      const createdEmployees = await populateService.execute();

      return res.json(createdEmployees);
    } catch (error) {
      console.error("Erro ao popular a base de dados:", error);
      return res.status(500).json({ error: "Erro ao popular a base de dados" });
    }
  }
}

export { PopulateEmployeeController };
