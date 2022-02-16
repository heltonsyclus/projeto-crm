<template>
  <div class="col2">
    <BarraLayout
      @OnClick="OnClickBarraLayout"
      :ConteudoBtn="this.ObjDashboard['grupos']"
      Aplicacao="Select"
      @abrirPopUp="popUps"
      @fecharPopUp="fecharPOpUp"
    />
    <cardpopup
      :objLayoutBI="this.dashboardsColaboradorAtivo"
      class="tela-popup"
      @valorIndexLayout="valorIndexLayouts"
      v-show="popUp"
    />
    <div class="row" @click="fecharPOpUp()">
      <div
        v-for="ObjCard in this.ObjDashboard.grupos[this.IndexGrupoAtual].cards"
        :key="ObjCard"
        style="margin: 5px; margin-bottom: 5px"
      >
        <CardComparativoApi
          v-if="ObjCard.tipo_card === 'CardComparativoApi'"
          class="q-ma-xs"
          :id="ObjCard.id_card"
          :card="ObjCard.card"
          :ordem="ObjCard.ordem"
          cor_header="bg-primary"
          topo_fixo="topo_fixo"
          :height="ObjCard.height"
          :style="{ width: `${ObjCard.width}` }"
          :btn_comando="ObjCard.btn_comando"
          :tipo_card="ObjCard.tipo_card"
          :sub_tipo="ObjCard.sub_tipo"
          :conteudo_card="ObjCard.conteudo_card"
          :total_execucao="ObjCard.total_execucao"
          :link_item="ObjCard.link_item"
          :idPrincipal="this.idColaboradorAtivo"
          :msg="this.msgCard"
        />
        <CardGrupoApi
          v-if="ObjCard.tipo_card === 'CardGrupoApi'"
          class="q-ma-xs"
          :id="ObjCard.id_card"
          :card="ObjCard.card"
          :ordem="ObjCard.ordem"
          cor_header="bg-primary"
          topo_fixo="topo_fixo"
          :height="ObjCard.height"
          :style="{ width: `${ObjCard.width}` }"
          :btn_comando="ObjCard.btn_comando"
          :tipo_card="ObjCard.tipo_card"
          :sub_tipo="ObjCard.sub_tipo"
          :conteudo_card="ObjCard.conteudo_card"
          :total_execucao="ObjCard.total_execucao"
          :mostrar_qtde="ObjCard.mostrar_qtde"
          :link_item="ObjCard.link_item"
          :idPrincipal="this.idColaboradorAtivo"
          :msg="this.msgCard"
        />

        <CardEmpresaApi
          v-if="ObjCard.tipo_card === 'CardEmpresaApi'"
          class="q-ma-xs"
          :id="ObjCard.id_card"
          :card="ObjCard.card"
          :ordem="ObjCard.ordem"
          cor_header="bg-primary"
          topo_fixo="topo_fixo"
          :height="ObjCard.height"
          :style="{ width: `${ObjCard.width}` }"
          :btn_comando="ObjCard.btn_comando"
          :tipo_card="ObjCard.tipo_card"
          :sub_tipo="ObjCard.sub_tipo"
          :conteudo_card="ObjCard.conteudo_card"
          :total_execucao="ObjCard.total_execucao"
          :mostrar_qtde="ObjCard.mostrar_qtde"
          :link_item="ObjCard.link_item"
          :idPrincipal="this.idColaboradorAtivo"
          :msg="this.msgCard"
        />

        <CardGraficoApi
          v-if="ObjCard.tipo_card === 'CardGraficoApi'"
          class="q-ma-xs"
          :id="ObjCard.id_card"
          :card="ObjCard.card"
          :ordem="ObjCard.ordem"
          cor_header="bg-primary"
          topo_fixo="topo_fixo"
          :height="ObjCard.height"
          :style="{ width: `${ObjCard.width}` }"
          :btn_comando="ObjCard.btn_comando"
          :tipo_card="ObjCard.tipo_card"
          :coluna_categoria="ObjCard.coluna_categoria"
          :coluna_serie="ObjCard.coluna_serie"
          :coluna_totalizadora="ObjCard.coluna_totalizadora"
          :total_execucao="ObjCard.total_execucao"
          :sub_tipo="ObjCard.sub_tipo"
          :conteudo_card="ObjCard.conteudo_card"
          :link_item="ObjCard.link_item"
          :idPrincipal="this.idColaboradorAtivo"
          :msg="this.msgCard"
        />

        <CardListaApi
          v-if="ObjCard.tipo_card === 'CardListaApi'"
          class="q-ma-xs"
          :id="ObjCard.id_card"
          :card="ObjCard.card"
          :ordem="ObjCard.ordem"
          cor_header="bg-primary"
          :style="{ width: `${ObjCard.width}` }"
          topo_fixo="topo_fixo"
          :height="ObjCard.height"
          :width="ObjCard.width"
          :btn_comando="ObjCard.btn_comando"
          :tipo_card="ObjCard.tipo_card"
          :sub_tipo="ObjCard.sub_tipo"
          :conteudo_card="ObjCard.conteudo_card"
          :total_execucao="ObjCard.total_execucao"
          :mostrar_qtde="ObjCard.mostrar_qtde"
          :mostrar_duracao="ObjCard.mostrar_duracao"
          :link="ObjCard.link"
          :idPrincipal="this.idColaboradorAtivo"
          :msg="this.msgCard"
        />
        <CardListaColaboradorApi
          v-if="ObjCard.tipo_card === 'CardListaColaboradorApi'"
          class="q-ma-xs"
          :id="ObjCard.id_card"
          :card="ObjCard.card"
          :ordem="ObjCard.ordem"
          cor_header="bg-primary"
          :style="{ width: `${ObjCard.width}` }"
          topo_fixo="topo_fixo"
          :height="ObjCard.height"
          :width="ObjCard.width"
          :btn_comando="ObjCard.btn_comando"
          :tipo_card="ObjCard.tipo_card"
          :sub_tipo="ObjCard.sub_tipo"
          :conteudo_card="ObjCard.conteudo_card"
          :total_execucao="ObjCard.total_execucao"
          :link="ObjCard.link"
          :idPrincipal="this.idColaboradorAtivo"
          :msg="this.msgCard"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { GeLayoutDashBoard } from "src/commands/layouts/layoutDashboard";
