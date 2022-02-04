<template>
  <q-list class="my-card-m">
    <div class="flex justify-end" style="padding: 20px">
      <q-icon
        name="close"
        class="text-red"
        style="font-size: 2rem; cursor: pointer"
        @click="$emit('close')"
      />
    </div>
    <q-item
      clickable
      v-ripple
      :active="active"
      v-for="(list, index) in linksList"
      :key="index"
      :to="list.rota"
      style="padding: 15px"
    >
      <q-item-section avatar>
        <q-icon :name="list.icon" size="25px" />
      </q-item-section>
      <q-item-section style="font-weight: 500">{{ list.text }}</q-item-section>
      <!-- <q-icon name="expand_more" size="25px" />-->
    </q-item>
  </q-list>
</template>
<script>
import { ref } from "vue";
import { rotasMenu } from "app/src/commands/menuRotas/rotasMenu";

export default {
  emits: ["close"],
  mixins: [rotasMenu],
  setup() {
    return {
      active: ref(true),
      model: ref(""),
      grupos: ref([]),
      input: ref(false),
      linksList: [],
    };
  },
  created() {
    let login = JSON.parse(localStorage.getItem("login"));
    for (let i = 0; i < login.aplicativos.length; i++) {
      let rotas = login.aplicativos[i].recursos;
      this.liberacaoRotas(rotas);
      break;
    }
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.my-card-m {
  position: absolute;
  top: 0;
  left: 0;
  overflow: auto;
  width: 284px;
  min-height: 100vh;
  background-color: rgb(248, 248, 248);
}
.hover:hover {
  background-color: rgb(126, 182, 255);
}
</style>
