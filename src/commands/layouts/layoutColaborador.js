export function senhaLogin() {
  const json = {
    login: [
      {
        usuario: "usuario",
        senha: "0",
        id_colaborador: 1,
        id_aplicativo_inicial: 0,
        aplicativos: [
          {
            id_aplicativo: 0,
            aplicativo: "Boas vindas",
            base_url_api: "https://api.syclus.com.br",
          },
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
                id_layout_dashboard: 8,
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
          },
        ],
        rotas: "colaborador",
        img: require("../../assets/comum.png"),
      },
      {
        usuario: "abner",
        senha: "1= 210124",
        id_colaborador: 51,
        id_aplicativo_inicial: 0,
        aplicativos: [
          {
            id_aplicativo: 1,
            aplicativo: "CRM",
            base_url_api: "https://api.syclus.com.br",
            recursos: {
              dashboard_area_trabalho: {
                id_layout_dashboard: 1,
                dashboard_complementar: [],
              },
              dashboard_cliente: {
                id_layout_dashboard: 2,
                dashboard_complementar: [],
              },
              dashboard_projeto: {
                id_layout_dashboard: 8,
                dashboard_complementar: [],
              },
              dashboard_bi: [
                {
                  grupo: "Área Técnica",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 4,
                      dashboard: "Corrente",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 27,
                      dashboard: "Area 1",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 28,
                      dashboard: "Area 2",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 29,
                      dashboard: "Area 3",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 30,
                      dashboard: "Area 4",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 31,
                      dashboard: "Area 5",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 18,
                      dashboard: "Formação",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Projetos",
                  icone: "code",
                  layout_dashboard: [
                    {
                      icone: "code",
                      id_layout_dashboard: 9,
                      dashboard: "Corrente",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Desenvolvimento",
                  icone: "code",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 25,
                      icone: "code",
                      dashboard: "Syclus 1.0",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 26,
                      icone: "code",
                      dashboard: "Syclus 2.0",
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
        ],
        rotas: "colaborador",
        img: require("../../assets/51.png"),
      },
      {
        usuario: "adelmo",
        senha: "adelmo321",
        id_colaborador: 57,
        id_aplicativo_inicial: 0,
        aplicativos: [
          {
            id_aplicativo: 1,
            aplicativo: "CRM",
            base_url_api: "https://api.syclus.com.br",
            recursos: {
              dashboard_area_trabalho: {
                id_layout_dashboard: 1,
                dashboard_complementar: [],
              },
              dashboard_cliente: {
                id_layout_dashboard: 2,
                dashboard_complementar: [],
              },
              dashboard_bi: [
                {
                  grupo: "Área Técnica",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 4,
                      dashboard: "Corrente",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 27,
                      dashboard: "Area 1",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 28,
                      dashboard: "Area 2",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 29,
                      dashboard: "Area 3",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 30,
                      dashboard: "Area 4",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 31,
                      dashboard: "Area 5",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 18,
                      dashboard: "Formação",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Desenvolvimento",
                  icone: "code",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 25,
                      icone: "code",
                      dashboard: "Syclus 1.0",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 26,
                      icone: "code",
                      dashboard: "Syclus 2.0",
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
        ],
        rotas: "colaborador",
        img: require("../../assets/57.png"),
      },
      {
        usuario: "cledesson",
        senha: "cledesson321",
        id_colaborador: 2,
        id_aplicativo_inicial: 0,
        aplicativos: [
          {
            id_aplicativo: 1,
            aplicativo: "CRM",
            base_url_api: "https://api.syclus.com.br",
            recursos: {
              dashboard_area_trabalho: {
                id_layout_dashboard: 1,
                dashboard_complementar: [],
              },
              dashboard_cliente: {
                id_layout_dashboard: 2,
                dashboard_complementar: [],
              },
              dashboard_projeto: {
                id_layout_dashboard: 8,
                dashboard_complementar: [],
              },
              dashboard_bi: [
                {
                  grupo: "Área Técnica",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 4,
                      dashboard: "Corrente",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 27,
                      dashboard: "Area 1",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 28,
                      dashboard: "Area 2",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 29,
                      dashboard: "Area 3",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 30,
                      dashboard: "Area 4",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 31,
                      dashboard: "Area 5",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 18,
                      dashboard: "Formação",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Desenvolvimento",
                  icone: "code",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 25,
                      icone: "code",
                      dashboard: "Syclus 1.0",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 26,
                      icone: "code",
                      dashboard: "Syclus 2.0",
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
        ],
        rotas: "colaborador",
        img: require("../../assets/2.png"),
      },
      {
        usuario: "danilo",
        senha: "teste",
        id_colaborador: 4,
        id_aplicativo_inicial: 0,
        aplicativos: [
          {
            id_aplicativo: 1,
            aplicativo: "CRM",
            base_url_api: "https://api.syclus.com.br",
            recursos: {
              dashboard_area_trabalho: {
                id_layout_dashboard: 1,
                dashboard_complementar: [],
              },
              dashboard_cliente: {
                id_layout_dashboard: 2,
                dashboard_complementar: [6, 7],
              },
              dashboard_colaborador: {
                id_layout_dashboard: 3,
                dashboard_complementar: [32],
                permissao_colaborador: ["*"],
              },
              dashboard_projeto: {
                id_layout_dashboard: 8,
                dashboard_complementar: [],
              },
              dashboard_bi: [
                {
                  grupo: "Diretoria",
                  icone: "people_outline",
                  layout_dashboard: [
                    {
                      icone: "people_outline",
                      id_layout_dashboard: 5,
                      dashboard: "Padrão",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Desenvolvimento",
                  icone: "code",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 25,
                      icone: "code",
                      dashboard: "Syclus 1.0",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 26,
                      icone: "code",
                      dashboard: "Syclus 2.0",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 12,
                      icone: "code",
                      dashboard: "Padrão",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Área Técnica",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 4,
                      dashboard: "Corrente",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 27,
                      dashboard: "Area 1",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 28,
                      dashboard: "Area 2",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 29,
                      dashboard: "Area 3",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 30,
                      dashboard: "Area 4",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 31,
                      dashboard: "Area 5",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 13,
                      icone: "construction",
                      dashboard: "Gestão",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 18,
                      dashboard: "Formação",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Projetos",
                  layout_dashboard: [
                    {
                      icone: "description",
                      id_layout_dashboard: 9,
                      dashboard: "Corrente",
                      dashboard_complementar: [],
                    },
                    {
                      icone: "description",
                      id_layout_dashboard: 22,
                      dashboard: "Gestão",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Administrativo",
                  icone: "paid",
                  layout_dashboard: [
                    {
                      icone: "paid",
                      id_layout_dashboard: 17,
                      dashboard: "Geral",
                      dashboard_complementar: [],
                    },
                    {
                      icone: "paid",
                      id_layout_dashboard: 14,
                      dashboard: "Cobrança",
                      dashboard_complementar: [],
                    },
                    {
                      icone: "paid",
                      id_layout_dashboard: 19,
                      dashboard: "Qualidade",
                      dashboard_complementar: [],
                    },
                    {
                      icone: "paid",
                      id_layout_dashboard: 20,
                      dashboard: "Processos",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Comercial",
                  icone: "work",
                  layout_dashboard: [
                    {
                      icone: "work",
                      id_layout_dashboard: 15,
                      dashboard: "Padrão",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Contas",
                  icone: "work",
                  layout_dashboard: [
                    {
                      icone: "work",
                      id_layout_dashboard: 16,
                      dashboard: "Padrão",
                      dashboard_complementar: [],
                    },
                    {
                      icone: "work",
                      id_layout_dashboard: 23,
                      dashboard: "clientes",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Controladoria",
                  icone: "people_outline",
                  layout_dashboard: [
                    {
                      icone: "people_outline",
                      id_layout_dashboard: 24,
                      dashboard: "Padrão",
                      dashboard_complementar: [],
                    },
                  ],
                },
              ],
            },
          },
        ],
        rotas: "colaborador",
        img: require("../../assets/4.png"),
      },
      {
        usuario: "eron",
        senha: "eronsyclus",
        id_colaborador: 49,
        id_aplicativo_inicial: 0,
        aplicativos: [
          {
            id_aplicativo: 1,
            aplicativo: "CRM",
            base_url_api: "https://api.syclus.com.br",
            recursos: {
              dashboard_area_trabalho: {
                id_layout_dashboard: 1,
                dashboard_complementar: [],
              },
              dashboard_cliente: {
                id_layout_dashboard: 2,
                dashboard_complementar: [],
              },
              dashboard_projeto: {
                id_layout_dashboard: 8,
                dashboard_complementar: [],
              },
              dashboard_bi: [
                {
                  grupo: "Área Técnica",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 4,
                      dashboard: "Corrente",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 27,
                      dashboard: "Area 1",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 28,
                      dashboard: "Area 2",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 29,
                      dashboard: "Area 3",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 30,
                      dashboard: "Area 4",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 31,
                      dashboard: "Area 5",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 18,
                      dashboard: "Formação",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Desenvolvimento",
                  icone: "code",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 25,
                      icone: "code",
                      dashboard: "Syclus 1.0",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 26,
                      icone: "code",
                      dashboard: "Syclus 2.0",
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
        ],
        rotas: "colaborador",
        img: require("../../assets/49.png"),
      },
      {
        usuario: "ewerton",
        senha: "ewerton321",
        id_colaborador: 46,
        id_aplicativo_inicial: 0,
        aplicativos: [
          {
            id_aplicativo: 1,
            aplicativo: "CRM",
            base_url_api: "https://api.syclus.com.br",
            recursos: {
              dashboard_area_trabalho: {
                id_layout_dashboard: 1,
                dashboard_complementar: [],
              },
              dashboard_cliente: {
                id_layout_dashboard: 2,
                dashboard_complementar: [],
              },
              dashboard_colaborador: {
                id_layout_dashboard: 3,
                dashboard_complementar: [],
                permissao_colaborador: ["*"],
              },
              dashboard_projeto: {
                id_layout_dashboard: 8,
                dashboard_complementar: [],
              },
              dashboard_bi: [
                {
                  grupo: "Contas",
                  icone: "work",
                  layout_dashboard: [
                    {
                      icone: "work",
                      id_layout_dashboard: 16,
                      dashboard: "Padrão",
                      dashboard_complementar: [],
                    },
                    {
                      icone: "work",
                      id_layout_dashboard: 23,
                      dashboard: "Clientes",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Área Técnica",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 4,
                      dashboard: "Corrente",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 27,
                      dashboard: "Area 1",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 28,
                      dashboard: "Area 2",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 29,
                      dashboard: "Area 3",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 30,
                      dashboard: "Area 4",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 31,
                      dashboard: "Area 5",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 13,
                      icone: "construction",
                      dashboard: "Gestão",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 18,
                      dashboard: "Formação",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Projetos",
                  layout_dashboard: [
                    {
                      icone: "description",
                      id_layout_dashboard: 9,
                      dashboard: "Corrente",
                      dashboard_complementar: [],
                    },
                    {
                      icone: "description",
                      id_layout_dashboard: 22,
                      dashboard: "Gestão",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Desenvolvimento",
                  icone: "code",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 25,
                      icone: "code",
                      dashboard: "Syclus 1.0",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 26,
                      icone: "code",
                      dashboard: "Syclus 2.0",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 12,
                      icone: "code",
                      dashboard: "Padrão",
                      dashboard_complementar: [],
                    },
                  ],
                },
              ],
            },
          },
        ],
        rotas: "colaborador",
        img: require("../../assets/46.png"),
      },
      {
        usuario: "fabricio",
        senha: "k2yk",
        id_colaborador: 42,
        id_aplicativo_inicial: 0,
        aplicativos: [
          {
            id_aplicativo: 1,
            aplicativo: "CRM",
            base_url_api: "https://api.syclus.com.br",
            recursos: {
              dashboard_area_trabalho: {
                id_layout_dashboard: 1,
                dashboard_complementar: [],
              },
              dashboard_cliente: {
                id_layout_dashboard: 2,
                dashboard_complementar: [],
              },
              dashboard_colaborador: {
                id_layout_dashboard: 3,
                dashboard_complementar: [],
                permissao_colaborador: ["*"],
              },
              dashboard_projeto: {
                id_layout_dashboard: 8,
                dashboard_complementar: [],
              },
              dashboard_bi: [
                {
                  grupo: "Projetos",
                  layout_dashboard: [
                    {
                      icone: "description",
                      id_layout_dashboard: 9,
                      dashboard: "Corrente",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Área Técnica",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 4,
                      dashboard: "Corrente",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 27,
                      dashboard: "Area 1",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 28,
                      dashboard: "Area 2",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 29,
                      dashboard: "Area 3",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 30,
                      dashboard: "Area 4",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 31,
                      dashboard: "Area 5",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 18,
                      dashboard: "Formação",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Desenvolvimento",
                  icone: "code",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 25,
                      icone: "code",
                      dashboard: "Syclus 1.0",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 26,
                      icone: "code",
                      dashboard: "Syclus 2.0",
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
        ],
        rotas: "colaborador",
        img: require("../../assets/42.png"),
      },
      {
        usuario: "helton",
        senha: "xxx",
        id_colaborador: 47,
        id_aplicativo_inicial: 0,
        aplicativos: [
          {
            id_aplicativo: 1,
            aplicativo: "CRM",
            base_url_api: "https://api.syclus.com.br",
            recursos: {
              dashboard_area_trabalho: {
                id_layout_dashboard: 1,
                dashboard_complementar: [],
              },
              dashboard_cliente: {
                id_layout_dashboard: 2,
                dashboard_complementar: [],
              },
              dashboard_projeto: {
                id_layout_dashboard: 8,
                dashboard_complementar: [],
              },
              dashboard_colaborador: {
                id_layout_dashboard: 3,
                dashboard_complementar: [],
                permissao_colaborador: ["*"],
              },
              dashboard_bi: [
                {
                  grupo: "Desenvolvimento",
                  icone: "code",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 26,
                      icone: "code",
                      dashboard: "Syclus 2.0",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 25,
                      icone: "code",
                      dashboard: "Syclus 1.0",
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
            },
          },

          {
            id_aplicativo: 2,
            aplicativo: "BI",
            base_url_api: "https://api.syclus.com.br",
            recursos: {
              dashboard_area_trabalho: {
                id_layout_dashboard: 1,
                dashboard_complementar: [],
              },
              dashboard_bi: [
                {
                  grupo: "Área Técnica",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 4,
                      dashboard: "Corrente",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 18,
                      dashboard: "Formação",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                  ],
                },
              ],
            },
          },
        ],
        rotas: "colaborador",
        img: require("../../assets/47.png"),
      },
      {
        usuario: "henrique",
        senha: "140290syclus",
        id_colaborador: 12,
        id_aplicativo_inicial: 0,
        aplicativos: [
          {
            id_aplicativo: 1,
            aplicativo: "CRM",
            base_url_api: "https://api.syclus.com.br",
            recursos: {
              dashboard_area_trabalho: {
                id_layout_dashboard: 1,
                dashboard_complementar: [],
              },
              dashboard_cliente: {
                id_layout_dashboard: 2,
                dashboard_complementar: [6, 7],
              },
              dashboard_colaborador: {
                id_layout_dashboard: 3,
                dashboard_complementar: [32],
                permissao_colaborador: ["*"],
              },
              dashboard_projeto: {
                id_layout_dashboard: 8,
                dashboard_complementar: [],
              },
              dashboard_bi: [
                {
                  grupo: "Administrativo",
                  icone: "paid",
                  layout_dashboard: [
                    {
                      icone: "paid",
                      id_layout_dashboard: 17,
                      dashboard: "Geral",
                      dashboard_complementar: [],
                    },
                    {
                      icone: "paid",
                      id_layout_dashboard: 14,
                      dashboard: "Cobrança",
                      dashboard_complementar: [],
                    },
                    {
                      icone: "paid",
                      id_layout_dashboard: 19,
                      dashboard: "Qualidade",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Controladoria",
                  icone: "people_outline",
                  layout_dashboard: [
                    {
                      icone: "people_outline",
                      id_layout_dashboard: 24,
                      dashboard: "Padrão",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Área Técnica",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 4,
                      dashboard: "Corrente",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 27,
                      dashboard: "Area 1",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 28,
                      dashboard: "Area 2",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 29,
                      dashboard: "Area 3",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 30,
                      dashboard: "Area 4",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 31,
                      dashboard: "Area 5",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 13,
                      dashboard: "Gestão",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 18,
                      dashboard: "Formação",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Projetos",
                  layout_dashboard: [
                    {
                      icone: "description",
                      id_layout_dashboard: 9,
                      dashboard: "Corrente",
                      dashboard_complementar: [],
                    },
                    {
                      icone: "description",
                      id_layout_dashboard: 22,
                      dashboard: "Gestão",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Desenvolvimento",
                  icone: "code",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 25,
                      icone: "code",
                      dashboard: "Syclus 1.0",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 26,
                      icone: "code",
                      dashboard: "Syclus 2.0",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 12,
                      icone: "code",
                      dashboard: "Padrão",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Comercial",
                  icone: "work",
                  layout_dashboard: [
                    {
                      icone: "work",
                      id_layout_dashboard: 15,
                      dashboard: "Padrão",
                      dashboard_complementar: [],
                    },
                  ],
                },
              ],
            },
          },
        ],
        rotas: "colaborador",
        img: require("../../assets/12.png"),
      },
      {
        usuario: "joaopaulo",
        senha: "joaopaulo321",
        id_colaborador: 21,
        id_aplicativo_inicial: 0,
        aplicativos: [
          {
            id_aplicativo: 1,
            aplicativo: "CRM",
            base_url_api: "https://api.syclus.com.br",
            recursos: {
              dashboard_area_trabalho: {
                id_layout_dashboard: 1,
                dashboard_complementar: [],
              },
              dashboard_cliente: {
                id_layout_dashboard: 2,
                dashboard_complementar: [6],
              },
              dashboard_colaborador: {
                id_layout_dashboard: 3,
                dashboard_complementar: [],
                permissao_colaborador: ["*"],
              },
              dashboard_bi: [
                {
                  grupo: "Administrativo",
                  icone: "paid",
                  layout_dashboard: [
                    {
                      icone: "paid",
                      id_layout_dashboard: 17,
                      dashboard: "Geral",
                      dashboard_complementar: [],
                    },
                    {
                      icone: "paid",
                      id_layout_dashboard: 14,
                      dashboard: "Cobrança",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Área Técnica",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 4,
                      dashboard: "Corrente",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 27,
                      dashboard: "Area 1",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 28,
                      dashboard: "Area 2",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 29,
                      dashboard: "Area 3",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 30,
                      dashboard: "Area 4",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 31,
                      dashboard: "Area 5",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 18,
                      dashboard: "Formação",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                  ],
                },
              ],
            },
          },
        ],
        rotas: "colaborador",
        img: require("../../assets/21.png"),
      },
      {
        usuario: "joaopedro",
        senha: "joao1905",
        id_colaborador: 52,
        id_aplicativo_inicial: 0,
        aplicativos: [
          {
            id_aplicativo: 1,
            aplicativo: "CRM",
            base_url_api: "https://api.syclus.com.br",
            recursos: {
              dashboard_area_trabalho: {
                id_layout_dashboard: 1,
                dashboard_complementar: [],
              },
              dashboard_cliente: {
                id_layout_dashboard: 2,
                dashboard_complementar: [],
              },
              dashboard_projeto: {
                id_layout_dashboard: 8,
                dashboard_complementar: [],
              },
              dashboard_bi: [
                {
                  grupo: "Área Técnica",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 4,
                      dashboard: "Corrente",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 27,
                      dashboard: "Area 1",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 28,
                      dashboard: "Area 2",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 29,
                      dashboard: "Area 3",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 30,
                      dashboard: "Area 4",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 31,
                      dashboard: "Area 5",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 18,
                      dashboard: "Formação",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Desenvolvimento",
                  icone: "code",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 25,
                      icone: "code",
                      dashboard: "Syclus 1.0",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 26,
                      icone: "code",
                      dashboard: "Syclus 2.0",
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
        ],
        rotas: "colaborador",
        img: require("../../assets/52.png"),
      },
      {
        usuario: "jonatan",
        senha: "82374338",
        id_colaborador: 56,
        id_aplicativo_inicial: 0,
        aplicativos: [
          {
            id_aplicativo: 1,
            aplicativo: "CRM",
            base_url_api: "https://api.syclus.com.br",
            recursos: {
              dashboard_area_trabalho: {
                id_layout_dashboard: 1,
                dashboard_complementar: [],
              },
              dashboard_cliente: {
                id_layout_dashboard: 2,
                dashboard_complementar: [],
              },
              dashboard_colaborador: {
                id_layout_dashboard: 3,
                dashboard_complementar: [32],
                permissao_colaborador: ["*"],
              },
              dashboard_projeto: {
                id_layout_dashboard: 8,
                dashboard_complementar: [],
              },
              dashboard_bi: [
                {
                  grupo: "Administrativo",
                  icone: "code",
                  layout_dashboard: [
                    {
                      icone: "code",
                      id_layout_dashboard: 20,
                      dashboard: "Processos",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Desenvolvimento",
                  icone: "code",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 25,
                      icone: "code",
                      dashboard: "Syclus 1.0",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 26,
                      icone: "code",
                      dashboard: "Syclus 2.0",
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
                {
                  grupo: "Área Técnica",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 4,
                      dashboard: "Corrente",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 27,
                      dashboard: "Area 1",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 28,
                      dashboard: "Area 2",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 29,
                      dashboard: "Area 3",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 30,
                      dashboard: "Area 4",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 31,
                      dashboard: "Area 5",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 13,
                      dashboard: "Gestão",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 18,
                      dashboard: "Formação",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Projetos",
                  layout_dashboard: [
                    {
                      icone: "description",
                      id_layout_dashboard: 9,
                      dashboard: "Corrente",
                      dashboard_complementar: [],
                    },
                    {
                      icone: "description",
                      id_layout_dashboard: 22,
                      dashboard: "Gestão",
                      dashboard_complementar: [],
                    },
                  ],
                },
              ],
            },
          },
        ],
        rotas: "colaborador",
        img: require("../../assets/56.png"),
      },
      {
        usuario: "jullyadson",
        senha: "jullyadson321",
        id_colaborador: 15,
        id_aplicativo_inicial: 0,
        aplicativos: [
          {
            id_aplicativo: 1,
            aplicativo: "CRM",
            base_url_api: "https://api.syclus.com.br",
            recursos: {
              dashboard_area_trabalho: {
                id_layout_dashboard: 1,
                dashboard_complementar: [],
              },
              dashboard_cliente: {
                id_layout_dashboard: 2,
                dashboard_complementar: [],
              },
              dashboard_colaborador: {
                id_layout_dashboard: 3,
                dashboard_complementar: [32],
                permissao_colaborador: ["*"],
              },
              dashboard_projeto: {
                id_layout_dashboard: 8,
                dashboard_complementar: [],
              },
              dashboard_bi: [
                {
                  grupo: "Área Técnica",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 4,
                      dashboard: "Corrente",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 27,
                      dashboard: "Area 1",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 28,
                      dashboard: "Area 2",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 29,
                      dashboard: "Area 3",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 30,
                      dashboard: "Area 4",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 31,
                      dashboard: "Area 5",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 13,
                      dashboard: "Gestão",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 18,
                      dashboard: "Formação",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Projetos",
                  layout_dashboard: [
                    {
                      icone: "description",
                      id_layout_dashboard: 9,
                      dashboard: "Corrente",
                      dashboard_complementar: [],
                    },
                    {
                      icone: "description",
                      id_layout_dashboard: 22,
                      dashboard: "Gestão",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Desenvolvimento",
                  icone: "code",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 25,
                      icone: "code",
                      dashboard: "Syclus 1.0",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 26,
                      icone: "code",
                      dashboard: "Syclus 2.0",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 12,
                      icone: "code",
                      dashboard: "Padrão",
                      dashboard_complementar: [],
                    },
                  ],
                },
              ],
            },
          },
        ],
        rotas: "colaborador",
        img: require("../../assets/15.png"),
      },
      {
        usuario: "maciel",
        senha: "29915052",
        id_colaborador: 20,
        id_aplicativo_inicial: 0,
        aplicativos: [
          {
            id_aplicativo: 1,
            aplicativo: "CRM",
            base_url_api: "https://api.syclus.com.br",
            recursos: {
              dashboard_area_trabalho: {
                id_layout_dashboard: 1,
                dashboard_complementar: [],
              },
              dashboard_cliente: {
                id_layout_dashboard: 2,
                dashboard_complementar: [7],
              },
              dashboard_colaborador: {
                id_layout_dashboard: 3,
                dashboard_complementar: [32],
                permissao_colaborador: ["*"],
              },
              dashboard_projeto: {
                id_layout_dashboard: 8,
                dashboard_complementar: [],
              },
              dashboard_bi: [
                {
                  grupo: "Comercial",
                  icone: "work",
                  layout_dashboard: [
                    {
                      icone: "work",
                      id_layout_dashboard: 15,
                      dashboard: "Padrão",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Área Técnica",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 4,
                      dashboard: "Corrente",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 27,
                      dashboard: "Area 1",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 28,
                      dashboard: "Area 2",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 29,
                      dashboard: "Area 3",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 30,
                      dashboard: "Area 4",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 31,
                      dashboard: "Area 5",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 18,
                      dashboard: "Formação",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Desenvolvimento",
                  icone: "code",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 25,
                      icone: "code",
                      dashboard: "Syclus 1.0",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 26,
                      icone: "code",
                      dashboard: "Syclus 2.0",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 12,
                      icone: "code",
                      dashboard: "Padrão",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Projetos",
                  layout_dashboard: [
                    {
                      icone: "description",
                      id_layout_dashboard: 9,
                      dashboard: "Corrente",
                      dashboard_complementar: [],
                    },
                    {
                      icone: "description",
                      id_layout_dashboard: 22,
                      dashboard: "Gestão",
                      dashboard_complementar: [],
                    },
                  ],
                },
              ],
            },
          },
        ],
        rotas: "colaborador",
        img: require("../../assets/20.png"),
      },
      {
        usuario: "pedrosantos",
        senha: "phsshp091217",
        id_colaborador: 41,
        id_aplicativo_inicial: 0,
        aplicativos: [
          {
            id_aplicativo: 1,
            aplicativo: "CRM",
            base_url_api: "https://api.syclus.com.br",
            recursos: {
              dashboard_area_trabalho: {
                id_layout_dashboard: 1,
                dashboard_complementar: [],
              },
              dashboard_cliente: {
                id_layout_dashboard: 2,
                dashboard_complementar: [],
              },
              dashboard_bi: [
                {
                  grupo: "Área Técnica",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 4,
                      dashboard: "Corrente",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 27,
                      dashboard: "Area 1",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 28,
                      dashboard: "Area 2",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 29,
                      dashboard: "Area 3",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 30,
                      dashboard: "Area 4",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 31,
                      dashboard: "Area 5",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 18,
                      dashboard: "Formação",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Desenvolvimento",
                  icone: "code",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 25,
                      icone: "code",
                      dashboard: "Syclus 1.0",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 26,
                      icone: "code",
                      dashboard: "Syclus 2.0",
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
        ],
        rotas: "colaborador",
        img: require("../../assets/41.png"),
      },
      {
        usuario: "ramon",
        senha: "ramon321",
        id_colaborador: 60,
        id_aplicativo_inicial: 0,
        aplicativos: [
          {
            id_aplicativo: 1,
            aplicativo: "CRM",
            base_url_api: "https://api.syclus.com.br",
            recursos: {
              dashboard_area_trabalho: {
                id_layout_dashboard: 1,
                dashboard_complementar: [],
              },
              dashboard_cliente: {
                id_layout_dashboard: 2,
                dashboard_complementar: [],
              },
              dashboard_bi: [
                {
                  grupo: "Área Técnica",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 4,
                      dashboard: "Corrente",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 27,
                      dashboard: "Area 1",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 28,
                      dashboard: "Area 2",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 29,
                      dashboard: "Area 3",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 30,
                      dashboard: "Area 4",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 31,
                      dashboard: "Area 5",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 18,
                      dashboard: "Formação",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Desenvolvimento",
                  icone: "code",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 25,
                      icone: "code",
                      dashboard: "Syclus 1.0",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 26,
                      icone: "code",
                      dashboard: "Syclus 2.0",
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
        ],
        rotas: "colaborador",
        img: require("../../assets/60.png"),
      },
      {
        usuario: "renan",
        senha: "renan321",
        id_colaborador: 55,
        id_aplicativo_inicial: 0,
        aplicativos: [
          {
            id_aplicativo: 1,
            aplicativo: "CRM",
            base_url_api: "https://api.syclus.com.br",
            recursos: {
              dashboard_area_trabalho: {
                id_layout_dashboard: 1,
                dashboard_complementar: [],
              },
              dashboard_cliente: {
                id_layout_dashboard: 2,
                dashboard_complementar: [],
              },
              dashboard_bi: [
                {
                  grupo: "Área Técnica",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 4,
                      dashboard: "Corrente",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 27,
                      dashboard: "Area 1",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 28,
                      dashboard: "Area 2",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 29,
                      dashboard: "Area 3",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 30,
                      dashboard: "Area 4",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 31,
                      dashboard: "Area 5",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 18,
                      dashboard: "Formação",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Desenvolvimento",
                  icone: "code",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 25,
                      icone: "code",
                      dashboard: "Syclus 1.0",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 26,
                      icone: "code",
                      dashboard: "Syclus 2.0",
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
        ],
        rotas: "colaborador",
        img: require("../../assets/55.png"),
      },
      {
        usuario: "rodrigo",
        senha: "cradle66",
        id_colaborador: 58,
        id_aplicativo_inicial: 0,
        aplicativos: [
          {
            id_aplicativo: 1,
            aplicativo: "CRM",
            base_url_api: "https://api.syclus.com.br",
            recursos: {
              dashboard_area_trabalho: {
                id_layout_dashboard: 1,
                dashboard_complementar: [],
              },
              dashboard_cliente: {
                id_layout_dashboard: 2,
                dashboard_complementar: [],
              },
              dashboard_bi: [
                {
                  grupo: "Área Técnica",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 4,
                      dashboard: "Corrente",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 27,
                      dashboard: "Area 1",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 28,
                      dashboard: "Area 2",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 29,
                      dashboard: "Area 3",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 30,
                      dashboard: "Area 4",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 31,
                      dashboard: "Area 5",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 18,
                      dashboard: "Formação",
                      icone: "construction",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Contas",
                  icone: "work",
                  layout_dashboard: [
                    {
                      icone: "work",
                      id_layout_dashboard: 16,
                      dashboard: "Padrão",
                      dashboard_complementar: [],
                    },
                  ],
                },
                {
                  grupo: "Desenvolvimento",
                  icone: "code",
                  layout_dashboard: [
                    {
                      id_layout_dashboard: 25,
                      icone: "code",
                      dashboard: "Syclus 1.0",
                      dashboard_complementar: [],
                    },
                    {
                      id_layout_dashboard: 26,
                      icone: "code",
                      dashboard: "Syclus 2.0",
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
        ],
        rotas: "colaborador",
        img: require("../../assets/58.png"),
      },
      {
        usuario: "setor desenvolvimento",
        id_colaborador: 34,
        img: require("../../assets/34.png"),
      },
      {
        usuario: "setor suporte",
        id_colaborador: 30,
        img: require("../../assets/34.png"),
      },
    ],
  };
  return json;
}

export function GetUsuarioPorIdColaborador(pIdColaborador) {
  let itemArray = null;
  let objSenhaLogin = senhaLogin();
  for (let i = 0; i < objSenhaLogin.login.length; i++) {
    if (pIdColaborador === objSenhaLogin.login[i].id_colaborador) {
      itemArray = objSenhaLogin.login[i];
      break;
    }
  }
  return itemArray;
}
export function GetUsuarioImg(pIdColaborador) {
  let img = null;
  let objSenhaLogin = senhaLogin();
  for (let i = 0; i < objSenhaLogin.login.length; i++) {
    if (pIdColaborador === objSenhaLogin.login[i].id_colaborador) {
      img = objSenhaLogin.login[i].img;
      break;
    }
  }
  return img;
}
