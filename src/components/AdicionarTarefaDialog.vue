<template>
  <q-dialog v-model="layout">
    <q-layout view="Lhh lpR fff" container class="text-dark">
      <q-header class="bg-primary">
        <q-toolbar>
          <q-toolbar-title>Adicionar uma Tarefa</q-toolbar-title>
          <q-btn flat v-close-popup round dense icon="close" />
        </q-toolbar>
      </q-header>

      <q-page-container>
        <div class="row">
          <div class="col-12 col-md-12">
            <q-input v-model="tarefa.titulo" label="Nome da Tarefa" />
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md-12">
            <q-input v-model="tarefa.descricao" label="Descrição" type="textarea" />
          </div>
        </div>

        <div v-if="!statusId" class="row">
          <div class="col-12 col-md-12">
            <q-select v-model="tarefa.statusId" :options="statusDisponiveis" label="Status" />
          </div>
        </div>
      </q-page-container>
    </q-layout>
  </q-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import type { Status } from 'src/interfaces/statusInterface';
import { useMainStore } from 'src/stores/main.store';

interface Props {
  statusId?: null;
  layout: boolean;
}

withDefaults(defineProps<Props>(), {
  statusId: null,
  layout: false,
});

const store = useMainStore();

const { tarefa, statusList } = storeToRefs(store);

const statusDisponiveis = computed(() =>
  statusList.value.map((status: Status) => ({
    label: status.titulo,
    value: status.id,
  })),
);
</script>
