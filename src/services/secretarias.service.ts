import { PrismaClient } from '@prisma/client';

interface CreateSecretaria {
  nome: string;
  rg: number;
}

interface UpdateSecretaria {
  nome?: string;
  senha?: number;
  usuario?: string;
}

class SecretariasService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: CreateSecretaria) {
    const secretaria = await this.prisma.secretaria.create({
      data,
    });

    return secretaria;
  }

  async findById(id: string) {
    const secretaria = await this.prisma.secretaria.findUnique({
      where: {
        id,
      },
    });

    return secretaria;
  }

  async findAll() {
    const secretarias = await this.prisma.secretaria.findMany();

    return secretarias;
  }

  async update(id: string, data: UpdateSecretaria) {
    const secretaria = await this.prisma.secretaria.update({
      where: {
        id,
      },
      data,
    });

    return secretaria;
  }

  async delete(id: string) {
    const secretaria = await this.prisma.secretaria.delete({
      where: {
        id,
      },
    });

    return secretaria;
  }
}

export default new SecretariasService();
