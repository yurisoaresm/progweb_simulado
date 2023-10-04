import { Request, Response } from 'express';

import consultasService from '@/services/consultas.service';

export class ConsultasController {
  async create(req: Request, res: Response) {
    const consulta = await consultasService.create(req.body);

    return res.status(200).json(consulta);
  }

  async findById(req: Request, res: Response) {
    const consulta = await consultasService.findById(req.params.id);

    return res.status(200).json(consulta);
  }

  async update(req: Request, res: Response) {
    const consulta = await consultasService.update(req.params.id, req.body);

    return res.status(200).json(consulta);
  }

  async delete(req: Request, res: Response) {
    const consulta = await consultasService.delete(req.params.id);

    return res.status(200).json(consulta);
  }

  async findAll(req: Request, res: Response) {
    const consultas = await consultasService.findAll();

    return res.status(200).json(consultas);
  }
}

export default new ConsultasController();
