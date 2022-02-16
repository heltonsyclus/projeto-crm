<template window-height>
  <div class="flex" style="max-width: 100%">
    <div class="col1">
      <div>
        <div>
          <q-card class="my-card">
            <q-card-section>
              <p style="font-weight: 500; font-size: 16px">
                Pesquisa de colaborador
              </p>
              <q-separator class="q-mb-sm" />
              <q-input
                v-model="nomeColaborador"
                dense
                label="Digite o nome do colaborador"
                @keyup.enter="procurarColaborador()"
              >
                <template v-slot:prepend>
                  <q-icon size="18px" name="search" />
                </template>
              </q-input>
            </q-card-section>
            <div style="text-align: center">
              <q-btn
                rounded
                dense
                unelevated
                size="14px"
                style="padding: 0px 15px"
                class="capitalize q-mb-md"
                color="primary"
                label="Buscar"
                @click="procurarColaborador()"
              />
            </div>
          </q-card>
          <q-dialog
            v-model="exibeSelecaoColaborador"
            persistent
            transition-show="flip-down"
            transition-hide="flip-up"
          >
            <q-card class="card-pesquisa">
              <q-card-section
                class="items-center flex justify-between items-center topo-fixo"
              >
                <div class="text-h6 color-titulo">Selecione o colaborador</div>
                <q-btn icon="close" flat round dense v-close-popup />
              </q-card-section>
              <div>
                <q-card-section
                  class="card-primary flex"
                  style="margin: 0px 10px 5px"
                  v-for="(colaborador, index) in this.dadosColaborador"
                  :key="colaborador"
                  @click="selecionarcolaborador(index)"
                >
                  <p>{{ colaborador.colaborador }}</p>
                </q-card-section>
              </div>
            </q-card>
          </q-dialog>
        </div>

        <q-card
          class="my-card bg-light-blue-9"
          style="color: #fff"
          v-show="colaboradorAtivo"
        >
          <q-card-section>
            <div class="flex justify-between items-center">
              <p style="font-size: 16px; font-weight: 700">
                Dados do colaborador
              </p>
              <q-btn
                round
                flat
                dense
                text-color="white"
                icon="autorenew"
                @click.prevent="carregardadosColaborador"
                style="margin-bottom: 5px"
              >
              </q-btn>
            </div>
            <q-separator color="white" class="q-mb-sm" />

            <div class="column" style="font-style: italic">
              <div style="width: 100%">
                <q-icon size="18px" name="money" class="q-pr-sm" />
                <span> {{ this.dadosColaborador.id_colaborador }}</span>
              </div>
              <div style="width: 100%">
                <q-icon size="18px" name="account_circle" class="q-pr-sm" />
                <span> {{ this.dadosColaborador.colaborador }}</span>
              </div>
              <div
                style="width: 100%"
                v-if="this.dadosColaborador.cpf_cnpj != null"
              >
                <q-icon size="18px" name="lock" class="q-pr-sm" />
                <span> {{ this.dadosColaborador.cpf_cnpj }}</span>
              </div>
              <div style="width: 100%">
                <q-icon size="18px" name="done" class="q-pr-sm" />
                <span
                  class="bg-positive"
                  style="margin-bottom: 5px; padding: 1px 5px 1px 0px"
                >
                  Ativo
                </span>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="col2">
      <BarraLayout
        @OnClick="OnClickBarraLayout"
        :ConteudoBtn="this.ObjDashboard['grupos']"
      />
      <div class="row">
        <div
          v-for="ObjCard in this.ObjDashboard.grupos[this.IndexGrupoAtual]
            .cards"
          :key="ObjCard"
          style="margin: 5px; margin-bottom: 5px"
        >
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
            :idPrincipal="this.idcolaboradorAtivo"
            :msg="this.msgCard"
          />
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
            :idPrincipal="this.idcolaboradorAtivo"
            :msg="this.msgCard"
          />
          <CardListaApi
            v-if="ObjCard.tipo_card === 'CardListaApi'"
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
            :link="ObjCard.link"
            :idPrincipal="this.idcolaboradorAtivo"
            :total_execucao="ObjCard.total_execucao"
            :mostrar_qtde="ObjCard.mostrar_qtde"
            :mostrar_duracao="ObjCard.mostrar_duracao"
            :msg="this.msgCard"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarraLayout from "src/layouts/BarraLayout.vue";
