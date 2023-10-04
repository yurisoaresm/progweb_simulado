import { PrismaClient } from '@prisma/client';

interface CreatePaciente {
  nome: string;
  senha: number;
  usuario: string;
}

interface UpdatePaciente {
  nome?: string;
  senha?: number;
  usuario?: string;
}

class PacientesService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: CreatePaciente) {
    try {
      const paciente = await this.prisma.paciente.create({
        data,
      });

      return paciente;
    } catch (error) {
      console.log(error);
    }
  }

  async findById(id: string) {
    try {
      const paciente = await this.prisma.paciente.findUnique({
        where: {
          id,
        },
      });

      return paciente;
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      const pacientes = await this.prisma.paciente.findMany();

      return pacientes;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: string, data: UpdatePaciente) {
    try {
      const paciente = await this.prisma.paciente.update({
        where: {
          id,
        },
        data,
      });

      return paciente;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id: string) {
    try {
      const paciente = await this.prisma.paciente.delete({
        where: {
          id,
        },
      });

      return paciente;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new PacientesService();
