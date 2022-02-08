<template>
  <q-card
    class="my-card-syclus"
    flat
    bordered
    :style="{ width: `${width}`, height: `${this.alturaCard}` }"
  >
    <q-item class="items-center topo-fixo" :class="cor_header" dense="dense">
      <q-item-section
        style="height: 40px; font-weight: 700; color: White; padding-left: 10px"
      >
        {{ card }}
      </q-item-section>

      <q-btn
        v-if="btn_comando === 'btn-atualizar'"
        round
        flat
        text-color="white"
        icon="autorenew"
        @click.prevent="atualizarConteudo"
      >
      </q-btn>
    </q-item>
    <q-card-section class="corpo" :style="{ height: `${this.alturaCorpo}` }">
      <div v-if="sub_tipo === 'grafico_linha'">
        <apexchart
          :height="alturaGrafico"
          type="line"
          :options="objGraficoBarra"
          :series="series"
        >
        </apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_pontos'">
        <apexchart
          :height="alturaGrafico"
          type="scatter"
          :options="objGraficoBarra"
          :series="series"
        >
        </apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_quantidade'">
        <apexchart
          :height="alturaGrafico"
          type="heatmap"
          :options="objGraficoBarra"
          :series="series"
        >
        </apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_pizza'">
        <apexchart
          type="pie"
          :height="alturaGrafico"
          :options="objGraficoPizza"
          :series="seriesGraficoPizza"
        ></apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_barra'">
        <apexchart
          type="bar"
          :options="objGraficoBarra"
          :series="seriesGraficoBarra"
          :height="alturaGrafico"
        ></apexchart>
      </div>
      <div
        v-if="sub_tipo === 'grafico_barra_horizontal'"
        style="margin-right: 30px"
      >
        <apexchart
          type="bar"
          :options="objGraficoBarraHorizontal"
          :series="seriesGraficoBarraHorizontal"
          :height="alturaGrafico"
        ></apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_donut'">
        <apexchart
          type="donut"
          :options="objGraficoPizza"
          :series="seriesGraficoPizza"
          :height="alturaGrafico"
        ></apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_polar'" style="margin-top: 5px">
        <apexchart
          type="polarArea"
          :options="objGraficoPolar"
          :series="seriesGraficoPolar"
          :height="alturaGrafico"
        ></apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_comparativo_barra'">
        <apexchart
          type="bar"
          :options="objGraficoComparativo"
          :series="seriesGraficoComparativo"
          :height="alturaGrafico"
        ></apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_comparativo_linha'">
        <apexchart
          type="line"
          :height="alturaGrafico"
          :options="objGraficoComparacaoLinha"
          :series="seriesGraficoComparativoLinha"
        ></apexchart>
      </div>
      <div
        v-if="sub_tipo === 'grafico_comparativo_indicativo'"
        style="margin-top: 5px"
      >
        <apexchart
          type="bar"
          :height="alturaGrafico"
          :options="objGraficoComparacaoIndicativo"
          :series="seriesGraficoComparativoIndicativo"
        ></apexchart>
      </div>
      <div v-if="sub_tipo === 'grafico_linha_tempo'" style="margin-top: 5px">
        {{ this.descricao }}
        <apexchart
          :height="alturaGrafico"
          :options="objGraficoLinhaDoTempo"
          :series="JSON.parse(JSON.stringify(seriesGraficoLinhaDoTempo))"
        ></apexchart>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import controllerGraficoApi from "app/src/commands/controller/controllerGraficoApi";
export default {
  mixins: [controllerGraficoApi],
  props: [
    "idPrincipal",
    "conteudo_card",
    "card",
    "sub_tipo",
    "btn_comando",
    "cor_header",
    "formato_card",
    "msg",
    "link_item",
    "width",
    "height",
    "coluna_categoria",
    "coluna_serie",
    "coluna_totalizadora",
  ],
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.margin-bot {
  margin-bottom: 3px;
}
.pl {
  padding-left: 5px;
}
.corpo {
  padding: 0;
  margin: 0 auto;
}
.text-class {
  font-weight: 400;
  font-style: italic;
  padding-left: 15px;
  width: 90%;
  cursor: pointer;
}
.text-class:hover {
  color: rgb(11, 187, 218);
  transition: 0.5s;
}
.spin {
  text-align: center;
  margin: 30px auto;
  animation: spins 1s infinite;
}

@keyframes spins {
  to {
    transform: rotate(360deg);
  }
}
/*my-card-syclus*/
/*@media only screen and (max-width: 500px) {
  .my-card-syclus {
    min-height: 200px;
  }
}*/
</style>
