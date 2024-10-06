// tests/unit/domain/Corrida.spec.ts

import { Corrida } from '../../../src/domain/entities/Corrida';
import { CorridaStatus } from '../../../src/domain/valueObjects/CorridaStatus';

describe('Corrida Entity', () => {
  it('should create a Corrida entity correctly', () => {
    const corrida = new Corrida(
      1,
      123,
      'Origin A',
      'Destination B',
      CorridaStatus.PENDENTE,
      new Date(),
      new Date()
    );

    expect(corrida).toHaveProperty('id', 1);
    expect(corrida).toHaveProperty('usuarioId', 123);
    expect(corrida).toHaveProperty('origem', 'Origin A');
    expect(corrida).toHaveProperty('destino', 'Destination B');
    expect(corrida).toHaveProperty('status', CorridaStatus.PENDENTE);
  });
});
