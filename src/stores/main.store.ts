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
    id: 0,
    titulo: '',
    descricao: '',
    statusId: 0,
  });

  const dialog = ref<boolean>(false);

  const openDialog = (index: number) => {
    tarefa.value.statusId = index;
    dialog.value = true;
  };

  const closeDialog = () => {
    dialog.value = false;
    tarefa.value = {
      id: 0,
      titulo: '',
      descricao: '',
      statusId: 0,
    };
  };

  const adicionaTarefa = (tarefa: Tarefas) => {
    const statusEncontrado = statusList.value.find((s) => s.id === tarefa.statusId);

    if (tarefa.id) {
      const index = statusEncontrado?.tarefas.findIndex((t) => t.id === tarefa.id);
      if (index !== undefined && index !== -1) {
        statusEncontrado?.tarefas.splice(index, 1);
      }
    }

    if (statusEncontrado) {
      tarefa.id = statusEncontrado.tarefas.length + 1;
      statusEncontrado.tarefas.push(tarefa);
    }
    closeDialog();
  };

  const editaTarefa = (tarefaedit: Tarefas) => {
    tarefa.value = { ...tarefaedit };
    dialog.value = true;
  };

  return {
    tarefa,
    status,
    dialog,
    editaTarefa,
    statusList,
    openDialog,
    closeDialog,
    adicionaTarefa,
  };
});
