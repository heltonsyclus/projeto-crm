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
      <div>
        <div>
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
            style="width: 85%; margin: 0px auto"
            class="flex justify-between items-center q-mt-md"
          >
            <q-avatar
              style="margin-top: 10px"
              size="32px"
              color="grey-5"
              text-color="dark"
              icon="chevron_left"
              @click.prevent="voltarIndex()"
            />

            <div class="column centralizar" style="text-align: center">
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
              <span
                class="q-px-xl q-pt-md"
                style="font-weight: 500; color: #7e7d7d; width: 220px"
              >
                {{ this.descricao }}
              </span>
              <p style="font-weight: 700; color: #7e7d7d; font-size: 40px">
                {{ this.duracao }}
              </p>
            </div>

            <q-avatar
              style="margin-top: 10px"
              size="32px"
              color="grey-5"
              text-color="dark"
              icon="navigate_next"
              @click.prevent="proximoIndex()"
            />
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
  ],
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.centralizar {
  height: 13em;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
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
