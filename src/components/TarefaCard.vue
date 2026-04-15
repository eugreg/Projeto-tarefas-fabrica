<template>
  <div @click="emit('click')">
    <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">{{ title }}</div>
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
