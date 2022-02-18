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
        <div class="flex">
          {{ card }}
          <div v-if="total_execucao === true">
            <span v-if="this.ObjConteudo.itens.length >= 1">
              ({{ this.ObjConteudo.itens.length }})
            </span>
          </div>
          <div v-if="total_tempo === false">
            <span v-if="this.ObjConteudo.itens.length >= 1">
              Minutos: ({{ this.duracaoTotal }})
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
    <q-card-section class="corpo" :style="{ height: `${this.alturaCorpo}` }">
      <div>
        <div
          v-for="(itens, indexitem) in this.ObjConteudo.itens"
          :key="indexitem"
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
            <span style="font-weight: 500">Não possui itens...</span>
          </div>
          <div
            class="flex justify-between items-center q-my-none hover"
            style="padding: 10px"
          >
            <a
              @click.prevent="abrirItem(indexitem)"
              class="cursor"
              style="max-width: 80%"
            >
              {{ itens.descricao }}
            </a>

            <div class="flex justify-end items-center">
              <!--duracao-->
              <p
                v-if="mostrar_qtde === true || mostrar_duracao === true"
                class="text-blue-grey-7"
                style="font-size: 12.5px"
              >
                <q-icon name="av_timer" />
                {{ this.formataCaptionItem(itens.qtde, itens.duracao) }}
              </p>
              <!--img-->
              <div class="flex" v-if="campo_imagem === true">
                <div v-if="itens.lista.length > 1" class="flex">
                  <!--<q-icon
                    :name="this.icon"
                    size="1em"
                    style="margin: 10px 0px 0px 10px; cursor: pointer"
                    @click="mostrarColaboradores()"
                  />-->
                  <q-btn
                    size="11px"
                    unelevated
                    round
                    color="primary"
                    style="margin-left: 10px"
                    @click="mostrarColaboradores(indexitem)"
                  >
                    +{{ itens.lista.length - 1 }}
                  </q-btn>

                  <q-avatar
                    size="32px"
                    style="margin-left: 8px"
                    v-show="mostrarColaborador === true"
                  >
                    <img :src="require(`../../assets/${itens.lista[0]}.png`)" />
                  </q-avatar>

                  <div v-show="mostrarColaborador === false" class="flex">
                    <div
                      class="flex"
                      v-for="(listas, indexitem) in itens.lista"
                      :key="indexitem"
                    >
                      <div
                        v-for="(colaborador, indexitem) in this.ObjColaborador"
                        :key="indexitem"
                      >
                        <div
                          v-if="colaborador.id_colaborador === listas"
                          class="flex"
                        >
                          <q-avatar size="32px" style="margin-left: 8px">
                            <img :src="require(`../../assets/${listas}.png`)" />
                          </q-avatar>
                          <q-tooltip class="capitalize">{{
                            colaborador.usuario
                          }}</q-tooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="flex"
                  v-for="(listas, indexitem) in itens.lista"
                  :key="indexitem"
                >
                  <div
                    v-for="(colaborador, indexitem) in this.ObjColaborador"
                    :key="indexitem"
                  >
                    <div
                      v-if="colaborador.id_colaborador === listas"
                      class="flex"
                    >
                      <div v-if="itens.lista.length <= 1">
                        <q-avatar size="32px" style="margin-left: 8px">
                          <img :src="require(`../../assets/${listas}.png`)" />
                        </q-avatar>
                        <q-tooltip class="capitalize">{{
                          colaborador.usuario
                        }}</q-tooltip>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="width: 95%; margin-left: 15px">
            <q-separator />
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import controllerCardApi from "app/src/commands/controller/controllerCardListaApi";
export default {
  mixins: [controllerCardApi],
  props: [
    "idPrincipal",
    "conteudo_card",
    "card",
    "btn_comando",
    "cor_header",
    "formato_card",
    "msg",
    "link",
    "width",
    "height",
    "total_execucao",
    "mostrar_qtde",
    "mostrar_duracao",
    "campo_imagem",
    "total_tempo",
  ],
  data() {
    return {
      mostrarColaborador: null,
      //icon: "arrow_back_ios",
      //mostrarImg: false,
    };
  },
  methods: {
    mostrarColaboradores(indexitem) {
      this.mostrarColaborador = !this.mostrarColaborador;
      console.log(indexitem);
      return indexitem;
    },
  },
  created() {
    this.mostrarColaborador = true;
  },
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
.cursor {
  cursor: pointer;
  color: rgb(19, 100, 175);
  font-weight: 500;
}
.corpo {
  padding: 0;
  margin: 0px auto;
  height: 200px;
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
/*@media only screen and (max-width: 500px) {
  .my-card-syclus {
    min-height: 200px;
  }
}*/
</style>
