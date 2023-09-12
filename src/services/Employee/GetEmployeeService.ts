import prismaClient from "../../prisma";

class GetEmployeeService {
  async execute() {

    const employee = await prismaClient.employee.findMany({
      select: {
        id: true,
        name: true,
        role: true
      }
    })

    return employee
  }
}

export { GetEmployeeService }