import { ICorridaRepository } from '../interfaces/ICorridaRepository';
import { CorridaStatus } from '../../domain/valueObjects/CorridaStatus';

export class CancelCorridaUseCase {
  private corridaRepository: ICorridaRepository;

  constructor(corridaRepository: ICorridaRepository) {
    this.corridaRepository = corridaRepository;
  }

  public async execute(id: number): Promise<void> {
    const corrida = await this.corridaRepository.findById(id);

    if (!corrida) {
      throw new Error('Corrida not found');
    }

    if (corrida.status === CorridaStatus.CANCELADA) {
      throw new Error('Corrida is already canceled');
    }

    await this.corridaRepository.cancel(id);
  }
}
