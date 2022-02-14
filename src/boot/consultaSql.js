//Retorna IdCliente buscando por: RazaoSocial, NomeFantasia ou CpfCnpj
export function bodyProcuraIdCliente(pValor) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select c.cd_cliente "id_cliente", c.ds_fantasia "nome_fantasia", c.ds_cpf_cnpj "cpf_cnpj" from cliente c where c.ds_status = \'A\' and ((c.ds_razao_social like ('%${pValor}%')) or (c.ds_fantasia like ('%${pValor}%')) or (c.ds_cpf_cnpj like ('${pValor}%')))`,
  };

  return body;
}
//Retorna dados do cliente por IdCliente
/*
export function bodyCliente(pIdCliente) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select c.cd_cliente "id_cliente", c.ds_fantasia "nome_fantasia", c.ds_cpf_cnpj "cpf_cnpj", c.ds_status "status" from cliente c where c.cd_cliente = ${pIdCliente}`
  };

  return body;
}
*/
//Retorna dados do cliente pIdCliente
export function bodyDadosCliente(pIdCliente) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select c.cd_cliente \"id_cliente\", c.ds_razao_social \"razao_social\", c.ds_fantasia \"nome_fantasia\", c.ds_cpf_cnpj \"cpf_cnpj\", ce.ds_endereco_completo \"endereco\", ce.ds_bairro \"bairro\", ce.ds_cidade \"cidade\", ce.ds_uf \"uf\", ce.ds_cep \"cep\", ct.ds_telefone \"telefone\", cm.ds_email \"email\" from cliente c left join proc_cliente_endereco(c.cd_cliente, 'R') ce on (1 = 1) left join proc_cliente_telefone(c.cd_cliente, '') ct on (1 = 1) left join proc_cliente_email(c.cd_cliente, '') cm on (1 = 1) where c.cd_cliente = ${pIdCliente}`,
  };
  return body;
}

