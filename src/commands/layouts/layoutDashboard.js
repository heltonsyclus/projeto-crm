export function GeLayoutDashBoard(pIdLayout) {
  let jLayout;
  switch (pIdLayout) {
    case 1:
      jLayout = layoutDashBoard1();
      break;
    case 2:
      jLayout = layoutDashBoard2();
      break;
    case 3:
      jLayout = layoutDashBoard3();
      break;
    case 4:
      jLayout = layoutDashBoard4();
      break;
    case 5:
      jLayout = layoutDashBoard5();
      break;
    case 6:
      jLayout = layoutDashBoard6();
      break;
    case 7:
      jLayout = layoutDashBoard7();
      break;
    case 8:
      jLayout = layoutDashBoard8();
      break;
    case 9:
      jLayout = layoutDashBoard9();
      break;
    case 10:
      jLayout = layoutDashBoard10();
      break;
    case 11:
      jLayout = layoutDashBoard11();
      break;
    case 12:
      jLayout = layoutDashBoard12();
      break;
    case 13:
      jLayout = layoutDashBoard13();
      break;
    case 14:
      jLayout = layoutDashBoard14();
      break;
    case 15:
      jLayout = layoutDashBoard15();
      break;
    case 16:
      jLayout = layoutDashBoard16();
      break;
    case 17:
      jLayout = layoutDashBoard17();
      break;
    case 18:
      jLayout = layoutDashBoard18();
      break;
    case 19:
      jLayout = layoutDashBoard19();
      break;
    case 20:
      jLayout = layoutDashBoard20();
      break;
    case 21:
      jLayout = layoutDashBoard21();
      break;
    case 22:
      jLayout = layoutDashBoard22();
      break;
    case 23:
      jLayout = layoutDashBoard23();
      break;
    case 24:
      jLayout = layoutDashBoard24();
      break;
    case 25:
      jLayout = layoutDashBoard25();
      break;
    case 26:
      jLayout = layoutDashBoard26();
      break;
    case 9999:
      jLayout = layoutDashBoard9999();
      break;
  }
  return jLayout;
}

