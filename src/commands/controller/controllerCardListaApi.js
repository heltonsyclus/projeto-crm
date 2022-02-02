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
        let body = this.getBody(
          this.conteudo_card.body,
          null,
          this.conteudo_card.filtro_sql
        );
        if (body == null) {
          return false;
        }
        this.carregarKnob = true;
        this.$api.post("consultasql", body).then((res) => {
          let arrRetorno = res.data;
          for (let i = 0; i < arrRetorno.length; i++) {
            let item = {
              id: Object.values(arrRetorno[i])[0],
              descricao: Object.values(arrRetorno[i])[1],
              qtde: Object.values(arrRetorno[i])[2],
              duracao: Object.values(arrRetorno[i])[3],
            };

            this.carregarKnob = false;
            this.ObjConteudo.itens.push(item);
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
      this.ObjConteudo.itens = [];
    },
    abrirUrl(pUrl) {
      if (pUrl !== "") {
        window.open(pUrl, "_blank");
      }
    },
    formataCaptionItem(pQtde, pDuracao) {
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
    getUrlItem(pIndexItem) {
      let url = this.link;
      url = url.replace("<id_item>", this.ObjConteudo.itens[pIndexItem].id);
      return url;
    },
    abrirItem(pIndexItem) {
      this.abrirUrl(this.getUrlItem(pIndexItem));
    },
    medidaCard() {
      this.alturaCard = this.height + "vh";
      this.alturaCorpo = this.height - 7.8 + "vh";
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
    this.medidaCard();
  },
};
