<template>
  <q-dialog :model-value="layout" @update:model-value="(val) => emit('update:layout', val)">
    <q-layout view="Lhh lpR fff" container class="text-dark">
      <q-header class="bg-primary">
        <q-toolbar>
          <q-toolbar-title>Adicionar uma Tarefa</q-toolbar-title>
          <q-btn flat v-close-popup round dense icon="close" />
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page class="q-pa-md">
          <div class="q-gutter-md">
            <q-input v-model="tarefa.titulo" label="Nome da Tarefa" />

            <q-input v-model="tarefa.descricao" label="Descrição" type="textarea" />

            <q-select
              v-if="statusId === null || statusId === undefined"
              v-model="tarefa.statusId"
              :options="statusDisponiveis"
              label="Status"
            />
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </q-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import type { Status } from 'src/interfaces/statusInterface';
import { useMainStore } from 'src/stores/main.store';

// Props
interface Props {
  statusId?: number | null;
  layout: boolean;
}

withDefaults(defineProps<Props>(), {
  statusId: null,
  layout: false,
});

const emit = defineEmits<{
  (e: 'update:layout', value: boolean): void;
}>();

const store = useMainStore();
const { tarefa, statusList } = storeToRefs(store);

const statusDisponiveis = computed(() =>
  statusList.value.map((status: Status) => ({
    label: status.titulo,
    value: status.id,
  })),
);
</script>
