import { PrismaClient } from '@prisma/client';

interface CreateConsulta {
  data: Date;
  nomePaciente: string;
  nomeDentista: string;
}

interface UpdateConsulta {
  data?: Date;
  nomePaciente?: string;
  nomeDentista?: string;
}

class ConsultasService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: CreateConsulta) {
    const consulta = await this.prisma.consulta.create({
      data,
    });

    return consulta;
  }

  async findById(id: string) {
    const consulta = await this.prisma.consulta.findUnique({
      where: {
        id,
      },
    });

    return consulta;
  }

  async findAll() {
    const consultas = await this.prisma.consulta.findMany();

    return consultas;
  }

  async update(id: string, data: UpdateConsulta) {
    const consulta = await this.prisma.consulta.update({
      where: {
        id,
      },
      data,
    });

    return consulta;
  }

  async delete(id: string) {
    const consulta = await this.prisma.consulta.delete({
      where: {
        id,
      },
    });

    return consulta;
  }
}

export default new ConsultasService();
