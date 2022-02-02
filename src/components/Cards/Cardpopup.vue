<template>
  <q-card class="card-popup">
    <div
      v-for="(objBI, j) in this.objLayoutDashboard"
      :key="j"
      style="margin-top: 10px"
    >
      <span> {{ objBI.grupo }}</span>
      <div class="flex">
        <div
          v-for="(obj, i) in objBI.layout"
          :key="i"
          class="fundo-card"
          @click="onClickDashboard(j, i)"
        >
          <q-icon :name="obj.icone" size="28px" style="margin-top: 12px" />
          <p>{{ obj.dashboard }}</p>
        </div>
      </div>
      <q-separator style="margin-top: 5px" />
    </div>
  </q-card>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  emits: ["close"],
  props: ["objLayoutBI"],
  setup() {
    const $store = useStore();
    const dashboardBInome = computed({
      get: () => $store.state.showcase.dashboardBInome,
      set: (val) => {
        $store.commit("showcase/BInome", val);
      },
    });
    return {
      dashboardBInome,
    };
  },
  data() {
    return {
      objLayoutDashboard: [],
    };
  },
  methods: {
    dashboardLayouts() {
      for (let i = 0; i < this.objLayoutBI.length; i++) {
        this.objLayoutDashboard.push({
          grupo: this.objLayoutBI[i].grupo,
          layout: this.objLayoutBI[i].layout_dashboard,
        });
      }
    },
    onClickDashboard(j, i) {
      this.$emit("valorIndexLayout", j, i);

      this.dashboardBInome =
        this.objLayoutBI[j].grupo +
        " / " +
        this.objLayoutBI[j].layout_dashboard[i].dashboard;
    },
  },
  created() {
    this.dashboardLayouts();
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.card-popup {
  width: 450px;
  max-height: 350px;
  padding: 0;
  margin: 0px auto;
  overflow: auto;
}

.fundo-card {
  padding: 5px;
  text-align: center;
  margin: 2px 2px;
  background-color: rgb(20, 109, 224);
  width: 80px;
  height: 80px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
.fundo-card:hover {
  background-color: rgb(80, 224, 123);
  color: #fff;
}
span {
  color: rgb(99, 99, 99);
  font-weight: 500;
}
p {
  font-size: 12px;
}
</style>
