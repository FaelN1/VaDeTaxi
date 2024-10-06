// tests/unit/application/CreateCorridaUseCase.spec.ts

import { CreateCorridaUseCase } from '../../../src/application/usecases/CreateCorridaUseCase';
import { ICorridaRepository } from '../../../src/application/interfaces/ICorridaRepository';
import { Corrida } from '../../../src/domain/entities/Corrida';
import { CorridaStatus } from '../../../src/domain/valueObjects/CorridaStatus';

describe('CreateCorridaUseCase', () => {
  let corridaRepository: ICorridaRepository;
  let createCorridaUseCase: CreateCorridaUseCase;

  beforeEach(() => {
    corridaRepository = {
      create: jest.fn(),
      findById: jest.fn(),
      cancel: jest.fn(),
    };
    createCorridaUseCase = new CreateCorridaUseCase(corridaRepository);
  });

  it('should create a new corrida', async () => {
    const data = {
      usuarioId: 123,
      origem: 'Origin A',
      destino: 'Destination B',
    };

    const corrida = new Corrida(
      1,
      data.usuarioId,
      data.origem,
      data.destino,
      CorridaStatus.PENDENTE,
      new Date(),
      new Date()
    );

    (corridaRepository.create as jest.Mock).mockResolvedValue(corrida);

    const result = await createCorridaUseCase.execute(data);

    expect(corridaRepository.create).toHaveBeenCalledWith(expect.any(Corrida));
    expect(result).toEqual(corrida);
  });
});
