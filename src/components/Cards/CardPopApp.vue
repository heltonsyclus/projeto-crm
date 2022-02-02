<template>
  <q-card class="card-popup">
    <div style="margin-top: 10px">
      <div class="flex">
        <div
          class="fundo-card"
          v-for="(objAplicativos, i) in Aplicativos"
          :key="i"
          @click="abrirAplicativos(objAplicativos.rota)"
        >
          <div class="conteudo">
            <q-icon
              :name="objAplicativos.icon"
              size="28px"
              style="margin-top: 10px"
            />
            <p>{{ objAplicativos.app }}</p>
          </div>
        </div>
      </div>
    </div>
  </q-card>
</template>

<script>
export default {
  setup() {
    return {
      Aplicativos: [],
    };
  },
  methods: {
    abrirAplicativos(objAplicativos) {
      this.$emit("fecharModal", fecharModal);
      this.$router.push(objAplicativos);
    },
    mostrarAplicativos() {
      let login = JSON.parse(localStorage.getItem("login"));
      for (let i = 0; i < login.aplicativos.length; i++) {
        login.aplicativos[i].aplicativo;
        if (login.aplicativos[i].aplicativo === "CRM") {
          this.Aplicativos.push({
            app: "CRM",
            icon: "maps_home_work",
            rota: "/",
          });
        } else if (login.aplicativos[i].aplicativo === "Produção") {
          this.Aplicativos.push({
            app: "Produção",
            icon: "precision_manufacturing",
            rota: "/login-cliente",
          });
        } else if (login.aplicativos[i].aplicativo === "Base de conhecimento") {
          this.Aplicativos.push({
            app: "Base de conhecimento",
            icon: "tungsten",
            rota: "/login-cliente",
          });
        } else if (login.aplicativos[i].aplicativo === "Vendas") {
          this.Aplicativos.push({
            app: "Vendas",
            icon: "point_of_sale",
            rota: "/login-cliente",
          });
        } else if (login.aplicativos[i].aplicativo === "BI") {
          this.Aplicativos.push({
            app: "BI",
            icon: "point_of_sale",
            rota: "/login-cliente",
          });
        }
      }
    },
  },
  created() {
    this.mostrarAplicativos();
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
  text-align: center;
  margin: 5px 1px 0px 1px;
  background-color: rgb(20, 109, 224);
  width: 88px;
  height: 85px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
.fundo-card:hover {
  background-color: rgb(80, 224, 123);
  color: #fff;
}
.conteudo {
  position: relative;
  top: 45%;
  transform: translateY(-50%);
}
span {
  color: rgb(99, 99, 99);
  font-weight: 500;
}
p {
  padding-top: 2px;
  font-size: 11px;
}
</style>
