import prismaClient from "../prisma";

class CreateCustomerService{
  async execute(){
    console.log('chamou rota')

    return {ok: true}
  }
}

export {CreateCustomerService}