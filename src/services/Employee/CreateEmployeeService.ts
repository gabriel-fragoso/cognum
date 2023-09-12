import prismaClient from "../../prisma";

interface UserRequest {
  name: string;
  role: string;
}

class CreateEmployeeService {
  async execute({ name, role }: UserRequest) {
    if (!name) {
      throw new Error("name incorrect")
    }

    const employee = await prismaClient.employee.create({
      data: {
        name: name,
        role: role
      },
      select: {
        id: true,
        name: true,
        role: true
      }
    })

    return employee;
  }
}

export { CreateEmployeeService }