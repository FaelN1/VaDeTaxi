import { Request, Response, NextFunction } from 'express';
import { CreateCorridaUseCase } from '../../application/usecases/CreateCorridaUseCase';
import { CancelCorridaUseCase } from '../../application/usecases/CancelCorridaUseCase';
import { CorridaRepository } from '../../infrastructure/repositories/CorridaRepository';
import AppError from '../../shared/errors/AppError'; // Ensure this path is correct or update it to the correct path

export class CorridaController {
  private createCorridaUseCase: CreateCorridaUseCase;
  private cancelCorridaUseCase: CancelCorridaUseCase;

  constructor() {
    const corridaRepository = new CorridaRepository();
    this.createCorridaUseCase = new CreateCorridaUseCase(corridaRepository);
    this.cancelCorridaUseCase = new CancelCorridaUseCase(corridaRepository);
  }

  public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { usuarioId, origem, destino } = req.body;
      const corrida = await this.createCorridaUseCase.execute({ usuarioId, origem, destino });
      res.status(201).json(corrida);
    } catch (error) {
      if (error instanceof Error) {
        if (error instanceof Error) {
          next(new AppError(error.message, 400));
        } else {
          next(new AppError('Unknown error', 400));
        }
      } else {
        next(new AppError('Unknown error', 400));
      }
    }
  }

  public async cancel(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      await this.cancelCorridaUseCase.execute(Number(id));
      res.status(200).json({ message: 'Corrida successfully canceled' });
    } catch (error) {
      if (error instanceof Error) {
        if (error instanceof Error) {
          next(new AppError(error.message, 400));
        } else {
          next(new AppError('Unknown error', 400));
        }
      } else {
        next(new AppError('Unknown error', 400));
      }
    }
  }
}