import BarraLayout from "src/layouts/BarraLayout.vue";
import CardGrupoApi from "src/components/Cards/CardGrupoApi.vue";
import CardListaApi from "src/components/Cards/CardListaApi.vue";
import CardListaColaboradorApi from "src/components/Cards/CardListaColaboradorApi.vue";
import CardGraficoApi from "src/components/Cards/CardGraficoApi.vue";
import CardEmpresaApi from "src/components/Cards/CardEmpresaApi.vue";
import cardpopup from "app/src/components/Cards/Cardpopup.vue";
import { defineComponent } from "vue";
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    BarraLayout,
    CardGrupoApi,
    CardListaApi,
    CardListaColaboradorApi,
    CardGraficoApi,
    cardpopup,
    CardEmpresaApi,
  },
  name: "bi",
  setup() {
    const $store = useStore();
    const login = computed({
      get: () => $store.state.showcase.login,
      set: (val) => {
        $store.commit("showcase/autenticacaoLogin", val);
      },
    });
    const dashboardBInome = computed({
      get: () => $store.state.showcase.dashboardBInome,
      set: (val) => {
        $store.commit("showcase/BInome", val);
      },
    });
    const fabPos = ref([18, 18]);
    const draggingFab = ref(false);
    return {
      dashboardBInome,
      fabPos,
      login,
      draggingFab,
      moveFab(ev) {
        draggingFab.value = ev.isFirst !== true && ev.isFinal !== true;
        fabPos.value = [
          fabPos.value[0] - ev.delta.x,
          fabPos.value[1] - ev.delta.y,
        ];
      },
    };
  },
  data() {
    return {
      popUp: false,
      ObjDashboard: [],
      IndexGrupoAtual: 0,
      Grupos: [],
      GrupoCards: [],
      GrupoCardsOpcionais: [],
      idColaboradorAtivo: 0,
      dashboardsColaboradorAtivo: [],
    };
  },
  methods: {
    valorIndexLayouts(j, i) {
      this.popUp = false;
      let grupoBi = j;
      let dashboardBi = i;
      let login = JSON.parse(localStorage.getItem("login"));
      let recursosBi = login.aplicativos[0].recursos.dashboard_bi;
      this.IndexGrupoAtual = 0;
      console.log(
        "serie1= " +
          recursosBi[grupoBi].layout_dashboard[dashboardBi].id_layout_dashboard
      );
      console.log(
        "serie2 = " +
          recursosBi[grupoBi].layout_dashboard[dashboardBi]
            .dashboard_complementar
      );
      this.CarregarDashboard(
        recursosBi[grupoBi].layout_dashboard[dashboardBi].id_layout_dashboard,
        recursosBi[grupoBi].layout_dashboard[dashboardBi].dashboard_complementar
      );
      this.msgCard = "limpar_conteudo";
      this.AtualizarCardsGrupoAtual();
    },
    OnClickBarraLayout(IndexGrupo) {
      this.IndexGrupoAtual = IndexGrupo;
      this.AtualizarCardsGrupoAtual();
    },
    AtualizarCardsGrupoAtual() {
      this.handleResize();
      this.msgCard = "atualizar_conteudo";
      setTimeout(() => {
        this.msgCard = "";
      }, 1000);
    },
    handleResize() {
      this.telaWidth = window.innerWidth;
      if (window.innerWidth <= 1006) {
        for (
          let i = 0;
          i < this.ObjDashboard.grupos[this.IndexGrupoAtual].cards.length;
          i++
        ) {
          this.ObjDashboard.grupos[this.IndexGrupoAtual].cards[i]["width"] = `${
            this.telaWidth - 80
          }px`;
        }
      }
      if (window.innerWidth <= 797) {
        for (
          let i = 0;
          i < this.ObjDashboard.grupos[this.IndexGrupoAtual].cards.length;
          i++
        ) {
          this.ObjDashboard.grupos[this.IndexGrupoAtual].cards[i]["width"] = `${
            this.telaWidth - 20
          }px`;
        }
      }
      if (window.innerWidth >= 797) {
        for (
          let i = 0;
          i < this.ObjDashboard.grupos[this.IndexGrupoAtual].cards.length;
          i++
        ) {
          this.ObjDashboard.grupos[this.IndexGrupoAtual].cards[i]["width"] =
            this.ObjDashboard.grupos[this.IndexGrupoAtual].cards[i]["width"];
        }
      }
    },
    CarregarDashboard(pIDashboard, pComplementar) {
      console.log("valor 1= " + pIDashboard);
      console.log("valor 2 = " + pComplementar);
      this.IndexGrupoAtual = 0;
      this.ObjDashboard = GeLayoutDashBoard(pIDashboard);
      console.log(this.ObjDashboard);
      if (pComplementar) {
        for (let i = 0; i < pComplementar.length; i++) {
          let ObjDashboardTemp = GeLayoutDashBoard(pComplementar[i]);
          for (let j = 0; j < ObjDashboardTemp.grupos.length; j++) {
            this.ObjDashboard.grupos.push(ObjDashboardTemp.grupos[j]);
          }
        }
      }
    },
    popUps() {
      this.popUp = !this.popUp;
    },
    fecharPOpUp() {
      this.popUp = false;
    },
  },
  beforeRouteEnter(to, from, next) {
    let login = JSON.parse(localStorage.getItem("login"));
    const permissao = login.aplicativos[0].recursos.dashboard_bi;
    if (!permissao) {
      next("");
    }
    next();
  },
  created() {
    let login = JSON.parse(localStorage.getItem("login"));
    let recursosBi = login.aplicativos[0].recursos.dashboard_bi;
    this.dashboardBInome =
      recursosBi[0].grupo + " / " + recursosBi[0].layout_dashboard[0].dashboard;
    for (let i = 0; i < recursosBi.length; i++) {
      this.dashboardsColaboradorAtivo.push(recursosBi[i]);
    }
    this.idColaboradorAtivo = login.id_colaborador;

    this.CarregarDashboard(
      recursosBi[0].layout_dashboard[0].id_layout_dashboard,
      recursosBi[0].layout_dashboard[0].dashboard_complementar
    );
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    this.msgCard = "limpar_conteudo";
    this.AtualizarCardsGrupoAtual();
  },
});
</script>

<style scoped>
.tela-popup {
  max-width: 380px;
  padding: 0px 10px 15px 10px;
  position: absolute;
  z-index: 1;
  right: 1%;
  margin-left: -50px;
  top: 18%;
  box-shadow: 0 0 1em rgb(165, 165, 165);
}
@media only screen and (max-width: 1320px) {
  .tela-popup {
    width: 80%;
    top: 10%;
    right: 20%;
  }
}
</style>
