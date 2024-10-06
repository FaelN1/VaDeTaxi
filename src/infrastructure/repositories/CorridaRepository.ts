import { ICorridaRepository } from '../../application/interfaces/ICorridaRepository';
import { Corrida } from '../../domain/entities/Corrida';
import prisma from '../database/sqlite';
import { CorridaStatus } from '../../domain/valueObjects/CorridaStatus';

export class CorridaRepository implements ICorridaRepository {
  public async create(corrida: Corrida): Promise<Corrida> {
    const result = await prisma.corrida.create({
      data: {
        usuarioId: corrida.usuarioId,
        origem: corrida.origem,
        destino: corrida.destino,
        status: corrida.status,
      },
    });

    return new Corrida(
      result.id,
      result.usuarioId,
      result.origem,
      result.destino,
      result.status as CorridaStatus,
      result.createdAt,
      result.updatedAt
    );
  }

  public async findById(id: number): Promise<Corrida | null> {
    const result = await prisma.corrida.findUnique({
      where: { id },
    });

    if (!result) {
      return null;
    }

    return new Corrida(
      result.id,
      result.usuarioId,
      result.origem,
      result.destino,
      result.status as CorridaStatus,
      result.createdAt,
      result.updatedAt
    );
  }

  public async cancel(id: number): Promise<Corrida> {
    const result = await prisma.corrida.update({
      where: { id },
      data: { status: CorridaStatus.CANCELADA },
    });

    return new Corrida(
      result.id,
      result.usuarioId,
      result.origem,
      result.destino,
      result.status as CorridaStatus,
      result.createdAt,
      result.updatedAt
    );
  }
}
