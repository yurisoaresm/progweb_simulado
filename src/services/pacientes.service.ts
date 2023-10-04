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
    const paciente = await this.prisma.paciente.create({
      data,
    });

    return paciente;
  }

  async findById(id: string) {
    const paciente = await this.prisma.paciente.findUnique({
      where: {
        id,
      },
    });

    return paciente;
  }

  async findAll() {
    const pacientes = await this.prisma.paciente.findMany();

    return pacientes;
  }

  async update(id: string, data: UpdatePaciente) {
    const paciente = await this.prisma.paciente.update({
      where: {
        id,
      },
      data,
    });

    return paciente;
  }

  async delete(id: string) {
    const paciente = await this.prisma.paciente.delete({
      where: {
        id,
      },
    });

    return paciente;
  }
}

export default new PacientesService();
