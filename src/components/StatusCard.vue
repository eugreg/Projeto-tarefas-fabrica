<template>
  <div>
    <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">{{ status.titulo }}</div>
      </q-card-section>

      <q-card-section>
        <slot />
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat @click="emit('click')">Nova Tarefa</q-btn>
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
