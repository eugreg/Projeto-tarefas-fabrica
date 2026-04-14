import { Tarefas } from './tarefasInterface';

export interface Status {
  id: number;
  titulo: string;
  tarefas: Tarefas[];
}
