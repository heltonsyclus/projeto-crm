import controllerBody from "app/src/commands/controller/controllerBody";
export default {
  mixins: [controllerBody],
  data() {
    return {
      value: 71,
      carregarKnob: false,
      carregarText: false,
      ObjConteudo: {},
      larguraCard: null,
      alturaCard: null,
      alturaCorpo: null,
    };
  },
  methods: {
    atualizarConteudo() {
      this.limparConteudo();
      if (this.idPrincipal !== null) {
        let body = this.getBody(this.conteudo_card.body_grupo);
        if (body == null) {
          return false;
        }
        this.carregarKnob = true;
        this.$api.post("consultasql", body).then((res) => {
          let arrRetorno = res.data;
          for (let i = 0; i < arrRetorno.length; i++) {
            let item = {
              id: Object.values(arrRetorno[i])[0],
              grupo: Object.values(arrRetorno[i])[1],
              qtde: Object.values(arrRetorno[i])[2],
              duracao: Object.values(arrRetorno[i])[3],
            };

            this.carregarKnob = false;
            this.ObjConteudo.grupos.push(item);
          }
          setTimeout(() => {
            arrRetorno == "";
          }, 2000);
          if (arrRetorno == "") {
            this.carregarText = true;
            this.carregarKnob = false;
          } else {
            this.carregarText = false;
          }
        });
      }
    },
    limparConteudo() {
      this.ObjConteudo.grupos = [];
    },
    formataCaptionGrupo(pQtde, pDuracao) {
      let texto = "";
      if (pQtde > 0) {
        texto = pQtde + " itens";
        if (pDuracao > 0) {
          texto =
            texto +
            " (" +
            pDuracao +
            " mim - " +
            Math.round(pDuracao / pQtde) +
            " med)";
        }
      }
      return texto;
    },
    limparConteudoItens(pIndex) {
      this.ObjConteudo.grupos[pIndex].itens = [];
    },
    atualizarConteudoItens(pIndex) {
      this.limparConteudoItens(pIndex);
      let body = this.getBody(
        this.conteudo_card.body_item,
        this.ObjConteudo.grupos[pIndex].id
      );
      this.$api.post("consultasql", body).then((res) => {
        let arrRetorno = res.data;
        for (let i = 0; i < arrRetorno.length; i++) {
          /*if (this.link_grupo !== undefined) {
            this.abrirGrupo(arrRetorno[i].id_atividade);
          }*/
          let item = {
            id: Object.values(arrRetorno[i])[0],
            item: Object.values(arrRetorno[i])[1],
          };
          this.ObjConteudo.grupos[pIndex].itens.push(item);
        }
      });
    },
    getUrlItem(pIndexGrupo, pIndexItem) {
      let url = this.link_item;
      url = url.replace("<id_grupo>", this.ObjConteudo.grupos[pIndexGrupo].id);
      url = url.replace(
        "<id_item>",
        this.ObjConteudo.grupos[pIndexGrupo].itens[pIndexItem].id
      );
      return url;
    },
    abrirItem(pIndexGrupo, pIndexItem) {
      window.open(this.getUrlItem(pIndexGrupo, pIndexItem), "_blank");
    },
    getUrlGrupo(pIndexGrupo) {
      let url = this.link_grupo;
      url = url.replace("<id_grupo>", this.ObjConteudo.grupos[pIndexGrupo].id);
      return url;
    },
    abrirGrupo(pIndexGrupo) {
      window.open(this.getUrlGrupo(pIndexGrupo), "_blank");
    },
    showItem(pIndex) {
      //this.abrirGrupo(pIndex);
      this.atualizarConteudoItens(pIndex);
    },
    handleResize() {
      if (window.innerWidth >= 500) {
        this.alturaCard = this.height + "vh";
        this.alturaCorpo = this.height - 7.8 + "vh";
      }
      if (window.innerWidth <= 500) {
        this.alturaCard = this.height + "vh";
        this.alturaCorpo = this.height * 5.1 + "px";
      }
    },
  },
  computed: {
    UrlItem() {
      return this.ObjConteudo.grupos;
    },
  },
  watch: {
    msg: {
      handler: function (newValue, oldValue) {
        if (newValue === "limpar_conteudo") {
          this.limparConteudo();
        }
        if (newValue === "atualizar_conteudo") {
          this.atualizarConteudo();
        }
      },
      deep: true,
      immediate: true,
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
};
