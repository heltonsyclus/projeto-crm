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
      indexSlide: 0,
    };
  },
  methods: {
    getTextoSlideAtual() {
      if (this.indexSlide >= 0) {
        let descricao = this.ObjConteudo.itens.map((chave) => chave.descricao);
        let duracao = this.ObjConteudo.itens.map((chave) => chave.duracao);
        this.descricao = descricao[this.indexSlide];
        this.duracao = duracao[this.indexSlide];
      } else {
        this.descricao = "";
        this.duracao = "";
      }
    },

    /*
    getTextoSlideAtual(atualizarIndex) {
      if (this.ObjConteudo.itens.length === 0) {
        this.carregarText = true;
        this.carregarKnob = false;
      } else {
        let descricao = this.ObjConteudo.itens.map((chave) => chave.descricao);
        let duracao = this.ObjConteudo.itens.map((chave) => chave.duracao);
        this.descricao = descricao[atualizarIndex];
        this.duracao = duracao[atualizarIndex];
      }
    },
    */
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
            //construindo array lista
            let arrayLista = Object.values(arrRetorno[i])[4];
            var arrJson = "[]";
            //var arrJson = "";
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

          /*
          if (this.tipo_card === "CardListaColaboradorApi") {
            let objSenhaLogin = senhaLogin();
            for (let i = 0; i < objSenhaLogin.login.length; i++) {
              this.ObjColaborador.push(objSenhaLogin.login[i]);
            }
          }
          */
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

    /*
    proximoIndex() {
      if (this.ObjConteudo.itens.length === 1) {
        this.indexSlide = 0;
      } else {
        this.getTextoSlideAtual(this.indexSlide + 1);
        this.indexSlide++;
        if (this.indexSlide === this.ObjConteudo.itens.length - 1) {
          this.indexSlide = -1;
        }
      }
    },
    voltarIndex() {
      this.getTextoSlideAtual(this.indexSlide);
      this.indexSlide--;
      if (this.indexSlide < 0) {
        this.indexSlide = this.ObjConteudo.itens.length - 1;
      }
    },
    */
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
    carregaObjColaborador() {
      this.ObjColaborador = [];
      let objSenhaLogin = senhaLogin();
      for (let i = 0; i < objSenhaLogin.login.length; i++) {
        console.log(objSenhaLogin.login[i]);
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
