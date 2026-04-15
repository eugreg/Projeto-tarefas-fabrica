import { defineStore, acceptHMRUpdate } from 'pinia';
import { ref } from 'vue';
import type { Status } from '../interfaces/statusInterface';
import type { Tarefas } from 'src/interfaces/tarefasInterface';

export const useMainStore = defineStore('mainStore', () => {
  const status = ref<Status>({
    id: 0,
    titulo: '',
    tarefas: [] as Tarefas[],
  });

  const statusList = ref<Status[]>([]);

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