//Retorna execuções gerais
export function bodyExecucaoGeral() {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select a.cd_atividade "id_atividade", a.ds_atividade "atividade" from atividade a where a.qt_colaborador_ativo > 0`,
  };
  return body;
}

export function montaBody(pInstrucaoSql, pFiltros) {
  if (pFiltros.substr(0, 6) !== "where ") {
    pFiltros = "where (0 = 1)";
  }

  let sql = pInstrucaoSql.replace("<filtros>", pFiltros);

  const body = {
    tipo_retorno: "",
    instrucao_sql: sql,
  };

  //this.montaFiltroSql(pInstrucaoSql, pFiltros)
  return body;
}

//---------------------- cliente ----------------------//
export function bodyCliente(pFiltros) {
  let instrucao_sql = `select cl.cd_cliente "id_cliente", cl.ds_fantasia "cliente", cl.dt_cadastro "data_cadastro" from cliente cl <filtros> order by cl.dt_cadastro`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyClientePorTag(pFiltros) {
  let instrucao_sql = `select tg.cd_tag "id_tag", tg.ds_tag "tag", count(cl.cd_cliente) "qtde_cliente" from cliente cl inner join cliente_tag cg on cg.cd_cliente = cl.cd_cliente inner join tag tg on tg.cd_tag = cg.cd_tag <filtros> group by tg.cd_tag, tg.ds_tag order by tg.ds_tag`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

//---------------------- cliente Tag ----------------------//
export function bodyClienteTag(pFiltros) {
  let instrucao_sql = `select cl.cd_cliente "id_cliente", cl.ds_fantasia "cliente", cl.dt_cadastro "data_cadastro" from cliente cl inner join cliente_tag cg on cg.cd_cliente = cl.cd_cliente inner join tag tg on tg.cd_tag = cg.cd_tag <filtros> order by cl.dt_cadastro`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

//---------------------- atividade ----------------------//
export function bodyAtividade(pFiltros) {
  let instrucao_sql = `select a.cd_atividade "id_atividade", a.ds_atividade "atividade", a.dt_previsao "data_previsao" from atividade a <filtros> order by a.ds_atividade`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadePorTipoAtividade(pFiltros) {
  let instrucao_sql = `select tv.cd_tipo_atividade "id_tipo_atividade", tv.ds_tipo_atividade "tipo_atividade", count(a.cd_atividade) "qtde_atividade", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a inner join tipo_atividade tv on tv.cd_tipo_atividade = a.cd_tipo_atividade <filtros> group by tv.cd_tipo_atividade, tv.ds_tipo_atividade order by tv.ds_tipo_atividade`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadePorResponsavel(pFiltros) {
  let instrucao_sql = `select cb.cd_colaborador "id_colaborador", cb.ds_colaborador "colaborador", count(a.cd_atividade) "qtde_atividade", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a inner join colaborador cb on cb.cd_colaborador = a.cd_responsavel <filtros> group by cb.cd_colaborador, cb.ds_colaborador order by cb.ds_colaborador`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadePorSituacao(pFiltros) {
  let instrucao_sql = `select st.cd_situacao "id_situacao", st.ds_situacao "situacao", count(a.cd_atividade) "qtde_atividade", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a inner join situacao st on st.cd_situacao = a.cd_situacao <filtros> group by st.cd_situacao, st.ds_situacao order by st.ds_situacao`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadePorPrioridade(pFiltros) {
  let instrucao_sql = `select pr.cd_prioridade "id_prioridade", pr.ds_prioridade "prioridade", count(a.cd_atividade) "qtde_atividade", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a inner join prioridade pr on pr.cd_prioridade = a.cd_prioridade <filtros> group by pr.cd_prioridade, pr.ds_prioridade order by pr.ds_prioridade`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadePorCliente(pFiltros) {
  let instrucao_sql = `select cl.cd_cliente "id_cliente", cl.ds_fantasia "cliente", count(a.cd_atividade) "qtde_atividade", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a inner join atividade_cliente ac on ac.cd_empresa = a.cd_empresa and ac.cd_atividade = a.cd_atividade inner join cliente cl on cl.cd_cliente = ac.cd_cliente <filtros> group by cl.cd_cliente, cl.ds_fantasia order by cl.ds_fantasia`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadePorWorkflow(pFiltros) {
  let instrucao_sql = `select wf.cd_workflow "id_workflow", wf.ds_workflow "workflow", count(a.cd_atividade) "qtde_atividade", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a inner join workflow wf on wf.cd_workflow = a.cd_workflow <filtros> group by wf.cd_workflow, wf.ds_workflow order by wf.ds_workflow`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadePorTag(pFiltros) {
  let instrucao_sql = `select tg.cd_tag "id_tag", tg.ds_tag "tag", count(a.cd_atividade) "qtde_atividade", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a inner join atividade_tag ag on ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade inner join tag tg on tg.cd_tag = ag.cd_tag <filtros> group by tg.cd_tag, tg.ds_tag order by tg.ds_tag`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadePorGut(pFiltros) {
  let instrucao_sql = `select a.vl_gut "id_gut", a.vl_gut "gut", count(a.cd_atividade) "qtde_atividade", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a <filtros> group by a.vl_gut order by a.vl_gut desc`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadePorProjeto(pFiltros) {
  let instrucao_sql = `select pj.cd_projeto "id_projeto", pj.ds_projeto "projeto", count(a.cd_atividade) "qtde_atividade", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a inner join atividade_vinculo av on av.cd_empresa = a.cd_empresa and av.cd_atividade = a.cd_atividade inner join projeto pj on pj.cd_projeto = av.cd_projeto <filtros> group by pj.cd_projeto, pj.ds_projeto order by pj.ds_projeto`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadePorData(pFiltros) {
  let instrucao_sql = `select datediff(day, cast('01/01/1970' as date), a.dt_previsao) "id_sequencial", lpad(extract(day from a.dt_previsao), 2, '0')||'/'||lpad(extract(month from a.dt_previsao), 2, '0')||'/'||extract(year from a.dt_previsao) "data_previsao", count(a.cd_atividade) "qtde", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a <filtros> group by datediff(day, cast('01/01/1970' as date), a.dt_previsao), lpad(extract(day from a.dt_previsao), 2, '0')||'/'||lpad(extract(month from a.dt_previsao), 2, '0')||'/'||extract(year from a.dt_previsao) order by 1 desc`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadePorMesAno(pFiltros) {
  let instrucao_sql = `select cast(extract(year from a.dt_previsao)||lpad(extract(month from a.dt_previsao), 2, '0') as integer) "id_sequencial", lpad(extract(month from a.dt_previsao), 2, '0')||'/'||extract(year from a.dt_previsao) "data_previsao", count(a.cd_atividade) "qtde", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a <filtros> group by extract(year from a.dt_previsao)||lpad(extract(month from a.dt_previsao), 2, '0'), lpad(extract(month from a.dt_previsao), 2, '0')||'/'||extract(year from a.dt_previsao) order by 1 desc`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadePorSemana(pFiltros) {
  let instrucao_sql = `select extract(week from a.dt_previsao) "id_sequencial", 'SEMANA '||extract(week from a.dt_previsao) "data_ocorrencia", count(a.cd_atividade) "qtde", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a <filtros> group by extract(week from a.dt_previsao), 'SEMANA '||extract(week from a.dt_previsao) order by 1 desc`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

//----------------------atividade Comparativo----------------------//
export function bodyAtividadePorTipoAtividadeStatus(pFiltros) {
  let instrucao_sql = `select tv.ds_tipo_atividade "tipo_atividade", a.ds_status "status", count(a.cd_atividade) "qtde_atividade" from atividade a inner join tipo_atividade tv on tv.cd_tipo_atividade = a.cd_tipo_atividade <filtros> group by tv.ds_tipo_atividade, a.ds_status order by tv.ds_tipo_atividade`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadePorWorkflowStatus(pFiltros) {
  let instrucao_sql = `select wf.ds_workflow "ds_workflow", a.ds_status "status", count(a.cd_atividade) "qtde_atividade" from atividade a inner join workflow wf on wf.cd_workflow = a.cd_workflow <filtros> group by wf.ds_workflow, a.ds_status order by wf.ds_workflow`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadePorResponsavelStatus(pFiltros) {
  let instrucao_sql = `select cb.ds_colaborador "colaborador", a.ds_status "status", count(a.cd_atividade) "qtde_atividade" from atividade a inner join colaborador cb on cb.cd_colaborador = a.cd_responsavel <filtros> group by cb.ds_colaborador, a.ds_status order by 1,2`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadePorDataStatus(pFiltros) {
  let instrucao_sql = `select lpad(extract(day from a.dt_previsao), 2, '0')||'/'||lpad(extract(month from a.dt_previsao), 2, '0')||'/'||extract(year from a.dt_previsao) "data_previsao", a.ds_status "status", count(a.cd_atividade) "qtde_atividade" from atividade a inner join tipo_atividade tv on tv.cd_tipo_atividade = a.cd_tipo_atividade <filtros> group by lpad(extract(day from a.dt_previsao), 2, '0')||'/'||lpad(extract(month from a.dt_previsao), 2, '0')||'/'||extract(year from a.dt_previsao), a.ds_status order by 1`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadePorMesAnoStatus(pFiltros) {
  let instrucao_sql = `select lpad(extract(month from a.dt_previsao), 2, '0')||'/'||extract(year from a.dt_previsao) "data_previsao", a.ds_status "status", count(a.cd_atividade) "qtde_atividade" from atividade a inner join tipo_atividade tv on tv.cd_tipo_atividade = a.cd_tipo_atividade <filtros> group by lpad(extract(month from a.dt_previsao), 2, '0')||'/'||extract(year from a.dt_previsao), a.ds_status order by 1, 2`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadePorTipoAtividadeColaboradorPrevisao(pFiltros) {
  let instrucao_sql = `select tv.ds_tipo_atividade "tipo_atividade", cb.ds_colaborador "colaborador", cast(a.dt_previsao as date) "previsao", count(a.cd_atividade) "qtde_atividade" from atividade a inner join tipo_atividade tv on tv.cd_tipo_atividade = a.cd_tipo_atividade inner join colaborador cb on cb.cd_colaborador = a.cd_responsavel <filtros> group by tv.ds_tipo_atividade, cb.ds_colaborador, cast(a.dt_previsao as date) order by 1,2,3`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

//----------------------atividade tag ----------------------//
export function bodyAtividadeTag(pFiltros) {
  let instrucao_sql = `select a.cd_atividade "id_atividade", a.ds_atividade "atividade", a.dt_previsao "data_previsao" from atividade a inner join atividade_tag ag on ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade inner join tag tg on tg.cd_tag = ag.cd_tag <filtros> order by a.dt_previsao`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadeTagPorTipoAtividade(pFiltros) {
  let instrucao_sql = `select tv.cd_tipo_atividade "id_tipo_atividade", tv.ds_tipo_atividade "tipo_atividade", count(a.cd_atividade) "qtde_atividade", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a inner join tipo_atividade tv on tv.cd_tipo_atividade = a.cd_tipo_atividade inner join atividade_tag ag on ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade <filtros> group by tv.cd_tipo_atividade, tv.ds_tipo_atividade order by tv.ds_tipo_atividade`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadeTagPorResponsavel(pFiltros) {
  let instrucao_sql = `select cb.cd_colaborador "id_colaborador", cb.ds_colaborador "colaborador", count(a.cd_atividade) "qtde_atividade", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a inner join colaborador cb on cb.cd_colaborador = a.cd_responsavel inner join atividade_tag ag on ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade <filtros> group by cb.cd_colaborador, cb.ds_colaborador order by cb.ds_colaborador`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadeTagPorSituacao(pFiltros) {
  let instrucao_sql = `select st.cd_situacao "id_situacao", st.ds_situacao "situacao", count(a.cd_atividade) "qtde_atividade", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a inner join situacao st on st.cd_situacao = a.cd_situacao inner join atividade_tag ag on ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade <filtros> group by st.cd_situacao, st.ds_situacao order by st.ds_situacao`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadeTagPorCliente(pFiltros) {
  let instrucao_sql = `select cl.cd_cliente "id_cliente", cl.ds_fantasia "cliente", count(a.cd_atividade) "qtde_atividade", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a inner join atividade_cliente ac on ac.cd_empresa = a.cd_empresa and ac.cd_atividade = a.cd_atividade inner join cliente cl on cl.cd_cliente = ac.cd_cliente inner join atividade_tag ag on ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade <filtros> group by cl.cd_cliente, cl.ds_fantasia order by cl.ds_fantasia`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadeTagPorWorkflow(pFiltros) {
  let instrucao_sql = `select wf.cd_workflow "id_workflow", wf.ds_workflow "workflow", count(a.cd_atividade) "qtde_atividade", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a inner join workflow wf on wf.cd_workflow = a.cd_workflow inner join atividade_tag ag on ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade <filtros> group by wf.cd_workflow, wf.ds_workflow order by wf.ds_workflow`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadeTagPorGut(pFiltros) {
  let instrucao_sql = `select a.vl_gut "id_gut", a.vl_gut "gut", count(a.cd_atividade) "qtde_atividade", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a inner join atividade_tag ag on ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade <filtros> group by a.vl_gut order by a.vl_gut desc`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadeTagPorData(pFiltros) {
  let instrucao_sql = `select datediff(day, cast('01/01/1970' as date), a.dt_previsao) "id_sequencial", lpad(extract(day from a.dt_previsao), 2, '0')||'/'||lpad(extract(month from a.dt_previsao), 2, '0')||'/'||extract(year from a.dt_previsao) "data_previsao", count(a.cd_atividade) "qtde", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a inner join atividade_tag ag on ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade <filtros> group by datediff(day, cast('01/01/1970' as date), a.dt_previsao), lpad(extract(day from a.dt_previsao), 2, '0')||'/'||lpad(extract(month from a.dt_previsao), 2, '0')||'/'||extract(year from a.dt_previsao) order by 1 desc`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadeTagPorMesAno(pFiltros) {
  let instrucao_sql = `select cast(extract(year from a.dt_previsao)||lpad(extract(month from a.dt_previsao), 2, '0') as integer) "id_sequencial", lpad(extract(month from a.dt_previsao), 2, '0')||'/'||extract(year from a.dt_previsao) "data_previsao", count(a.cd_atividade) "qtde", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a inner join atividade_tag ag on ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade <filtros> group by extract(year from a.dt_previsao)||lpad(extract(month from a.dt_previsao), 2, '0'), lpad(extract(month from a.dt_previsao), 2, '0')||'/'||extract(year from a.dt_previsao) order by 1 desc`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadeTagPorSemana(pFiltros) {
  let instrucao_sql = `select extract(week from a.dt_previsao) "id_sequencial", 'SEMANA '||extract(week from a.dt_previsao) "data_ocorrencia", count(a.cd_atividade) "qtde", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a inner join atividade_tag ag on ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade <filtros> group by extract(week from a.dt_previsao), 'SEMANA '||extract(week from a.dt_previsao) order by 1 desc`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

//----------------------atividade Tag Comparativo----------------------//
export function bodyAtividadeTagPorResponsavelTag(pFiltros) {
  let instrucao_sql = `select cb.ds_colaborador "colaborador", tg.ds_tag "tag", count(a.cd_atividade) "qtde_atividade" from atividade a inner join colaborador cb on cb.cd_colaborador = a.cd_responsavel inner join atividade_tag ag on ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade inner join tag tg on tg.cd_tag = ag.cd_tag <filtros> group by cb.ds_colaborador, tg.ds_tag order by cb.ds_colaborador`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

//----------------------atividade cliente ----------------------//

export function bodyAtividadeCliente(pFiltros) {
  let instrucao_sql = `select a.cd_atividade "id_atividade", a.ds_atividade "atividade", a.dt_previsao "data_previsao" from atividade a inner join atividade_cliente ac on ac.cd_empresa = a.cd_empresa and ac.cd_atividade = a.cd_atividade <filtros> order by a.dt_previsao`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadeClientePorTipoAtividade(pFiltros) {
  let instrucao_sql = `select tv.cd_tipo_atividade "id_tipo_atividade", tv.ds_tipo_atividade "tipo_atividade", count(a.cd_atividade) "qtde_atividade", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a inner join tipo_atividade tv on tv.cd_tipo_atividade = a.cd_tipo_atividade inner join atividade_cliente ac on ac.cd_empresa = a.cd_empresa and ac.cd_atividade = a.cd_atividade <filtros> group by tv.cd_tipo_atividade, tv.ds_tipo_atividade order by tv.ds_tipo_atividade`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadeClientePorResponsavel(pFiltros) {
  let instrucao_sql = `select cb.cd_colaborador "id_colaborador", cb.ds_colaborador "colaborador", count(a.cd_atividade) "qtde_atividade", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a inner join colaborador cb on cb.cd_colaborador = a.cd_responsavel inner join atividade_cliente ac on ac.cd_empresa = a.cd_empresa and ac.cd_atividade = a.cd_atividade <filtros> group by cb.cd_colaborador, cb.ds_colaborador order by cb.ds_colaborador`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadeClientePorWorkflow(pFiltros) {
  let instrucao_sql = `select wf.cd_workflow "id_workflow", wf.ds_workflow "workflow", count(a.cd_atividade) "qtde_atividade", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a inner join workflow wf on wf.cd_workflow = a.cd_workflow inner join atividade_cliente ac on ac.cd_empresa = a.cd_empresa and ac.cd_atividade = a.cd_atividade <filtros> group by wf.cd_workflow, wf.ds_workflow order by wf.ds_workflow`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadeClientePorSituacao(pFiltros) {
  let instrucao_sql = `select st.cd_situacao "id_situacao", st.ds_situacao "situacao", count(a.cd_atividade) "qtde_atividade", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a inner join situacao st on st.cd_situacao = a.cd_situacao inner join atividade_cliente ac on ac.cd_empresa = a.cd_empresa and ac.cd_atividade = a.cd_atividade <filtros> group by st.cd_situacao, st.ds_situacao order by st.ds_situacao`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadeClientePorTag(pFiltros) {
  let instrucao_sql = `select tg.cd_tag "id_tag", tg.ds_tag "tag", count(a.cd_atividade) "qtde_atividade", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a inner join atividade_cliente ac on ac.cd_empresa = a.cd_empresa and ac.cd_atividade = a.cd_atividade inner join atividade_tag atg on atg.cd_empresa = a.cd_empresa and atg.cd_atividade = a.cd_atividade inner join tag tg on tg.cd_tag = atg.cd_tag <filtros> group by tg.cd_tag, tg.ds_tag order by tg.ds_tag`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadeClientePorData(pFiltros) {
  let instrucao_sql = `select datediff(day, cast('01/01/1970' as date), a.dt_previsao) "id_sequencial", lpad(extract(day from a.dt_previsao), 2, '0')||'/'||lpad(extract(month from a.dt_previsao), 2, '0')||'/'||extract(year from a.dt_previsao) "data_previsao", count(a.cd_atividade) "qtde", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a inner join atividade_cliente ac on ac.cd_empresa = a.cd_empresa and ac.cd_atividade = a.cd_atividade <filtros> group by datediff(day, cast('01/01/1970' as date), a.dt_previsao), lpad(extract(day from a.dt_previsao), 2, '0')||'/'||lpad(extract(month from a.dt_previsao), 2, '0')||'/'||extract(year from a.dt_previsao) order by 1 desc`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadeClientePorMesAno(pFiltros) {
  let instrucao_sql = `select cast(extract(year from a.dt_previsao)||lpad(extract(month from a.dt_previsao), 2, '0') as integer) "id_sequencial", lpad(extract(month from a.dt_previsao), 2, '0')||'/'||extract(year from a.dt_previsao) "data_previsao", count(a.cd_atividade) "qtde", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a inner join atividade_cliente ac on ac.cd_empresa = a.cd_empresa and ac.cd_atividade = a.cd_atividade <filtros> group by extract(year from a.dt_previsao)||lpad(extract(month from a.dt_previsao), 2, '0'), lpad(extract(month from a.dt_previsao), 2, '0')||'/'||extract(year from a.dt_previsao) order by 1 desc`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

//---------------------- atividade colaborador ----------------------//

export function bodyAtividadeColaborador(pFiltros) {
  let instrucao_sql = `select a.cd_atividade "id_atividade", a.ds_atividade "atividade", a.dt_previsao "data_previsao" from atividade a inner join atividade_colaborador acb on acb.cd_empresa = a.cd_empresa and acb.cd_atividade = a.cd_atividade <filtros> order by a.dt_previsao`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

export function bodyAtividadeColaboradorPorTipoAtividade(pFiltros) {
  let instrucao_sql = `select tv.cd_tipo_atividade "id_tipo_atividade", tv.ds_tipo_atividade "tipo_atividade", count(a.cd_atividade) "qtde_atividade", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a inner join tipo_atividade tv on tv.cd_tipo_atividade = a.cd_tipo_atividade inner join atividade_colaborador acb on acb.cd_empresa = a.cd_empresa and acb.cd_atividade = a.cd_atividade <filtros> group by tv.cd_tipo_atividade, tv.ds_tipo_atividade order by tv.ds_tipo_atividade`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

//---------------------- atividade Projeto ----------------------//
export function bodyAtividadeProjeto(pFiltros) {
  let instrucao_sql = `select a.cd_atividade "id_atividade", a.ds_atividade "atividade", a.dt_previsao "data_previsao" from atividade a inner join atividade_vinculo av on av.cd_empresa = a.cd_empresa and av.cd_atividade = a.cd_atividade inner join projeto pj on pj.cd_projeto = av.cd_projeto <filtros> order by a.dt_previsao`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyAtividadeProjetoPorResponsavel(pFiltros) {
  let instrucao_sql = `select cb.cd_colaborador "id_colaborador", cb.ds_colaborador "colaborador", count(a.cd_atividade) "qtde_atividade", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a inner join atividade_vinculo av on av.cd_empresa = a.cd_empresa and av.cd_atividade = a.cd_atividade inner join projeto pj on pj.cd_projeto = av.cd_projeto inner join colaborador cb on cb.cd_colaborador = a.cd_responsavel <filtros> group by cb.cd_colaborador, cb.ds_colaborador order by cb.ds_colaborador`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

/* Atividade filtro por interessado */

export function bodyAtividadeInteressado(pFiltros) {
  let instrucao_sql = `select cb.cd_colaborador "id_colaborador", cb.ds_colaborador "colaborador", count(a.cd_atividade) "qtde_atividade", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), a.duracao)) "duracao" from atividade a inner join atividade_colabdorador ac on ac.cd_empresa = a.cd_empresa and ac.cd_atividade = a.cd_atividade inner join colaborador cb on cb.cd_colaborador = ac.cd_colaborador <filtros> group by cb.cd_colaborador, cb.ds_colaborador order by cb.ds_colaborador`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
//Retorna atividades pendente por IdColarador
export function bodyAtividesExecucaoColaborador(pIdColaborador) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select a.cd_atividade \"id_atividade\", a.ds_atividade \"atividade\", a.dt_previsao \"data_previsao\" from atividade a where a.ds_status = 'P' and a. cd_responsavel = ${pIdColaborador}`,
  };
  return body;
}
//Retorna atividades finalizadas por IdColaborador
export function bodyAtividesFinalizadaColaborador(pIdColaborador) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select a.cd_atividade \"id_atividade\", a.ds_atividade \"atividade\", a.dt_previsao \"data_previsao\" from atividade a where a.ds_status = 'F' and a. cd_responsavel = ${pIdColaborador}`,
  };
  return body;
}
//----------------------colaborador ----------------------//
//Retorna dados do colaborador pIdColaborador
export function bodyProcuraIdColaborador(pValor) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select c.cd_colaborador "id_colaborador", c.ds_colaborador "colaborador", c.ds_cpf_cnpj "cpf_cnpj", c.ds_status "status" from colaborador c where c.ds_status = \'A\' and ((c.ds_colaborador like ('%${pValor}%')) or (c.ds_cpf_cnpj like ('${pValor}%')))`,
  };
  return body;
}
//Retorna dados do colaborador pIdColaborador
export function bodyProcuraIdColaboradorTotal(pValor) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select c.cd_colaborador "id_colaborador", c.ds_colaborador "colaborador", c.ds_cpf_cnpj "cpf_cnpj", c.ds_status "status" from colaborador c where c.ds_status = \'A\' and ((c.ds_colaborador like ('%${pValor}%')) or (c.ds_fantasia like ('%${pValor}%')) or (c.ds_cpf_cnpj like ('${pValor}%')))`,
  };
  return body;
}
//Retorna dados do colaborador em execucao pIdColaborador
export function bodyAtividadePendenteColaborador(pValor) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select a.cd_atividade \"id_atividade\", a.ds_atividade \"atividade\", a.dt_previsao \"data_previsao\" from atividade a where a.ds_status = 'P' and a. cd_responsavel = ${pValor}`,
  };
  return body;
}
//Retorna dados do colaborador em finalizado pIdColaborador
export function bodyFinalizadoColaborador(pValor) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select a.cd_atividade \"id_atividade\", a.ds_atividade \"atividade\", a.dt_previsao \"data_previsao\" from atividade a where a.ds_status = 'F' and a. cd_responsavel =${pValor}`,
  };
  return body;
}
//---------------------- ocorrencia ----------------------//
export function bodyOcorrencia(pFiltros) {
  let instrucao_sql = `select a.cd_atividade "id_atividade", a.ds_atividade "atividade", a.qt_colaborador_ativo "qtde", sum(DATEDIFF(MINUTE, o.dt_ocorrencia, current_timestamp)) "duracao" from atividade_ocorrencia o inner join atividade a on a.cd_empresa = o.cd_empresa and a.cd_atividade = o.cd_atividade <filtros> group by a.cd_atividade, a.ds_atividade, a.qt_colaborador_ativo order by a.ds_atividade`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

/*
export function bodyOcorrencia(pFiltros) {
  let instrucao_sql = `select a.cd_atividade "id_atividade", a.ds_atividade "atividade", a.dt_previsao "data_previsao" from atividade a <filtros> order by a.dt_previsao`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
*/ export function bodyOcorrenciaPorAtividade(pFiltros) {
  let instrucao_sql = `select a.cd_atividade "id_atividade", a.ds_atividade "atividade", count(o.cd_ocorrencia) "qtde", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), O.DURACAO)) "duracao", cast(list(o.cd_colaborador) as varchar(500)) \"lista\" from atividade_ocorrencia o inner join atividade a on a.cd_empresa = o.cd_empresa and a.cd_atividade = o.cd_atividade <filtros> group by a.cd_atividade, a.ds_atividade order by a.ds_atividade`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyOcorrenciaPorTipoAtividade(pFiltros) {
  let instrucao_sql = `select tv.cd_tipo_atividade "id_tipo_atividade", tv.ds_tipo_atividade "tipo_atividade", count(o.cd_ocorrencia) "qtde", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), O.DURACAO)) "duracao" from atividade_ocorrencia o inner join atividade a on a.cd_empresa = o.cd_empresa and a.cd_atividade = o.cd_atividade inner join tipo_atividade tv on tv.cd_tipo_atividade = a.cd_tipo_atividade <filtros> group by tv.cd_tipo_atividade, tv.ds_tipo_atividade order by tv.ds_tipo_atividade`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyOcorrenciaPorWorkflow(pFiltros) {
  let instrucao_sql = `select wf.cd_workflow "id_workflow", wf.ds_workflow "workflow", count(o.cd_ocorrencia) "qtde", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), O.DURACAO)) "duracao" from atividade_ocorrencia o inner join atividade a on a.cd_empresa = o.cd_empresa and a.cd_atividade = o.cd_atividade inner join workflow wf on wf.cd_workflow = a.cd_workflow <filtros> group by wf.cd_workflow, wf.ds_workflow order by wf.ds_workflow`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyOcorrenciaPorColaborador(pFiltros) {
  let instrucao_sql = `select cb.cd_colaborador "id_colaborador", cb.ds_colaborador "colaborador", count(o.cd_ocorrencia) "qtde", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), O.DURACAO)) "duracao" from atividade_ocorrencia o inner join atividade a on a.cd_empresa = o.cd_empresa and a.cd_atividade = o.cd_atividade inner join colaborador cb on cb.cd_colaborador = o.cd_colaborador <filtros> group by cb.cd_colaborador, cb.ds_colaborador order by cb.ds_colaborador`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyOcorrenciaPorData(pFiltros) {
  let instrucao_sql = `select datediff(day, cast('01/01/1970' as date), o.dt_ocorrencia) "id_sequencial", lpad(extract(day from o.dt_ocorrencia), 2, '0')||'/'||lpad(extract(month from o.dt_ocorrencia), 2, '0')||'/'||extract(year from o.dt_ocorrencia) "data_ocorrencia", count(o.cd_ocorrencia) "qtde", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), O.DURACAO)) "duracao" from atividade_ocorrencia o inner join atividade a on a.cd_empresa = o.cd_empresa and a.cd_atividade = o.cd_atividade <filtros> group by datediff(day, cast('01/01/1970' as date), o.dt_ocorrencia), lpad(extract(day from o.dt_ocorrencia), 2, '0')||'/'||lpad(extract(month from o.dt_ocorrencia), 2, '0')||'/'||extract(year from o.dt_ocorrencia) order by 1 desc`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyOcorrenciaPorMesAno(pFiltros) {
  let instrucao_sql = `select extract(year from o.dt_ocorrencia)||lpad(extract(month from o.dt_ocorrencia), 2, '0') "id_sequencial", lpad(extract(month from o.dt_ocorrencia), 2, '0')||'/'||extract(year from o.dt_ocorrencia) "data_ocorrencia", count(o.cd_ocorrencia) "qtde", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), O.DURACAO)) "duracao" from atividade_ocorrencia o inner join atividade a on a.cd_empresa = o.cd_empresa and a.cd_atividade = o.cd_atividade <filtros> group by extract(year from o.dt_ocorrencia)||lpad(extract(month from o.dt_ocorrencia), 2, '0'), lpad(extract(month from o.dt_ocorrencia), 2, '0')||'/'||extract(year from o.dt_ocorrencia) order by 1 desc`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyOcorrenciaPorSemana(pFiltros) {
  let instrucao_sql = `select extract(week from o.dt_ocorrencia) "id_sequencial", 'SEMANA '||extract(week from o.dt_ocorrencia) "data_ocorrencia", count(o.cd_ocorrencia) "qtde", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), O.DURACAO)) "duracao" from atividade_ocorrencia o inner join atividade a on a.cd_empresa = o.cd_empresa and a.cd_atividade = o.cd_atividade <filtros> group by extract(week from o.dt_ocorrencia), 'SEMANA '||extract(week from o.dt_ocorrencia) order by 1 desc`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

//---------------------- ocorrencia cliente ----------------------//
export function bodyOcorrenciaCliente(pFiltros) {
  let instrucao_sql = `select a.cd_atividade "id_atividade", a.ds_atividade "atividade", a.qt_colaborador_ativo "qtde", sum(DATEDIFF(MINUTE, o.dt_ocorrencia, current_timestamp)) "duracao" from atividade_ocorrencia o inner join atividade a on a.cd_empresa = o.cd_empresa and a.cd_atividade = o.cd_atividade inner join atividade_cliente ac on ac.cd_empresa = o.cd_empresa and ac.cd_atividade = o.cd_atividade <filtros> group by a.cd_atividade, a.ds_atividade, a.qt_colaborador_ativo order by a.ds_atividade`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyOcorrenciaClientePorData(pFiltros) {
  let instrucao_sql = `select datediff(day, cast('01/01/1970' as date), o.dt_ocorrencia) "id_sequencial", lpad(extract(day from o.dt_ocorrencia), 2, '0')||'/'||lpad(extract(month from o.dt_ocorrencia), 2, '0')||'/'||extract(year from o.dt_ocorrencia) "data_ocorrencia", count(o.cd_ocorrencia) "qtde", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), O.DURACAO)) "duracao" from atividade_ocorrencia o inner join atividade a on a.cd_empresa = o.cd_empresa and a.cd_atividade = o.cd_atividade inner join atividade_cliente ac on ac.cd_empresa = o.cd_empresa and ac.cd_atividade = o.cd_atividade <filtros> group by datediff(day, cast('01/01/1970' as date), o.dt_ocorrencia), lpad(extract(day from o.dt_ocorrencia), 2, '0')||'/'||lpad(extract(month from o.dt_ocorrencia), 2, '0')||'/'||extract(year from o.dt_ocorrencia) order by 1 desc`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

//---------------------- ocorrencia comparativo ----------------------//
export function bodyOcorrenciaPorWorkflowData(pFiltros) {
  let instrucao_sql = `select lpad(extract(day from o.dt_ocorrencia), 2, '0')||'/'||lpad(extract(month from o.dt_ocorrencia), 2, '0')||'/'||extract(year from o.dt_ocorrencia) "data_ocorrencia", wf.ds_workflow "workflow", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), O.DURACAO)) "duracao" from atividade_ocorrencia o inner join atividade a on a.cd_empresa = o.cd_empresa and a.cd_atividade = o.cd_atividade inner join workflow wf on wf.cd_workflow = a.cd_workflow <filtros> group by lpad(extract(day from o.dt_ocorrencia), 2, '0')||'/'||lpad(extract(month from o.dt_ocorrencia), 2, '0')||'/'||extract(year from o.dt_ocorrencia), wf.ds_workflow order by 1, 2`;
  //let instrucao_sql = `select lpad(extract(day from a.dt_previsao), 2, '0')||'/'||lpad(extract(month from a.dt_previsao), 2, '0')||'/'||extract(year from a.dt_previsao) "data_previsao", a.ds_status "status", count(a.cd_atividade) "qtde_atividade" from atividade a inner join tipo_atividade tv on tv.cd_tipo_atividade = a.cd_tipo_atividade <filtros> group by lpad(extract(day from a.dt_previsao), 2, '0')||'/'||lpad(extract(month from a.dt_previsao), 2, '0')||'/'||extract(year from a.dt_previsao), a.ds_status order by 1`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

//---------------------- ocorrencia lista ----------------------//
export function bodyOcorrenciaColaboradorTipoAtividadePeriodo(pFiltros) {
  let instrucao_sql = `select cb.ds_colaborador \"colaborador\", tv.ds_tipo_atividade \"tipo_atividade\", dateadd(minute, - datediff(minute, cast('01/01/1970 00:00:00' as timestamp), o.duracao) - 180, o.dt_ocorrencia) \"data inicial\", dateadd(-3 hour to o.dt_ocorrencia) \"data_final\", a.ds_atividade \"atividade\" from atividade_ocorrencia o inner join atividade a on a.cd_empresa = o.cd_empresa and a.cd_atividade = o.cd_atividade inner join tipo_atividade tv on tv.cd_tipo_atividade = a.cd_tipo_atividade inner join colaborador cb on cb.cd_colaborador = o.cd_colaborador <filtros> order by 1, 2, 3`;
  //let instrucao_sql = `select cb.ds_colaborador \"colaborador\", tv.ds_tipo_atividade \"tipo_atividade\", dateadd(minute, - datediff(minute, cast('01/01/1970 00:00:00' as timestamp), o.duracao), o.dt_ocorrencia) \"data inicial\", o.dt_ocorrencia \"data_final\" from atividade_ocorrencia o inner join atividade a on a.cd_empresa = o.cd_empresa and a.cd_atividade = o.cd_atividade inner join tipo_atividade tv on tv.cd_tipo_atividade = a.cd_tipo_atividade inner join colaborador cb on cb.cd_colaborador = o.cd_colaborador <filtros> order by 1, 2, 3`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyOcorrenciaColaboradorWorkflowPeriodo(pFiltros) {
  let instrucao_sql = `select cb.ds_colaborador \"colaborador\", wf.ds_workflow \"workflow\", dateadd(minute, - datediff(minute, cast('01/01/1970 00:00:00' as timestamp), o.duracao) - 180, o.dt_ocorrencia) \"data inicial\", dateadd(-3 hour to o.dt_ocorrencia) \"data_final\" from atividade_ocorrencia o inner join atividade a on a.cd_empresa = o.cd_empresa and a.cd_atividade = o.cd_atividade inner join workflow wf on wf.cd_workflow = a.cd_workflow inner join colaborador cb on cb.cd_colaborador = o.cd_colaborador <filtros> order by 1, 2, 3`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyOcorrenciaTipoAtividadeDataPeriodo(pFiltros) {
  let instrucao_sql = `select tv.ds_tipo_atividade \"tipo_atividade\", cast(o.dt_ocorrencia as date) \"data\", dateadd(minute, - datediff(minute, cast('01/01/1970 00:00:00' as timestamp), o.duracao), cast(dateadd(-3 hour to o.dt_ocorrencia) as time)) \"data_inicial\", cast(dateadd(-3 hour to o.dt_ocorrencia) as time) \"data_final\" from atividade_ocorrencia o inner join atividade a on a.cd_empresa = o.cd_empresa and a.cd_atividade = o.cd_atividade inner join tipo_atividade tv on tv.cd_tipo_atividade = a.cd_tipo_atividade <filtros> order by o.dt_ocorrencia`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

//---------------------- projeto ----------------------//
export function bodyProcuraIdProjeto(pValor) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select p.cd_projeto "id_projeto", p.ds_projeto "projeto", c.ds_cpf_cnpj "cpf_cnpj", p.ds_status "status" from projeto p left join cliente c on c.cd_cliente = p.cd_cliente where p.ds_status <> \'C\' and ((p.ds_projeto like ('%${pValor}%')) or (c.ds_cpf_cnpj like ('${pValor}%')))`,
  };
  return body;
}

//Retorna dados do projeto pIdProjeto
export function bodyDadosProjeto(pIdProjeto) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select p.cd_projeto \"id_projeto\", p.ds_projeto \"projeto\", p.dt_previsao \"data_previsao\", cb.ds_colaborador \"responsavel\", cl.ds_razao_social \"razao_social\", cl.ds_fantasia \"nome_fantasia\", cl.ds_cpf_cnpj \"cpf_cnpj\", ce.ds_endereco_completo \"endereco\", ce.ds_bairro \"bairro\", ce.ds_cidade \"cidade\", ce.ds_uf \"uf\", ce.ds_cep \"cep\", ct.ds_telefone \"telefone\", cm.ds_email \"email\" from projeto p inner join colaborador cb on cb.cd_colaborador = p.cd_responsavel left join cliente cl on cl.cd_cliente = p.cd_cliente left join proc_cliente_endereco(cl.cd_cliente, 'R') ce on (1 = 1) left join proc_cliente_telefone(cl.cd_cliente, '') ct on (1 = 1) left join proc_cliente_email(cl.cd_cliente, '') cm on (1 = 1) where p.cd_projeto = ${pIdProjeto}`,
  };
  return body;
}

export function bodyProjeto(pFiltros) {
  let instrucao_sql = `select p.cd_projeto "id_projeto", p.ds_projeto "projeto", p.dt_previsao "data_previsao" from projeto p <filtros> order by p.dt_previsao`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyProjetoPorTipoProjeto(pFiltros) {
  let instrucao_sql = `select tv.cd_tipo_projeto "id_tipo_projeto", tv.ds_tipo_projeto "tipo_projeto", count(p.cd_projeto) "qtde_projeto", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), p.duracao)) "duracao" from projeto p inner join tipo_projeto tv on tv.cd_tipo_projeto = p.cd_tipo_projeto <filtros> group by tv.cd_tipo_projeto, tv.ds_tipo_projeto order by tv.ds_tipo_projeto`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyProjetoPorTag(pFiltros) {
  let instrucao_sql = `select tg.cd_tag "id_tag", tg.ds_tag "tag", count(p.cd_projeto) "qtde_projeto", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), p.duracao)) "duracao" from projeto p inner join projeto_tag pg on pg.cd_projeto = p.cd_projeto inner join tag tg on tg.cd_tag = pg.cd_tag <filtros> group by tg.cd_tag, tg.ds_tag order by tg.ds_tag`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyProjetoPorResponsavel(pFiltros) {
  let instrucao_sql = `select cb.cd_colaborador "id_colaborador", cb.ds_colaborador "colaborador", count(p.cd_projeto) "qtde_projeto", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), p.duracao)) "duracao" from projeto p inner join colaborador cb on cb.cd_colaborador = p.cd_responsavel <filtros> group by cb.cd_colaborador, cb.ds_colaborador order by cb.ds_colaborador`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyProjetoPorSituacao(pFiltros) {
  let instrucao_sql = `select st.cd_situacao "id_situacao", st.ds_situacao "situacao", count(p.cd_projeto) "qtde_projeto", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), p.duracao)) "duracao" from projeto p inner join situacao st on st.cd_situacao = p.cd_situacao inner <filtros> group by st.cd_situacao, st.ds_situacao order by st.ds_situacao`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyProjetoPorCliente(pFiltros) {
  let instrucao_sql = `select cl.cd_cliente "id_cliente", cl.ds_fantasia "cliente", count(p.cd_projeto) "qtde_projeto", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), p.duracao)) "duracao" from projeto p inner join cliente cl on cl.cd_cliente = p.cd_cliente <filtros> group by cl.cd_cliente, cl.ds_fantasia order by cl.ds_fantasia`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyProjetoPorMesAno(pFiltros) {
  let instrucao_sql = `select cast(extract(year from p.dt_previsao)||lpad(extract(month from p.dt_previsao), 2, '0') as integer) "id_sequencial", lpad(extract(month from p.dt_previsao), 2, '0')||'/'||extract(year from p.dt_previsao) "data_previsao", count(p.cd_projeto) "qtde", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), p.duracao)) "duracao" from projeto p <filtros> group by extract(year from p.dt_previsao)||lpad(extract(month from p.dt_previsao), 2, '0'), lpad(extract(month from p.dt_previsao), 2, '0')||'/'||extract(year from p.dt_previsao) order by 1 desc`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

//---------------------- projeto colaborador ----------------------//
export function bodyProjetoColaborador(pFiltros) {
  let instrucao_sql = `select p.cd_projeto "id_projeto", p.ds_projeto "projeto", p.dt_previsao "data_previsao" from projeto p inner join projeto_colaborador pcb on pcb.cd_projeto = p.cd_projeto <filtros> order by p.dt_previsao`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyProjetoColaboradorPorTipoProjeto(pFiltros) {
  let instrucao_sql = `select tv.cd_tipo_projeto "id_tipo_projeto", tv.ds_tipo_projeto "tipo_projeto", count(p.cd_projeto) "qtde_projeto", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), p.duracao)) "duracao" from projeto p inner join tipo_projeto tv on tv.cd_tipo_projeto = p.cd_tipo_projeto inner join projeto_colaborador pcb on pcb.cd_projeto = p.cd_projeto <filtros> group by tv.cd_tipo_projeto, tv.ds_tipo_projeto order by tv.ds_tipo_projeto`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyProjetoColaboradorPorSituacao(pFiltros) {
  let instrucao_sql = `select st.cd_situacao "id_situacao", st.ds_situacao "situacao", count(p.cd_projeto) "qtde_projeto", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), p.duracao)) "duracao" from projeto p inner join situacao st on st.cd_situacao = p.cd_situacao inner join projeto_colaborador pcb on pcb.cd_projeto = p.cd_projeto <filtros> group by st.cd_situacao, st.ds_situacao order by st.ds_situacao`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

//---------------------- projeto tag ----------------------//
export function bodyProjetoTag(pFiltros) {
  let instrucao_sql = `select p.cd_projeto "id_projeto", p.ds_projeto "projeto", p.dt_previsao "data_previsao" from projeto p inner join projeto_tag ptg on ptg.cd_projeto = p.cd_projeto <filtros> order by p.dt_previsao`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyProjetoTagPorTipoProjeto(pFiltros) {
  let instrucao_sql = `select tv.cd_tipo_projeto "id_tipo_projeto", tv.ds_tipo_projeto "tipo_projeto", count(p.cd_projeto) "qtde_projeto", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), p.duracao)) "duracao" from projeto p inner join tipo_projeto tv on tv.cd_tipo_projeto = p.cd_tipo_projeto inner join projeto_tag ptg on ptg.cd_projeto = p.cd_projeto <filtros> group by tv.cd_tipo_projeto, tv.ds_tipo_projeto order by tv.ds_tipo_projeto`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyProjetoTagPorSituacao(pFiltros) {
  let instrucao_sql = `select st.cd_situacao "id_situacao", st.ds_situacao "situacao", count(p.cd_projeto) "qtde_projeto", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), p.duracao)) "duracao" from projeto p inner join situacao st on st.cd_situacao = p.cd_situacao inner join projeto_tag ptg on ptg.cd_projeto = p.cd_projeto <filtros> group by st.cd_situacao, st.ds_situacao order by st.ds_situacao`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyProjetoTagPorMesAno(pFiltros) {
  let instrucao_sql = `select cast(extract(year from p.dt_previsao)||lpad(extract(month from p.dt_previsao), 2, '0') as integer) "id_sequencial", lpad(extract(month from p.dt_previsao), 2, '0')||'/'||extract(year from p.dt_previsao) "data_previsao", count(p.cd_projeto) "qtde", sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), p.duracao)) "duracao" from projeto p inner join projeto_tag ptg on ptg.cd_projeto = p.cd_projeto <filtros> group by extract(year from p.dt_previsao)||lpad(extract(month from p.dt_previsao), 2, '0'), lpad(extract(month from p.dt_previsao), 2, '0')||'/'||extract(year from p.dt_previsao) order by 1 desc`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

//---------------------- projeto atividade ----------------------//
export function bodyAtividadePendenteProjeto(pValor) {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select a.cd_atividade \"id_atividade\", a.ds_atividade \"atividade\", a.dt_previsao \"data_previsao\" from atividade a where a.ds_status = 'P' and a. cd_responsavel = ${pValor}`,
  };
  return body;
}
//---projetos ativos
export function bodyProjetoAtivo() {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select p.cd_projeto "id_projeto", p.ds_projeto "projeto", p.dt_previsao "data_previsao" from projeto p where p.ds_status = \'A\'`,
  };
  return body;
}
//--Projetos finalizados
export function bodyProjetoFinalizados() {
  const body = {
    tipo_retorno: "",
    instrucao_sql: `select p.cd_projeto "id_projeto", p.ds_projeto "projeto", p.dt_previsao "data_previsao" from projeto p where p.ds_status = \'F\'`,
  };
  return body;
}

//---------------------- notificacao ----------------------//
export function bodyNotificacao(pFiltros) {
  let instrucao_sql = `select n.cd_notificacao, n.ds_notificacao, count(n.cd_notificacao) as qt_notificacao, sum(DATEDIFF(MINUTE, CAST('01/01/1970 00:00:00' AS TIMESTAMP), n.dt_notificacao)) "duracao", n.dt_notificacao as dt_notificacao from notificacao n inner join atividade a on a.cd_empresa = n.cd_empresa_atividade and n.cd_atividade = a.cd_atividade inner join colaborador cb on cb.cd_colaborador = n.cd_colaborador <filtros> group by a.cd_atividade, a.ds_atividade, tv.ds_tipo_atividade, cb.ds_colaborador order by 6 desc`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyNotificacaoPorAtividade(pFiltros) {
  let instrucao_sql = `select a.cd_atividade, a.ds_atividade, count(n.cd_notificacao) as qt_notificacao, tv.ds_tipo_atividade, cb.ds_colaborador as ds_responsavel, max(n.dt_notificacao) as dt_notificacao from notificacao n inner join atividade a on a.cd_empresa = n.cd_empresa_atividade and n.cd_atividade = a.cd_atividade inner join tipo_atividade tv on tv.cd_tipo_atividade = a.cd_tipo_atividade inner join colaborador cb on cb.cd_colaborador = a.cd_responsavel inner join situacao st on st.cd_situacao = a.cd_situacao <filtros> group by a.cd_atividade, a.ds_atividade, tv.ds_tipo_atividade, cb.ds_colaborador order by 6 desc`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
export function bodyNotificacaoPorTipoAtividade(pFiltros) {
  let instrucao_sql = `select ta.cd_tipo_atividade, ta.ds_tipo_atividade, count(n.cd_notificacao) as qt_notificacao from notificacao n inner join atividade a on a.cd_empresa = n.cd_empresa_atividade and n.cd_atividade = a.cd_atividade inner join tipo_atividade ta on ta.cd_tipo_atividade = a.cd_tipo_atividade <filtros> group by ta.cd_tipo_atividade, ta.ds_tipo_atividade order by 2`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}

//---------------------- teste ----------------------//
export function bodyTeste(pFiltros) {
  //let instrucao_sql = `select cb.cd_colaborador "id_colaborador", cb.ds_colaborador "colaborador", lpad(extract(month from a.dt_previsao), 2, '0')||'/'||extract(year from a.dt_previsao) \"mesano\", count(a.cd_atividade) \"qtde_atividade\" from atividade a inner join colaborador cb on cb.cd_colaborador = a.cd_responsavel where a.ds_status in ('P', 'F') and a.dt_previsao between '01/01/2021' and '12/31/2021' group by cb.cd_colaborador, cb.ds_colaborador, lpad(extract(month from a.dt_previsao), 2, '0')||'/'||extract(year from a.dt_previsao) order by cb.ds_colaborador`;
  //let instrucao_sql = `select tv.cd_tipo_atividade \"id_tipo_atividade\", tv.ds_tipo_atividade \"tipo_atividade\", lpad(extract(month from a.dt_previsao), 2, '0')||'/'||extract(year from a.dt_previsao) \"mesano\", count(a.cd_atividade) \"qtde_atividade\" from atividade a inner join tipo_atividade tv on tv.cd_tipo_atividade = a.cd_tipo_atividade where a.ds_status in ('P', 'F') and a.dt_previsao between '01/01/2021' and '12/31/2021' group by tv.cd_tipo_atividade, tv.ds_tipo_atividade, lpad(extract(month from a.dt_previsao), 2, '0')||'/'||extract(year from a.dt_previsao) order by tv.ds_tipo_atividade`;
  let instrucao_sql = `select cb.cd_colaborador "id_colaborador", cb.ds_colaborador "colaborador", lpad(extract(month from a.dt_previsao), 2, '0')||'/'||extract(year from a.dt_previsao) \"mesano\", count(a.cd_atividade) \"qtde_atividade\" from atividade a inner join colaborador cb on cb.cd_colaborador = a.cd_responsavel where a.ds_status in ('P', 'F') and a.dt_previsao between '01/01/2021' and '12/31/2021' and a.cd_tipo_atividade = 2 group by cb.cd_colaborador, cb.ds_colaborador, lpad(extract(month from a.dt_previsao), 2, '0')||'/'||extract(year from a.dt_previsao) order by cb.ds_colaborador`;
  let body = montaBody(instrucao_sql, pFiltros);
  return body;
}
