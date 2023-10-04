import { Request, Response } from 'express';
import { z } from 'zod';

import consultasService from '@/services/consultas.service';

export class ConsultasController {
  async create(req: Request, res: Response) {
    const createConsultaBodySchema = z.object({
      data: z.string().uuid(),
      nomePaciente: z.string(),
      nomeDentista: z.string(),
    });

    try {
      const { data, nomePaciente, nomeDentista } =
        createConsultaBodySchema.parse(req.body);

      const formattedDate = new Date(data);

      const consulta = await consultasService.create({
        data: formattedDate,
        nomeDentista,
        nomePaciente,
      });

      return res.status(200).json(consulta);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async findById(req: Request, res: Response) {
    const findByIdConsultaParamsSchema = z.object({
      id: z.string().uuid(),
    });

    try {
      const { id } = findByIdConsultaParamsSchema.parse(req.body);

      const consulta = await consultasService.findById(id);

      return res.status(200).json(consulta);
    } catch (error) {
      return res.status(200).json(error);
    }
  }

  async update(req: Request, res: Response) {
    const updateConsultaBodySchema = z.object({
      data: z.string().optional(),
      nomePaciente: z.string().optional(),
      nomeDentista: z.string().optional(),
    });
    const updateConsultaParamsSchema = z.object({
      id: z.string().uuid(),
    });

    try {
      const { id } = updateConsultaParamsSchema.parse(req.params);
      const { data, nomePaciente, nomeDentista } =
        updateConsultaBodySchema.parse(req.body);

      const consulta = await consultasService.update(id, {
        data: data ? new Date(data) : undefined,
        nomeDentista,
        nomePaciente,
      });

      return res.status(200).json(consulta);
    } catch (error) {
      return res.status(200).json(error);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const consulta = await consultasService.delete(req.params.id);

      return res.status(200).json(consulta);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async findAll(req: Request, res: Response) {
    const consultas = await consultasService.findAll();

    return res.status(200).json(consultas);
  }
}

export default new ConsultasController();
