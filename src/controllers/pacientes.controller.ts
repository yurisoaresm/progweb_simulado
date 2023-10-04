import { Request, Response } from 'express';
import { z } from 'zod';

import pacientesService from '@/services/pacientes.service';

export class PacientesController {
  async create(req: Request, res: Response) {
    const createPacienteBodySchema = z.object({
      nome: z.string(),
      senha: z.number(),
      usuario: z.string(),
    });

    try {
      const { nome, senha, usuario } = createPacienteBodySchema.parse(req.body);

      const paciente = await pacientesService.create({ nome, senha, usuario });

      return res.status(200).json(paciente);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async findById(req: Request, res: Response) {
    const findByIdPacienteParamsSchema = z.object({
      id: z.string().uuid(),
    });

    try {
      const { id } = findByIdPacienteParamsSchema.parse(req.params);

      const paciente = await pacientesService.findById(id);

      return res.status(200).json(paciente);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async update(req: Request, res: Response) {
    const updatePacienteBodySchema = z.object({
      nome: z.string(),
      senha: z.number(),
      usuario: z.string(),
    });
    const updatePacienteParamsSchema = z.object({
      id: z.string().uuid(),
    });

    try {
      const { id } = updatePacienteParamsSchema.parse(req.params);
      const { nome, senha, usuario } = updatePacienteBodySchema.parse(req.body);

      const paciente = await pacientesService.update(id, {
        nome,
        senha,
        usuario,
      });

      return res.status(200).json(paciente);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async delete(req: Request, res: Response) {
    const updatePacienteParamsSchema = z.object({
      id: z.string().uuid(),
    });

    try {
      const { id } = updatePacienteParamsSchema.parse(req.params);

      const paciente = await pacientesService.delete(id);

      return res.status(200).json(paciente);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async findAll(req: Request, res: Response) {
    const pacientes = await pacientesService.findAll();

    return res.status(200).json(pacientes);
  }
}

export default new PacientesController();
