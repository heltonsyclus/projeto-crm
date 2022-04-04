<template window-height>
  <div class="flex" style="max-width: 100%">
    <div class="col1">
      <div>
        <q-card class="my-card">
          <q-card-section>
            <p style="font-weight: 500; font-size: 16px">Pesquisa de Projeto</p>
            <q-separator class="q-mb-sm" />
            <q-input
              v-model="nomeFantasia"
              dense
              label="Digite o nome do projeto"
              @keyup.enter="ProcurarProjeto()"
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
              @click="ProcurarProjeto()"
            />
          </div>
        </q-card>

        <q-dialog
          v-model="exibeSelecaoProjeto"
          persistent
          transition-show="flip-down"
          transition-hide="flip-up"
        >
          <q-card class="card-pesquisa">
            <q-card-section
              class="items-center flex justify-between items-center topo-fixo"
            >
              <div class="text-h6 color-titulo">Selecione a Projeto</div>
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>
            <div>
              <q-card-section
                class="card-primary flex"
                style="margin: 0px 10px 5px"
                v-for="(Projeto, index) in this.dadosProjeto"
                :key="Projeto"
                @click="selecionarProjeto(index)"
              >
                <p>{{ Projeto.projeto }}</p>
              </q-card-section>
            </div>
          </q-card>
        </q-dialog>
      </div>
      <q-card
        class="my-card bg-light-blue-9"
        style="color: #fff"
        v-show="projetoAtivo"
      >
        <q-card-section>
          <div class="flex justify-between items-center">
            <p style="font-size: 16px; font-weight: 700">Dados do Projeto</p>
            <q-btn
              round
              flat
              dense
              text-color="white"
              icon="autorenew"
              @click.prevent="carregarDadosProjeto"
              style="margin-bottom: 5px"
            >
            </q-btn>
          </div>
          <q-separator color="white" class="q-mb-sm" />
          <div
            v-for="Projeto in this.objProjeto"
            :key="Projeto"
            class="column"
            style="font-style: italic"
          >
            <div style="width: 100%">
              <q-icon size="18px" name="money" class="q-pr-sm" /><span>{{
                Projeto.id_projeto
              }}</span>
            </div>
            <div style="width: 100%">
              <q-icon size="18px" name="business" class="q-pr-sm" /><span>{{
                Projeto.projeto
              }}</span>
            </div>
            <div style="width: 100%">
              <q-icon size="18px" name="event" class="q-pr-sm" /><span>
                {{ this.datafiltro }}
              </span>
            </div>
            <div style="width: 100%">
              <q-icon size="18px" name="pin" class="q-pr-sm" />
              <span>{{ Projeto.razao_social }}</span>
            </div>
            <div>
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
            :totalizar_grupo="ObjCard.totalizar_grupo"
            :totalizar_item="ObjCard.totalizar_item"
            :mostrar_qtde="ObjCard.mostrar_qtde"
            :link_item="ObjCard.link_item"
            :idPrincipal="this.idAtivoProjeto"
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
            :totalizar_grupo="ObjCard.totalizar_grupo"
            :sub_tipo="ObjCard.sub_tipo"
            :conteudo_card="ObjCard.conteudo_card"
            :link_item="ObjCard.link_item"
            :idPrincipal="this.idAtivoProjeto"
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
            :totalizar_grupo="ObjCard.totalizar_grupo"
            :mostrar_qtde="ObjCard.mostrar_qtde"
            :mostrar_duracao="ObjCard.mostrar_duracao"
            :mostrar_espera="ObjCard.mostrar_espera"
            :mostrar_imagem="ObjCard.mostrar_imagem"
            :expandir_imagem="ObjCard.expandir_imagem"
            :total_tempo="ObjCard.total_tempo"
            :link="ObjCard.link"
            :idPrincipal="this.idAtivoProjeto"
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
import {
  bodyProcuraIdProjeto,
  bodyDadosProjeto,
} from "src/boot/consultaSql.js";
import { GeLayoutDashBoard } from "src/commands/layouts/layoutDashboard";
import { defineComponent } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  components: { BarraLayout, CardGrupoApi, CardGraficoApi, CardListaApi },
  name: "Projeto",
  data() {
    return {
      ObjDashboard: [],
      IndexGrupoAtual: 0,
      GrupoCards: [],
      GrupoCardsOpcionais: [],
      nomeFantasia: null,
      idAtivoProjeto: null,
      projetoAtivo: false,
      objProjeto: [],
      datafiltro: "",
      dadosProjeto: null,
      exibeSelecaoProjeto: false,
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
    ProcurarProjeto() {
      this.objProjeto = "";
      this.datafiltro = "";
      if (this.nomeFantasia === null) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Preencha os campos!",
        });
      } else {
        this.projetoAtivo = false;
        this.idAtivoProjeto = null;
        let body = bodyProcuraIdProjeto(this.nomeFantasia.toUpperCase());
        this.$api.post("consultasql", body).then((res) => {
          let arrRetorno = res.data;
          if (arrRetorno.length <= 0) {
            this.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              message: "Esse Projeto não existe ou está inativo!",
            });
            return false;
          }
          this.dadosProjeto = arrRetorno;
          if (this.dadosProjeto.length <= 1) {
            this.dadosProjeto = this.dadosProjeto[0];
            this.carregarDadosProjeto();
          } else {
            this.exibeSelecaoProjeto = true;
          }
        });
      }
      this.nomeFantasia = null;
    },
    carregarDadosProjeto() {
      if (this.dadosProjeto.id_projeto === null) {
        return false;
      }
      this.idAtivoProjeto = this.dadosProjeto.id_projeto;
      let body = bodyDadosProjeto(this.dadosProjeto.id_projeto);
      this.$api.post("consultasql", body).then((res) => {
        this.AtualizarCardsGrupoAtual();
        let arrRetorno = res.data;
        this.objProjeto = arrRetorno;
        let dataprojeto = this.objProjeto[0].data_previsao.substr(0, 10);
        this.datafiltro = dataprojeto.split("-").reverse().join("/");
      });
      this.projetoAtivo = true;
      this.AtualizarCardsGrupoAtual();
    },
    selecionarProjeto(index) {
      this.exibeSelecaoProjeto = false;
      this.dadosProjeto = this.dadosProjeto[index];
      this.carregarDadosProjeto();
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
    const permissao = login.aplicativos[0].recursos.dashboard_projeto;
    if (!permissao) {
      next("");
    }
    next();
  },
  setup() {
    const $store = useStore();
    const login = computed({
      get: () => $store.state.showcase.login,
    });
    return {
      login,
    };
  },
  created() {
    let login = JSON.parse(localStorage.getItem("login"));
    this.ObjDashboard = GeLayoutDashBoard(
      login.aplicativos[0].recursos.dashboard_projeto.id_layout_dashboard
    );
    for (
      let i = 0;
      i <
      login.aplicativos[0].recursos.dashboard_projeto.dashboard_complementar
        .length;
      i++
    ) {
      let ObjDashboardTemp = GeLayoutDashBoard(
        login.aplicativos[0].recursos.dashboard_projeto.dashboard_complementar[
          i
        ]
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
}
</style>
