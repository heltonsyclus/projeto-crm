<template>
  <q-card
    class="my-card-syclus"
    flat
    bordered
    :style="{ width: `${width}`, height: `${this.alturaCard}` }"
  >
    <q-item class="items-center topo-fixo" :class="cor_header" dense="dense">
      <q-item-section
        style="height: 40px; font-weight: 700; color: White; padding-left: 10px"
      >
        {{ card }}
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
    <q-card-section class="corpo" :style="{ height: `${this.alturaCorpo}` }">
      <div class="text-dark">
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
            padding-top: 20px;
            color: red;
          "
        >
          <span>Não possui grupos...</span>
        </div>
        <q-list class="rounded-borders bg-grey-1 q-mb-md q-my-none margin-bot">
          <q-expansion-item
            dense-toggle
            expand-separator
            v-for="(grupos, indexGrupo) in this.ObjConteudo.grupos"
            :key="indexGrupo"
            @before-show="showItem(indexGrupo)"
            icon="corporate_fare"
            :label="grupos.grupo"
            header-class="text-deep-purple-10"
            :caption="this.formataCaptionGrupo(grupos.qtde, grupos.duracao)"
            :caption-lines="1"
          >
            <q-card>
              <q-card-section
                v-for="(itens, indexItem) in this.ObjConteudo.grupos[indexGrupo]
                  .itens"
                :key="indexItem"
              >
                <div
                  class="text-light-blue-9 flex justify-between items-center"
                >
                  <a
                    @click.prevent="abrirItem(indexGrupo, indexItem)"
                    class="q-pt-md pl text-class"
                    style="width: 251px"
                  >
                    <strong class="capitalize">{{ itens.item }}</strong>
                  </a>
                  <q-btn
                    color="dark"
                    round
                    flat
                    icon="more_vert"
                    class="items-center"
                  >
                    <q-menu cover auto-close style="pading: 0px 5px">
                      <q-list>
                        <q-item clickable>
                          <q-item-section
                            @click.prevent="abrirItem(indexGrupo, indexItem)"
                            >Abrir</q-item-section
                          >
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-btn>
                </div>
                <div style="width: 95%; margin-left: 15px">
                  <q-separator />
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
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
.corpo {
  padding: 0;
  margin: 0px auto;
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
/*@media only screen and (max-width: 500px) {
  .my-card-syclus {
    min-height: 200px;
  }
}*/
</style>
