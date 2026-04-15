<template>
  <div class="status-column q-px-sm">
    <q-card class="status-card bg-grey-2" flat bordered>
      <q-card-section class="status-header bg-grey-3 text-dark q-pa-sm">
        <div class="text-subtitle1 text-weight-bold flex items-center q-px-sm">
          <q-icon name="list" size="sm" class="q-mr-sm text-primary" />
          {{ status.titulo }}
          <q-space />
          <q-badge color="grey-6" class="text-white rounded-borders q-px-sm">{{ status.tarefas?.length || 0 }}</q-badge>
        </div>
      </q-card-section>

      <q-card-section class="q-pa-sm" style="min-height: 100px;">
        <div class="tasks-container column">
          <slot />
        </div>
      </q-card-section>

      <q-card-actions class="bg-grey-2 q-pa-sm">
        <q-btn flat color="grey-8" icon="add" class="full-width text-weight-medium rounded-borders justify-start" @click="emit('click')">
          <span class="q-ml-sm">Nova Tarefa</span>
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import type { Status } from 'src/interfaces/statusInterface';

interface Props {
  status: Status;
}

const emit = defineEmits(['click']);

withDefaults(defineProps<Props>(), {
  status: () => ({
    titulo: '',
    tarefas: [],
    id: 0,
  }),
});
</script>
