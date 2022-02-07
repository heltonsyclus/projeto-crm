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
        img: require("../../assets/comum.png"),
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
        img: require("../../assets/comum.png"),
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
        ],
        rotas: "colaborador",
        img: require("../../assets/cledesson.png"),
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
                dashboard_complementar: [],
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
              ],
            },
          },
        ],
        rotas: "colaborador",
        img: require("../../assets/comum.png"),
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
        ],
        rotas: "colaborador",
        img: require("../../assets/comum.png"),
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
        img: require("../../assets/comum.png"),
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
        ],
        rotas: "colaborador",
        img: require("../../assets/fabricio.png"),
      },
      {
        usuario: "helton",
        senha: "7",
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
        img: require("../../assets/helton.png"),
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
                dashboard_complementar: [],
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
                    {
                      icone: "paid",
                      id_layout_dashboard: 19,
                      dashboard: "Qualidade",
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
        img: require("../../assets/comum.png"),
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
              ],
            },
          },
        ],
        rotas: "colaborador",
        img: require("../../assets/jpaulo.png"),
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
        ],
        rotas: "colaborador",
        img: require("../../assets/jpedro.png"),
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
                dashboard_complementar: [],
                permissao_colaborador: ["*"],
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
        img: require("../../assets/comum.png"),
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
                    {
                      icone: "description",
                      id_layout_dashboard: 22,
                      dashboard: "Gestão",
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
                  grupo: "Desenvolvimento",
                  icone: "code",
                  layout_dashboard: [
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
        img: require("../../assets/jully.png"),
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
                dashboard_complementar: [],
                permissao_colaborador: ["*"],
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
                  ],
                },
                {
                  grupo: "Desenvolvimento",
                  icone: "code",
                  layout_dashboard: [
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
        img: require("../../assets/comum.png"),
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
        img: require("../../assets/comum.png"),
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
        img: require("../../assets/comum.png"),
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
        img: require("../../assets/rodrigo.png"),
      },
      {
        usuario: "wagner",
        senha: "wagner321",
        id_colaborador: 53,
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
                  grupo: "Desenvolvimento",
                  icone: "code",
                  layout_dashboard: [
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
        img: require("../../assets/wagner.png"),
      },
      {
        usuario: "techplast",
        senha: "0",
        id_colaborador: 54,
        id_aplicativo_inicial: 1,
        aplicativos: [
          {
            id_aplicativo: 1,
            aplicativo: "Produção",
            base_url_api: "https://cloud01.syclus.com.br:50001/api/syclus/v1",
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
        rotas: "cliente",
        img: require("../../assets/clientes/techplast.png"),
      },
    ],
  };
  return json;
}
