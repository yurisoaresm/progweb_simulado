import { PrismaClient } from '@prisma/client';

interface CreateAgenda {
  data: Date;
  nomePaciente: string;
}

interface UpdateAgenda {
  data?: Date;
  nomePaciente?: string;
}

class AgendasService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: CreateAgenda) {
    try {
      const agenda = await this.prisma.agenda.create({
        data,
      });

      return agenda;
    } catch (error) {
      console.log(error);
    }
  }

  async findById(id: string) {
    try {
      const agenda = await this.prisma.agenda.findUnique({
        where: {
          id,
        },
      });

      return agenda;
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      const agendas = await this.prisma.agenda.findMany();

      return agendas;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: string, data: UpdateAgenda) {
    try {
      const agenda = await this.prisma.agenda.update({
        where: {
          id,
        },
        data,
      });

      return agenda;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id: string) {
    try {
      const agenda = await this.prisma.agenda.delete({
        where: {
          id,
        },
      });

      return agenda;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new AgendasService();
