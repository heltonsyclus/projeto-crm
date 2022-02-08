export function LoginServiceSyclus() {
  const json = {
    login: [
      {
        usuario: "usuario",
        senha: "0",
        id_colaborador: 1,
        img: require("../../assets/comum.png"),
        id_aplicativo_inicial: 0,
        aplicativos: [
          {
            id_aplicativo: 0,
            aplicativo: "Syclus",
            licencas: [
              {
                licenca: "Syclus Tecnologia",
                cnpj_cnpj: "00.000.000/0000-00",
                base_url_api: "https://api.syclus.com.br",
              },
            ],
          },
          {
            id_aplicativo: 1,
            aplicativo: "CRM",
            licencas: [],
          },
          {
            id_aplicativo: 2,
            aplicativo: "BI",
            licencas: [
              {
                licenca: "Empresa 1",
                cnpj_cnpj: "00.000.000/0000-00",
                base_url_api: "https://empresa1.com.br",
              },
              {
                licenca: "Empresa 2",
                cnpj_cnpj: "00.000.000/0000-00",
                base_url_api: "https://empresa2.com.br",
              },
            ],
          },
        ],
      },
    ],
  };
  return json;
}
