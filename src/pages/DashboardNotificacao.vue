<template>
  <div class="col2">
    <BarraLayout
      @OnClick="OnClickBarraLayout"
      @valorInputPesquisa="OnClickSelect"
      :ConteudoBtn="this.ObjDashboard['grupos']"
      Aplicacao="Select-filtro"
      :valoresRecurso="this.dashboardsColaboradorAtivo"
    />
    <div>
      <div
        v-for="ObjCard in this.ObjDashboard.grupos[this.IndexGrupoAtual].cards"
        :key="ObjCard"
        style="margin: 10px"
      >
        <CardNotificacaoApi
          v-if="ObjCard.tipo_card === 'CardNotificacaoApi'"
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
          :link_item="ObjCard.link_item"
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
import CardNotificacaoApi from "src/components/Cards/CardNotificacaoApi.vue";
import { defineComponent } from "vue";
import { ref } from "vue";
import layoutColaborador from "src/commands/layouts/layoutColaborador";

export default defineComponent({
  mixins: [layoutColaborador],
  components: { BarraLayout, CardNotificacaoApi },
  name: "bi",
  setup() {
    const fabPos = ref([18, 18]);
    const draggingFab = ref(false);
    return {
      fabPos,
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
    OnClickSelect(selectIndex) {
      let login = JSON.parse(localStorage.getItem("login"));
      let recursos = login.recursos.dashboard_notificacao.layout_dashboard;

      this.CarregarDashboard(
        recursos[selectIndex].id_layout_dashboard,
        recursos[selectIndex].dashboard_complementar
      );
      this.msgCard = "limpar_conteudo";
      this.AtualizarCardsGrupoAtual();
    },
    OnClickBarraLayout(IndexGrupo) {
      this.IndexGrupoAtual = IndexGrupo;
      this.AtualizarCardsGrupoAtual();
    },
    AtualizarCardsGrupoAtual() {
      this.msgCard = "atualizar_conteudo";
      setTimeout(() => {
        this.msgCard = "";
      }, 1000);
    },
    handleResize() {
      this.telaWidth = window.innerWidth;
      if (window.innerWidth <= 926) {
        for (
          let i = 0;
          i < this.ObjDashboard.grupos[this.IndexGrupoAtual].cards.length;
          i++
        ) {
          this.ObjDashboard.grupos[this.IndexGrupoAtual].cards[i]["width"] =
            "100%";
        }
      }
      if (window.innerWidth >= 926) {
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
      this.ObjDashboard = GeLayoutDashBoard(pIDashboard);
      if (pComplementar) {
        for (let i = 0; i < pComplementar.length; i++) {
          let ObjDashboardTemp = GeLayoutDashBoard(pComplementar[i]);
          for (let j = 0; j < ObjDashboardTemp.grupos.length; j++) {
            this.ObjDashboard.grupos.push(ObjDashboardTemp.grupos[j]);
          }
        }
      }
    },
  },
  beforeRouteEnter(to, from, next) {
    let login = JSON.parse(localStorage.getItem("login"));
    const permissao = login.recursos.dashboard_notificacao;
    if (!permissao) {
      alert("Você não possue autorização!");
      next("");
    }
    next();
  },
  created() {
    let login = JSON.parse(localStorage.getItem("login"));
    let recursos = login.recursos.dashboard_notificacao.layout_dashboard;
    for (let i = 0; i < recursos.length; i++) {
      this.dashboardsColaboradorAtivo.push(recursos[i].dashboard);
    }
    this.idColaboradorAtivo = login.id_colaborador;
    this.ObjDashboard = GeLayoutDashBoard(
      login.recursos.dashboard_cliente.id_layout_dashboard
    );
    for (
      let i = 0;
      i < login.recursos.dashboard_cliente.dashboard_complementar.length;
      i++
    ) {
      let ObjDashboardTemp = GeLayoutDashBoard(
        login.recursos.dashboard_cliente.dashboard_complementar[i]
      );
      for (let j = 0; j < ObjDashboardTemp.grupos.length; j++) {
        this.ObjDashboard.grupos.push(ObjDashboardTemp.grupos[j]);
      }
    }
    this.msgCard = "limpar_conteudo";
    this.AtualizarCardsGrupoAtual();
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
});
</script>
