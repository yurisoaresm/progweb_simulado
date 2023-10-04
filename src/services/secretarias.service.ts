import { PrismaClient } from '@prisma/client';

interface CreateSecretaria {
  nome: string;
  rg: number;
}

interface UpdateSecretaria {
  nome?: string;
  rg?: number;
}

class SecretariasService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: CreateSecretaria) {
    try {
      const secretaria = await this.prisma.secretaria.create({
        data,
      });

      return secretaria;
    } catch (error) {
      console.log(error);
    }
  }

  async findById(id: string) {
    try {
      const secretaria = await this.prisma.secretaria.findUnique({
        where: {
          id,
        },
      });

      return secretaria;
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      const secretarias = await this.prisma.secretaria.findMany();

      return secretarias;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: string, data: UpdateSecretaria) {
    try {
      const secretaria = await this.prisma.secretaria.update({
        where: {
          id,
        },
        data,
      });

      return secretaria;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id: string) {
    try {
      const secretaria = await this.prisma.secretaria.delete({
        where: {
          id,
        },
      });

      return secretaria;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new SecretariasService();
