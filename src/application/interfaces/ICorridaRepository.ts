import { Corrida } from '../../domain/entities/Corrida';

export interface ICorridaRepository {
  create(corrida: Corrida): Promise<Corrida>;
  findById(id: number): Promise<Corrida | null>;
  cancel(id: number): Promise<Corrida>;
}
