import { Request, Response } from 'express';

import pacientesService from '@/services/pacientes.service';

export class PacientesController {
  async create(req: Request, res: Response) {
    const paciente = await pacientesService.create(req.body);

    return res.status(200).json(paciente);
  }

  async findById(req: Request, res: Response) {
    const paciente = await pacientesService.findById(req.params.id);

    return res.status(200).json(paciente);
  }

  async update(req: Request, res: Response) {
    const paciente = await pacientesService.update(req.params.id, req.body);

    return res.status(200).json(paciente);
  }

  async delete(req: Request, res: Response) {
    const paciente = await pacientesService.delete(req.params.id);

    return res.status(200).json(paciente);
  }

  async findAll(req: Request, res: Response) {
    const pacientes = await pacientesService.findAll();

    return res.status(200).json(pacientes);
  }
}

export default new PacientesController();
