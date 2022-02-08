export function recursoCrm() {
  const json = {
    login: [
      {
        usuario: "usuario",
        acess_token: "3132d1asd23das1asd1d5as1321",
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
      {
        usuario: "fulano",
        acess_token: "3132d1asd23das1asd1d5as1321",
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
  };
  return json;
}
