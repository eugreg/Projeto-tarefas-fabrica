<template>
  <div>
    <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">{{ title }}</div>
      </q-card-section>

      <q-card-section>
        <slot />
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat @click="onClick()">Nova Tarefa</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Todo, Meta } from './models';

interface Props {
  title: string;
  descricao: string;
  onClick: () => void;
  active: boolean;
}
</script>
