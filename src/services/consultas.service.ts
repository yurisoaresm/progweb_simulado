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
    try {
      const consulta = await this.prisma.consulta.create({
        data,
      });

      return consulta;
    } catch (error) {
      console.log(error);
    }
  }

  async findById(id: string) {
    try {
      const consulta = await this.prisma.consulta.findUnique({
        where: {
          id,
        },
      });

      return consulta;
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      const consultas = await this.prisma.consulta.findMany();

      return consultas;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: string, data: UpdateConsulta) {
    try {
      const consulta = await this.prisma.consulta.update({
        where: {
          id,
        },
        data,
      });

      return consulta;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id: string) {
    try {
      const consulta = await this.prisma.consulta.delete({
        where: {
          id,
        },
      });

      return consulta;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ConsultasService();
