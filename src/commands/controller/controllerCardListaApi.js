import controllerBody from "app/src/commands/controller/controllerBody";
import { senhaLogin } from "app/src/commands/layouts/layoutColaborador";
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
      imagens: [],
      descricao: null,
      duracao: null,
      id: null,
      qtde: null,
      indexSlide: 0,
    };
  },
  methods: {
    getTextoSlideAtual() {
      if (this.indexSlide >= 0) {
        let descricao = this.ObjConteudo.itens.map((chave) => chave.descricao);
        let duracao = this.ObjConteudo.itens.map((chave) => chave.duracao);
        let id = this.ObjConteudo.itens.map((chave) => chave.id);
        let qtde = this.ObjConteudo.itens.map((chave) => chave.qtde);

        this.descricao = descricao[this.indexSlide];
        this.duracao = duracao[this.indexSlide];
        this.id = id[this.indexSlide];
        this.qtde = qtde[this.indexSlide];
      } else {
        this.descricao = "";
        this.duracao = "";
        this.id = "";
        this.qtde = "";
      }
    },
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
        this.indexSlide = -1;
        this.carregarKnob = true;
        this.$api.post("consultasql", body).then((res) => {
          let arrRetorno = res.data;

          for (let i = 0; i < arrRetorno.length; i++) {
            //  console.log(arrRetorno);
            //construindo array lista
            let arrayLista = Object.values(arrRetorno[i])[4];
            var arrJson = "[]";
            if (arrayLista != undefined) {
              arrJson = JSON.parse("[" + arrayLista + "]");
            }
            let item = {
              id: Object.values(arrRetorno[i])[0],
              descricao: Object.values(arrRetorno[i])[1],
              qtde: Object.values(arrRetorno[i])[2],
              duracao: Object.values(arrRetorno[i])[3],
              lista: [...new Set(arrJson)],
            };
            this.ObjConteudo.itens.push(item);
          }

          if (arrRetorno.length > 0) {
            this.indexSlide = 0;
          }
          this.getTextoSlideAtual();

          setTimeout(() => {
            arrRetorno = "";
          }, 2000);
          this.carregarKnob = false;
          this.carregarText = arrRetorno.length === 0;
        });
      }
    },
    proximoIndex() {
      if (this.indexSlide < this.ObjConteudo.itens.length - 1) {
        this.indexSlide++;
        this.getTextoSlideAtual();
      }
    },
    voltarIndex() {
      if (this.indexSlide > 0) {
        this.indexSlide--;
        this.getTextoSlideAtual();
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
      if (this.mostrar_qtde === false) {
        pQtde = "";
      }
      if (this.mostrar_duracao === false) {
        pDuracao = "";
      }
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
    getUrlItemSlide() {
      let url = this.link;
      url = url.replace("<id_item>", this.id);
      window.open(url, "_blank");
    },

    abrirItem(pIndexItem) {
      this.abrirUrl(this.getUrlItem(pIndexItem));
    },
    medidaCard() {
      this.alturaCard = this.height + "vh";
      this.alturaCorpo = this.height - 7.8 + "vh";
    },
    carregaObjColaborador() {
      this.ObjColaborador = [];
      let objSenhaLogin = senhaLogin();
      for (let i = 0; i < objSenhaLogin.login.length; i++) {
        this.ObjColaborador.push(objSenhaLogin.login[i]);
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
    this.medidaCard();
    this.carregaObjColaborador();
  },
};
