<template>
  <q-layout>
    <q-page-container>
      <q-page class="q-pa-md">
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-4" v-for="status in statusList" :key="status.id">
            <StatusCard :status="status" @click="adicionaTarefa" />
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import StatusCard from 'src/components/StatusCard.vue';
import { useMainStore } from 'src/stores/main.store';
import { storeToRefs } from 'pinia';

const store = useMainStore();

const { statusList } = storeToRefs(store);

const { adicionaTarefa } = store;
</script>
