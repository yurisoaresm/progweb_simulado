import { Request, Response } from 'express';
import { z } from 'zod';

import AgendasService from '@/services/agendas.service';

class AgendasController {
  async create({ body }: Request, res: Response) {
    const createAgendaBodySchema = z.object({
      data: z.string(),
      nomePaciente: z.string(),
    });

    try {
      const { data, nomePaciente } = createAgendaBodySchema.parse(body);

      const formattedDate = new Date(data);

      const agenda = await AgendasService.create({
        data: formattedDate,
        nomePaciente,
      });

      return res.status(200).json(agenda);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async findById(req: Request, res: Response) {
    const findByIdAgendaParamsSchema = z.object({
      id: z.string().uuid(),
    });

    try {
      const { id } = findByIdAgendaParamsSchema.parse(req.params);

      const agenda = await AgendasService.findById(id);

      return res.status(200).json(agenda);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async update(req: Request, res: Response) {
    const updateAgendaParamsSchema = z.object({
      id: z.string().uuid(),
    });

    const updateAgendaBodySchema = z.object({
      data: z.string().optional(),
      nomePaciente: z.string().optional(),
    });

    try {
      const { id } = updateAgendaParamsSchema.parse(req.params);
      const { data, nomePaciente } = updateAgendaBodySchema.parse(req.body);

      const agenda = await AgendasService.update(id, {
        data: data ? new Date(data) : undefined,
        nomePaciente,
      });

      return res.status(200).json(agenda);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async delete(req: Request, res: Response) {
    const deleteAgendaParamsSchema = z.object({
      id: z.string(),
    });

    try {
      const { id } = deleteAgendaParamsSchema.parse(req.params);

      const agenda = await AgendasService.delete(id);

      return res.status(200).json(agenda);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async findAll(req: Request, res: Response) {
    const agendas = await AgendasService.findAll();

    return res.status(200).json(agendas);
  }
}

export default new AgendasController();
