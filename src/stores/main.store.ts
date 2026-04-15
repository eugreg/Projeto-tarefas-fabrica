import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Status } from '../interfaces/statusInterface';
import type { Tarefas } from 'src/interfaces/tarefasInterface';

export const useMainStore = defineStore('mainStore', () => {
  const status = ref<Status>({
    id: 0,
    titulo: '',
    tarefas: [] as Tarefas[],
  });

  const statusList = ref<Status[]>([
    {
      id: 1,
      titulo: 'A Fazer',
      tarefas: [],
    },
    {
      id: 2,
      titulo: 'Em Andamento',
      tarefas: [],
    },
    {
      id: 3,
      titulo: 'Concluído',
      tarefas: [],
    },
  ]);

  const tarefa = ref<Tarefas>({
    titulo: '',
    descricao: '',
    statusId: 0,
  });

  const adicionaTarefa = (tarefa: Tarefas) => {
    const statusEncontrado = statusList.value.find((s) => s.id === tarefa.statusId);

    if (statusEncontrado) {
      statusEncontrado.tarefas.push(tarefa);
    }
  };

  return {
    tarefa,
    status,
    statusList,
    adicionaTarefa,
  };
});
