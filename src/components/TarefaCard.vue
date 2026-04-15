<template>
  <div @click="emit('click')" class="cursor-pointer q-mb-sm">
    <q-card class="tarefa-card bg-white text-dark" flat bordered>
      <q-card-section class="q-pa-md">
        <div class="text-subtitle1 text-weight-bold q-mb-xs">{{ title }}</div>
        <div v-if="descricao" class="text-caption text-grey-8 description-text">{{ descricao }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  descricao: string;
}

withDefaults(defineProps<Props>(), {
  title: '',
  descricao: '',
});

const emit = defineEmits(['click']);
</script>

<style scoped>
.tarefa-card {
  border-radius: 8px;
  transition: all 0.2s ease;
  border-left: 4px solid var(--q-primary);
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}
.tarefa-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  border-left: 4px solid var(--q-accent);
}
.description-text {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
