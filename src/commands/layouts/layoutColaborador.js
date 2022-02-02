import { computed } from "vue";
import { useStore } from "vuex";

export default {
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
  methods: {
    layoutValidacao() {
      let login = JSON.parse(localStorage.getItem("login"));
      switch (login.usuario) {
        case "usuario":
          this.usuarioDashboard(login);
          break;
      }
    },
    usuarioDashboard(login) {
      login.aplicativos.push(
        {
          id_aplicativo: 1,
          aplicativo: "CRM",
          base_url_api: "https://api.syclus.com.br",
          recursos: {
            dashboard_area_trabalho: {
              id_layout_dashboard: 9999,
              dashboard_complementar: [],
            },

            dashboard_colaborador: {
              id_layout_dashboard: 3,
              dashboard_complementar: [],
              permissao_colaborador: ["*"],
            },
            dashboard_projeto: {
              id_layout_dashboard: 9,
              dashboard_complementar: [],
            },
            dashboard_notificacao: {
              layout_dashboard: [
                {
                  id_layout_dashboard: 10,
                  dashboard: "Periodo",
                  dashboard_complementar: [],
                },
                {
                  id_layout_dashboard: 11,
                  dashboard: "Tipo",
                  dashboard_complementar: [],
                },
              ],
            },
            dashboard_bi: [
              {
                grupo: "Desenvolvimento",
                icone: "code",
                layout_dashboard: [
                  {
                    icone: "code",
                    id_layout_dashboard: 9999,
                    dashboard: "Teste",
                    dashboard_complementar: [],
                  },
                  {
                    icone: "code",
                    id_layout_dashboard: 12,

                    dashboard: "Padrão",
                    dashboard_complementar: [],
                  },
                ],
              },
            ],
          },
        },
        {
          id_aplicativo: 2,
          aplicativo: "Produção",
          base_url_api: "https://api.syclus.com.br",
          recursos: {
            dashboard_area_trabalho: {
              id_layout_dashboard: 1,
              dashboard_complementar: [],
            },
            dashboard_producao: {
              id_layout_dashboard: 2,
              dashboard_complementar: [6, 7],
            },
          },
        }
      );
    },
  },
};
