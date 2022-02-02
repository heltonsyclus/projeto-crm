<template>
  <div class="bg-grey-3 text-blue-8">
    <div class="barra">
      <div class="responsive-esquerda" @click="$emit('fecharPopUp')">
        <div class="tags">
          <q-tabs v-model="this.Tab" inline-label outside-arrows mobile-arrows>
            <q-tab
              dense
              v-for="(btn, index) in ConteudoBtn"
              :key="index"
              :name="btn.grupo"
              :label="btn.grupo"
              :icon="btn.icone"
              :id_grupo="btn.id_grupo"
              class="capitalize"
              @click.prevent="onclickGrupo(index)"
            />
          </q-tabs>
        </div>
        <div class="flex items-center" v-if="Aplicacao === 'Agenda'">
          <span
            class="capitalize q-ml-md text-blue-8"
            style="font-size: 15px; font-weight: 500"
          >
            {{ this.nomeMes }}</span
          >
          <q-btn flat class="capitalize q-ml-md" @click="$emit('hoje')">
            Hoje
          </q-btn>
          <q-btn unelevated style="margin: 2px" @click="$emit('voltar')">
            &lt;
          </q-btn>
          <q-btn unelevated style="margin: 2px" @click="$emit('adiantar')">
            &gt;
          </q-btn>
        </div>
      </div>
      <div class="responsive-direita q-pt-xs">
        <div v-if="Aplicacao === 'AplicativosPadrao'">
          <q-btn flat dense>
            <q-icon name="settings" />
            <q-menu auto-close class="flex" style="width: 345px">
              <q-item
                class="rounded-borders"
                clickable
                v-ripple.center
                style="width: 115px"
                v-for="(box, index) in ConteudoApp"
                :key="index"
              >
                <q-item-section style="text-align: center; margin: 0 auto">
                  <q-avatar
                    style="text-align: center; margin: 0 auto"
                    :icon="box.icone"
                    :color="box.cor"
                    text-color="white"
                  />
                  <q-item-label class="q-mt-sm">{{ box.card }} </q-item-label>
                </q-item-section>
              </q-item>
            </q-menu>
          </q-btn>
          <q-btn flat dense>
            <q-icon name="help_outline" class="q-mx-md" />
          </q-btn>
        </div>
        <div
          class="flex items-center"
          style="paddding: 10px 0px"
          v-if="Aplicacao === 'AplicativosPesquisa'"
        >
          <q-input
            v-model="pesquisaInput"
            style="width: 150px"
            dense
            class="q-ml-md"
            label="Pesquisa"
            v-show="pesquisa"
            @keyup.enter="InputValor"
          />
          <q-btn
            unelevated
            round
            color="primary"
            icon="search"
            class="q-mx-md"
            @click="pesquisa = true"
          />
          <q-btn
            unelevated
            round
            color="primary"
            icon="filter_list"
            class="q-mr-md"
            @click="$emit('onClickFiltros')"
          />
        </div>
        <div v-if="Aplicacao === 'AplicativosSalvar'">
          <q-btn
            unelevated
            round
            color="red"
            icon="close"
            class="q-mr-md"
            size="12px"
            to="/atividade"
          />
          <q-btn
            unelevated
            round
            color="primary"
            icon="save"
            class="q-mr-md"
            size="12px"
          />
        </div>
        <div class="flex items-center wrap" v-if="Aplicacao === 'Agenda'">
          <q-select
            filled
            v-model="calendarioEventos"
            dense
            class="q-mr-md"
            :options="statusEventos"
          >
          </q-select>
          <q-select
            v-model="calendarioAtual"
            dense
            :options="calendario"
            class="q-mr-md"
          />
        </div>
        <div class="flex items-center q-mr-md" v-if="Aplicacao === 'Select'">
          <p class="nome-bi-atual">{{ this.dashboardBInome }}</p>
          <q-btn
            flat
            round
            dense
            icon="apps"
            @click="$emit('abrirPopUp')"
            style="margin-top: 5px"
          />
        </div>
        <div
          class="flex items-center q-mr-md"
          v-if="Aplicacao === 'Select-filtro'"
        >
          <q-select
            v-model="valorModel"
            dense
            :options="this.valoresRecurso"
            @blur="mudar(this.valoresRecurso)"
            class="q-mr-md"
          />
          <q-btn
            unelevated
            round
            color="primary"
            icon="filter_list"
            size="12px"
          >
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: [
    "ConteudoBtn",
    "ConteudoApp",
    "Aplicacao",
    "nomeMes",
    "valoresRecurso",
  ],
  emits: ["abrirNotificacao", "abrirPopUp", "fecharPopUp"],
  name: "BarraLayout",
  setup() {
    const $store = useStore();
    const calendarioAtual = computed({
      get: () => $store.state.showcase.calendarioAtual,
      set: (val) => {
        $store.commit("showcase/selectAgenda", val);
      },
    });
    const calendarioEventos = computed({
      get: () => $store.state.showcase.calendarioEventos,
      set: (val) => {
        $store.commit("showcase/selectStatusAgenda", val);
      },
    });
    const valorRecurso = computed({
      get: () => $store.state.showcase.valorRecurso,
      set: (val) => {
        $store.commit("showcase/infRecursos", val);
      },
    });
    const dashboardBInome = computed({
      get: () => $store.state.showcase.dashboardBInome,
    });
    return {
      dashboardBInome,
      calendarioAtual,
      calendarioEventos,
      valorRecurso,
      tab: ref("mails"),
      pesquisa: ref(false),
      ResultWorkflow: ref([]),
      pesquisaInput: ref([]),
      pesquisaArray: ref([]),
      calendario: ref(["Mensal", "Semanal", "Diário"]),
      statusEventos: ref(["Todos", "Eventos", "Atividades"]),
    };
  },
  data() {
    return {
      ValorIndx: [],
      valorModel: "item",
      tags: ["SYCLUS 1.0", "SYCLUS 2.0", "CRM"],
      tipo: [
        "ADMINISTRATIVO",
        "ANALISE TECNICA",
        "COBRANCA",
        "COMERCIAL",
        "DESENVOLVIMENTO",
      ],
      colaborador: ["ADELMO", "DANILO", "HENRIQUE", "HELTON"],
    };
  },
  methods: {
    mudar(valoresRecurso) {
      for (
        let selectIndex = 0;
        selectIndex < valoresRecurso.length;
        selectIndex++
      ) {
        if (valoresRecurso[selectIndex] === this.valorModel) {
          this.$emit("valorInputPesquisa", selectIndex);
        }
      }
    },
    onclickGrupo(ValorIndex) {
      this.$emit("OnClick", ValorIndex);
      this.ValorIndx = ValorIndex;
    },
    tagsCard() {
      this.ResultWorkflow;
    },
    InputValor() {
      this.$emit("valorInputPesquisa", this.pesquisaInput);
      this.$emit("valorSelectPesquisa", this.pesquisaSelect);
    },
    validarValorRecurso() {
      if (this.valoresRecurso != null) {
        this.valorModel = this.valoresRecurso[0];
        this.$emit("valorInputPesquisa", 0);
      }
    },
    abrirPopUp() {
      this.popUp = true;
    },
  },
  computed: {
    Tab() {
      return this.ConteudoBtn[this.ValorIndx].grupo;
    },
  },
  watch: {
    dashboardBInome: {
      handler: function (newValue, oldValue) {
        if (newValue) {
          this.ValorIndx = 0;
        }
      },
      deep: true,
      immediate: true,
    },
  },
  created() {
    const json =
      '{"etapas":[{"titulo_etapa":"Filtro","id_etapa":1,"qtde_etapa":2,"componente_tela":[{"tipo_componente":"input_data","placeholder":"Período inicial"},{"tipo_componente":"input_data","placeholder":"Período final"},{"tipo_componente":"selecao_padrao","placeholder":"Avaliar","modelo":["Emissão","Previsão","Finalização"]},{"tipo_componente":"selecao_padrao","placeholder":"Situação","modelo":["Inicial","Planejamento","Execução","Finalizado"]},{"tipo_componente":"selecao_padrao","placeholder":"Tags","modelo":["Syclus 1","Syclus 2","Fiscal"]},{"tipo_componente":"selecao_padrao","placeholder":"Colaborador","modelo":["Henrique","Helton","Danilo"]}]},{"titulo_etapa":"Avançados","id_etapa":2,"qtde_etapa":2,"componente_tela":[{"tipo_componente":"selecao_padrao","placeholder":"OP","modelo":["E","OU"]},{"tipo_componente":"selecao_padrao","placeholder":"Campo","modelo":["Situação"]},{"tipo_componente":"selecao_padrao","placeholder":"Critério","modelo":["Contendo"]},{"tipo_componente":"input_texto","placeholder":"Valor"}]}]}';
    this.ResultWorkflow = JSON.parse(json);
    this.validarValorRecurso();
    this.tagsCard();
    this.onclickGrupo(0);
    return;
  },
});
</script>

<style scoped>
.barra {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}
.nome-bi-atual {
  margin: 7px 5px 0px 0px;
  color: rgb(233, 233, 233);
  font-weight: 500;
  padding: 2px 7px;
  font-size: 13px;
  border-radius: 10px;
  color: #3f3f3f;
  font-style: italic;
}
.responsive-esquerda {
  display: flex;
  max-width: 750px;
}
.tags {
  max-width: 1055px;
}
.hover:hover {
  background-color: rgb(205, 205, 205);
}
@media only screen and (max-width: 632px) {
  .barra {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .responsive-esquerda {
    width: 100%;
  }
  .responsive-direita {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
  }
}
@media only screen and (max-width: 1315px) {
  .responsive-esquerda {
    width: 100%;
  }
  .tags {
    max-width: 100%;
  }
}
</style>