import CardGrupoApi from "src/components/Cards/CardGrupoApi.vue";
import CardGraficoApi from "src/components/Cards/CardGraficoApi.vue";
import CardListaApi from "src/components/Cards/CardListaApi.vue";
import { bodyProcuraIdColaborador } from "src/boot/consultaSql.js";
import { GeLayoutDashBoard } from "src/commands/layouts/layoutDashboard";
import { defineComponent } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  components: { BarraLayout, CardGrupoApi, CardGraficoApi, CardListaApi },
  name: "Colaborador",
  data() {
    return {
      ObjDashboard: [],
      IndexGrupoAtual: 0,
      GrupoCards: [],
      GrupoCardsOpcionais: [],
      nomeColaborador: null,
      exibeSelecaoColaborador: false,
      colaboradorAtivo: false,
      objColaborador: [],
      dadosColaborador: [],
      idcolaboradorAtivo: null,
      telaWidth: "",
      msgCard: "",
    };
  },
  methods: {
    parar() {
      this.msgCard = null;
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
    procurarColaborador() {
      if (this.nomeColaborador === null) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Preencha os campos!",
        });
      } else {
        this.colaboradorAtivo = false;
        this.dadosColaborador = [];
        this.idcolaboradorAtivo = null;
        this.msgCard = "limpar_conteudo";
        let body = bodyProcuraIdColaborador(this.nomeColaborador.toUpperCase());
        this.$api.post("consultasql", body).then((res) => {
          let arrRetorno = res.data;
          if (arrRetorno.length <= 0) {
            this.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              message: "Esse colaborador está inativo!",
            });
            return false;
          }

          if (!this.PermissaoDadosColaborador(arrRetorno[0].id_colaborador)) {
            alert("Sem permissão!");
            return false;
          }
          this.dadosColaborador = arrRetorno;
          if (this.dadosColaborador.length <= 1) {
            this.dadosColaborador = this.dadosColaborador[0];
            this.carregardadosColaborador();
          } else {
            this.exibeSelecaoColaborador = true;
          }
        });
      }
      this.nomeColaborador = null;
    },
    PermissaoDadosColaborador(pIdColaborador) {
      let permissao = false;
      let login = JSON.parse(localStorage.getItem("login"));
      permissao =
        login.aplicativos[0].recursos.dashboard_colaborador
          .permissao_colaborador[0] === "*";
      if (!permissao) {
        permissao =
          pIdColaborador in
          login.aplicativos[0].recursos.dashboard_colaborador
            .permissao_colaborador;
      }
      return permissao;
    },
    carregardadosColaborador() {
      if (this.dadosColaborador.colaborador === null) {
        return false;
      }

      this.idcolaboradorAtivo = this.dadosColaborador.id_colaborador;
      this.colaboradorAtivo = true;
      this.AtualizarCardsGrupoAtual();
    },
    selecionarcolaborador(index) {
      this.exibeSelecaoColaborador = false;
      this.dadosColaborador = this.dadosColaborador[index];
      this.carregardadosColaborador();
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
      if (window.innerWidth >= 1006) {
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
  },
  beforeRouteEnter(to, from, next) {
    let login = JSON.parse(localStorage.getItem("login"));
    const permissao = login.aplicativos[0].recursos.dashboard_colaborador;
    if (!permissao) {
      alert("Você não possui autorização!");
      next("");
    }
    next();
  },
  setup() {
    const $store = useStore();
    const login = computed({
      get: () => $store.state.showcase.login,
      set: (val) => {
        $store.commit("showcase/autenticacaoLogin", val);
      },
    });
    return {
      login,
    };
  },
  created() {
    let login = JSON.parse(localStorage.getItem("login"));
    this.ObjDashboard = GeLayoutDashBoard(
      login.aplicativos[0].recursos.dashboard_colaborador.id_layout_dashboard
    );

    for (
      let i = 0;
      i <
      login.aplicativos[0].recursos.dashboard_colaborador.dashboard_complementar
        .length;
      i++
    ) {
      let ObjDashboardTemp = GeLayoutDashBoard(
        login.aplicativos[0].recursos.dashboard_colaborador
          .dashboard_complementar[i]
      );

      for (let j = 0; j < ObjDashboardTemp.grupos.length; j++) {
        this.ObjDashboard.grupos.push(ObjDashboardTemp.grupos[j]);
      }
    }
    this.msgCard = "limpar_conteudo";
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
});
</script>

<style scoped>
p {
  padding: 0;
  margin: 0;
}
.card-primary {
  background-color: #dadbdd;
  margin: 2px;
  margin-bottom: 20px;
  color: rgb(51, 51, 51);
}
.card-primary:hover {
  background-color: #6497ff;
}
.my-card {
  margin: 10px 0px 0px 10px;
}
.card-pesquisa {
  width: 100%;
}
.card-secundario {
  background-color: #447dee;
  width: 32%;
  min-height: 87px;
  text-align: center;
  margin: 1px;
  padding: 12px 2px 0px 2px;
  font-size: 12px;
  color: rgb(255, 255, 255);
}
.btn-v-mais {
  color: #8fc9f0;
  font-weight: 500;
}
.btn-v-mais:hover {
  color: #949494;
}
.card-span {
  font-size: 18px;
  font-weight: 500;
  padding-top: 50px;
}
.color-titulo::before {
  background-color: #109cf1;
  content: "";
  display: inline-block;
  width: 3px;
  height: 15px;
  margin-right: 5px;
}
.col1 {
  background-color: #e0e0e0;
  min-height: 100vh;
  width: 25%;
}
.col2 {
  width: 75%;
}
@media only screen and (max-width: 1320px) {
  .col1 {
    width: 100%;
    background-color: #e6e6e6;
    min-height: 20vh;
  }
  .col2 {
    width: 100%;
  }
  .my-card {
    width: 96%;
    min-width: 330px;
    margin: 10px 10px 10px 10px;
  }
  .card-secundario {
    width: 32%;
    height: 87px;
    padding: 12px 5px 0px 5px;
  }
  .grupos {
    width: 100vh;
  }
}
</style>
