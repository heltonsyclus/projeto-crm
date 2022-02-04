<template>
  <q-card
    style="padding: 10px; margin: 5px"
    :style="{ width: `${width}`, height: `${height}` }"
    v-for="(grupos, indexGrupo) in this.ObjConteudo.grupos"
    :key="indexGrupo"
  >
    <div class="flex justify-between items-center q-mb-sm">
      <div>
        <strong>Atividade: </strong>
        <a href="#" style="font-weight: 600; font-size: 15px">
          {{ grupos.grupo }}
        </a>
      </div>
      <div class="flex justify-between">
        <div>
          <q-btn
            unelevated
            round
            size="10px"
            color="light-blue-10"
            icon="question_answer"
            dense
            @click="telaOcorrencia = !telaOcorrencia"
          />
        </div>
        <div style="margin-left: 5px">
          <q-btn
            unelevated
            round
            size="10px"
            dense
            color="green"
            icon="done"
            @click="marcaComoLido()"
          />
        </div>
      </div>
    </div>
    <div>
      <q-list bordered class="rounded-borders">
        <q-expansion-item dense dense-toggle :default-opened="this.opened">
          <template v-slot:header>
            <q-item-section>
              <div class="flex items-center">
                <q-badge style="padding: 5px 10px; margin-right: 2px">
                  <q-icon name="person" color="white" />
                  {{ "usuario" }}</q-badge
                >
                <q-badge
                  style="padding: 5px 10px; margin-right: 2px"
                  color="dark"
                >
                  <q-icon name="description" color="white" />
                  {{ grupos.grupo }}</q-badge
                >
                <q-badge
                  style="padding: 5px 10px; margin-right: 2px"
                  color="light-blue-10"
                >
                  <q-icon name="local_offer" color="white" />
                  {{ "Syclus 2.0" }}</q-badge
                >
                <q-badge
                  style="padding: 5px 10px; margin-right: 2px"
                  color="red"
                >
                  <q-icon name="label_important" color="white" />
                  {{ "Planejamento" }}</q-badge
                >
                <q-badge
                  style="padding: 5px 10px; margin-right: 2px"
                  color="green"
                >
                  <q-icon name="corporate_fare" color="white" />
                  {{ "JM PAULINO" }}</q-badge
                >
                <q-avatar
                  color="primary"
                  text-color="white"
                  size="25px"
                  class="q-ml-sm"
                  >{{ grupos.qtde }}</q-avatar
                >
              </div>
            </q-item-section>
          </template>
          <q-card dense>
            <q-card-section dense>
              <div v-show="telaOcorrencia">
                <q-input
                  v-model="acao"
                  filled
                  dense
                  type="textarea"
                  label="Digite uma ocorrência..."
                  @keyup.enter="adicionarOcorrencia()"
                />
              </div>
              <div v-for="objNotificar in conteudo_card" :key="objNotificar">
                <div class="flex justify-between items-center">
                  <div style="margin: 5px 0px">
                    <strong class="q-mr-sm" style="font-size: 12px"
                      >{{ objNotificar.nomeUsuario }}:</strong
                    >
                    <q-icon
                      :name="objNotificar.icon"
                      style="font-size: 1.2em"
                      class="q-mr-sm"
                    />
                    <span style="font-size: 13px"
                      >{{ objNotificar.acao }}
                    </span>
                  </div>
                  <div>
                    <span style="font-size: 12px">
                      {{ objNotificar.time }}</span
                    >
                  </div>
                </div>
                <q-separator />
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-separator />
      </q-list>
    </div>
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
  data() {
    return {
      telaOcorrencia: false,
      opened: false,
      objNotificacao: [
        {
          nomeUsuario: "usuario",
          acao: "Texto representando uma ocorrência",
          icon: "question_answer",
          time: "Há 2 minutos",
        },
        {
          nomeUsuario: "usuario",
          acao: "iniciou a execução da atividade.",
          icon: "play_arrow",
          time: "Há 2 minutos",
        },
      ],
    };
  },
  methods: {
    adicionarOcorrencia() {
      this.objNotificacao.unshift({
        nomeUsuario: this.nomeUsuario,
        acao: this.acao,
        icon: "question_answer",
        time: "Agora",
      });
      this.telaOcorrencia = !this.telaOcorrencia;
      this.acao = "";
    },
    marcaComoLido() {
      alert("finalizado");
    },
  },
  watch: {
    abrirNotificacao: {
      handler: function (valor) {
        if (valor) {
          this.opened = !this.opened;
        }
      },
      deep: true,
      immediate: true,
    },
  },
  created() {
    let login = JSON.parse(sessionStorage.getItem("login"));
    this.nomeUsuario = login.usuario;
  },
};
</script>
