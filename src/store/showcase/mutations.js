export const numeroNotificacao = (state, notificar) => {
  state.notificacao = notificar;
};

export const updateDrawerState = (state, payload) => {
  state.arrModels = payload;
};

export const getWorkflow = (state, payload) => {
  state.arrWorkflow = payload;
};

export const selectAgenda = (state, payload) => {
  state.calendarioAtual = payload;
};

export const selectStatusAgenda = (state, payload) => {
  state.calendarioEventos = payload;
};
export const autenticacaoLogin = (state, payload) => {
  state.login = payload;
};
export const BInome = (state, payload) => {
  state.dashboardBInome = payload;
};