//area trabalho - padrao
function layoutDashBoard1() {
  const json = {
    id_dashboard: 1,
    dashboard: "layout dashboard 1",
    grupos: [
      {
        grupo: "Meu Dia",
        icone: "assignment_turned_in",
        cards: [
          /*{
            card: "Distribuição do Tempo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_sparkline",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorTipoAtividade",
              filtro_sql:
                "where o.ds_status in ('A', 'F') and cast(o.dt_ocorrencia as date) = (current_date) and o.cd_colaborador = <id_principal>",
            },
          },*/
          {
            card: "Planejamento",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTipoAtividadeStatus",
              filtro_sql:
                "where a.ds_status in ('P', 'F') and cast(dt_previsao as date) = current_date and a.cd_responsavel = <id_principal>",
            },
          },
          {
            card: "Atividades Previstas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: false,
            mostrar_duracao: false,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividade",
              filtro_sql:
                "where a.ds_status = 'P' and cast(dt_previsao as date) = current_date and a.cd_responsavel = <id_principal>",
            },
          },
          {
            card: "Distribuição do Tempo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorTipoAtividade",
              filtro_sql:
                "where o.ds_status in ('A', 'F') and cast(o.dt_ocorrencia as date) = (current_date) and o.cd_colaborador = <id_principal>",
            },
          },
          {
            card: "Tipo Atividade",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: false,
            width: "23vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(dt_previsao as date) = current_date and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(dt_previsao as date) = current_date and a.cd_responsavel = <id_principal> and a.cd_tipo_atividade = <id_grupo>",
            },
          },
          {
            card: "Prioridade",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "23vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorPrioridade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(dt_previsao as date) = current_date and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(dt_previsao as date) = current_date and a.cd_responsavel = <id_principal> and a.cd_prioridade = <id_grupo>",
            },
          },
          {
            card: "Em Execução",
            btn_comando: "btn-atualizar",
            tipo_card: "CardSlideApi",
            campo_duracao: true,
            campo_qtde: false,
            campo_id: false,
            campo_descricao: true,
            totalizar_grupo: true,
            width: "23vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyOcorrenciaExecucaoPorAtividade",
              filtro_sql:
                "where o.ds_status = 'P' and o.cd_tipo_ocorrencia = 1 and o.cd_colaborador = <id_principal>",
            },
          },
          {
            card: "Tempo Efetivo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_radial",
            coluna_totalizadora: 4,
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "23vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorData",
              filtro_sql:
                "where o.ds_status in ('A', 'F') and cast(o.dt_ocorrencia as date) = (current_date) and o.cd_colaborador = <id_principal>",
            },
          },
          {
            card: "Notificações",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "46.9vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyNotificacaoPorTipoAtividade",
              filtro_sql_grupo:
                "where n.ds_status = 'P' and n.cd_colaborador = <id_principal>",
              body_item: "bodyNotificacaoPorAtividade",
              filtro_sql_item:
                "where n.ds_status = 'P' and n.cd_colaborador = <id_principal> and a.cd_tipo_atividade = <id_grupo>",
            },
          },
          {
            card: "Interações",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            totalizar_grupo: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            total_tempo: true,
            width: "46.9vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyOcorrenciaPorAtividade",
              filtro_sql:
                "where o.ds_status in ('A', 'F') and o.cd_tipo_ocorrencia = 1 and cast(o.dt_ocorrencia as date) = (current_date) and o.cd_colaborador = <id_principal>",
            },
          },
        ],
        cards_opcionais: [],
      },
      {
        grupo: "Em Execução",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Tipo Atividade",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            coluna_totalizadora: 3,
            width: "31vw",
            height: "70",
            conteudo_card: {
              body: "bodyOcorrenciaPorTipoAtividade",
              filtro_sql:
                "where o.ds_status = 'P' and o.cd_tipo_ocorrencia = 1",
            },
          },
          {
            card: "Atividade",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            //totalizar_item: true,
            expandir_imagem: true,
            width: "62.5vw",
            height: "70",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyOcorrenciaExecucaoPorAtividade",
              filtro_sql:
                "where o.ds_status = 'P' and o.cd_tipo_ocorrencia = 1",
            },
          },
          /*  {
            card: "Colaborador",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "70",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaPorColaborador",
              filtro_sql_grupo:
                "where o.ds_status = 'P' and o.cd_tipo_ocorrencia = 1",
              body_item: "bodyOcorrencia",
              filtro_sql_item:
                "where o.ds_status = 'P' and o.cd_tipo_ocorrencia = 1 and o.cd_colaborador = <id_grupo>",
            },
          },*/
          {
            card: "Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.qt_colaborador_ativo > 0",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.qt_colaborador_ativo > 0 and ac.cd_cliente = <id_grupo>",
            },
          },
          {
            card: "Workflow",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.qt_colaborador_ativo > 0",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.qt_colaborador_ativo > 0 and a.cd_workflow = <id_grupo>",
            },
          },
          {
            card: "Tag",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.qt_colaborador_ativo > 0",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.qt_colaborador_ativo > 0 and ag.cd_tag = <id_grupo>",
            },
          },
        ],
        cards_opcionais: [],
      },
      {
        grupo: "Atividades",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Atrasadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(dt_previsao as date) < current_date and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(dt_previsao as date) < current_date and a.cd_responsavel = <id_principal> and a.cd_tipo_atividade = <id_grupo>",
            },
          },
          {
            card: "Futuras",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(dt_previsao as date) > current_date and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(dt_previsao as date) > current_date and a.cd_responsavel = <id_principal> and a.cd_tipo_atividade = <id_grupo>",
            },
          },
          {
            card: "Interessado",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_item: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeColaboradorPorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and acb.cd_colaborador = <id_principal>",
              body_item: "bodyAtividadeColaborador",
              filtro_sql_item:
                "where a.ds_status = 'P' and acb.cd_colaborador = <id_principal> and a.cd_tipo_atividade = <id_grupo>",
            },
          },
          {
            card: "Atrasadas (Previsão)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_item: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(dt_previsao as date) < current_date and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(dt_previsao as date) < current_date and a.cd_responsavel = <id_principal> and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Futuras (Previsão)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_item: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(dt_previsao as date) > current_date and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(dt_previsao as date) > current_date and a.cd_responsavel = <id_principal> and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Qualidade",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorData",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and ag.cd_tag = 153 and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'F' and ag.cd_tag = 153 and a.cd_responsavel = <id_principal> and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
        ],
      },
      {
        grupo: "Projetos",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Responsável",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/projetos/<id_item>",
            conteudo_card: {
              body_grupo: "bodyProjetoPorTipoProjeto",
              filtro_sql_grupo:
                "where p.ds_status = 'A' and p.cd_responsavel = <id_principal>",
              body_item: "bodyProjeto",
              filtro_sql_item:
                "where p.ds_status = 'A' and p.cd_responsavel = <id_principal> and p.cd_tipo_projeto = <id_grupo>",
            },
          },
          {
            card: "Interessado",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/projetos/<id_item>",
            conteudo_card: {
              body_grupo: "bodyProjetoColaboradorPorTipoProjeto",
              filtro_sql_grupo:
                "where p.ds_status = 'A' and pcb.cd_colaborador = <id_principal>",
              body_item: "bodyProjetoColaborador",
              filtro_sql_item:
                "where p.ds_status = 'A' and pcb.cd_colaborador = <id_principal> and p.cd_tipo_projeto = <id_grupo>",
            },
          },
        ],
      },
      {
        grupo: "Estatísticas",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Atividades Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTipoAtividade",
              filtro_sql:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) <= current_date and a.cd_responsavel = <id_principal>",
            },
          },
          {
            card: "Qualidade (90 dias)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'F' and ag.cd_tag in (140, 141) and cast(a.dt_previsao as date) >= (current_date - 90) and a.cd_responsavel = <id_principal>",
              //"where a.ds_status = 'F' and ag.cd_tag in (140, 141) and (extract(month from a.dt_previsao) = extract(month from current_date)) and (extract(year from a.dt_previsao) = extract(year from current_date)) and a.cd_responsavel = <id_principal>",
            },
          },
          {
            card: "Distribuição do Tempo (Mês Atual)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorTipoAtividade",
              filtro_sql:
                "where o.ds_status in ('A', 'F') and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from o.dt_ocorrencia) = extract(year from current_date)) and o.cd_colaborador = <id_principal>",
            },
          },
          {
            card: "Tempo Efetivo (Mês Atual)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            coluna_totalizadora: 4,
            width: "94vw",
            height: "40",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaPorData",
              filtro_sql_grupo:
                "where o.ds_status in ('A', 'F') and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from o.dt_ocorrencia) = extract(year from current_date)) and o.cd_colaborador = <id_principal>",
            },
          },
        ],
      },
      {
        grupo: "Tempo",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Linha do Tempo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_linha_tempo",
            coluna_serie: 2,
            coluna_categoria: 1,
            barra_tempo: true,
            width: "94vw",
            height: "80",
            conteudo_card: {
              body: "bodyOcorrenciaColaboradorTipoAtividadePeriodo",
              filtro_sql:
                "where o.ds_status in ('A', 'F') and extract(minute from o.duracao) > 0 and cast(o.dt_ocorrencia as date) = current_date and o.cd_colaborador = <id_principal>",
            },
          },
        ],
      },
    ],
  };
  return json;
}
//cliente - padrao
function layoutDashBoard2() {
  const json = {
    id_dashboard: 2,
    dashboard: "Cliente",
    grupos: [
      {
        grupo: "Área Técnica",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Tipo Atividade",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "23vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade not in (1,4,6) and a.dt_previsao <= current_date and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade not in (1,4,6) and a.dt_previsao <= current_date and ac.cd_cliente = <id_principal> and a.cd_tipo_atividade = <id_grupo>",
            },
          },
          {
            card: "Responsável",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "23vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade not in (1,4,6) and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade not in (1,4,6) and ac.cd_cliente = <id_principal> and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Situação",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "23vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade not in (1,4,6) and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade not in (1,4,6) and ac.cd_cliente = <id_principal> and a.cd_situacao = <id_grupo>",
            },
          },
          {
            card: "Workflow",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "23vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade not in (1,4,6) and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade not in (1,4,6) and ac.cd_cliente = <id_principal> and a.cd_workflow = <id_grupo>",
            },
          },
          {
            card: "Tag",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "23vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividadeClientePorTag",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade not in (1,4,6) and ac.cd_cliente = <id_principal>",
            },
          },
          {
            card: "Interações",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "23vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyOcorrenciaClientePorData",
              filtro_sql_grupo:
                "where o.ds_status in ('A', 'F') and a.cd_tipo_atividade not in (1,4,6) and o.cd_tipo_ocorrencia = 1 and cast(o.dt_ocorrencia as date) >= (current_date - 60) and ac.cd_cliente = <id_principal>",
              body_item: "bodyOcorrenciaCliente",
              filtro_sql_item:
                "where o.ds_status in ('A', 'F') and a.cd_tipo_atividade not in (1,4,6) and o.cd_tipo_ocorrencia = 1 and cast(o.dt_ocorrencia as date) >= (current_date - 60) and ac.cd_cliente = <id_principal> and cast(o.dt_ocorrencia as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
        ],
        cards_opcionais: [],
      },
      {
        id_grupo: 2,
        grupo: "Desenvolvimento",
        icone: "assignment_turned_in",
        cards: [
          {
            id_card: 1,
            card: "Tipo Atividade",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "23vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and ac.cd_cliente = <id_principal> and a.cd_tipo_atividade = <id_grupo>",
            },
          },
          {
            id_card: 1,
            card: "Responsável",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "23vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and ac.cd_cliente = <id_principal> and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            id_card: 1,
            card: "Situação",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "23vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and ac.cd_cliente = <id_principal> and a.cd_situacao = <id_grupo>",
            },
          },
          {
            id_card: 1,
            card: "Workflow",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "23vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and ac.cd_cliente = <id_principal> and a.cd_workflow = <id_grupo>",
            },
          },
          {
            id_card: 1,
            card: "Tag",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            mostrar_duracao: false,
            totalizar_grupo: true,
            width: "23vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividadeClientePorTag",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and ac.cd_cliente = <id_principal>",
            },
          },
        ],
        cards_opcionais: [],
      },
      {
        grupo: "Finalizadas",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Tipo Atividade (30 dias)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "23vw",
            height: 40,
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade not in (1,4,6) and a.dt_previsao >= current_date - 30 and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'F' and a.cd_tipo_atividade not in (1,4,6) and a.dt_previsao >= current_date - 30 and ac.cd_cliente = <id_principal> and a.cd_tipo_atividade = <id_grupo>",
            },
          },
          {
            card: "Workflow (30 dias)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "23vw",
            height: 40,
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade not in (1,4,6) and a.dt_previsao >= current_date - 30 and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'F' and a.cd_tipo_atividade not in (1,4,6) and a.dt_previsao >= current_date - 30 and ac.cd_cliente = <id_principal> and a.cd_workflow = <id_grupo>",
            },
          },
          {
            card: "Responsável (30 dias)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "23vw",
            height: 40,
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade not in (1,4,6) and a.dt_previsao >= current_date - 30 and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'F' and a.cd_tipo_atividade not in (1,4,6) and a.dt_previsao >= current_date - 30 and ac.cd_cliente = <id_principal> and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Data (30 dias)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "23vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade not in (1,4,6) and a.dt_previsao >= current_date - 30 and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'F' and a.cd_tipo_atividade not in (1,4,6) and a.dt_previsao >= current_date - 30 and ac.cd_cliente = <id_principal> and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
        ],
        cards_opcionais: [],
      },
      {
        grupo: "Projetos",
        icone: "assignment_turned_in",
        cards: [
          {
            id_card: 1,
            card: "Ativos",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "32vw",
            height: 40,
            link_item: "https://crm.syclus.com.br/projetos/<id_item>",
            conteudo_card: {
              body_grupo: "bodyProjetoPorTipoProjeto",
              filtro_sql_grupo: `where p.ds_status = 'A' and p.cd_cliente = <id_principal>`,
              body_item: "bodyProjeto",
              filtro_sql_item: `where p.ds_status = 'A' and p.cd_cliente = <id_principal> and p.cd_tipo_projeto = <id_grupo>`,
            },
          },
          {
            card: "Finalizados",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "32vw",
            height: 40,
            link_item: "https://crm.syclus.com.br/projetos/<id_item>",
            conteudo_card: {
              body_grupo: "bodyProjetoPorMesAno",
              filtro_sql_grupo: `where p.ds_status = 'F' and p.cd_cliente = <id_principal>`,
              body_item: "bodyProjeto",
              filtro_sql_item: `where p.ds_status = 'F' and p.cd_cliente = <id_principal> and (extract(year from p.dt_previsao)||lpad(extract(month from p.dt_previsao), 2, '0')) = <id_grupo>`,
            },
          },
        ],
        cards_opcionais: [],
      },
    ],
  };

  return json;
}
//colaborador - padrao
function layoutDashBoard3() {
  const json = {
    id_dashboard: 3,
    dashboard: "Colaborador",
    grupos: [
      {
        grupo: "Atividades",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Em Atraso",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "23vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_responsavel = <id_principal> and a.cd_tipo_atividade = <id_grupo>",
            },
          },
          {
            card: "Hoje",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "23vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_responsavel = <id_principal> and a.cd_tipo_atividade = <id_grupo>",
            },
          },
          {
            card: "Futuro",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "23vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) > current_date and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) > current_date and a.cd_responsavel = <id_principal> and a.cd_tipo_atividade = <id_grupo>",
            },
          },
          {
            id_card: 1,
            card: "Cliente",

            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "23vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_responsavel = <id_principal> and ac.cd_cliente = <id_grupo>",
            },
          },
          {
            id_card: 1,
            card: "Tag",

            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "23vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_responsavel = <id_principal> and ag.cd_tag = <id_grupo>",
            },
          },
          {
            id_card: 1,
            card: "Workflow",

            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "23vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_responsavel = <id_principal> and a.cd_workflow = <id_grupo>",
            },
          },
          {
            id_card: 1,
            card: "Finalizadas (Hoje)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "23vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and cast(a.dt_previsao as date) = (current_date) and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'F' and cast(a.dt_previsao as date) = (current_date) and a.cd_responsavel = <id_principal> and a.cd_workflow = <id_grupo>",
            },
          },
          {
            id_card: 1,
            card: "Finalizadas (Ate 7 dias)",

            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "23vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and cast(a.dt_previsao as date) between (current_date -7) and (current_date -1) and a.cd_responsavel = <id_principal>",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'F' and cast(a.dt_previsao as date) between (current_date -7) and (current_date -1) and a.cd_responsavel = <id_principal> and a.cd_workflow = <id_grupo>",
            },
          },
          {
            id_card: 1,
            card: "Notificacoes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "23vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyNotificacaoPorTipoAtividade",
              filtro_sql:
                "where n.ds_status = 'P' and n.cd_colaborador = <id_principal>",
            },
          },
        ],
        cards_opcionais: [],
      },
      {
        grupo: "Ocorrências",
        icone: "assignment_turned_in",
        cards: [
          {
            id_card: 1,
            card: "Tipo Atividade (hoje)",
            tipo_card: "CardListaApi",
            btn_comando: "btn-atualizar",
            mostrar_qtde: true,
            width: "23vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyOcorrenciaPorTipoAtividade",
              filtro_sql:
                "where o.ds_status in ('A', 'F') and cast(o.dt_ocorrencia as date) = (current_date) and o.cd_colaborador = <id_principal>",
            },
          },
          {
            id_card: 1,
            card: "Workflow (hoje)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "23vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyOcorrenciaPorWorkflow",
              filtro_sql:
                "where o.ds_status in ('A', 'F') and cast(o.dt_ocorrencia as date) = (current_date) and o.cd_colaborador = <id_principal>",
            },
          },
          {
            id_card: 1,
            card: "Tipo Atividade (semana)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "23vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyOcorrenciaPorTipoAtividade",
              filtro_sql:
                "where o.ds_status in ('A', 'F') and (extract(week from o.dt_ocorrencia) = extract(week from current_date)) and (extract(year from o.dt_ocorrencia) = extract(year from current_date)) and o.cd_colaborador = <id_principal>",
            },
          },
          {
            id_card: 1,
            card: "Workflow (semana)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "23vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyOcorrenciaPorWorkflow",
              filtro_sql:
                "where o.ds_status in ('A', 'F') and (extract(week from o.dt_ocorrencia) = extract(week from current_date)) and (extract(year from o.dt_ocorrencia) = extract(year from current_date)) and o.cd_colaborador = <id_principal>",
            },
          },
          {
            card: "Diário",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "23vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyOcorrenciaPorData",
              filtro_sql:
                "where o.ds_status in ('A', 'F') and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from o.dt_ocorrencia) = extract(year from current_date)) and o.cd_colaborador = <id_principal>",
            },
          },
          {
            id_card: 1,
            card: "Semanal",

            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "23vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyOcorrenciaPorSemana",
              filtro_sql:
                "where o.ds_status in ('A', 'F') and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from o.dt_ocorrencia) = extract(year from current_date)) and o.cd_colaborador = <id_principal>",
            },
          },
          {
            id_card: 1,
            card: "Anual",

            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "70vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyOcorrenciaPorMesAno",
              filtro_sql:
                "where o.ds_status in ('A', 'F') and (extract(year from o.dt_ocorrencia) = extract(year from current_date)) and o.cd_colaborador = <id_principal>",
            },
          },
        ],
      },
      {
        grupo: "Projetos",
        icone: "assignment_turned_in",
        cards: [
          {
            id_card: 1,
            card: "Projetos Ativos",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "70vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/projetos/<id_item>",
            conteudo_card: {
              body_grupo: "bodyProjetoPorTipoProjeto",
              filtro_sql_grupo: `where p.ds_status = 'A' and p.cd_responsavel = <id_principal>`,
              body_item: "bodyProjeto",
              filtro_sql_item: `where p.ds_status = 'A' and p.cd_responsavel = <id_principal> and p.cd_tipo_projeto = <id_grupo>`,
            },
          },
        ],
        cards_opcionais: [],
      },
      {
        grupo: "Estatísticas",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Efetivo por Tipo de Atividade",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "70vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorTipoAtividadeData",
              filtro_sql:
                "where o.ds_status <> 'C' and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from o.dt_ocorrencia) = extract(year from current_date)) and o.cd_colaborador = <id_principal>",
            },
          },
          {
            card: "Efetivo por Workflow",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "70vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorWorkflowData",
              filtro_sql:
                "where o.ds_status <> 'C' and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from o.dt_ocorrencia) = extract(year from current_date)) and o.cd_colaborador = <id_principal>",
            },
          },
        ],
        cards_opcionais: [],
      },
      {
        grupo: "Tempo",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Linha do Tempo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_linha_tempo",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "70vw",
            height: "70",
            conteudo_card: {
              body: "bodyOcorrenciaColaboradorTipoAtividadePeriodo",
              filtro_sql:
                "where o.ds_status in ('A', 'F') and extract(minute from o.duracao) > 0 and cast(o.dt_ocorrencia as date) = current_date and o.cd_colaborador = <id_principal>",
            },
          },
          {
            card: "Tempo Efetivo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_radial",
            coluna_totalizadora: 4,
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "23vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorData",
              filtro_sql:
                "where o.ds_status in ('A', 'F') and cast(o.dt_ocorrencia as date) = (current_date) and o.cd_colaborador = <id_principal>",
            },
          },
          {
            card: "Interações",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "46.5vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyOcorrenciaPorAtividade",
              filtro_sql:
                "where o.ds_status in ('A', 'F') and cast(o.dt_ocorrencia as date) = (current_date) and o.cd_colaborador = <id_principal>",
            },
          },
        ],
      },
      /*{
        grupo: "Tempo2",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Linha do Tempo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_linha_tempo",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "72vw",
            height: "80",
            conteudo_card: {
              body: "bodyOcorrenciaTipoAtividadeDataPeriodo",
              filtro_sql:
                "where o.ds_status = 'F' and extract(minute from o.duracao) > 0 and cast(o.dt_ocorrencia as date) >= (current_date - 2) and o.cd_colaborador = <id_principal>"
            }
          }
        ]
      }*/
    ],
  };

  return json;
}
//bi - area tecnica corrente
function layoutDashBoard4() {
  const json = {
    id_dashboard: 4,
    dashboard: "bi - area tecnica (corrente)",
    grupos: [
      {
        grupo: "Áreas",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Previstas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorWorkflow",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_workflow in (35, 36, 37, 38, 39, 40, 41, 49) and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Em Execução",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyOcorrenciaExecucaoPorAtividade",
              filtro_sql:
                "where o.ds_status = 'P' and o.cd_tipo_ocorrencia = 1 and a.cd_workflow in (35, 36, 37, 38, 39, 40, 41, 49) and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Distribuição do Tempo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorWorkflow",
              filtro_sql:
                "where o.ds_status <> 'C' and a.cd_workflow in (35, 36, 37, 38, 39, 40, 41, 49) and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividade",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_workflow in (35, 36, 37, 38, 39, 40, 41, 49) and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and coalesce(a.qt_colaborador_ativo, 0) = 0",
            },
          },
          {
            card: "Criadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorWorkflowStatus",
              filtro_sql:
                "where a.ds_status in ('P', 'F') and a.cd_workflow in (35, 36, 37, 38, 39, 40, 41, 49) and cast(a.dt_emissao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Tempo Efetivo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorWorkflow",
              filtro_sql:
                "where o.ds_status <> 'C' and a.cd_workflow in (35, 36, 37, 38, 39, 40, 41, 49) and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Pendentes (Hoje)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_workflow in (35, 36, 37, 38, 39, 40, 41, 49) and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_workflow in (35, 36, 37, 38, 39, 40, 41, 49) and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Atrasadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_workflow in (35, 36, 37, 38, 39, 40, 41, 49) and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_workflow in (35, 36, 37, 38, 39, 40, 41, 49) and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Futuras",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_workflow in (35, 36, 37, 38, 39, 40, 41, 49) and cast(a.dt_previsao as date) > current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_workflow in (35, 36, 37, 38, 39, 40, 41, 49) and cast(a.dt_previsao as date) > current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
        ],
      },
      {
        grupo: "Área 1",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Previstas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorResponsavel",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_workflow = 35 and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Em Execução",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyOcorrenciaExecucaoPorAtividade",
              filtro_sql:
                "where o.ds_status = 'P' and o.cd_tipo_ocorrencia = 1 and a.cd_workflow = 35 and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Distribuição do Tempo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaborador",
              filtro_sql:
                "where o.ds_status <> 'C' and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 35",
            },
          },
          {
            card: "Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividade",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_workflow = 35 and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and coalesce(a.qt_colaborador_ativo, 0) = 0",
            },
          },
          {
            card: "Prioridades",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorPrioridade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_workflow = 35 and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_workflow = 35 and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_prioridade = <id_grupo>",
            },
          },
          {
            card: "Tempo Efetivo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaborador",
              filtro_sql:
                "where o.ds_status <> 'C' and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 35",
            },
          },
          {
            card: "Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_workflow = 35 and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_workflow = 35 and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Atrasadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_workflow = 35 and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_workflow = 35 and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Futuras",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_workflow = 35 and cast(a.dt_previsao as date) > current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_workflow = 35 and cast(a.dt_previsao as date) > current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Interações",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "94.6vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyOcorrenciaPorAtividade",
              filtro_sql:
                "where o.ds_status <> 'C' and o.cd_tipo_ocorrencia = 1 and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 35",
            },
          },
        ],
      },
      {
        grupo: "Área 2",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Previstas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorResponsavel",
              filtro_sql:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 36",
            },
          },
          {
            card: "Em Execução",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyOcorrenciaExecucaoPorAtividade",
              filtro_sql:
                "where o.ds_status = 'P' and o.cd_tipo_ocorrencia = 1 and a.cd_workflow = 36 and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Distribuição do Tempo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaborador",
              filtro_sql:
                "where o.ds_status <> 'C' and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 36",
            },
          },
          {
            card: "Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividade",
              filtro_sql:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 36 and coalesce(a.qt_colaborador_ativo, 0) = 0",
            },
          },
          {
            card: "Prioridades",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorPrioridade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 36",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 36 and a.cd_prioridade = <id_grupo>",
            },
          },
          {
            card: "Tempo Efetivo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaborador",
              filtro_sql:
                "where o.ds_status <> 'C' and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 36",
            },
          },
          {
            card: "Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_workflow = 36 and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_workflow = 36 and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Atrasadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_workflow = 36 and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_workflow = 36 and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Futuras",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_workflow = 36 and cast(a.dt_previsao as date) > current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_workflow = 36 and cast(a.dt_previsao as date) > current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Interações",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "94.6vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyOcorrenciaPorAtividade",
              filtro_sql:
                "where o.ds_status <> 'C' and o.cd_tipo_ocorrencia = 1 and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 36",
            },
          },
        ],
      },
      {
        grupo: "Área 3",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Previstas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorResponsavel",
              filtro_sql:
                "where a.ds_status= 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 37",
            },
          },
          {
            card: "Em Execução",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyOcorrenciaExecucaoPorAtividade",
              filtro_sql:
                "where o.ds_status = 'P' and o.cd_tipo_ocorrencia = 1 and a.cd_workflow = 37 and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Distribuição do Tempo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaborador",
              filtro_sql:
                "where o.ds_status <> 'C' and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 37",
            },
          },
          {
            card: "Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividade",
              filtro_sql:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 37 and coalesce(a.qt_colaborador_ativo, 0) = 0",
            },
          },
          {
            card: "Prioridades",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorPrioridade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 37",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 37 and a.cd_prioridade = <id_grupo>",
            },
          },
          {
            card: "Tempo Efetivo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaborador",
              filtro_sql:
                "where o.ds_status <> 'C' and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 37",
            },
          },
          {
            card: "Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_workflow = 37 and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_workflow = 37 and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Atrasadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_workflow = 37 and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_workflow = 37 and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Futuras",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_workflow = 37 and cast(a.dt_previsao as date) > current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_workflow = 37 and cast(a.dt_previsao as date) > current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Interações",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "94.6vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyOcorrenciaPorAtividade",
              filtro_sql:
                "where o.ds_status <> 'C' and o.cd_tipo_ocorrencia = 1 and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 37",
            },
          },
        ],
      },
      {
        grupo: "Área 4",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Previstas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorResponsavel",
              filtro_sql:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 38",
            },
          },
          {
            card: "Em Execução",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyOcorrenciaExecucaoPorAtividade",
              filtro_sql:
                "where o.ds_status = 'P' and o.cd_tipo_ocorrencia = 1 and a.cd_workflow = 38 and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Distribuição do Tempo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaborador",
              filtro_sql:
                "where o.ds_status <> 'C' and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 38",
            },
          },
          {
            card: "Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividade",
              filtro_sql:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 38 and coalesce(a.qt_colaborador_ativo, 0) = 0",
            },
          },
          {
            card: "Prioridades",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorPrioridade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 38",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 38 and a.cd_prioridade = <id_grupo>",
            },
          },
          {
            card: "Tempo Efetivo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaborador",
              filtro_sql:
                "where o.ds_status <> 'C' and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 38",
            },
          },
          {
            card: "Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_workflow = 38 and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_workflow = 38 and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Atrasadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_workflow = 38 and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_workflow = 38 and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Futuras",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_workflow = 38 and cast(a.dt_previsao as date) > current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_workflow = 38 and cast(a.dt_previsao as date) > current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Interações",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "94.6vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyOcorrenciaPorAtividade",
              filtro_sql:
                "where o.ds_status <> 'C' and o.cd_tipo_ocorrencia = 1 and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 38",
            },
          },
        ],
      },
      {
        grupo: "Área 5",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Previstas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorResponsavel",
              filtro_sql:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 39",
            },
          },
          {
            card: "Em Execução",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyOcorrenciaExecucaoPorAtividade",
              filtro_sql:
                "where o.ds_status = 'P' and o.cd_tipo_ocorrencia = 1 and a.cd_workflow = 39 and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Distribuição do Tempo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaborador",
              filtro_sql:
                "where o.ds_status <> 'C' and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 39",
            },
          },
          {
            card: "Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividade",
              filtro_sql:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 39 and coalesce(a.qt_colaborador_ativo, 0) = 0",
            },
          },
          {
            card: "Prioridades",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorPrioridade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 39",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 39 and a.cd_prioridade = <id_grupo>",
            },
          },
          {
            card: "Tempo Efetivo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaborador",
              filtro_sql:
                "where o.ds_status <> 'C' and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 39",
            },
          },
          {
            card: "Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_workflow = 39 and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_workflow = 39 and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Atrasadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_workflow = 39 and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_workflow = 39 and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Futuras",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_workflow = 39 and cast(a.dt_previsao as date) > current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_workflow = 39 and cast(a.dt_previsao as date) > current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Interações",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "94.6vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyOcorrenciaPorAtividade",
              filtro_sql:
                "where o.ds_status <> 'C' and o.cd_tipo_ocorrencia = 1 and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = 39",
            },
          },
        ],
      },
      {
        grupo: "Desenvolvimento",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Situação",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorSituacao",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and a.cd_situacao in (63, 64, 65, 66, 69, 70, 106) and a.cd_responsavel not in (4, 47, 34)",
            },
          },
          {
            card: "Atividade",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            totalizar_grupo: true,
            width: "62vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividade",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and a.cd_situacao in (63, 64, 65, 66, 69, 70, 106) and a.cd_responsavel not in (4, 47, 34)",
            },
          },
          {
            card: "Situação",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and a.cd_situacao in (63, 64, 65, 66, 69, 70, 106) and a.cd_responsavel not in (4, 47, 34)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and a.cd_situacao in (63, 64, 65, 66, 69, 70, 106) and a.cd_responsavel not in (4, 47, 34) and a.cd_situacao = <id_grupo>",
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and a.cd_situacao in (63, 64, 65, 66, 69, 70, 106) and a.cd_responsavel not in (4, 47, 34)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and a.cd_situacao in (63, 64, 65, 66, 69, 70, 106) and a.cd_responsavel not in (4, 47, 34) and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and a.cd_situacao in (63, 64, 65, 66, 69, 70, 106) and a.cd_responsavel not in (4, 47, 34)",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and a.cd_situacao in (63, 64, 65, 66, 69, 70, 106) and a.cd_responsavel not in (4, 47, 34) and ac.cd_cliente = <id_grupo>",
            },
          },
          {
            card: "Responsável",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and a.cd_situacao in (63, 64, 65, 66, 69, 70, 106) and a.cd_responsavel not in (4, 47, 34)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and a.cd_situacao in (63, 64, 65, 66, 69, 70, 106) and a.cd_responsavel not in (4, 47, 34) and a.cd_responsavel = <id_grupo>",
            },
          },
        ],
      },
      {
        grupo: "Geral",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Atividades Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorSituacao",
              filtro_sql:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Em Execução",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividade",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.qt_colaborador_ativo > 0",
            },
          },
          {
            card: "Situação",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_situacao = <id_grupo>",
            },
          },
          {
            card: "Tag",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and ag.cd_tag = <id_grupo>",
            },
          },
          {
            card: "Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and ac.cd_cliente = <id_grupo>",
            },
          },
          {
            card: "Prioridade",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorPrioridade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_prioridade = <id_grupo>",
            },
          },
        ],
      },
      {
        grupo: "Responsável",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Atividades Previstas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorResponsavel",
              filtro_sql:
                "where a.ds_status in ('P', 'F') and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Atividades Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Distribuição do Tempo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaborador",
              filtro_sql:
                "where o.ds_status <> 'C' and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Atividades Criadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorResponsavelStatus",
              filtro_sql:
                "where a.ds_status in ('P', 'F') and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Tempo Efetivo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaborador",
              filtro_sql:
                "where o.ds_status <> 'C' and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
        ],
      },
      {
        grupo: "Tipo",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Atividades Previstas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTipoAtividade",
              filtro_sql:
                "where a.ds_status in ('P', 'F') and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Atividades Pendentes ",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_tipo_atividade = <id_grupo>",
            },
          },
          {
            card: "Distribuição do Tempo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorTipoAtividade",
              filtro_sql:
                "where o.ds_status <> 'C' and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Atividades Criadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTipoAtividadeStatus",
              filtro_sql:
                "where a.ds_status in ('P', 'F') and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Tempo Efetivo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorTipoAtividade",
              filtro_sql:
                "where o.ds_status <> 'C' and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
        ],
      },
      {
        grupo: "Workflow",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Atividades Previstas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorWorkflow",
              filtro_sql:
                "where a.ds_status in ('P', 'F') and a.cd_workflow not in (35, 36, 37, 38, 39, 40, 41, 49) and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Atividades Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_workflow not in (35, 36, 37, 38, 39, 40, 41, 49) and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_workflow not in (35, 36, 37, 38, 39, 40, 41, 49) and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = <id_grupo>",
            },
          },
          {
            card: "Distribuição do Tempo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorWorkflow",
              filtro_sql:
                "where o.ds_status <> 'C' and a.cd_workflow not in (35, 36, 37, 38, 39, 40, 41, 49) and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Atividades Criadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorWorkflowStatus",
              filtro_sql:
                "where a.ds_status in ('P', 'F') and a.cd_workflow not in (35, 36, 37, 38, 39, 40, 41, 49) and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Tempo Efetivo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorWorkflow",
              filtro_sql:
                "where o.ds_status <> 'C' and a.cd_workflow not in (35, 36, 37, 38, 39, 40, 41, 49) and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
        ],
      },
      {
        grupo: "Estatísticas",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Área Técnica por Workflow",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "95vw",
            height: "80",
            conteudo_card: {
              body: "bodyOcorrenciaPorWorkflowData",
              filtro_sql:
                "where o.ds_status <> 'C' and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from a.dt_emissao) = extract(year from current_date)) and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Área 1",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "95vw",
            height: "80",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaboradorData",
              filtro_sql:
                "where o.ds_status <> 'C' and a.cd_workflow = 35 and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from a.dt_emissao) = extract(year from current_date)) and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Área 2",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "95vw",
            height: "80",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaboradorData",
              filtro_sql:
                "where o.ds_status <> 'C' and a.cd_workflow = 36 and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from a.dt_emissao) = extract(year from current_date)) and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Área 3",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "95vw",
            height: "80",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaboradorData",
              filtro_sql:
                "where o.ds_status <> 'C' and a.cd_workflow = 37 and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from a.dt_emissao) = extract(year from current_date)) and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Área 4",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "95vw",
            height: "80",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaboradorData",
              filtro_sql:
                "where o.ds_status <> 'C' and a.cd_workflow = 38 and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from a.dt_emissao) = extract(year from current_date)) and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Área 5",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "95vw",
            height: "80",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaboradorData",
              filtro_sql:
                "where o.ds_status <> 'C' and a.cd_workflow = 39 and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from a.dt_emissao) = extract(year from current_date)) and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Área Técnica por Workflow",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorWorkflow",
              filtro_sql:
                "where o.ds_status <> 'C' and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from a.dt_emissao) = extract(year from current_date)) and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Área 1",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaborador",
              filtro_sql:
                "where o.ds_status <> 'C' and a.cd_workflow = 35 and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from a.dt_emissao) = extract(year from current_date)) and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Área 2",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaborador",
              filtro_sql:
                "where o.ds_status <> 'C' and a.cd_workflow = 36 and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from a.dt_emissao) = extract(year from current_date)) and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Área 3",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaborador",
              filtro_sql:
                "where o.ds_status <> 'C' and a.cd_workflow = 37 and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from a.dt_emissao) = extract(year from current_date)) and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Área 4",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaborador",
              filtro_sql:
                "where o.ds_status <> 'C' and a.cd_workflow = 38 and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from a.dt_emissao) = extract(year from current_date)) and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Área 5",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaborador",
              filtro_sql:
                "where o.ds_status <> 'C' and a.cd_workflow = 39 and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from a.dt_emissao) = extract(year from current_date)) and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
        ],
      },
    ],
  };

  return json;
}
//bi - diretoria
function layoutDashBoard5() {
  const json = {
    id_dashboard: 5,
    dashboard: "layout dashboard 5",
    grupos: [
      {
        grupo: "Geral",
        icone: "signal_cellular_alt",
        cards: [],
      },
    ],
  };

  return json;
}
//cliente - cobranca
function layoutDashBoard6() {
  const json = {
    id_dashboard: 6,
    dashboard: "layout dashboard 6",
    grupos: [
      {
        grupo: "Cobrança",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "35vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividadeCliente",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and ac.cd_cliente = <id_principal>",
            },
          },
          {
            card: "Finalizadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "35vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 6 and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 6 and ac.cd_cliente = <id_principal> and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
        ],
        cards_opcionais: [],
      },
    ],
  };

  return json;
}
//cliente - comercial
function layoutDashBoard7() {
  const json = {
    id_dashboard: 7,
    dashboard: "layout dashboard 7",
    grupos: [
      {
        grupo: "Comercial",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "35vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividadeCliente",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and ac.cd_cliente = <id_principal>",
            },
          },
          {
            card: "Finalizadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "35vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and ac.cd_cliente = <id_principal> and a.cd_situacao = <id_grupo>",
            },
          },
        ],
        cards_opcionais: [],
      },
    ],
  };

  return json;
}
//projeto - padrao
function layoutDashBoard8() {
  const json = {
    id_dashboard: 8,
    dashboard: "Atividades",
    grupos: [
      {
        grupo: "Atividades",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Estrutura",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "70vw",
            height: "60",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyItemProjeto",
              filtro_sql_grupo:
                "where i.cd_tipo = 1 and p.cd_projeto = <id_principal>",
              body_item: "bodyItemProjetoAtividade",
              filtro_sql_item: `where i.cd_tipo = 2 and p.cd_projeto = <id_principal> and i.ds_classificacao like('<id_grupo>%')`,
            },
          },
          {
            card: "Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "23vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeProjetoPorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and pj.cd_projeto = <id_principal>",
              body_item: "bodyAtividadeProjeto",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and pj.cd_projeto = <id_principal> and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Finalizadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "23vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeProjetoPorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 4 and pj.cd_projeto = <id_principal>",
              body_item: "bodyAtividadeProjeto",
              filtro_sql_item:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 4 and pj.cd_projeto = <id_principal> and a.cd_responsavel = <id_grupo>",
            },
          },
        ],
      },
      {
        grupo: "Cronograma",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Estrutura",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_linha_tempo",
            barra_tempo: false,
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "70vw",
            height: "80",
            conteudo_card: {
              body: "bodyItemProjetoItemPrevRealPeriodo",
              filtro_sql: "where p.cd_projeto = <id_principal>",
            },
          },
        ],
      },
    ],
  };

  return json;
}
//bi - projeto corrente
function layoutDashBoard9() {
  const json = {
    id_dashboard: 1,
    dashboard: "Projeto",
    grupos: [
      {
        grupo: "Geral",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Atividades Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorSituacao",
              filtro_sql:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade = 3",
            },
          },
          {
            card: "Em Execução",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividade",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 3 and a.qt_colaborador_ativo > 0",
            },
          },
          {
            card: "Situação",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade = 3",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade = 3 and a.cd_situacao = <id_grupo>",
            },
          },
          {
            card: "Tag",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade = 3",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade = 3 and ag.cd_tag = <id_grupo>",
            },
          },
          {
            card: "Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade = 3",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade = 3 and ac.cd_cliente = <id_grupo>",
            },
          },
        ],
      },
      {
        grupo: "Responsável",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Atividades Previstas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorResponsavel",
              filtro_sql:
                "where a.ds_status in ('P', 'F') and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade = 3",
            },
          },
          {
            card: "Atividades Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividadePorResponsavel",
              filtro_sql:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade = 3",
            },
          },
          {
            card: "Ocorrências",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaborador",
              filtro_sql:
                "where o.ds_status <> 'C' and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade = 3",
            },
          },
        ],
      },
      {
        grupo: "Tipo",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Atividades Previstas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTipoAtividade",
              filtro_sql:
                "where a.ds_status in ('P', 'F') and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade = 3",
            },
          },
          {
            card: "Atividades Pendentes ",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade = 3",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade = 3 and a.cd_tipo_atividade = <id_grupo>",
            },
          },
          {
            card: "Ocorrências",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorTipoAtividade",
              filtro_sql:
                "where o.ds_status <> 'C' and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade = 3",
            },
          },
          {
            card: "Atividades Criadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTipoAtividade",
              filtro_sql:
                "where a.ds_status in ('P', 'F') and cast(a.dt_emissao as date) = current_date and a.cd_tipo_atividade = 3",
            },
          },
          {
            card: "Atividades Finalizadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTipoAtividade",
              filtro_sql:
                "where a.ds_status = 'F' and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade = 3",
            },
          },
        ],
      },
      {
        grupo: "Workflow",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Atividades Previstas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorWorkflow",
              filtro_sql:
                "where a.ds_status in ('P', 'F') and a.cd_workflow not in (35, 36, 37, 38, 39, 40, 41, 49) and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade = 3",
            },
          },
          {
            card: "Atividades Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_workflow not in (35, 36, 37, 38, 39, 40, 41, 49) and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade = 3",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_workflow not in (35, 36, 37, 38, 39, 40, 41, 49) and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade = 3 and a.cd_workflow = <id_grupo>",
            },
          },
          {
            card: "Distribuição do Tempo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorWorkflow",
              filtro_sql:
                "where o.ds_status <> 'C' and a.cd_workflow not in (35, 36, 37, 38, 39, 40, 41, 49) and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade = 3",
            },
          },
          {
            card: "Atividades Criadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorWorkflow",
              filtro_sql:
                "where a.ds_status in ('P', 'F') and a.cd_workflow not in (35, 36, 37, 38, 39, 40, 41, 49) and cast(a.dt_emissao as date) = current_date and a.cd_tipo_atividade = 3",
            },
          },
          {
            card: "Atividades Finalizadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorWorkflow",
              filtro_sql:
                "where a.ds_status = 'F' and a.cd_workflow not in (35, 36, 37, 38, 39, 40, 41, 49) and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade = 3",
            },
          },
          {
            card: "Ocorrências",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorWorkflow",
              filtro_sql:
                "where o.ds_status <> 'C' and a.cd_workflow not in (35, 36, 37, 38, 39, 40, 41, 49) and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade = 3",
            },
          },
        ],
      },
      {
        grupo: "Areas",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Atividades Previstas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorWorkflow",
              filtro_sql:
                "where a.ds_status in ('P', 'F') and a.cd_workflow in (35, 36, 37, 38, 39, 40, 41, 49) and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade = 3",
            },
          },
          {
            card: "Atividades Pendentes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_workflow in (35, 36, 37, 38, 39, 40, 41, 49) and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade = 3",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_workflow in (35, 36, 37, 38, 39, 40, 41, 49) and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade = 3 and a.cd_workflow = <id_grupo>",
            },
          },
          {
            card: "Distribuição do Tempo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            coluna_totalizadora: 4,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorWorkflow",
              filtro_sql:
                "where o.ds_status <> 'C' and a.cd_workflow in (35, 36, 37, 38, 39, 40, 41, 49) and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade = 3",
            },
          },
          {
            card: "Atividades Criadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorWorkflow",
              filtro_sql:
                "where a.ds_status in ('P', 'F') and a.cd_workflow in (35, 36, 37, 38, 39, 40, 41, 49) and cast(a.dt_emissao as date) = current_date and a.cd_tipo_atividade = 3",
            },
          },
          {
            card: "Atividades Finalizadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorWorkflow",
              filtro_sql:
                "where a.ds_status = 'F' and a.cd_workflow in (35, 36, 37, 38, 39, 40, 41, 49) and cast(a.dt_previsao as date) = current_date and a.cd_tipo_atividade = 3",
            },
          },
          {
            card: "Ocorrências",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyOcorrenciaPorWorkflow",
              filtro_sql:
                "where o.ds_status <> 'C' and a.cd_workflow in (35, 36, 37, 38, 39, 40, 41, 49) and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade = 3",
            },
          },
        ],
      },
    ],
  };

  return json;
}
//notificacao - período
function layoutDashBoard10() {
  const json = {
    id_dashboard: 1,
    dashboard: "Notificacao-periodo",
    grupos: [
      {
        id_grupo: 1,
        grupo: "Geral",
        icone: "event",
        cards: [
          {
            id_card: 1,

            tipo_card: "CardNotificacaoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyNotificacaoPorTipoAtividade",
              filtro_sql_grupo:
                "where n.ds_status = 'P' and n.cd_colaborador = <id_principal>",
              body_item: "bodyNotificacaoPorAtividade",
              filtro_sql_item:
                "where n.ds_status = 'P' and n.cd_colaborador = <id_principal>",
            },
          },
        ],
        cards_opcionais: [],
      },
      {
        id_grupo: 1,
        grupo: "teste",
        icone: "event",
        cards: [
          {
            id_card: 1,

            tipo_card: "CardNotificacaoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyNotificacao",
              filtro_sql_grupo:
                "where n.ds_status = 'P' and n.cd_colaborador = <id_principal>",

              filtro_sql_item: " ",
            },
          },
        ],
        cards_opcionais: [],
      },
    ],
  };

  return json;
}
//notificacao - tipo
function layoutDashBoard11() {
  const json = {
    id_dashboard: 1,
    dashboard: "Notificacao-tipo",
    grupos: [
      {
        id_grupo: 1,
        grupo: "Geral",
        icone: "event",
        cards: [
          {
            id_card: 1,
            card: "Exemplo aleatorio",

            tipo_card: "CardNotificacaoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: [
              {
                nomeUsuario: "usuario",
                acao: "parou de executar a atividade.",
                icon: "pause",
                time: "Há 2 minutos",
              },
              {
                nomeUsuario: "usuario",
                acao: "alterou a previsão para: 25 de Janeiro de 2022.",
                icon: "event",
                time: "Há 2 minutos",
              },
              {
                nomeUsuario: "usuario",
                acao: "Texto representando uma ocorrência",
                icon: "question_answer",
                time: "Há 2 minutos",
              },
              {
                nomeUsuario: "usuario",
                acao: "iniciou a execução da atividade.",
                icon: "play_arrow",
                time: "Há 2 minutos",
              },
            ],
          },
          {
            id_card: 1,
            card: "Exemplo aleatorio2",

            tipo_card: "CardNotificacaoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: [
              {
                nomeUsuario: "usuario",
                acao: "iniciou a execução da atividade.",
                icon: "play_arrow",
                time: "Há 2 minutos",
              },
            ],
          },
          {
            id_card: 1,
            card: "Exemplo aleatorio",

            tipo_card: "CardNotificacaoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: [
              {
                nomeUsuario: "usuario",
                acao: "parou de executar a atividade.",
                icon: "pause",
                time: "Há 2 minutos",
              },
              {
                nomeUsuario: "usuario",
                acao: "alterou a previsão para: 25 de Janeiro de 2022.",
                icon: "event",
                time: "Há 2 minutos",
              },
              {
                nomeUsuario: "usuario",
                acao: "Texto representando uma ocorrência",
                icon: "question_answer",
                time: "Há 2 minutos",
              },
              {
                nomeUsuario: "usuario",
                acao: "iniciou a execução da atividade.",
                icon: "play_arrow",
                time: "Há 2 minutos",
              },
            ],
          },
          {
            id_card: 1,
            card: "Exemplo aleatorio2",

            tipo_card: "CardNotificacaoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: [
              {
                nomeUsuario: "usuario",
                acao: "iniciou a execução da atividade.",
                icon: "play_arrow",
                time: "Há 2 minutos",
              },
            ],
          },
          {
            id_card: 1,
            card: "Exemplo aleatorio",

            tipo_card: "CardNotificacaoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: [
              {
                nomeUsuario: "usuario",
                acao: "parou de executar a atividade.",
                icon: "pause",
                time: "Há 2 minutos",
              },
              {
                nomeUsuario: "usuario",
                acao: "alterou a previsão para: 25 de Janeiro de 2022.",
                icon: "event",
                time: "Há 2 minutos",
              },
              {
                nomeUsuario: "usuario",
                acao: "Texto representando uma ocorrência",
                icon: "question_answer",
                time: "Há 2 minutos",
              },
              {
                nomeUsuario: "usuario",
                acao: "iniciou a execução da atividade.",
                icon: "play_arrow",
                time: "Há 2 minutos",
              },
            ],
          },
          {
            id_card: 1,
            card: "Exemplo aleatorio2",

            tipo_card: "CardNotificacaoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: [
              {
                nomeUsuario: "usuario",
                acao: "iniciou a execução da atividade.",
                icon: "play_arrow",
                time: "Há 2 minutos",
              },
            ],
          },
        ],
        cards_opcionais: [],
      },
      {
        id_grupo: 1,
        grupo: "Administrativo",
        icone: "event",
        cards: [
          {
            id_card: 1,
            card: "Exemplo Administrativo",

            tipo_card: "CardNotificacaoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: [
              {
                nomeUsuario: "usuario",
                acao: "parou de executar a atividade.",
                icon: "pause",
                time: "Há 2 minutos",
              },
              {
                nomeUsuario: "usuario",
                acao: "Texto representando uma ocorrência",
                icon: "question_answer",
                time: "Há 2 minutos",
              },
              {
                nomeUsuario: "usuario",
                acao: "iniciou a execução da atividade.",
                icon: "play_arrow",
                time: "Há 2 minutos",
              },
            ],
          },
        ],
        cards_opcionais: [],
      },
      {
        id_grupo: 2,
        grupo: "Analise Tecnica",
        icone: "event",
        cards: [
          {
            id_card: 1,
            card: "Analise Tecnica",

            tipo_card: "CardNotificacaoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: [
              {
                nomeUsuario: "usuario",
                acao: "Texto representando uma ocorrência",
                icon: "question_answer",
                time: "Há 2 minutos",
              },
              {
                nomeUsuario: "usuario",
                acao: "iniciou a execução da atividade.",
                icon: "play_arrow",
                time: "Há 2 minutos",
              },
            ],
          },
        ],
        cards_opcionais: [],
      },
      {
        id_grupo: 3,
        grupo: "Desenvolvimento",
        icone: "event",
        cards: [
          {
            id_card: 1,
            card: "Exemplo aleatorio",

            tipo_card: "CardNotificacaoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: [
              {
                nomeUsuario: "usuario",
                acao: "parou de executar a atividade.",
                icon: "pause",
                time: "Há 2 minutos",
              },
              {
                nomeUsuario: "usuario",
                acao: "alterou a previsão para: 25 de Janeiro de 2022.",
                icon: "event",
                time: "Há 2 minutos",
              },
            ],
          },
        ],
        cards_opcionais: [],
      },
      {
        id_grupo: 3,
        grupo: "Gerais",
        icone: "event",
        cards: [
          {
            id_card: 1,
            card: "Exemplo aleatorio",

            tipo_card: "CardNotificacaoApi",
            width: "100%",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: [
              {
                nomeUsuario: "usuario",
                acao: "parou de executar a atividade.",
                icon: "pause",
                time: "Há 2 minutos",
              },
              {
                nomeUsuario: "usuario",
                acao: "alterou a previsão para: 25 de Janeiro de 2022.",
                icon: "event",
                time: "Há 2 minutos",
              },
            ],
          },
        ],
        cards_opcionais: [],
      },
    ],
  };

  return json;
}
//bi - desenvolvimento
function layoutDashBoard12() {
  const json = {
    id_dashboard: 12,
    dashboard: "bi - desenvolvimento",
    grupos: [
      {
        grupo: "Geral",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Previsão da Semana",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorSituacao",
              filtro_sql:
                "where a.ds_status in ('P', 'F') and extract(week from dt_previsao) = extract(week from current_date) and a.cd_tipo_atividade in (4) and a.cd_situacao in (63, 64, 65, 66, 69, 70, 106)",
            },
          },
          {
            card: "Situação",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: false,
            mostrar_duracao: false,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividadePorSituacao",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao in (63, 64, 65, 66, 69, 70, 106)",
            },
          },
          {
            card: "Projetos  Ativos",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/projetos/<id_item>",
            conteudo_card: {
              body_grupo: "bodyProjetoPorTag",
              filtro_sql_grupo:
                "where p.ds_status = 'A' and p.cd_tipo_projeto in (12) and pg.cd_tag in (13, 15, 16, 110, 113, 183, 258)",
              body_item: "bodyProjetoTag",
              filtro_sql_item:
                "where p.ds_status = 'A' and p.cd_tipo_projeto in (12) and ptg.cd_tag = <id_grupo>",
            },
          },
          {
            card: "Criadas na Semana",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorSituacao",
              filtro_sql:
                "where a.ds_status in ('P', 'F') and extract(week from a.dt_emissao) = extract(week from current_date) and a.cd_tipo_atividade in (4) and a.cd_situacao in (63, 64, 65, 66, 69, 70, 106)",
            },
          },
        ],
      },
      {
        grupo: "Solicitações",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Sem Análise",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            adicionar_icone: "corporate_fare",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 63",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 63 and ac.cd_cliente = <id_grupo>",
            },
          },
          {
            card: "Em Análise",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            adicionar_icone: "corporate_fare",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 64",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 64 and ac.cd_cliente = <id_grupo>",
            },
          },
          {
            card: "Reprovadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            adicionar_icone: "corporate_fare",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 66",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 66 and ac.cd_cliente = <id_grupo>",
            },
          },
          {
            card: "Previsao (Sem Analise)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            adicionar_icone: "calendar_today",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 63",
              body_item: "bodyAtividade",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 63 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`,
            },
          },
          {
            card: "Previsao (Em Analise)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            adicionar_icone: "calendar_today",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 64",
              body_item: "bodyAtividade",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 64 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`,
            },
          },
          {
            card: "Aplicativo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao in (63, 64, 66) and ag.cd_tag in (13, 15, 16, 110, 113, 183, 258)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao in (63, 64, 66) and ag.cd_tag = <id_grupo>",
            },
          },
        ],
        cards_opcionais: [],
      },
      {
        grupo: "Aprovadas",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            adicionar_icone: "corporate_fare",
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 65",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 65 and ac.cd_cliente = <id_grupo>",
            },
          },
          {
            card: "Tag",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            adicionar_icone: "corporate_fare",
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 65 and ag.cd_tag not in (13, 15, 16, 110, 113, 183, 258, 260, 261, 262)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 65 and ag.cd_tag = <id_grupo>",
            },
          },
          {
            card: "Previsao",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            adicionar_icone: "calendar_today",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorMesAno",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 65",
              body_item: "bodyAtividade",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 65 and (extract(year from a.dt_previsao)||lpad(extract(month from a.dt_previsao), 2, '0')) = <id_grupo>`,
            },
          },
          {
            card: "Dificuldade",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 65 and ag.cd_tag in (260, 261, 262)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 65 and ag.cd_tag = <id_grupo>",
            },
          },
          {
            card: "Aplicativo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            adicionar_icone: "corporate_fare",
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 65 and ag.cd_tag in (13, 15, 16, 110, 113, 183, 258)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 65 and ag.cd_tag = <id_grupo>",
            },
          },
          {
            card: "GUT",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorGut",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 65",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 65 and a.vl_gut = <id_grupo>",
            },
          },
        ],
      },
      {
        grupo: "Planejamento",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Atividade",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: false,
            mostrar_duracao: false,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividade",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67  ",
            },
          },
          {
            card: "Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            adicionar_icone: "corporate_fare",
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67 and ac.cd_cliente = <id_grupo>",
            },
          },
          {
            card: "Tag",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,

            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67 and ag.cd_tag not in (13, 15, 16, 110, 113, 183, 258, 260, 261, 262)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67 and ag.cd_tag = <id_grupo>",
            },
          },
          {
            card: "Previsao",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            adicionar_icone: "calendar_today",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorMesAno",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67",
              body_item: "bodyAtividade",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67 and (extract(year from a.dt_previsao)||lpad(extract(month from a.dt_previsao), 2, '0')) = <id_grupo>`,
            },
          },
          {
            card: "Dificuldade",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67 and ag.cd_tag in (260, 261, 262)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67 and ag.cd_tag = <id_grupo>",
            },
          },
          {
            card: "Aplicativo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,

            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67 and ag.cd_tag in (13, 15, 16, 110, 113, 183, 258)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67 and ag.cd_tag = <id_grupo>",
            },
          },
          {
            card: "GUT",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorGut",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67 and a.vl_gut = <id_grupo>",
            },
          },
          {
            card: "Responsável",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 67 and a.cd_responsavel = <id_grupo>",
            },
          },
        ],
      },
      {
        grupo: "Desenvolvimento",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Atividade",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: false,
            mostrar_duracao: false,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividade",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 106",
            },
          },
          {
            card: "Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            adicionar_icone: "corporate_fare",
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 106",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 106 and ac.cd_cliente = <id_grupo>",
            },
          },
          {
            card: "Responsável",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 106",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 106 and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Previsao",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            adicionar_icone: "calendar_today",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 106",
              body_item: "bodyAtividade",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 106 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`,
            },
          },
        ],
      },
      {
        grupo: "Beta",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Atividade",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: false,
            mostrar_duracao: false,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividade",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 70",
            },
          },
          {
            card: "Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            adicionar_icone: "corporate_fare",
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 70",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 70 and ac.cd_cliente = <id_grupo>",
            },
          },
          {
            card: "Responsável",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 70",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 70 and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Previsao",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            adicionar_icone: "calendar_today",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 70",
              body_item: "bodyAtividade",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 70 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`,
            },
          },
        ],
      },
      {
        grupo: "Final",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Atividade",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: false,
            mostrar_duracao: false,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividade",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 69",
            },
          },
          {
            card: "Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,

            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 69",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 69 and ac.cd_cliente = <id_grupo>",
            },
          },
          {
            card: "Responsável",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 69",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 69 and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Previsao",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            adicionar_icone: "calendar_today",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 69",
              body_item: "bodyAtividade",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.cd_situacao = 69 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`,
            },
          },
        ],
      },
      {
        grupo: "Entregas",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            adicionar_icone: "corporate_fare",
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade in (4) and cast(a.dt_previsao as date) >= (current_date -60)",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'F' and a.cd_tipo_atividade in (4) and cast(a.dt_previsao as date) >= (current_date -60) and ac.cd_cliente = <id_grupo>",
            },
          },
          {
            card: "Data",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            adicionar_icone: "calendar_today",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade in (4) and cast(a.dt_previsao as date) >= (current_date -60)",
              body_item: "bodyAtividade",
              filtro_sql_item: `where a.ds_status = 'F' and a.cd_tipo_atividade in (4) and cast(a.dt_previsao as date) >= (current_date -60) and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`,
            },
          },
        ],
      },
      {
        grupo: "Versões",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Syclus ERP 1.0",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/projetos/<id_item>",
            conteudo_card: {
              body_grupo: "bodyProjetoTagPorMesAno",
              filtro_sql_grupo: `where p.ds_status in ('A', 'F') and p.cd_tipo_projeto in (12) and ptg.cd_tag in (15)`,
              body_item: "bodyProjetoTag",
              filtro_sql_item: `where p.ds_status in ('A', 'F') and p.cd_tipo_projeto in (12) and ptg.cd_tag in (15) and (extract(year from p.dt_previsao)||lpad(extract(month from p.dt_previsao), 2, '0')) = <id_grupo>`,
            },
          },
          {
            card: "Syclus API",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/projetos/<id_item>",
            conteudo_card: {
              body_grupo: "bodyProjetoTagPorMesAno",
              filtro_sql_grupo: `where p.ds_status in ('A', 'F') and p.cd_tipo_projeto in (12) and ptg.cd_tag in (16)`,
              body_item: "bodyProjetoTag",
              filtro_sql_item: `where p.ds_status in ('A', 'F') and p.cd_tipo_projeto in (12) and ptg.cd_tag in (16) and (extract(year from p.dt_previsao)||lpad(extract(month from p.dt_previsao), 2, '0')) = <id_grupo>`,
            },
          },
          {
            card: "Syclus Tarefas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/projetos/<id_item>",
            conteudo_card: {
              body_grupo: "bodyProjetoTagPorMesAno",
              filtro_sql_grupo: `where p.ds_status in ('A', 'F') and p.cd_tipo_projeto in (12) and ptg.cd_tag in (183)`,
              body_item: "bodyProjetoTag",
              filtro_sql_item: `where p.ds_status in ('A', 'F') and p.cd_tipo_projeto in (12) and ptg.cd_tag in (183) and (extract(year from p.dt_previsao)||lpad(extract(month from p.dt_previsao), 2, '0')) = <id_grupo>`,
            },
          },
        ],
      },
    ],
  };

  return json;
}
//bi - area tecnica gestao
function layoutDashBoard13() {
  const json = {
    id_dashboard: 13,
    dashboard: "area tecnica gestao",
    grupos: [
      {
        grupo: "Atrasadas",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Atividades",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorSituacao",
              filtro_sql:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Workflow",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_workflow = <id_grupo>",
            },
          },
          {
            card: "Responsável",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Situação",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_situacao = <id_grupo>",
            },
          },
          {
            card: "Tag",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and ag.cd_tag = <id_grupo>",
            },
          },
          {
            card: "Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and ac.cd_cliente = <id_grupo>",
            },
          },
          {
            card: "Prioridade",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorPrioridade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_prioridade = <id_grupo>",
            },
          },
          {
            card: "Tipo Atividade",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and cast(a.dt_previsao as date) < current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.cd_tipo_atividade = <id_grupo>",
            },
          },
        ],
      },
      {
        grupo: "Atividades",
        icone: "description",
        cards: [
          {
            card: "Tipo Atividade",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.dt_previsao <= current_date",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.dt_previsao <= current_date and a.cd_tipo_atividade = <id_grupo>",
            },
          },
          {
            card: "Workflow",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorWorkflow",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.dt_previsao <= current_date",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.dt_previsao <= current_date and a.cd_workflow = <id_grupo>",
            },
          },
          {
            card: "Responsável",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.dt_previsao <= current_date",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.dt_previsao <= current_date and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Tag",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.dt_previsao <= current_date",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.dt_previsao <= current_date and and ag.cd_tag = <id_grupo>",
            },
          },
          {
            card: "Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorCliente",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.dt_previsao <= current_date",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.dt_previsao <= current_date and ac.cd_cliente = <id_grupo>",
            },
          },
          {
            card: "Prioridade",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorPrioridade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.dt_previsao <= current_date",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and a.dt_previsao <= current_date and a.cd_prioridade = <id_grupo>",
            },
          },
        ],
        cards_opcionais: [],
      },
      {
        grupo: "Ocorrências",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Colaborador (hoje)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaborador",
              filtro_sql:
                "where o.ds_status <> 'C' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and cast(o.dt_ocorrencia as date) = (current_date)",
            },
          },
          {
            card: "Tipo Atividade (hoje)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyOcorrenciaPorTipoAtividade",
              filtro_sql:
                "where o.ds_status <> 'C' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and cast(o.dt_ocorrencia as date) = (current_date)",
            },
          },
          {
            card: "Workflow (hoje)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyOcorrenciaPorWorkflow",
              filtro_sql:
                "where o.ds_status <> 'C' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and cast(o.dt_ocorrencia as date) = (current_date)",
            },
          },
          {
            id_card: 1,
            card: "Mês atual (Dia)",

            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyOcorrenciaPorData",
              filtro_sql:
                "where o.ds_status <> 'C' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from o.dt_ocorrencia) = extract(year from current_date)) ",
            },
          },
          {
            id_card: 1,
            card: "Semana",

            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyOcorrenciaPorSemana",
              filtro_sql:
                "where o.ds_status <> 'C' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from o.dt_ocorrencia) = extract(year from current_date)) ",
            },
          },
        ],
      },
      {
        grupo: "Estatísticas",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Atividades criadas no mês",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "95vw",
            height: "80",
            conteudo_card: {
              body: "bodyAtividadePorEmissaoStatus",
              filtro_sql:
                "where a.ds_status in ('P', 'F') and (extract(month from a.dt_emissao) = extract(month from current_date)) and (extract(year from a.dt_emissao) = extract(year from current_date)) and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Atividades criadas no mês por Workflow",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "95vw",
            height: "80",
            conteudo_card: {
              body: "bodyAtividadePorWorkflowStatus",
              filtro_sql:
                "where a.ds_status in ('P', 'F') and (extract(month from a.dt_emissao) = extract(month from current_date)) and (extract(year from a.dt_emissao) = extract(year from current_date)) and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Atividades criadas no mês por Tipo Atividade",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "95vw",
            height: "80",
            conteudo_card: {
              body: "bodyAtividadePorTipoAtividadeStatus",
              filtro_sql:
                "where a.ds_status in ('P', 'F') and (extract(month from a.dt_emissao) = extract(month from current_date)) and (extract(year from a.dt_emissao) = extract(year from current_date)) and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Área Técnica por Workflow",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "95vw",
            height: "80",
            conteudo_card: {
              body: "bodyOcorrenciaPorWorkflowData",
              filtro_sql:
                "where o.ds_status <> 'C' and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from a.dt_emissao) = extract(year from current_date)) and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Área Técnica por Workflow",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            coluna_totalizadora: 4,
            width: "46.7vw",
            height: "60",
            conteudo_card: {
              body: "bodyOcorrenciaPorWorkflow",
              filtro_sql:
                "where o.ds_status <> 'C' and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from a.dt_emissao) = extract(year from current_date)) and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Área Técnica por Tipo Atividade",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "95vw",
            height: "80",
            conteudo_card: {
              body: "bodyOcorrenciaPorTipoAtividadeData",
              filtro_sql:
                "where o.ds_status <> 'C' and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from a.dt_emissao) = extract(year from current_date)) and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Área Técnica por Tipo Atividade",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            coluna_totalizadora: 4,
            width: "46.7vw",
            height: "60",
            conteudo_card: {
              body: "bodyOcorrenciaPorTipoAtividade",
              filtro_sql:
                "where o.ds_status <> 'C' and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from a.dt_emissao) = extract(year from current_date)) and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Área Técnica por Colaborador",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "95vw",
            height: "80",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaboradorData",
              filtro_sql:
                "where o.ds_status <> 'C' and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from a.dt_emissao) = extract(year from current_date)) and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
          {
            card: "Área Técnica por Colaborador",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            coluna_totalizadora: 4,
            width: "46.7vw",
            height: "60",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaborador",
              filtro_sql:
                "where o.ds_status <> 'C' and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from a.dt_emissao) = extract(year from current_date)) and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
        ],
      },
      {
        grupo: "Qualidade",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Classificadas (Mês Atual)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "94vw",
            height: "80",
            conteudo_card: {
              body: "bodyAtividadeTagPorResponsavelTag",
              filtro_sql:
                "where a.ds_status = 'F' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and ag.cd_tag in (140, 141, 367) and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
            },
          },
          {
            card: "Classificadas (Mês Anterior)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "94vw",
            height: "80",
            conteudo_card: {
              body: "bodyAtividadeTagPorResponsavelTag",
              filtro_sql:
                "where a.ds_status = 'F' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and ag.cd_tag in (140, 141, 367) and extract(month from a.dt_previsao) = extract(month from current_date - 30) and extract(year from a.dt_previsao) = extract(year from current_date - 30)",
            },
          },
        ],
      },
      {
        grupo: "Tempo",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Linha do Tempo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_linha_tempo",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "95vw",
            height: "100",
            conteudo_card: {
              body: "bodyOcorrenciaColaboradorWorkflowPeriodo",
              filtro_sql:
                "where o.ds_status = 'F' and extract(minute from o.duracao) > 0 and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade in (2,3,15,28,18,19,20)",
            },
          },
        ],
      },
    ],
  };

  return json;
}
//bi - cobranca
function layoutDashBoard14() {
  const json = {
    id_dashboard: 5,
    dashboard: "Cobrança",
    grupos: [
      {
        grupo: "Geral",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Atividades",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorSituacao",
              filtro_sql: "where a.ds_status = 'P' and a.cd_tipo_atividade = 6",
            },
          },
          {
            card: "Situação",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = <id_grupo>",
            },
          },
          {
            card: "Responsável",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_responsavel = <id_grupo>",
            },
          },
        ],
      },
      {
        grupo: "Corrente",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Clientes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "62vw",
            height: "80",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividade",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 85",
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "80",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 85",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 85 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
        ],
      },
      {
        grupo: "Moderada",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Clientes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "62vw",
            height: "80",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividade",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 111",
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "80",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 111",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 111 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
        ],
      },
      {
        grupo: "Intensiva",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Clientes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "62vw",
            height: "80",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividade",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 86",
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "80",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 86",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 86 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
        ],
      },
      {
        grupo: "Acordos",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Clientes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "62vw",
            height: "80",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividade",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 87",
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "80",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 87",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 87 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
        ],
      },
      {
        grupo: "Suspenso",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Clientes",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "62vw",
            height: "80",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividade",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 112",
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "80",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 112",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 6 and a.cd_situacao = 112 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
        ],
      },
      {
        grupo: "Estatísticas",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Finalizadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "62vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorMesAno",
              filtro_sql:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 6 and extract(year from a.dt_previsao) = extract(year from current_date)",
            },
          },
          {
            card: "Finalizadas no Mês",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 6 and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 6 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Criadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "62vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorMesAnoStatus",
              filtro_sql:
                "where a.ds_status <> 'C' and a.cd_tipo_atividade = 6 and extract(year from a.dt_previsao) = extract(year from current_date)",
            },
          },
        ],
      },
    ],
  };

  return json;
}
//bi - comercial
function layoutDashBoard15() {
  const json = {
    id_dashboard: 5,
    dashboard: "Comercial",
    grupos: [
      {
        grupo: "Geral",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Atividades",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            width: "62.5vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorSituacao",
              filtro_sql: "where a.ds_status = 'P' and a.cd_tipo_atividade = 1",
            },
          },
          {
            card: "Situação",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = <id_grupo>",
            },
          },
          {
            card: "Previsão da semana",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and extract(week from a.dt_previsao) = extract(week from current_date)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Responsável",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Tag",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,

            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and ag.cd_tag = <id_grupo>",
            },
          },
        ],
      },
      {
        grupo: "Oportunidade",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Hoje",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividade",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 4 and cast(a.dt_previsao as date) = current_date",
            },
          },
          {
            card: "Mês Atual",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 4 and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 4 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Previsões",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorMesAno",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 4",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 4 and cast(extract(year from a.dt_previsao)||lpad(extract(month from a.dt_previsao), 2, '0') as integer) = <id_grupo>",
            },
          },
          {
            card: "Produto",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 4 and ag.cd_tag in (13, 15)",
            },
          },
          {
            card: "Serviço",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 4 and ag.cd_tag in (206, 189, 125, 116, 369, 300)",
            },
          },
          {
            card: "Tipo Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 4 and ag.cd_tag in (372, 373)",
            },
          },
          {
            card: "Segmento",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 4 and ag.cd_tag in (88, 89, 186, 187)",
            },
          },
        ],
      },
      {
        grupo: "Demonstração",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Hoje",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividade",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 19 and and cast(a.dt_previsao as date) = current_date",
            },
          },
          {
            card: "Mês Atual",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 19 and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 19 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Previsões",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorMesAno",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 19",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 19 and cast(extract(year from a.dt_previsao)||lpad(extract(month from a.dt_previsao), 2, '0') as integer) = <id_grupo>",
            },
          },
          {
            card: "Produto",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 19 and ag.cd_tag in (13, 15)",
            },
          },
          {
            card: "Serviço",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 19 and ag.cd_tag in (206, 189, 125, 116, 369, 300)",
            },
          },
          {
            card: "Tipo Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 19 and ag.cd_tag in (372, 373)",
            },
          },
          {
            card: "Segmento",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 19 and ag.cd_tag in (88, 89, 186, 187)",
            },
          },
        ],
      },
      {
        grupo: "Proposta",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Hoje",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividade",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 20 and cast(a.dt_previsao as date) = current_date",
            },
          },
          {
            card: "Mês Atual",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 20 and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 20 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Previsões",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorMesAno",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 20",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 20 and cast(extract(year from a.dt_previsao)||lpad(extract(month from a.dt_previsao), 2, '0') as integer) = <id_grupo>",
            },
          },
          {
            card: "Produto",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 20 and ag.cd_tag in (13, 15)",
            },
          },
          {
            card: "Serviço",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 20 and ag.cd_tag in (206, 189, 125, 116, 369, 300)",
            },
          },
          {
            card: "Tipo Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 20 and ag.cd_tag in (372, 373)",
            },
          },
          {
            card: "Segmento",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 20 and ag.cd_tag in (88, 89, 186, 187)",
            },
          },
        ],
      },
      {
        grupo: "Negociação",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Hoje",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: 0,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividade",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 22 and cast(a.dt_previsao as date) = current_date",
            },
          },
          {
            card: "Mês Atual",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 22 and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 22 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Previsões",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorMesAno",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 22",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 22 and cast(extract(year from a.dt_previsao)||lpad(extract(month from a.dt_previsao), 2, '0') as integer) = <id_grupo>",
            },
          },
          {
            card: "Produto",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 22 and ag.cd_tag in (13, 15)",
            },
          },
          {
            card: "Serviço",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 22 and ag.cd_tag in (206, 189, 125, 116, 369, 300)",
            },
          },
          {
            card: "Tipo Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 22 and ag.cd_tag in (372, 373)",
            },
          },
          {
            card: "Segmento",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 22 and ag.cd_tag in (88, 89, 186, 187)",
            },
          },
        ],
      },
      {
        grupo: "Faturamento",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Hoje",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividade",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 82 and cast(a.dt_previsao as date) = current_date",
            },
          },
          {
            card: "Finalizados",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorMesAno",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and a.cd_situacao = 39",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and a.cd_situacao = 39 and cast(extract(year from a.dt_previsao)||lpad(extract(month from a.dt_previsao), 2, '0') as integer) = <id_grupo>",
            },
          },
          {
            card: "Previsões",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorMesAno",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 82",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 82 and cast(extract(year from a.dt_previsao)||lpad(extract(month from a.dt_previsao), 2, '0') as integer) = <id_grupo>",
            },
          },
          {
            card: "Produto",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 82 and ag.cd_tag in (13, 15)",
            },
          },
          {
            card: "Serviço",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 82 and ag.cd_tag in (206, 189, 125, 116, 369, 300)",
            },
          },
          {
            card: "Tipo Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 82 and ag.cd_tag in (372, 373)",
            },
          },
          {
            card: "Segmento",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 1 and a.cd_situacao = 82 and ag.cd_tag in (88, 89, 186, 187)",
            },
          },
        ],
      },
      {
        grupo: "Fechados",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Mês Atual",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and a.cd_situacao = 104 and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and a.cd_situacao = 104 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Produto",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and a.cd_situacao = 104 and ag.cd_tag in (13, 15) and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
            },
          },
          {
            card: "Serviço",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and a.cd_situacao = 104 and ag.cd_tag in (206, 189, 125, 116, 369, 300) and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
            },
          },
          {
            card: "Tipo Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and a.cd_situacao = 104 and ag.cd_tag in (372, 373) and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
            },
          },
          {
            card: "Segmento",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and a.cd_situacao = 104 and ag.cd_tag in (88, 89, 186, 187) and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
            },
          },
          {
            card: "Origem",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and a.cd_situacao = 104 and ag.cd_tag in (249, 250, 251, 355) and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
            },
          },
        ],
      },
      {
        grupo: "Não Fechados",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Mês Atual",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and a.cd_situacao = 127 and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and a.cd_situacao = 127 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Produto",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and a.cd_situacao = 127 and ag.cd_tag in (13, 15) and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
            },
          },
          {
            card: "Serviço",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and a.cd_situacao = 127 and ag.cd_tag in (206, 189, 125, 116, 369, 300) and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
            },
          },
          {
            card: "Tipo Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and a.cd_situacao = 127 and ag.cd_tag in (372, 373) and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
            },
          },
          {
            card: "Segmento",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and a.cd_situacao = 127 and ag.cd_tag in (88, 89, 186, 187) and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
            },
          },
          {
            card: "Origem",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTag",
              filtro_sql:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and a.cd_situacao = 127 and ag.cd_tag in (249, 250, 251, 355) and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
            },
          },
        ],
      },
      {
        grupo: "Estatísticas",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Fechados",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "62vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorMesAno",
              filtro_sql:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and a.cd_situacao = 104",
            },
          },
          {
            card: "Fechados",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorMesAno",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and a.cd_situacao = 104",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and a.cd_situacao = 104 and cast(extract(year from a.dt_previsao)||lpad(extract(month from a.dt_previsao), 2, '0') as integer) = <id_grupo>",
            },
          },
          {
            card: "Não Fechados",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "62vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorMesAno",
              filtro_sql:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and a.cd_situacao = 127",
            },
          },
          {
            card: "Casos Encerrados",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorMesAno",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and a.cd_situacao = 127",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and a.cd_situacao = 127 and cast(extract(year from a.dt_previsao)||lpad(extract(month from a.dt_previsao), 2, '0') as integer) = <id_grupo>",
            },
          },
        ],
      },
    ],
  };

  return json;
}
//bi - contas
function layoutDashBoard16() {
  const json = {
    id_dashboard: 5,
    dashboard: "layout dashboard 16",
    grupos: [
      {
        grupo: "Geral",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Atividades",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorSituacao",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 16",
            },
          },
          {
            card: "Situação",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 16",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 16 and a.cd_situacao = <id_grupo>",
            },
          },
          {
            card: "Responsável",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 16",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 16 and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Tag",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,

            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 16",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 16 and ag.cd_tag = <id_grupo>",
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 16",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 16 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Projetos",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/Projetos/<id_item>",
            conteudo_card: {
              body_grupo: "bodyProjetoPorResponsavel",
              filtro_sql_grupo:
                "where p.ds_status = 'A' and p.cd_tipo_projeto = 17",
              body_item: "bodyProjeto",
              filtro_sql_item:
                "where p.ds_status = 'A' and p.cd_tipo_projeto = 17 and p.cd_responsavel = <id_grupo>",
            },
          },
        ],
      },
      {
        grupo: "Sac",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Atividades",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorSituacao",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 31",
            },
          },
          {
            card: "Situação",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 31",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 31 and a.cd_situacao = <id_grupo>",
            },
          },
          {
            card: "Responsável",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 31",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 31 and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,

            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 31",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 31 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Tag",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,

            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 31",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 31 and ag.cd_tag = <id_grupo>",
            },
          },
        ],
      },
    ],
  };

  return json;
}
//bi - administrativo
function layoutDashBoard17() {
  const json = {
    id_dashboard: 5,
    dashboard: "layout dashboard 17",
    grupos: [
      {
        grupo: "Geral",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Atividades",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorSituacao",
              filtro_sql: "where a.ds_status = 'P' and a.cd_tipo_atividade = 5",
            },
          },
          {
            card: "Situação",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 5",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 5 and a.cd_situacao = <id_grupo>",
            },
          },
          {
            card: "Responsável",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 5",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 5 and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,

            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 5",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 5 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Tag",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,

            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 5",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 5 and ag.cd_tag = <id_grupo>",
            },
          },
          {
            card: "Projetos",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/Projetos/<id_item>",
            conteudo_card: {
              body_grupo: "bodyProjetoPorResponsavel",
              filtro_sql_grupo:
                "where p.ds_status = 'A' and p.cd_tipo_projeto = 13",
              body_item: "bodyProjeto",
              filtro_sql_item:
                "where p.ds_status = 'A' and p.cd_tipo_projeto = 13 and p.cd_responsavel = <id_grupo>",
            },
          },
        ],
      },
      {
        grupo: "Suprimentos",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Atividades",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorSituacao",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 21",
            },
          },
          {
            card: "Situação",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 21",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 21 and a.cd_situacao = <id_grupo>",
            },
          },
          {
            card: "Responsável",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 21",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 21 and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,

            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 21",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 21 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Tag",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,

            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 21",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 21 and ag.cd_tag = <id_grupo>",
            },
          },
        ],
      },
    ],
  };

  return json;
}
//bi - formacao
function layoutDashBoard18() {
  const json = {
    id_dashboard: 18,
    dashboard: "layout dashboard 18",
    grupos: [
      {
        grupo: "Geral",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Atividades",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorSituacao",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 27",
            },
          },
          {
            card: "Situação",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 27",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 27 and a.cd_situacao = <id_grupo>",
            },
          },
          {
            card: "Responsável",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 27",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 27 and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Tag",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,

            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 27",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 27 and ag.cd_tag = <id_grupo>",
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,

            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 27",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 27 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
        ],
      },
    ],
  };

  return json;
}
//bi - qualidade
function layoutDashBoard19() {
  const json = {
    id_dashboard: 19,
    dashboard: "layout dashboard 19",
    grupos: [
      {
        grupo: "Geral",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Atividades",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "94vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorSituacao",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 29",
            },
          },
          {
            card: "Responsável",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "23vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 29",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 29 and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Situação",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "23vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 29",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 29 and a.cd_situacao = <id_grupo>",
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            width: "23vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 29",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 29 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Tag",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            width: "23vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 29",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 29 and ag.cd_tag = <id_grupo>",
            },
          },
          {
            card: "Conforme(Anual)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            coluna_totalizadora: 3,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "46.5vw",
            height: "50",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and ag.cd_tag = 141 and extract(year from a.dt_previsao) = extract(year from current_date)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status ='F' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and ag.cd_tag = 141 and extract(year from a.dt_previsao) = extract(year from current_date) and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Não Conforme(Anual)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra_horizontal",
            coluna_totalizadora: 3,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "46.5vw",
            height: "50",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and ag.cd_tag = 140 and extract(year from a.dt_previsao) = extract(year from current_date)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status ='F' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and ag.cd_tag = 140 and extract(year from a.dt_previsao) = extract(year from current_date) and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Classificadas (Mês Atual)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra_horizontal",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "94vw",
            height: "80",
            conteudo_card: {
              body: "bodyAtividadeTagPorResponsavelTag",
              filtro_sql:
                "where a.ds_status = 'F' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and ag.cd_tag in (140, 141, 367) and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
            },
          },
          {
            card: "Classificadas (Mês Anterior)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra_horizontal",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "94vw",
            height: "80",
            conteudo_card: {
              body: "bodyAtividadeTagPorResponsavelTag",
              filtro_sql:
                "where a.ds_status = 'F' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and ag.cd_tag in (140, 141, 367) and extract(month from a.dt_previsao) = extract(month from current_date - 30) and extract(year from a.dt_previsao) = extract(year from current_date - 30)",
            },
          },
        ],
      },
      {
        grupo: "Área Técnica",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Classificadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "94vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadeTagPorResponsavelTag",
              filtro_sql:
                "where a.ds_status = 'F' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and ag.cd_tag in (140, 141) and extract(year from a.dt_previsao) = extract(year from current_date)",
            },
          },
          {
            card: "Sem Classificacao",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "94vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadeTagPorResponsavel",
              filtro_sql:
                "where a.ds_status = 'F' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and (select count(ag.cd_tag) from atividade_tag ag where ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade and ag.cd_tag in (141, 140)) = 0 and extract(year from a.dt_previsao) = extract(year from current_date)",
            },
          },
          {
            card: "Sem Classificacao",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "46.5vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and (select count(ag.cd_tag) from atividade_tag ag where ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade and ag.cd_tag in (141, 140)) = 0 and extract(year from a.dt_previsao) = extract(year from current_date)",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status ='F' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and (select count(ag.cd_tag) from atividade_tag ag where ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade and ag.cd_tag in (141, 140)) = 0 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Sem Classificacao",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "46.5vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and (select count(ag.cd_tag) from atividade_tag ag where ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade and ag.cd_tag in (141, 140)) = 0 and extract(year from a.dt_previsao) = extract(year from current_date)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status ='F' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and (select count(ag.cd_tag) from atividade_tag ag where ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade and ag.cd_tag in (141, 140)) = 0 and extract(year from a.dt_previsao) = extract(year from current_date) and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Correção Pendente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "46.5vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorData",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and ag.cd_tag = 153 and extract(year from a.dt_previsao) = extract(year from current_date)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status ='F' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and ag.cd_tag = 153 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Correção Pendente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "46.5vw",
            height: "40",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and ag.cd_tag = 153 and extract(year from a.dt_previsao) = extract(year from current_date)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status ='F' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and ag.cd_tag = 153 and extract(year from a.dt_previsao) = extract(year from current_date) and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Não Conforme",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "46.5vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorData",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and ag.cd_tag = 140 and extract(year from a.dt_previsao) = extract(year from current_date)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status ='F' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and ag.cd_tag = 140 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Não Conforme",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "46.5vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and ag.cd_tag = 140 and extract(year from a.dt_previsao) = extract(year from current_date)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status ='F' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and ag.cd_tag = 140 and extract(year from a.dt_previsao) = extract(year from current_date) and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Conforme",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "46.5vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorData",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and ag.cd_tag = 141 and extract(year from a.dt_previsao) = extract(year from current_date)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status ='F' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and ag.cd_tag = 141 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Conforme",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "46.5vw",
            height: "40",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and ag.cd_tag = 141 and extract(year from a.dt_previsao) = extract(year from current_date)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status ='F' and a.cd_tipo_atividade in (2,3,15,28,18,19,20) and ag.cd_tag = 141 and extract(year from a.dt_previsao) = extract(year from current_date) and a.cd_responsavel = <id_grupo>",
            },
          },
        ],
      },
      {
        grupo: "Comercial",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Classificadas (Mês Atual)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "94vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadeTagPorResponsavelTag",
              filtro_sql:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and ag.cd_tag in (140, 141, 367) and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
            },
          },
          {
            card: "Sem Classificacao (Mês Atual)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "94vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadeTagPorResponsavel",
              filtro_sql:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and (select count(ag.cd_tag) from atividade_tag ag where ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade and ag.cd_tag in (141, 140, 367)) = 0 and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
            },
          },
          {
            card: "Sem Classificacao",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "46.5vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and (select count(ag.cd_tag) from atividade_tag ag where ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade and ag.cd_tag in (141, 140, 367)) = 0 and a.dt_previsao >= current_date -30",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status ='F' and a.cd_tipo_atividade = 1 and (select count(ag.cd_tag) from atividade_tag ag where ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade and ag.cd_tag in (141, 140, 367)) = 0 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Sem Classificacao (Mês Atual)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "46.5vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and (select count(ag.cd_tag) from atividade_tag ag where ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade and ag.cd_tag in (141, 140, 367)) = 0 and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status ='F' and a.cd_tipo_atividade = 1 and (select count(ag.cd_tag) from atividade_tag ag where ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade and ag.cd_tag in (141, 140, 367)) = 0 and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date) and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Inconforme",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "46.5vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorData",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and ag.cd_tag = 140 and a.dt_previsao >= current_date -30",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status ='F' and a.cd_tipo_atividade = 1 and ag.cd_tag = 140 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Inconforme (Mês Atual)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "46.5vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and ag.cd_tag = 140 and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status ='F' and a.cd_tipo_atividade = 1 and ag.cd_tag = 140 and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date) and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Verificada",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "46.5vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorData",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and ag.cd_tag = 367 and a.dt_previsao >= current_date -30",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status ='F' and a.cd_tipo_atividade = 1 and ag.cd_tag = 367 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Verificada (Mês Atual)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "46.5vw",
            height: "40",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and ag.cd_tag = 367 and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
            },
          },
          {
            card: "Conforme",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "46.5vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorData",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and ag.cd_tag = 141 and a.dt_previsao >= current_date -30",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status ='F' and a.cd_tipo_atividade = 1 and ag.cd_tag = 141 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Conforme (Mês Atual)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "46.5vw",
            height: "40",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 1 and ag.cd_tag = 141 and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
            },
          },
        ],
      },
      {
        grupo: "Desenvolvimento",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Classificadas (Mês Atual)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "94vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadeTagPorResponsavelTag",
              filtro_sql:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 4 and ag.cd_tag in (140, 141, 367) and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
            },
          },
          {
            card: "Sem Classificacao (Mês Atual)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "94vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadeTagPorResponsavel",
              filtro_sql:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 4 and (select count(ag.cd_tag) from atividade_tag ag where ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade and ag.cd_tag in (141, 140, 367)) = 0 and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
            },
          },
          {
            card: "Sem Classificacao",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "46.5vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 4 and (select count(ag.cd_tag) from atividade_tag ag where ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade and ag.cd_tag in (141, 140, 367)) = 0 and a.dt_previsao >= current_date -30",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status ='F' and a.cd_tipo_atividade = 4 and (select count(ag.cd_tag) from atividade_tag ag where ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade and ag.cd_tag in (141, 140, 367)) = 0 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Sem Classificacao (Mês Atual)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "46.5vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 4 and (select count(ag.cd_tag) from atividade_tag ag where ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade and ag.cd_tag in (141, 140, 367)) = 0 and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status ='F' and a.cd_tipo_atividade = 4 and (select count(ag.cd_tag) from atividade_tag ag where ag.cd_empresa = a.cd_empresa and ag.cd_atividade = a.cd_atividade and ag.cd_tag in (141, 140, 367)) = 0 and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date) and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Inconforme",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "46.5vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorData",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 4 and ag.cd_tag = 140 and a.dt_previsao >= current_date -30",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status ='F' and a.cd_tipo_atividade = 4 and ag.cd_tag = 140 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Inconforme (Mês Atual)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "46.5vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 4 and ag.cd_tag = 140 and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status ='F' and a.cd_tipo_atividade = 4 and ag.cd_tag = 140 and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date) and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Verificada",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "46.5vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorData",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 4 and ag.cd_tag = 367 and a.dt_previsao >= current_date -30",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status ='F' and a.cd_tipo_atividade = 4 and ag.cd_tag = 367 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Verificada (Mês Atual)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "46.5vw",
            height: "40",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 4 and ag.cd_tag = 367 and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
            },
          },
          {
            card: "Conforme",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "46.5vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorData",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 4 and ag.cd_tag = 141 and a.dt_previsao >= current_date -30",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status ='F' and a.cd_tipo_atividade = 4 and ag.cd_tag = 141 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
          {
            card: "Conforme (Mês Atual)",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "46.5vw",
            height: "40",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'F' and a.cd_tipo_atividade = 4 and ag.cd_tag = 141 and extract(month from a.dt_previsao) = extract(month from current_date) and extract(year from a.dt_previsao) = extract(year from current_date)",
            },
          },
        ],
      },
    ],
  };

  return json;
}
//bi - processos
function layoutDashBoard20() {
  const json = {
    id_dashboard: 20,
    dashboard: "layout dashboard 20",
    grupos: [
      {
        grupo: "Geral",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Atividades",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_barra",
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorSituacao",
              filtro_sql:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 33",
            },
          },
          {
            card: "Situação",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorSituacao",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 33",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 33 and a.cd_situacao = <id_grupo>",
            },
          },
          {
            card: "Responsável",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorResponsavel",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 33",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 33 and a.cd_responsavel = <id_grupo>",
            },
          },
          {
            card: "Tag",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,

            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorTag",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 33",
              body_item: "bodyAtividadeTag",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 33 and ag.cd_tag = <id_grupo>",
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,

            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadePorData",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 33",
              body_item: "bodyAtividade",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade = 33 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))",
            },
          },
        ],
      },
    ],
  };

  return json;
}
//producao - padrao
function layoutDashBoard21() {
  const json = {
    id_dashboard: 21,
    dashboard: "producao",
    grupos: [
      {
        id_grupo: 1,
        grupo: "producao",
        icone: "precision_manufacturing",
        cards: [
          {
            card: "Previsão da Semana",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_polar",
            coluna_totalizadora: 3,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorSituacao",
              filtro_sql:
                "where a.ds_status in ('P', 'F') and extract(week from dt_previsao) = extract(week from current_date) and a.cd_tipo_atividade in (4) and a.cd_situacao in (63, 64, 65, 66, 69, 70, 106)",
            },
          },
          {
            card: "Planejamento",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyAtividadePorTipoAtividadeStatus",
              filtro_sql: "",
            },
          },
        ],
        cards_opcionais: [],
      },
    ],
  };

  return json;
}
//bi - projeto gestao
function layoutDashBoard22() {
  const json = {
    id_dashboard: 22,
    dashboard: "Projeto",
    grupos: [
      {
        grupo: "Estatísticas",
        icone: "signal_cellular_alt",
        cards: [],
        cards_opcionais: [],
      },
      {
        grupo: "Tempo",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Linha do Tempo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_linha_tempo",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "95vw",
            height: "80",
            conteudo_card: {
              body: "bodyOcorrenciaColaboradorTipoAtividadePeriodo",
              filtro_sql:
                "where o.ds_status = 'F' and extract(minute from o.duracao) > 0 and cast(o.dt_ocorrencia as date) = current_date and a.cd_tipo_atividade = 3",
            },
          },
        ],
      },
      {
        grupo: "Legado",
        icone: "signal_cellular_alt",
        cards: [
          {
            id_card: 1,
            card: "Projetos Ativos",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/projetos/<id_item>",
            conteudo_card: {
              body_grupo: "bodyProjetoPorTipoProjeto",
              filtro_sql_grupo: `where p.ds_status = 'A'`,
              body_item: "bodyProjeto",
              filtro_sql_item: `where p.ds_status = 'A' and p.cd_tipo_projeto = <id_grupo>`,
            },
          },
          {
            id_card: 1,
            card: "Tags",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_qtde: true,
            width: "31vw",
            height: "40",
            link: "https://crm.syclus.com.br/projetos/<id_item>",
            conteudo_card: {
              body: "bodyProjetoPorTag",
              filtro_sql: "where p.ds_status = 'A'",
            },
          },
          {
            id_card: 1,
            card: "Responsavel",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/projetos/<id_item>",
            conteudo_card: {
              body_grupo: "bodyProjetoPorResponsavel",
              filtro_sql_grupo: `where p.ds_status = 'A'`,
              body_item: "bodyProjeto",
              filtro_sql_item: `where p.ds_status = 'A' and p.cd_responsavel = <id_grupo>`,
            },
          },
          {
            id_card: 1,
            card: "Cliente",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,

            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/projetos/<id_item>",
            conteudo_card: {
              body_grupo: "bodyProjetoPorCliente",
              filtro_sql_grupo: `where p.ds_status = 'A'`,
              body_item: "bodyProjeto",
              filtro_sql_item: `where p.ds_status = 'A' and p.cd_cliente = <id_grupo>`,
            },
          },
          {
            id_card: 1,
            card: "Tempo Máximo",

            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal> and a.cd_tipo_atividade = <id_grupo>",
            },
          },
          {
            id_card: 1,
            card: "Ocorrência por projeto",

            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal> and a.cd_tipo_atividade = <id_grupo>",
            },
          },
          {
            id_card: 1,
            card: "Tempo gasto no mês",

            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal> and a.cd_tipo_atividade = <id_grupo>",
            },
          },
          {
            id_card: 1,
            card: "GUT",

            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal> and a.cd_tipo_atividade = <id_grupo>",
            },
          },
          {
            id_card: 1,
            card: "Atrasados",

            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal> and a.cd_tipo_atividade = <id_grupo>",
            },
          },
          {
            id_card: 1,
            card: "Tipos",

            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "31vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeClientePorTipoAtividade",
              filtro_sql_grupo:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal>",
              body_item: "bodyAtividadeCliente",
              filtro_sql_item:
                "where a.ds_status = 'P' and a.cd_tipo_atividade in (4) and a.dt_previsao < current_date and ac.cd_cliente = <id_principal> and a.cd_tipo_atividade = <id_grupo>",
            },
          },
        ],
        cards_opcionais: [],
      },
    ],
  };

  return json;
}
//bi - contas clientes
function layoutDashBoard23() {
  const json = {
    id_dashboard: 23,
    dashboard: "bi contas clientes",
    grupos: [
      {
        id_grupo: 1,
        grupo: "Geral",
        icone: "precision_manufacturing",
        cards: [
          {
            card: "Clientes por Segmento",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            coluna_totalizadora: 3,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyClientePorTag",
              filtro_sql:
                "where cl.ds_status = 'A' and tg.cd_tag in (88, 186, 187, 89)",
            },
          },
          {
            card: "Clientes por Segmento",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "62vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/clientes/<id_item>",
            conteudo_card: {
              body_grupo: "bodyClientePorTag",
              filtro_sql_grupo:
                "where cl.ds_status = 'A' and tg.cd_tag in (88, 186, 187, 89)",
              body_item: "bodyClienteTag",
              filtro_sql_item:
                "where cl.ds_status = 'A' and tg.cd_tag in (88, 186, 187, 89) and tg.cd_tag = <id_grupo>",
            },
          },
          {
            card: "Clientes por Plano",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            coluna_totalizadora: 3,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyClientePorTag",
              filtro_sql:
                "where cl.ds_status = 'A' and tg.cd_tag in (303, 304, 305, 307)",
            },
          },
          {
            card: "Clientes por Plano",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "62vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/clientes/<id_item>",
            conteudo_card: {
              body_grupo: "bodyClientePorTag",
              filtro_sql_grupo:
                "where cl.ds_status = 'A' and tg.cd_tag in (303, 304, 305, 307)",
              body_item: "bodyClienteTag",
              filtro_sql_item:
                "where cl.ds_status = 'A' and tg.cd_tag in (303, 304, 305, 307) and tg.cd_tag = <id_grupo>",
            },
          },
          {
            card: "Clientes por Tag",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            coluna_totalizadora: 3,
            width: "31vw",
            height: "40",
            conteudo_card: {
              body: "bodyClientePorTag",
              filtro_sql:
                "where cl.ds_status = 'A' and tg.cd_tag not in (88, 186, 187, 89, 303, 304, 305, 307)",
            },
          },
          {
            card: "Clientes por Tag",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            width: "62vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/clientes/<id_item>",
            conteudo_card: {
              body_grupo: "bodyClientePorTag",
              filtro_sql_grupo:
                "where cl.ds_status = 'A' and tg.cd_tag not in (88, 186, 187, 89, 303, 304, 305, 307)",
              body_item: "bodyClienteTag",
              filtro_sql_item:
                "where cl.ds_status = 'A' and tg.cd_tag not in (88, 186, 187, 89, 303, 304, 305, 307) and tg.cd_tag = <id_grupo>",
            },
          },
        ],
        cards_opcionais: [],
      },
    ],
  };

  return json;
}
//bi - controladoria
function layoutDashBoard24() {
  const json = {
    id_dashboard: 5,
    dashboard: "layout dashboard 24",
    grupos: [
      {
        grupo: "Efetivo",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Tipo Atividade",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "95vw",
            height: "80",
            conteudo_card: {
              body: "bodyOcorrenciaPorTipoAtividadeData",
              filtro_sql:
                "where o.ds_status <> 'C' and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from a.dt_emissao) = extract(year from current_date))",
            },
          },
          {
            card: "Colaborador",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_comparativo_barra",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "95vw",
            height: "80",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaboradorData",
              filtro_sql:
                "where o.ds_status <> 'C' and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from a.dt_emissao) = extract(year from current_date))",
            },
          },
          {
            card: "Tipo Atividade",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            coluna_totalizadora: 4,
            width: "45vw",
            height: "60",
            conteudo_card: {
              body: "bodyOcorrenciaPorTipoAtividade",
              filtro_sql:
                "where o.ds_status <> 'C' and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from a.dt_emissao) = extract(year from current_date))",
            },
          },
          {
            card: "Colaborador",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_pizza",
            coluna_totalizadora: 4,
            width: "48vw",
            height: "60",
            conteudo_card: {
              body: "bodyOcorrenciaPorColaborador",
              filtro_sql:
                "where o.ds_status <> 'C' and (extract(month from o.dt_ocorrencia) = extract(month from current_date)) and (extract(year from a.dt_emissao) = extract(year from current_date))",
            },
          },
        ],
      },
    ],
  };

  return json;
}
//bi - Desenvolvimento Syclus 1.0
function layoutDashBoard25() {
  const json = {
    id_dashboard: 25,
    dashboard: "layout dashboard 25",
    grupos: [
      {
        grupo: "Solicitações",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Sem Análise",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "63vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividadeTag",
              filtro_sql: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 15 and a.cd_situacao = 63`,
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "30vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorData",
              filtro_sql_grupo: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 15 and a.cd_situacao = 63`,
              body_item: "bodyAtividadeTag",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 15 and a.cd_situacao = 63 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`,
            },
          },
          {
            card: "Em Análise",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "63vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividadeTag",
              filtro_sql: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 15 and a.cd_situacao = 64`,
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "30vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorData",
              filtro_sql_grupo: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 15 and a.cd_situacao = 64`,
              body_item: "bodyAtividadeTag",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 15 and a.cd_situacao = 64 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`,
            },
          },
          {
            card: "Reprovado",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "63vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividadeTag",
              filtro_sql: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 15 and a.cd_situacao = 66`,
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "30vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorData",
              filtro_sql_grupo: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 15 and a.cd_situacao = 66`,
              body_item: "bodyAtividadeTag",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 15 and a.cd_situacao = 66 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`,
            },
          },
        ],
      },
      {
        grupo: "Aprovadas",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Aprovadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "63vw",
            height: "80",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividadeTag",
              filtro_sql: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 15 and a.cd_situacao = 65`,
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "30vw",
            height: "80",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorData",
              filtro_sql_grupo: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 15 and a.cd_situacao = 65`,
              body_item: "bodyAtividadeTag",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 15 and a.cd_situacao = 65 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`,
            },
          },
        ],
      },
      {
        grupo: "Planejamento",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Planejamento",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "63vw",
            height: "80",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividadeTag",
              filtro_sql: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 15 and a.cd_situacao = 67`,
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "30vw",
            height: "80",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorData",
              filtro_sql_grupo: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 15 and a.cd_situacao = 67`,
              body_item: "bodyAtividadeTag",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 15 and a.cd_situacao = 67 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`,
            },
          },
        ],
      },
      {
        grupo: "Desenvolvimento",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Em Desenvolvimento",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "63vw",
            height: "80",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividadeTag",
              filtro_sql: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 15 and a.cd_situacao = 106`,
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "30vw",
            height: "80",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorData",
              filtro_sql_grupo: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 15 and a.cd_situacao = 106`,
              body_item: "bodyAtividadeTag",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 15 and a.cd_situacao = 106 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`,
            },
          },
        ],
      },
      {
        grupo: "Versões",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Versão Beta",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "63vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividadeTag",
              filtro_sql: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 15 and a.cd_situacao = 70`,
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "30vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorData",
              filtro_sql_grupo: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 15 and a.cd_situacao = 70`,
              body_item: "bodyAtividadeTag",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 15 and a.cd_situacao = 70 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`,
            },
          },
          {
            card: "Versão Final",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "63vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividadeTag",
              filtro_sql: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 15 and a.cd_situacao = 69`,
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "30vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorData",
              filtro_sql_grupo: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 15 and a.cd_situacao = 69`,
              body_item: "bodyAtividadeTag",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 15 and a.cd_situacao = 69 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`,
            },
          },
        ],
      },
    ],
  };

  return json;
}

//bi - Desenvolvimento Syclus 2.0
function layoutDashBoard26() {
  const json = {
    id_dashboard: 26,
    dashboard: "layout dashboard 26",
    grupos: [
      //a.cd_situacao in (63, 64, 65, 66, 69, 70, 106)
      {
        grupo: "Solicitações",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Sem Análise",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "63vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividadeTag",
              filtro_sql: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 13 and a.cd_situacao = 63`,
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "30vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorData",
              filtro_sql_grupo: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 13 and a.cd_situacao = 63`,
              body_item: "bodyAtividadeTag",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 13 and a.cd_situacao = 63 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`,
            },
          },
          {
            card: "Em Análise",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "63vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividadeTag",
              filtro_sql: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 13 and a.cd_situacao = 64`,
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "30vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorData",
              filtro_sql_grupo: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 13 and a.cd_situacao = 64`,
              body_item: "bodyAtividadeTag",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 13 and a.cd_situacao = 64 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`,
            },
          },
          {
            card: "Reprovado",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "63vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividadeTag",
              filtro_sql: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 13 and a.cd_situacao = 66`,
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "30vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorData",
              filtro_sql_grupo: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 13 and a.cd_situacao = 66`,
              body_item: "bodyAtividadeTag",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 13 and a.cd_situacao = 66 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`,
            },
          },
        ],
      },
      {
        grupo: "Aprovadas",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Aprovadas",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "63vw",
            height: "80",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividadeTag",
              filtro_sql: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 13 and a.cd_situacao = 65`,
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "30vw",
            height: "80",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorData",
              filtro_sql_grupo: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 13 and a.cd_situacao = 65`,
              body_item: "bodyAtividadeTag",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 13 and a.cd_situacao = 65 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`,
            },
          },
        ],
      },
      {
        grupo: "Planejamento",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Planejamento",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "63vw",
            height: "80",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividadeTag",
              filtro_sql: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 13 and a.cd_situacao = 67`,
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "30vw",
            height: "80",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorData",
              filtro_sql_grupo: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 13 and a.cd_situacao = 67`,
              body_item: "bodyAtividadeTag",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 13 and a.cd_situacao = 67 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`,
            },
          },
        ],
      },
      {
        grupo: "Desenvolvimento",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Em Desenvolvimento",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "63vw",
            height: "80",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividadeTag",
              filtro_sql: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 13 and a.cd_situacao = 106`,
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "30vw",
            height: "80",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorData",
              filtro_sql_grupo: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 13 and a.cd_situacao = 106`,
              body_item: "bodyAtividadeTag",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 13 and a.cd_situacao = 106 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`,
            },
          },
        ],
      },
      {
        grupo: "Versões",
        icone: "signal_cellular_alt",
        cards: [
          {
            card: "Versão Beta",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "63vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividadeTag",
              filtro_sql: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 13 and a.cd_situacao = 70`,
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "30vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorData",
              filtro_sql_grupo: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 13 and a.cd_situacao = 70`,
              body_item: "bodyAtividadeTag",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 13 and a.cd_situacao = 70 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`,
            },
          },
          {
            card: "Versão Final",
            btn_comando: "btn-atualizar",
            tipo_card: "CardListaApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "63vw",
            height: "40",
            link: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body: "bodyAtividadeTag",
              filtro_sql: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 13 and a.cd_situacao = 69`,
            },
          },
          {
            card: "Previsão",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGrupoApi",
            mostrar_imagem: true,
            mostrar_qtde: true,
            mostrar_duracao: true,
            totalizar_grupo: true,
            totalizar_item: true,
            expandir_imagem: true,
            width: "30vw",
            height: "40",
            link_item: "https://crm.syclus.com.br/atividades/<id_item>",
            conteudo_card: {
              body_grupo: "bodyAtividadeTagPorData",
              filtro_sql_grupo: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 13 and a.cd_situacao = 69`,
              body_item: "bodyAtividadeTag",
              filtro_sql_item: `where a.ds_status = 'P' and a.cd_tipo_atividade = 4 and ag.cd_tag = 13 and a.cd_situacao = 69 and cast(a.dt_previsao as date) = dateadd(day, <id_grupo>, cast('01/01/1970' as date))`,
            },
          },
        ],
      },
    ],
  };

  return json;
}

//bi - teste
function layoutDashBoard9999() {
  const json = {
    id_dashboard: 9999,
    dashboard: "layout dashboard 9999",
    grupos: [
      {
        grupo: "Teste",
        icone: "assignment_turned_in",
        cards: [
          {
            card: "Linha do Tempo",
            btn_comando: "btn-atualizar",
            tipo_card: "CardGraficoApi",
            sub_tipo: "grafico_linha_tempo",
            coluna_serie: 2,
            coluna_categoria: 1,
            width: "94vw",
            height: "80",
            conteudo_card: {
              body: "bodyOcorrenciaColaboradorTipoAtividadePeriodo",
              filtro_sql:
                "where o.ds_status = 'F' and extract(minute from o.duracao) > 0 and cast(o.dt_ocorrencia as date) = current_date and o.cd_colaborador = <id_principal>",
            },
          },
        ],
      },
    ],
  };

  return json;
}
