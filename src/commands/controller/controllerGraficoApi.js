import VueApexCharts from "vue3-apexcharts";
import controllerCardApi from "app/src/commands/controller/controllerCardListaApi";
export default {
  mixins: [controllerCardApi],
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      value: 71,
      carregarKnob: false,
      carregarText: false,
      alturaGrafico: 0,
      index_coluna_serie: 0,
      index_coluna_categoria: 1,
      index_coluna_totalizadora: 2,
      objGraficoBarra: {
        xaxis: {
          categories: [""],
        },
        colors: ["#2E01E3"],
      },
      seriesGraficoBarra: [
        {
          name: "Atividades",
          data: [],
        },
      ],
      objGraficoBarraHorizontal: {
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [""],
        },
      },
      seriesGraficoBarraHorizontal: [
        {
          name: "Atividades",
          data: [],
        },
      ],
      objGraficoPizza: {
        labels: [],
      },
      seriesGraficoPizza: [],
      objGraficoComparativo: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          toolbar: {
            show: true,
          },
          zoom: {
            enabled: true,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10,
          },
        },
        xaxis: {
          categories: [],
        },
        legend: {
          position: "right",
          offsetY: 40,
        },
        fill: {
          opacity: 1,
        },
      },
      seriesGraficoComparativo: [],
      objGraficoComparativoHorizontal: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [],
        },
        yaxis: {
          title: {
            text: "",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + " quantidades";
            },
          },
        },
      },
      seriesGraficoComparativoHorizontal: [],
      objGraficoComparacaoLinha: {
        chart: {
          height: 350,
          type: "line",
          dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ["#77B6EA", "#545454"],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "smooth",
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          categories: [],
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
        },
      },
      seriesGraficoComparativoLinha: [],
      objGraficoComparacaoIndicativo: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          stackType: "100%",
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        stroke: {
          width: 1,
          colors: ["#fff"],
        },
        xaxis: {
          categories: [],
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + " Atividades";
            },
          },
        },
        fill: {
          opacity: 1,
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
          offsetX: 40,
        },
      },
      seriesGraficoComparativoIndicativo: [],
      objGraficoPolar: {
        chart: {
          type: "polarArea",
        },
        labels: [],
        stroke: {
          colors: ["#fff"],
        },
        fill: {
          opacity: 1,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      seriesGraficoPolar: [],
      objGraficoLinhaDoTempo: {
        tooltip: {
          custom: function (opts) {
            const valorY1horas = new Date(opts.y1).getHours();
            const valorY1minutos = new Date(opts.y1).getMinutes();
            const valorY2horas = new Date(opts.y2).getHours();
            const valorY2minutos = new Date(opts.y2).getMinutes();
            const inicial =
              valorY1horas + 3 + ":" + String(valorY1minutos).padStart(2, "0");
            const final =
              valorY2horas + 3 + ":" + String(valorY2minutos).padStart(2, "0");
            const values = opts.ctx.rangeBar.getTooltipValues(opts);
            return (
              '<div class="apexcharts-tooltip-rangebar">' +
              '<div> <span class="series-name" style="color: ' +
              values.color +
              '">' +
              (values.seriesName ? values.seriesName : "") +
              "</span></div>" +
              '<div> <span class="category">' +
              values.ylabel +
              ' </span> <span class="value start-value">' +
              inicial +
              '</span> <span class="separator">-</span> <span class="value end-value">' +
              final +
              "</span></div>" +
              "</div>"
            );
          },
        },
        dataLabels: {
          enabled: this.barra_tempo,
          formatter: function (val) {
            var ocorrenciaValor = (val[1] - val[0]) / 60 / 1000 + " MN";
            return ocorrenciaValor;
          },
        },
        chart: {
          height: 450,
          type: "rangeBar",
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "80%",
            //medida da barra
          },
        },
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          show: true,
          //nome vertical na lateral
        },
        fill: {
          type: "solid",
          opacity: 0.7,
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
        },
      },
      seriesGraficoLinhaDoTempo: [],
      objGraficoRadial: {
        plotOptions: {
          radialBar: {
            hollow: {
              size: "70%",
            },
          },
        },
        labels: [],
      },
      seriesGraficoRadial: [],
      objGraficoSpark: {
        chart: {
          type: "area",
          height: 160,
          sparkline: {
            enabled: true,
          },
        },
        stroke: {
          curve: "straight",
        },
        fill: {
          opacity: 0.3,
        },
        yaxis: {
          min: 0,
        },
        colors: ["#0E9DDB"],
        title: {
          text: [],
          offsetX: 0,
          style: {
            fontSize: "24px",
          },
        },
        subtitle: {
          text: "Total",
          offsetX: 0,
          style: {
            fontSize: "14px",
          },
        },
      },
      serieGraficoSpark: [
        {
          data: [],
          name: "Atividades",
        },
      ],
    };
  },
  methods: {
    atualizarConteudo() {
      this.limparConteudo();
      this.limparConteudoComparativoBarra();
      if (this.idPrincipal !== null) {
        let body = "";
        const bodyPromess = new Promise((resolve, reject) => {
          body = this.getBody(this.conteudo_card.body);
          if (body === undefined) {
            resolve((body = this.getBody(this.conteudo_card.body_grupo)));
          } else {
            reject;
          }
        });
        bodyPromess.then((res) => {
          res;
        });
        //console.log(body);
        this.carregarKnob = true;
        this.$api.post("consultasql", body).then((res) => {
          //  console.log(">>" + JSON.stringify(res.data));
          let arrRetorno = res.data;
          this.carregarKnob = false;

          //index colunas
          if (this.coluna_serie > 0) {
            this.index_coluna_serie = this.coluna_serie - 1;
          }
          if (this.coluna_categoria > 0) {
            this.index_coluna_categoria = this.coluna_categoria - 1;
          }
          if (this.coluna_totalizadora > 0) {
            this.index_coluna_totalizadora = this.coluna_totalizadora - 1;
          }

          //estrutura
          switch (this.sub_tipo) {
            case "grafico_barra":
              this.montarConteudoBarra(arrRetorno);
              break;
            case "grafico_linha_tempo":
              this.montarConteudoLinhaTempo(arrRetorno);
              break;
            case "grafico_barra_horizontal":
              this.montarConteudoBarraHorizontal(arrRetorno);
              break;
            case "grafico_pizza":
              this.montarConteudoGraficoPizza(arrRetorno);
              break;
            case "grafico_donut":
              this.montarConteudoGraficoDonut(arrRetorno);
              break;
            case "grafico_comparativo_barra":
              this.montarConteudoComparativoBarra(arrRetorno);
              break;
            case "grafico_comparativo_barra_horizontal":
              this.montarConteudoComparativoBarraHorizontal(arrRetorno);
              break;
            case "grafico_comparativo_linha":
              this.montarConteudoComparativoLinha(arrRetorno);
              break;
            case "grafico_comparativo_indicativo":
              this.montarConteudoComparativoIndicativo(arrRetorno);
              break;
            case "grafico_polar":
              this.montarConteudoGraficoPolar(arrRetorno);
              break;
            case "grafico_radial":
              this.montarConteudoGraficoRadial(arrRetorno);
              break;
            case "grafico_sparkline":
              this.montarConteudoSpark(arrRetorno);
              break;
          }

          //final
          const promessa = new Promise((resolve, reject) => {
            if (arrRetorno === "") {
              resolve((this.carregarText = false));
            }
            reject((this.carregarText = true), (this.carregarKnob = false));
          });
          promessa.then((resolucao) => {
            resolucao;
          });
        });
      }
    },
    montarConteudoSpark(pConteudo) {
      this.limparConteudoSpark();
      let somaObj = 0;
      for (let i = 0; i < pConteudo.length; i++) {
        this.serieGraficoSpark[0].data.push(Object.values(pConteudo[i])[3]);
        var valorObj = Object.values(this.serieGraficoSpark[0].data);
        somaObj += valorObj[i];
      }
      this.objGraficoSpark.title.text.push(somaObj);
      this.objGraficoSpark.title.text = [];
    },
    montarConteudoBarra(pConteudo) {
      this.limparConteudoBarra();

      for (let i = 0; i < pConteudo.length; i++) {
        this.objGraficoBarra.xaxis.categories.push(
          Object.values(pConteudo[i])[1]
        );
        this.seriesGraficoBarra[0].data.push(
          Object.values(pConteudo[i])[this.index_coluna_totalizadora]
        );
      }
    },
    montarConteudoLinhaTempo(pConteudo) {
      this.limparConteudoLinhaTempo();
      //Criando estrutura de categorias e series
      // console.log(this.label_min);
      /*  if (this.label_min === true) {
        this.objGraficoLinhaDoTempo.tooltip = {
          custom: function () {
            return false;
          },
        };
        console.log(this.objGraficoLinhaDoTempo.tooltip);
      }*/
      for (let i = 0; i < pConteudo.length; i++) {
        let xSerie = Object.values(pConteudo[i])[0];
        let xCategoria = Object.values(pConteudo[i])[1];
        let xInicio = Object.values(pConteudo[i])[2];
        let xFim = Object.values(pConteudo[i])[3];
        // let xObservacao = Object.values(pConteudo[i])[4];
        let idxSerie = this.seriesGraficoLinhaDoTempo.findIndex(
          (item) => item.name === xSerie
        );
        if (idxSerie < 0) {
          idxSerie =
            this.seriesGraficoLinhaDoTempo.push({
              name: xSerie,
              data: [],
            }) - 1;
        }
        this.seriesGraficoLinhaDoTempo[idxSerie].data.push({
          x: xCategoria,
          y: [new Date(xInicio).getTime(), new Date(xFim).getTime()],
        });
      }
    },
    montarConteudoBarraHorizontal(pConteudo) {
      this.limparConteudoBarraHorizontal();
      for (let i = 0; i < pConteudo.length; i++) {
        this.objGraficoBarraHorizontal.xaxis.categories.push(
          Object.values(pConteudo[i])[1]
        );
        this.seriesGraficoBarraHorizontal[0].data.push(
          Object.values(pConteudo[i])[this.index_coluna_totalizadora]
        );
      }
    },
    montarConteudoGraficoPizza(pConteudo) {
      this.limparConteudoPizza();
      for (let i = 0; i < pConteudo.length; i++) {
        this.objGraficoPizza.labels.push(Object.values(pConteudo[i])[1]);
        this.seriesGraficoPizza.push(
          Object.values(pConteudo[i])[this.index_coluna_totalizadora]
        );
      }
    },
    montarConteudoGraficoDonut(pConteudo) {
      this.limparConteudoPizza();
      for (let i = 0; i < pConteudo.length; i++) {
        this.objGraficoPizza.labels.push(Object.values(pConteudo[i])[1]);
        this.seriesGraficoPizza.push(
          Object.values(pConteudo[i])[this.index_coluna_totalizadora]
        );
      }
    },
    montarConteudoComparativoBarra(pConteudo) {
      for (let i = 0; i < pConteudo.length; i++) {
        let idxCategoria = this.objGraficoComparativo.xaxis.categories.indexOf(
          Object.values(pConteudo[i])[this.index_coluna_categoria]
        );
        if (idxCategoria < 0) {
          this.objGraficoComparativo.xaxis.categories.push(
            Object.values(pConteudo[i])[this.index_coluna_categoria]
          );
        }
        let idxSerie = this.seriesGraficoComparativo.find(
          (item) =>
            item.name === Object.values(pConteudo[i])[this.index_coluna_serie]
        );
        if (idxSerie === undefined) {
          this.seriesGraficoComparativo.push({
            name: Object.values(pConteudo[i])[this.index_coluna_serie],
            data: [],
          });
        }
      }
      this.objGraficoComparativo.xaxis.categories.sort();
      //criando valores zerados
      for (let i = 0; i < this.seriesGraficoComparativo.length; i++) {
        for (
          let j = 0;
          j < this.objGraficoComparativo.xaxis.categories.length;
          j++
        ) {
          this.seriesGraficoComparativo[i].data.push(0);
        }
      }
      //setando os valores
      for (let i = 0; i < pConteudo.length; i++) {
        let idxCategoria = this.objGraficoComparativo.xaxis.categories.indexOf(
          Object.values(pConteudo[i])[this.index_coluna_categoria]
        );
        for (let j = 0; j < this.seriesGraficoComparativo.length; j++) {
          if (
            this.seriesGraficoComparativo[j].name ===
            Object.values(pConteudo[i])[this.index_coluna_serie]
          ) {
            this.seriesGraficoComparativo[j].data.splice(
              idxCategoria,
              1,
              Object.values(pConteudo[i])[this.index_coluna_totalizadora]
            );
            break;
          }
        }
      }
    },
    montarConteudoComparativoBarraHorizontal(pConteudo) {
      for (let i = 0; i < pConteudo.length; i++) {
        let idxCategoria =
          this.objGraficoComparativoHorizontal.xaxis.categories.indexOf(
            Object.values(pConteudo[i])[this.index_coluna_categoria]
          );
        if (idxCategoria < 0) {
          this.objGraficoComparativoHorizontal.xaxis.categories.push(
            Object.values(pConteudo[i])[this.index_coluna_categoria]
          );
        }
        let idxSerie = this.seriesGraficoComparativoHorizontal.find(
          (item) =>
            item.name === Object.values(pConteudo[i])[this.index_coluna_serie]
        );
        if (idxSerie === undefined) {
          this.seriesGraficoComparativoHorizontal.push({
            name: Object.values(pConteudo[i])[this.index_coluna_serie],
            data: [],
          });
        }
      }
      this.objGraficoComparativoHorizontal.xaxis.categories.sort();
      //criando valores zerados
      for (let i = 0; i < this.seriesGraficoComparativoHorizontal.length; i++) {
        for (
          let j = 0;
          j < this.objGraficoComparativoHorizontal.xaxis.categories.length;
          j++
        ) {
          this.seriesGraficoComparativoHorizontal[i].data.push(0);
        }
      }
      //setando os valores
      for (let i = 0; i < pConteudo.length; i++) {
        let idxCategoria =
          this.objGraficoComparativoHorizontal.xaxis.categories.indexOf(
            Object.values(pConteudo[i])[this.index_coluna_categoria]
          );
        for (
          let j = 0;
          j < this.seriesGraficoComparativoHorizontal.length;
          j++
        ) {
          if (
            this.seriesGraficoComparativoHorizontal[j].name ===
            Object.values(pConteudo[i])[this.index_coluna_serie]
          ) {
            this.seriesGraficoComparativoHorizontal[j].data.splice(
              idxCategoria,
              1,
              Object.values(pConteudo[i])[this.index_coluna_totalizadora]
            );
            break;
          }
        }
      }
    },
    montarConteudoComparativoLinha(pConteudo) {
      this.limparConteudoComparativoLinha();
      //exemplo:
      /*this.objGraficoComparacaoLinha.xaxis.categories=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
      this.seriesGraficoComparativoLinha = [
        {
          name: "Nome1",
          data: [28, 29, 33, 36, 32, 32, 33],
        },
        {
          name: "Nome2",
          data: [12, 11, 14, 18, 17, 13, 13],
        },
      ];*/
      for (let i = 0; i < pConteudo.length; i++) {
        let idxCategoria =
          this.objGraficoComparacaoLinha.xaxis.categories.indexOf(
            Object.values(pConteudo[i])[2]
          );
        if (idxCategoria < 0) {
          this.objGraficoComparacaoLinha.xaxis.categories.push(
            Object.values(pConteudo[i])[2]
          );
        }
        let idxSerie = this.seriesGraficoComparativoLinha.find(
          (item) => item.name === Object.values(pConteudo[i])[1]
        );
        if (idxSerie === undefined) {
          this.seriesGraficoComparativoLinha.push({
            name: Object.values(pConteudo[i])[1],
            data: [],
          });
        }
      }
      this.objGraficoComparacaoLinha.xaxis.categories.sort();
      //criando valores zerados
      for (let i = 0; i < this.seriesGraficoComparativoLinha.length; i++) {
        for (
          let j = 0;
          j < this.objGraficoComparacaoLinha.xaxis.categories.length;
          j++
        ) {
          this.seriesGraficoComparativoLinha[i].data.push(0);
        }
      }
      //setando os valores
      for (let i = 0; i < pConteudo.length; i++) {
        let idxCategoria =
          this.objGraficoComparacaoLinha.xaxis.categories.indexOf(
            Object.values(pConteudo[i])[this.index_coluna_categoria]
          );
        for (let j = 0; j < this.seriesGraficoComparativoLinha.length; j++) {
          if (
            this.seriesGraficoComparativoLinha[j].name ===
            Object.values(pConteudo[i])[this.index_coluna_serie]
          ) {
            this.seriesGraficoComparativoLinha[j].data.splice(
              idxCategoria,
              1,
              Object.values(pConteudo[i])[this.index_coluna_totalizadora]
            );
            break;
          }
        }
      }
    },
    montarConteudoComparativoIndicativo(pConteudo) {
      this.limparConteudoComparativoIndicativo();
      for (let i = 0; i < pConteudo.length; i++) {
        let idxCategoria =
          this.objGraficoComparacaoIndicativo.xaxis.categories.indexOf(
            Object.values(pConteudo[i])[2]
          );
        if (idxCategoria < 0) {
          this.objGraficoComparacaoIndicativo.xaxis.categories.push(
            Object.values(pConteudo[i])[2]
          );
        }
        let idxSerie = this.seriesGraficoComparativoIndicativo.find(
          (item) => item.name === Object.values(pConteudo[i])[1]
        );
        if (idxSerie === undefined) {
          this.seriesGraficoComparativoIndicativo.push({
            name: Object.values(pConteudo[i])[1],
            data: [],
          });
        }
      }

      this.objGraficoComparacaoIndicativo.xaxis.categories.sort();
      //criando valores zerados
      for (let i = 0; i < this.seriesGraficoComparativoIndicativo.length; i++) {
        for (
          let j = 0;
          j < this.objGraficoComparacaoIndicativo.xaxis.categories.length;
          j++
        ) {
          this.seriesGraficoComparativoIndicativo[i].data.push(0);
        }
      }
      //setando os valores
      for (let i = 0; i < pConteudo.length; i++) {
        let idxCategoria =
          this.objGraficoComparacaoIndicativo.xaxis.categories.indexOf(
            Object.values(pConteudo[i])[2]
          );
        for (
          let j = 0;
          j < this.seriesGraficoComparativoIndicativo.length;
          j++
        ) {
          if (
            this.seriesGraficoComparativoIndicativo[j].name ===
            Object.values(pConteudo[i])[1]
          ) {
            this.seriesGraficoComparativoIndicativo[j].data.splice(
              idxCategoria,
              1,
              Object.values(pConteudo[i])[3]
            );
            break;
          }
        }
      }
    },
    montarConteudoGraficoPolar(pConteudo) {
      this.limparConteudoPolar();
      for (let i = 0; i < pConteudo.length; i++) {
        this.objGraficoPolar.labels.push(Object.values(pConteudo[i])[1]);
        this.seriesGraficoPolar.push(
          Object.values(pConteudo[i])[this.index_coluna_totalizadora]
        );
      }
    },
    montarConteudoGraficoRadial(pConteudo) {
      this.limparConteudoRadial();
      for (let i = 0; i < pConteudo.length; i++) {
        //        this.objGraficoRadial.labels.push(Object.values(pConteudo[i])[1]);
        //        this.seriesGraficoRadial.push(Object.values(pConteudo[i])[2]);
        let limite = 480;
        let total = Object.values(pConteudo[i])[this.index_coluna_totalizadora];
        let perc = Math.round((total / limite) * 100, 0);
        this.objGraficoRadial.labels.push(total);
        this.seriesGraficoRadial.push(perc);
      }
    },
    limparConteudoSpark() {
      this.serieGraficoSpark[0].data = [];
    },
    limparConteudoBarra() {
      this.objGraficoBarra = {
        xaxis: {
          categories: [],
        },
      };
      this.seriesGraficoBarra = [
        {
          name: "",
          data: [],
        },
      ];
    },
    limparConteudoRadial() {
      (this.objGraficoRadial = {
        labels: [],
      }),
        (this.seriesGraficoRadial = []);
    },
    limparConteudoPizza() {
      (this.seriesGraficoPizza = []),
        (this.objGraficoPizza = {
          labels: [],
        });
    },
    limparConteudoBarraHorizontal() {
      this.objGraficoBarraHorizontal = {
        xaxis: {
          categories: [],
        },
      };
      this.seriesGraficoBarraHorizontal = [
        {
          name: "",
          data: [],
        },
      ];
    },
    limparConteudoLinhaTempo() {
      this.seriesGraficoLinhaDoTempo = [];
    },
    limparConteudoComparativoBarra() {
      this.objGraficoComparativo.xaxis.categories = [];
      this.seriesGraficoComparativo = [];
      this.objGraficoComparativoHorizontal.xaxis.categories = [];
      this.seriesGraficoComparativoHorizontal = [];
    },
    limparConteudoComparativoLinha() {
      this.objGraficoComparacaoLinha.xaxis.categories = [];
      this.seriesGraficoComparativoLinha = [];
    },
    limparConteudoComparativoIndicativo() {
      this.objGraficoComparacaoIndicativo.xaxis.categories = [];
      this.seriesGraficoComparativoIndicativo = [];
    },
    limparConteudoPolar() {
      this.objGraficoPolar.labels = [];
      this.seriesGraficoPolar = [];
    },
    handleResize() {
      if (window.innerWidth >= 500) {
        this.alturaCard = this.height + "vh";
        let altura = parseInt(this.height);
        this.alturaGrafico = altura * 5.1 + "px";
        this.alturaCorpo = this.height - 6 + "vh";
      }
      if (window.innerWidth <= 600) {
        this.alturaGrafico = 185;
        let altura = parseInt(this.height);
        this.alturaCard = this.height * 6 + "px";
        this.alturaGrafico = altura * 5.1 + "px";
        this.alturaCorpo = this.height - 6 + "vh";
      }
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
};
