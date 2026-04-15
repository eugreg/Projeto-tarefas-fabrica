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
  const isAdicionar = ref<boolean>(false);

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
    removeTarefa(tarefa);

    const statusDestino = statusList.value.find((s) => s.id === tarefa.statusId);

    if (statusDestino) {
      tarefa.id = tarefa.id ?? Date.now();
      statusDestino.tarefas.push(tarefa);
    }

    closeDialog();
  };

  const adicionaStatus = () => {
    status.value.id = status.value.id ?? Date.now();
    statusList.value.push(status.value);
    isAdicionar.value = false;
    status.value = {
      id: 0,
      titulo: '',
      tarefas: [] as Tarefas[],
    };
  };

  const removeTarefa = (tarefa: Tarefas) => {
    statusList.value.forEach((status) => {
      const index = status.tarefas.findIndex((t) => t.id === tarefa.id);
      if (index !== -1) {
        status.tarefas.splice(index, 1);
      }
    });
  };

  const editaTarefa = (tarefaedit: Tarefas) => {
    tarefa.value = { ...tarefaedit };
    dialog.value = true;
  };

  return {
    tarefa,
    status,
    dialog,
    isAdicionar,
    editaTarefa,
    statusList,
    openDialog,
    closeDialog,
    adicionaTarefa,
    adicionaStatus,
  };
});
