export default function () {
  return {
    notificacao: 0,
    arrModels: [
      {
        vAvaliar: "",
        vDataInicial: "",
        vDataFinal: "",
        vSituacao: "",
        vTags: "",
        vColaborador: "",
        vCampo: "",
        vCriterio: "",
        valorInput: "",
      },
    ],
    arrWorkflow: [],
    calendarioAtual: "Mensal",
    calendarioEventos: "Todos",
    login: null,
    dashboardBInome: null,
  };
}
