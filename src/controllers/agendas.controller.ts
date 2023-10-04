import { Request, Response } from 'express';

import AgendasService from '@/services/agendas.service';

class AgendasController {
  async create(req: Request, res: Response) {
    const agenda = await AgendasService.create(req.body);

    return res.status(200).json(agenda);
  }

  async findById(req: Request, res: Response) {
    const agenda = await AgendasService.findById(req.params.id);

    return res.status(200).json(agenda);
  }

  async update(req: Request, res: Response) {
    const agenda = await AgendasService.update(req.params.id, req.body);

    return res.status(200).json(agenda);
  }

  async delete(req: Request, res: Response) {
    const agenda = await AgendasService.delete(req.params.id);

    return res.status(200).json(agenda);
  }

  async findAll(req: Request, res: Response) {
    const agendas = await AgendasService.findAll();

    return res.status(200).json(agendas);
  }
}

export default new AgendasController();
