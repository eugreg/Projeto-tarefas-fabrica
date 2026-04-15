<template>
  <q-dialog :model-value="layout" @update:model-value="(val) => emit('update:layout', val)">
    <q-card
      style="
        width: 450px;
        max-width: 90vw;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      "
    >
      <q-card-section
        class="bg-primary text-white row items-center q-pb-none"
        style="padding-bottom: 16px"
      >
        <div class="text-h6 text-weight-bold">
          {{ tarefa.id ? 'Visualizar Tarefa' : 'Adicionar uma Tarefa' }}
        </div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section class="q-pt-md">
        <div class="q-gutter-md">
          <q-input outlined v-model="tarefa.titulo" label="Nome da Tarefa" color="primary" />

          <q-input
            outlined
            v-model="tarefa.descricao"
            label="Descrição"
            type="textarea"
            color="primary"
          />

          <q-select
            outlined
            v-model="tarefa.statusId"
            :options="statusDisponiveis"
            label="Status"
            color="primary"
            emit-value
            map-options
          />
        </div>
      </q-card-section>

      <q-card-actions align="right" class="q-pa-md">
        <q-btn
          flat
          v-close-popup
          label="Cancelar"
          color="grey-8"
          class="q-px-md"
          style="border-radius: 8px"
        />
        <q-btn
          unelevated
          class="bg-primary text-white q-px-md"
          style="border-radius: 8px"
          @click="adicionaTarefa(tarefa)"
          :label="tarefa.id ? 'Salvar' : 'Adicionar'"
        />
      </q-card-actions>
    </q-card>
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
  layout: false,
});

const emit = defineEmits<{
  (e: 'update:layout', value: boolean): void;
}>();

const store = useMainStore();
const { tarefa, statusList } = storeToRefs(store);
const { adicionaTarefa } = store;

const statusDisponiveis = computed(() =>
  statusList.value.map((status: Status) => ({
    label: status.titulo,
    value: status.id,
  })),
);
</script>
