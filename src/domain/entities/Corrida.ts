import { CorridaStatus } from '../valueObjects/CorridaStatus';

export class Corrida {
  public id: number;
  public usuarioId: number;
  public origem: string;
  public destino: string;
  public status: CorridaStatus;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(
    id: number,
    usuarioId: number,
    origem: string,
    destino: string,
    status: CorridaStatus,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.usuarioId = usuarioId;
    this.origem = origem;
    this.destino = destino;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
