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
          <div v-if="totalizar_grupo === true">
            <span v-if="this.ObjConteudo.itens.length >= 1">
              ({{ this.ObjConteudo.itens.length }})
            </span>
          </div>
          <!--<div v-if="total_tempo === true">
            <span v-if="this.ObjConteudo.itens.length >= 1">
              Minutos: ({{ this.duracaoTotal }})
            </span>
          </div>-->
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
        <div v-for="(itemConteudo, i) in this.ObjConteudo.itens" :key="i">
          <div class="spin" style="width: 230px" v-if="carregarKnob">
            <q-knob
              v-model="value"
              size="30px"
              :thickness="0.4"
              color="primary"
              track-color="cyan-3"
            />
          </div>
          <div
            v-if="carregarText"
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
              @click.prevent="abrirItem(i)"
              class="cursor"
              style="max-width: 80%"
            >
              {{ itemConteudo.descricao }}
            </a>

            <div class="flex justify-end items-center">
              <!--duracao-->
              <p
                v-if="mostrar_qtde === true || mostrar_duracao === true"
                class="text-blue-grey-7"
                style="font-size: 12.5px"
              >
                <q-icon name="av_timer" />
                {{
                  this.formataCaptionItem(
                    itemConteudo.qtde,
                    itemConteudo.duracao
                  )
                }}
              </p>
              <!--img-->
              <div
                v-if="mostrar_imagem === true && itemConteudo.lista.length > 0"
                class="flex"
              >
                <q-btn
                  v-if="itemConteudo.lista.length > 1"
                  size="11px"
                  unelevated
                  round
                  color="primary"
                  style="margin-left: 10px"
                  @click="mostrarColaboradores(i)"
                >
                  <div v-if="itemConteudo.listaExpandida === false">+</div>
                  <div v-else>-</div>
                  {{ itemConteudo.lista.length - 1 }}
                </q-btn>
                <div v-for="(itemLista, j) in itemConteudo.lista" :key="j">
                  <div
                    class="flex"
                    v-if="j === 0 || itemConteudo.listaExpandida === true"
                  >
                    <!--
                    <q-avatar size="32px" style="margin-left: 8px">
                      <img :src="this.getImg(itemLista)" />
                    </q-avatar>
                    -->
                    <q-avatar size="32px" style="margin-left: 8px">
                      <img :src="this.getColaborador(itemLista).img" />
                    </q-avatar>
                    <q-tooltip class="capitalize">
                      {{ this.getColaborador(itemLista).usuario }}
                    </q-tooltip>
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
    </q-card-section>
  </q-card>
</template>

<script>
import controllerCardApi from "app/src/commands/controller/controllerCardListaApi";
import { GetUsuarioPorIdColaborador } from "../../commands/layouts/layoutColaborador";

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
    "totalizar_grupo",
    "mostrar_qtde",
    "mostrar_duracao",
    "mostrar_imagem",
    "total_tempo",
    "expandir_imagem",
  ],
  methods: {
    getColaborador(pIdColaborador) {
      let usuario = GetUsuarioPorIdColaborador(pIdColaborador);
      if (usuario === null) {
        usuario = {
          usuario: "colaborador " + pIdColaborador,
          id_colaborador: pIdColaborador,
          img: "",
        };
      }
      return usuario;
    },
    mostrarColaboradores(pIndexItem) {
      this.ObjConteudo.itens[pIndexItem].listaExpandida =
        !this.ObjConteudo.itens[pIndexItem].listaExpandida;
    },
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
