import {
  bodyAtividade,
  bodyAtividadePorTipoAtividade,
  bodyAtividadePorCliente,
  bodyAtividadePorTag,
  bodyAtividadePorResponsavel,
  bodyAtividadePorWorkflow,
  bodyAtividadePorSituacao,
  bodyAtividadePorPrioridade,
  bodyAtividadePorGut,
  bodyAtividadePorProjeto,
  bodyAtividadePorData,
  bodyAtividadePorMesAno,
  bodyAtividadePorSemana,
  bodyAtividadePorTipoAtividadeStatus,
  bodyAtividadePorWorkflowStatus,
  bodyAtividadePorResponsavelStatus,
  bodyAtividadePorDataStatus,
  bodyAtividadePorMesAnoStatus,
  bodyAtividadePorTipoAtividadeColaboradorPrevisao,
  bodyAtividadeCliente,
  bodyAtividadeClientePorTipoAtividade,
  bodyAtividadeClientePorResponsavel,
  bodyAtividadeClientePorTag,
  bodyAtividadeClientePorSituacao,
  bodyAtividadeClientePorWorkflow,
  bodyAtividadeClientePorData,
  bodyAtividadeClientePorMesAno,
  bodyAtividadeColaborador,
  bodyAtividadeColaboradorPorTipoAtividade,
  bodyAtividadeTag,
  bodyAtividadeTagPorTipoAtividade,
  bodyAtividadeTagPorCliente,
  bodyAtividadeTagPorResponsavel,
  bodyAtividadeTagPorWorkflow,
  bodyAtividadeTagPorSituacao,
  bodyAtividadeTagPorGut,
  bodyAtividadeTagPorData,
  bodyAtividadeTagPorMesAno,
  bodyAtividadeTagPorSemana,
  bodyAtividadeTagPorResponsavelTag,
  bodyAtividadeProjeto,
  bodyAtividadeProjetoPorResponsavel,
  bodyOcorrencia,
  bodyOcorrenciaPorAtividade,
  bodyOcorrenciaPorTipoAtividade,
  bodyOcorrenciaPorWorkflow,
  bodyOcorrenciaPorColaborador,
  bodyOcorrenciaPorData,
  bodyOcorrenciaPorMesAno,
  bodyOcorrenciaPorSemana,
  bodyOcorrenciaColaboradorTipoAtividadePeriodo,
  bodyProjeto,
  bodyProjetoPorTipoProjeto,
  bodyProjetoPorResponsavel,
  bodyProjetoPorSituacao,
  bodyProjetoPorCliente,
  bodyProjetoPorTag,
  bodyProjetoColaborador,
  bodyProjetoColaboradorPorTipoProjeto,
  bodyProjetoColaboradorPorSituacao,
  bodyProjetoTag,
  bodyProjetoTagPorTipoProjeto,
  bodyProjetoTagPorSituacao,
  bodyProjetoTagPorMesAno,
  bodyNotificacao,
  bodyNotificacaoPorAtividade,
  bodyNotificacaoPorTipoAtividade,
  bodyCliente,
  bodyClientePorTag,
  bodyClienteTag,
  bodyTeste,
} from "src/boot/consultaSql.js";
export default {
  methods: {
    getBody(pNomeBody, pIdGrupo) {
      let filtros = "";

      if (this.conteudo_card.filtro_sql !== undefined) {
        filtros = this.conteudo_card.filtro_sql;
      }
      if (filtros === "") {
        if (pIdGrupo > 0) {
          filtros = this.conteudo_card.filtro_sql_item;
          filtros = filtros.replace("<id_grupo>", pIdGrupo);
        } else {
          filtros = this.conteudo_card.filtro_sql_grupo;
        }
      }

      filtros = filtros.replace("<id_principal>", this.idPrincipal);
      return this.montaBody(pNomeBody, filtros);
    },
    executeFunctionByName(functionName, context /*, args */) {
      var args = Array.prototype.slice.call(arguments, 2);
      var namespaces = functionName.split(".");
      var func = namespaces.pop();
      for (var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
      }
      return context[func].apply(context, args);
    },
    montaBody(pNomeBody, filtros) {
      //return eval(pNomeBody)(filtros);
      //return this.executeFunctionByName(pNomeBody, window, filtros);

      if (pNomeBody === "bodyTeste") {
        return bodyTeste(filtros);
      }
      if (pNomeBody === "bodyAtividade") {
        return bodyAtividade(filtros);
      }
      if (pNomeBody === "bodyAtividadePorTipoAtividade") {
        return bodyAtividadePorTipoAtividade(filtros);
      }
      if (pNomeBody === "bodyAtividadePorCliente") {
        return bodyAtividadePorCliente(filtros);
      }
      if (pNomeBody === "bodyAtividadePorTag") {
        return bodyAtividadePorTag(filtros);
      }
      if (pNomeBody === "bodyAtividadePorWorkflow") {
        return bodyAtividadePorWorkflow(filtros);
      }
      if (pNomeBody === "bodyAtividadePorResponsavel") {
        return bodyAtividadePorResponsavel(filtros);
      }
      if (pNomeBody === "bodyAtividadePorSituacao") {
        return bodyAtividadePorSituacao(filtros);
      }
      if (pNomeBody === "bodyAtividadePorPrioridade") {
        return bodyAtividadePorPrioridade(filtros);
      }
      if (pNomeBody === "bodyAtividadePorGut") {
        return bodyAtividadePorGut(filtros);
      }
      if (pNomeBody === "bodyAtividadePorProjeto") {
        return bodyAtividadePorProjeto(filtros);
      }
      if (pNomeBody === "bodyAtividadePorData") {
        return bodyAtividadePorData(filtros);
      }
      if (pNomeBody === "bodyAtividadePorMesAno") {
        return bodyAtividadePorMesAno(filtros);
      }
      if (pNomeBody === "bodyAtividadePorSemana") {
        return bodyAtividadePorSemana(filtros);
      }
      if (pNomeBody === "bodyAtividadePorTipoAtividadeStatus") {
        return bodyAtividadePorTipoAtividadeStatus(filtros);
      }
      if (pNomeBody === "bodyAtividadePorResponsavelStatus") {
        return bodyAtividadePorResponsavelStatus(filtros);
      }
      if (pNomeBody === "bodyAtividadePorWorkflowStatus") {
        return bodyAtividadePorWorkflowStatus(filtros);
      }
      if (pNomeBody === "bodyAtividadePorDataStatus") {
        return bodyAtividadePorDataStatus(filtros);
      }
      if (pNomeBody === "bodyAtividadePorMesAnoStatus") {
        return bodyAtividadePorMesAnoStatus(filtros);
      }
      if (pNomeBody === "bodyAtividadePorTipoAtividadeColaboradorPrevisao") {
        return bodyAtividadePorTipoAtividadeColaboradorPrevisao(filtros);
      }

      if (pNomeBody === "bodyAtividadeCliente") {
        return bodyAtividadeCliente(filtros);
      }
      if (pNomeBody === "bodyAtividadeClientePorTipoAtividade") {
        return bodyAtividadeClientePorTipoAtividade(filtros);
      }
      if (pNomeBody === "bodyAtividadeClientePorResponsavel") {
        return bodyAtividadeClientePorResponsavel(filtros);
      }
      if (pNomeBody === "bodyAtividadeClientePorTag") {
        return bodyAtividadeClientePorTag(filtros);
      }
      if (pNomeBody === "bodyAtividadeClientePorSituacao") {
        return bodyAtividadeClientePorSituacao(filtros);
      }
      if (pNomeBody === "bodyAtividadeClientePorWorkflow") {
        return bodyAtividadeClientePorWorkflow(filtros);
      }
      if (pNomeBody === "bodyAtividadeClientePorData") {
        return bodyAtividadeClientePorData(filtros);
      }
      if (pNomeBody === "bodyAtividadeClientePorMesAno") {
        return bodyAtividadeClientePorMesAno(filtros);
      }

      if (pNomeBody === "bodyAtividadeTag") {
        return bodyAtividadeTag(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorTipoAtividade") {
        return bodyAtividadeTagPorTipoAtividade(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorCliente") {
        return bodyAtividadeTagPorCliente(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorWorkflow") {
        return bodyAtividadeTagPorWorkflow(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorResponsavel") {
        return bodyAtividadeTagPorResponsavel(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorSituacao") {
        return bodyAtividadeTagPorSituacao(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorGut") {
        return bodyAtividadeTagPorGut(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorData") {
        return bodyAtividadeTagPorData(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorMesAno") {
        return bodyAtividadeTagPorMesAno(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorSemana") {
        return bodyAtividadeTagPorSemana(filtros);
      }
      if (pNomeBody === "bodyAtividadeTagPorResponsavelTag") {
        return bodyAtividadeTagPorResponsavelTag(filtros);
      }

      if (pNomeBody === "bodyAtividadeColaborador") {
        return bodyAtividadeColaborador(filtros);
      }
      if (pNomeBody === "bodyAtividadeColaboradorPorTipoAtividade") {
        return bodyAtividadeColaboradorPorTipoAtividade(filtros);
      }

      if (pNomeBody === "bodyAtividadeProjeto") {
        return bodyAtividadeProjeto(filtros);
      }
      if (pNomeBody === "bodyAtividadeProjetoPorResponsavel") {
        return bodyAtividadeProjetoPorResponsavel(filtros);
      }

      if (pNomeBody === "bodyOcorrencia") {
        return bodyOcorrencia(filtros);
      }
      if (pNomeBody === "bodyOcorrenciaPorAtividade") {
        return bodyOcorrenciaPorAtividade(filtros);
      }
      if (pNomeBody === "bodyOcorrenciaPorTipoAtividade") {
        return bodyOcorrenciaPorTipoAtividade(filtros);
      }
      if (pNomeBody === "bodyOcorrenciaPorWorkflow") {
        return bodyOcorrenciaPorWorkflow(filtros);
      }
      if (pNomeBody === "bodyOcorrenciaPorColaborador") {
        return bodyOcorrenciaPorColaborador(filtros);
      }
      if (pNomeBody === "bodyOcorrenciaPorData") {
        return bodyOcorrenciaPorData(filtros);
      }
      if (pNomeBody === "bodyOcorrenciaPorMesAno") {
        return bodyOcorrenciaPorMesAno(filtros);
      }
      if (pNomeBody === "bodyOcorrenciaPorSemana") {
        return bodyOcorrenciaPorSemana(filtros);
      }
      if (pNomeBody === "bodyOcorrenciaColaboradorTipoAtividadePeriodo") {
        return bodyOcorrenciaColaboradorTipoAtividadePeriodo(filtros);
      }

      if (pNomeBody === "bodyProjeto") {
        return bodyProjeto(filtros);
      }
      if (pNomeBody === "bodyProjetoPorTipoProjeto") {
        return bodyProjetoPorTipoProjeto(filtros);
      }
      if (pNomeBody === "bodyProjetoPorResponsavel") {
        return bodyProjetoPorResponsavel(filtros);
      }
      if (pNomeBody === "bodyProjetoPorSituacao") {
        return bodyProjetoPorSituacao(filtros);
      }
      if (pNomeBody === "bodyProjetoPorCliente") {
        return bodyProjetoPorCliente(filtros);
      }
      if (pNomeBody === "bodyProjetoPorTag") {
        return bodyProjetoPorTag(filtros);
      }

      if (pNomeBody === "bodyProjetoColaborador") {
        return bodyProjetoColaborador(filtros);
      }
      if (pNomeBody === "bodyProjetoColaboradorPorTipoProjeto") {
        return bodyProjetoColaboradorPorTipoProjeto(filtros);
      }
      if (pNomeBody === "bodyProjetoColaboradorPorSituacao") {
        return bodyProjetoColaboradorPorSituacao(filtros);
      }

      if (pNomeBody === "bodyProjetoTag") {
        return bodyProjetoTag(filtros);
      }
      if (pNomeBody === "bodyProjetoTagPorTipoProjeto") {
        return bodyProjetoTagPorTipoProjeto(filtros);
      }
      if (pNomeBody === "bodyProjetoTagPorSituacao") {
        return bodyProjetoTagPorSituacao(filtros);
      }
      if (pNomeBody === "bodyProjetoTagPorMesAno") {
        return bodyProjetoTagPorMesAno(filtros);
      }

      if (pNomeBody === "bodyNotificacao") {
        return bodyNotificacao(filtros);
      }
      if (pNomeBody === "bodyNotificacaoPorAtividade") {
        return bodyNotificacaoPorAtividade(filtros);
      }
      if (pNomeBody === "bodyNotificacaoPorTipoAtividade") {
        return bodyNotificacaoPorTipoAtividade(filtros);
      }

      if (pNomeBody === "bodyCliente") {
        return bodyCliente(filtros);
      }
      if (pNomeBody === "bodyClientePorTag") {
        return bodyClientePorTag(filtros);
      }
      if (pNomeBody === "bodyClienteTag") {
        return bodyClienteTag(filtros);
      }
    },
  },
};
