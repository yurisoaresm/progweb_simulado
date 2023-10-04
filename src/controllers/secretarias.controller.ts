import { Request, Response } from 'express';
import { z } from 'zod';

import secretariasService from '@/services/secretarias.service';

class SecretariasController {
  async create(req: Request, res: Response) {
    const createSecretariaBodySchema = z.object({
      nome: z.string(),
      rg: z.number(),
    });

    try {
      const { nome, rg } = createSecretariaBodySchema.parse(req.body);

      const secretaria = await secretariasService.create({ nome, rg });

      return res.status(200).json(secretaria);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async findById(req: Request, res: Response) {
    const findByIdSecretariaParamsSchema = z.object({
      id: z.string().uuid(),
    });

    try {
      const { id } = findByIdSecretariaParamsSchema.parse(req.params);

      const secretaria = await secretariasService.findById(id);

      return res.status(200).json(secretaria);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async update(req: Request, res: Response) {
    const createSecretariaBodySchema = z.object({
      nome: z.string(),
      rg: z.number(),
    });
    const findByIdSecretariaParamsSchema = z.object({
      id: z.string().uuid(),
    });

    try {
      const { id } = findByIdSecretariaParamsSchema.parse(req.params);
      const { nome, rg } = createSecretariaBodySchema.parse(req.body);

      const secretaria = await secretariasService.update(id, { nome, rg });

      return res.status(200).json(secretaria);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async delete(req: Request, res: Response) {
    const findByIdSecretariaParamsSchema = z.object({
      id: z.string().uuid(),
    });

    try {
      const { id } = findByIdSecretariaParamsSchema.parse(req.params);
      const secretaria = await secretariasService.delete(id);

      return res.status(200).json(secretaria);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async findAll(req: Request, res: Response) {
    const secretarias = await secretariasService.findAll();

    return secretarias;
  }
}

export default new SecretariasController();
