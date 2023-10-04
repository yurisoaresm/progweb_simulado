import { PrismaClient } from '@prisma/client';

interface CreateAgenda {
  data: Date;
  nomePaciente: string;
}

interface UpdateAgenda {
  date?: Date;
  namePaciente?: string;
}

class AgendasService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: CreateAgenda) {
    const agenda = await this.prisma.agenda.create({
      data,
    });

    return agenda;
  }

  async findById(id: string) {
    const agenda = await this.prisma.agenda.findUnique({
      where: {
        id,
      },
    });

    return agenda;
  }

  async findAll() {
    const agendas = await this.prisma.agenda.findMany();

    return agendas;
  }

  async update(id: string, data: UpdateAgenda) {
    const agenda = await this.prisma.agenda.update({
      where: {
        id,
      },
      data,
    });

    return agenda;
  }

  async delete(id: string) {
    const agenda = await this.prisma.agenda.delete({
      where: {
        id,
      },
    });

    return agenda;
  }
}

export default new AgendasService();
