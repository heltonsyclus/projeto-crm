<template>
  <q-card
    class="my-card-syclus"
    flat
    bordered
    :style="{ width: `${width}`, height: `${height}` }"
  >
    <q-item class="items-center topo-fixo" :class="cor_header" dense="dense">
      <q-item-section
        style="height: 40px; font-weight: 700; color: White; padding-left: 10px"
      >
        <div class="flex">
          {{ card }}
          <div v-if="totalizar_grupo === true">
            <span v-if="this.ObjConteudo.itens.length >= 1">
              ({{ this.ObjConteudo.itens.length }})
            </span>
          </div>
        </div>
      </q-item-section>
      <q-btn
        v-if="btn_comando === 'btn-atualizar'"
        round
        flat
        text-color="white"
        icon="autorenew"
        @click.prevent="atualizarConteudo"
      >
      </q-btn>
    </q-item>
    <q-card-section class="corpo">
      <div
        v-for="(grupos, indexGrupo) in this.ObjConteudo.grupos"
        :key="indexGrupo"
      >
        <div class="spin" style="width: 230px" v-show="carregarKnob">
          <q-knob
            v-model="value"
            size="30px"
            :thickness="0.4"
            color="primary"
            track-color="cyan-3"
          />
        </div>
        <div
          v-show="carregarText"
          style="
            margin: 0 auto;
            text-align: center;
            padding-top: 80px;
            color: gray;
          "
        >
          <span style="font-weight: 500">Não possui grupos...</span>
        </div>
        <div style="padding: 10px" class="hover">
          <strong class="text-dark">
            {{ "Nome da empresa" }}
          </strong>
          <div class="flex justify-between items-center">
            <p class="text-blue-grey-7" style="font-size: 12px">
              Tempo em assistência:
            </p>
            <p>{{ "200" }} min</p>
          </div>
          <div class="flex justify-between items-center q-my-none">
            <p class="text-blue-grey-7" style="font-size: 12px">
              Tempo em utilizado:
            </p>
            <p>{{ "180" }} min</p>
          </div>
          <div class="flex justify-between items-center q-my-none bg-positive">
            <p style="font-size: 12px">Tempo restante:</p>
            <p>{{ "20" }} min</p>
          </div>
        </div>
        <div style="width: 95%; margin-left: 15px">
          <q-separator />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import controllerCardGrupoApi from "app/src/commands/controller/controllerCardGrupoApi";
export default {
  mixins: [controllerCardGrupoApi],
  props: [
    "idPrincipal",
    "conteudo_card",
    "card",
    "btn_comando",
    "cor_header",
    "formato_card",
    "msg",
    "link_item",
    "width",
    "height",
    "totalizar_grupo",
  ],
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.margin-bot {
  margin-bottom: 3px;
}
.pl {
  padding-left: 5px;
}
.hover:hover {
  background-color: rgb(205, 205, 205);
}
.my-card-s {
  width: 450px;
}
.corpo {
  padding: 0;
  margin: 0px auto;
  max-height: 250px;
  overflow: auto;
}
.text-class {
  font-weight: 400;
  font-style: italic;
  padding-left: 15px;
  width: 90%;
  cursor: pointer;
}
.text-class:hover {
  color: rgb(11, 187, 218);
  transition: 0.5s;
}
.spin {
  text-align: center;
  margin: 30px auto;
  animation: spins 1s infinite;
}

@keyframes spins {
  to {
    transform: rotate(360deg);
  }
}
@media only screen and (max-width: 1320px) {
  .my-card-syclus {
    width: 350px;
  }
}
</style>
