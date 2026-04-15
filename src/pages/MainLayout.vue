<template>
  <q-layout class="bg-blue-grey-1">
    <q-header class="bg-white text-dark shadow-1">
      <q-toolbar class="q-py-sm">
        <q-icon name="view_kanban" size="md" color="primary" class="q-mr-sm" />
        <q-toolbar-title class="text-h6 text-weight-bold"> Quadro de Tarefas </q-toolbar-title>
        <q-btn flat round icon="add" color="primary" @click="dialog = true" v-if="false" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="q-pa-lg">
        <div class="row q-col-gutter-lg justify-start items-start">
          <div class="col-12 col-md-4 col-lg-3" v-for="status in statusList" :key="status.id">
            <StatusCard :status="status" @click="openDialog(status.id)">
              <draggable
                v-model="status.tarefas"
                group="tarefas"
                item-key="id"
                class="min-h-[50px]"
                @start="drag = true"
                @end="drag = false"
              >
                <template #item="{ element: tarefa }">
                  <div @click="editaTarefa(tarefa)" class="cursor-pointer q-mb-sm">
                    <TarefaCard :title="tarefa.titulo" :descricao="tarefa.descricao ?? ''" />
                  </div>
                </template>
              </draggable>
            </StatusCard>
          </div>
        </div>
      </q-page>
    </q-page-container>
    <AdicionaTarefaDialog v-model="dialog" :layout="dialog" @update:layout="closeDialog" />
  </q-layout>
</template>

<script setup lang="ts">
import StatusCard from 'src/components/StatusCard.vue';
import AdicionaTarefaDialog from 'src/components/AdicionarTarefaDialog.vue';
import TarefaCard from 'src/components/TarefaCard.vue';
import { useMainStore } from 'src/stores/main.store';
import { storeToRefs } from 'pinia';
import draggable from 'vuedraggable';
import { ref } from 'vue';

const drag = ref(false);

const store = useMainStore();

const { statusList, dialog } = storeToRefs(store);

const { openDialog, closeDialog, editaTarefa } = store;
</script>
