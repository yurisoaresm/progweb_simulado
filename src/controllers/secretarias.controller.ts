import { Request, Response } from 'express';

import secretariasService from '@/services/secretarias.service';

class SecretariasController {
  async create(req: Request, res: Response) {
    const secretaria = await secretariasService.create(req.body);

    return res.status(200).json(secretaria);
  }

  async findById(req: Request, res: Response) {
    const secretaria = await secretariasService.findById(req.params.id);

    return res.status(200).json(secretaria);
  }

  async update(req: Request, res: Response) {
    const secretaria = await secretariasService.update(req.params.id, req.body);

    return res.status(200).json(secretaria);
  }

  async delete(req: Request, res: Response) {
    const secretaria = await secretariasService.delete(req.params.id);

    return res.status(200).json(secretaria);
  }

  async findAll(req: Request, res: Response) {
    const secretarias = await secretariasService.findAll();

    return secretarias;
  }
}

export default new SecretariasController();
