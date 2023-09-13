import axios from "axios";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PopulateEmployeeService {
  async execute() {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=10");
      const users = response.data.results;

      const employees = users.map((user) => ({
        name: `${user.name.first} ${user.name.last}`,
        role: "client",
      }));

      await prisma.employee.createMany({
        data: employees,
      });

      const createdEmployees = await prisma.employee.findMany({
        where: { name: { in: employees.map((employee) => employee.name) } },
      });

      return createdEmployees;
    } catch (error) {
      throw new Error("Erro ao popular a base de dados");
    }
  }
}

export { PopulateEmployeeService };
