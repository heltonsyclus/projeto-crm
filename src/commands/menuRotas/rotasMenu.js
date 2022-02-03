export const rotasMenu = {
  methods: {
    liberacaoRotas(rotas) {
      console.log(rotas);
      if (rotas.dashboard_area_trabalho) {
        this.linksList.push({
          icon: "dashboard",
          rota: "/",
          text: "dashboard",
        });
      }
      if (rotas.dashboard_cliente) {
        this.linksList.push({
          icon: "supervisor_account",
          rota: "/cliente",
          text: "cliente",
        });
      }
      if (rotas.dashboard_colaborador) {
        this.linksList.push({
          icon: "engineering",
          rota: "/colaborador",
          text: "colaborador",
        });
      }
      if (rotas.dashboard_projeto) {
        this.linksList.push({
          icon: "fact_check",
          rota: "/projetos",
          text: "projetos",
        });
      }

      if (rotas.dashboard_bi) {
        this.linksList.push({
          icon: "insert_chart_outlined",
          rota: "/bi",
          text: "bi",
        });
      }

      if (rotas.dashboard_producao) {
        this.linksList.push({
          icon: "precision_manufacturing",
          rota: "/producao",
          text: "producao",
        });
      }
    },
  },
};
