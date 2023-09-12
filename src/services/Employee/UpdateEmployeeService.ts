import prismaClient from "../../prisma";

class UpdateEmployeeService {
  async execute({ id, name, role }) {
    const employee = await prismaClient.employee.update({
      where: {
        id
      },
      data: {
        name,
        role
      }
    })
    return employee;
  }
}

export { UpdateEmployeeService }