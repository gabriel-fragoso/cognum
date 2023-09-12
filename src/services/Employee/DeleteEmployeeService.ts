import prismaClient from "../../prisma";

class DeleteEmployeeService {
  async execute({ id }) {
    const employee = await prismaClient.employee.delete({
      where: {
        id
      }
    })
    return employee;
  }
}

export { DeleteEmployeeService }