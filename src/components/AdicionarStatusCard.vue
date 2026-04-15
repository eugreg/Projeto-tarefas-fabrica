<template>
  <div style="min-width: 320px; max-width: 320px">
    <q-card
      v-if="!isAdicionar"
      flat
      class="bg-blue-grey-2 cursor-pointer hover:bg-blue-grey-3 transition"
      style="border-radius: 8px"
      @click="isAdicionar = true"
    >
      <q-card-section class="q-pa-sm row items-center text-weight-medium text-grey-8">
        <q-icon name="add" size="sm" class="q-mr-sm" />
        Adicionar Status
      </q-card-section>
    </q-card>

    <q-card v-else flat bordered class="bg-grey-3 q-pa-sm" style="border-radius: 8px">
      <q-input
        outlined
        bg-color="white"
        v-model="status.titulo"
        placeholder="Insira o título da lista..."
        dense
        autofocus
        @keyup.enter="adicionaStatus"
        @keyup.esc="isAdicionar = false"
      />
      <div class="row q-mt-sm items-center">
        <q-btn label="Adicionar lista" color="primary" unelevated @click="adicionaStatus" />
        <q-btn
          icon="close"
          flat
          round
          dense
          class="q-ml-sm text-grey-7"
          @click="isAdicionar = false"
        />
      </div>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from 'src/stores/main.store';
import { storeToRefs } from 'pinia';

const store = useMainStore();
const { isAdicionar, status } = storeToRefs(store);
const { adicionaStatus } = store;
</script>
