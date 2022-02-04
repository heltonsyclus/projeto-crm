<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-grey-1">
      <q-toolbar class="text-primary">
        <img
          src="../assets/syclus.png"
          alt="Syclus"
          class="rotate-225"
          style="cursor: pointer"
          @click="$router.push({ name: 'dashboard' })"
        />
        <q-toolbar-title
          class="text-weight-bold"
          @click="$router.push({ name: 'dashboard' })"
        >
          <span style="cursor: pointer" class="logo-texto">Syclus 2.0</span>
        </q-toolbar-title>

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn
            round
            dense
            flat
            color="grey-8"
            icon="notifications"
            @click="$router.push({ name: 'notificacao' })"
          >
            <q-badge color="blue" text-color="white" floating>
              {{ notificacao }}
            </q-badge>
            <q-tooltip>Syclus Notificação</q-tooltip>
          </q-btn>
          <q-btn
            round
            dense
            flat
            color="text-grey-7"
            icon="apps"
            class="q-ml-sm"
            @click="AbrirModalPop(event)"
          >
            <q-tooltip>Syclus Apps</q-tooltip>
          </q-btn>
          <CardPopApp
            class="tela-popup"
            v-show="ModalpopUp"
            @mouseover="teste"
            @fecharModal="fecharModal()"
          />
          <span style="font-weight: 500" class="capitalize text-grey-8">{{
            this.nomeUsuario
          }}</span>
          <q-btn round flat no-wrap>
            <q-avatar size="30px">
              <img :src="this.imgColaborador" />
            </q-avatar>
            <q-tooltip class="capitalize">{{ this.nomeUsuario }}</q-tooltip>
            <q-menu style="text-align: center">
              <q-list dense>
                <q-item clickable class="flex">
                  <q-item-section>Versão</q-item-section>
                  <q-item-section>2.0.0.1</q-item-section>
                </q-item>
                <q-separator />
                <q-item
                  clickable
                  class="GL__menu-link"
                  @click="$router.push({ name: 'login' })"
                >
                  <q-item-section @click.prevent="limparToken()"
                    >Sair</q-item-section
                  >
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn
            v-show="menuMobile"
            flat
            round
            color="primary"
            size="14px"
            icon="menu"
            @click="toggleLeftDrawer"
          />
        </div>
      </q-toolbar>
    </q-header>
    <div v-if="menuMobile === false">
      <MenuPrincipal />
    </div>
    <div v-if="menuMobile === true">
      <q-drawer
        v-model="leftDrawerOpen"
        bordered
        class="bg-grey-2"
        :width="240"
      >
        {{ this.liberacaoRotas(this.rotas) }}
        <q-scroll-area class="fit">
          <q-list padding>
            <q-item
              v-for="link in linksList"
              :key="link.text"
              :to="link.rota"
              v-ripple
              clickable
            >
              <q-item-section avatar>
                <q-icon color="grey" :name="link.icon" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ link.text }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
      <q-page-container>
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import MenuPrincipal from "./MenuPrincipal.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { rotasMenu } from "app/src/commands/menuRotas/rotasMenu";
import CardPopApp from "src/components/Cards/CardPopApp.vue";
export default defineComponent({
  components: { MenuPrincipal, CardPopApp },
  name: "MainLayout",
  mixins: [rotasMenu],
  setup() {
    const leftDrawerOpen = ref(false);
    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }
    const $store = useStore();
    const notificacao = computed({
      get: () => $store.state.showcase.notificacao,
    });

    return {
      rotas: ref(""),
      ModalpopUp: ref(false),
      menuDesktop: ref(true),
      menuMobile: ref(false),
      nomeUsuario: ref(""),
      imgColaborador: ref(""),
      notificacao,
      toggleLeftDrawer,
      leftDrawerOpen,
      linksList: [],
    };
  },
  methods: {
    teste() {
      if ((this.ModalpopUp = true)) {
        // console.log("ok");
      }
    },
    fecharModal() {
      this.ModalpopUp = false;
    },
    limparToken() {
      window.localStorage.clear();
      // window.location.replace("https://sycluscrm-chi.vercel.app/#/Login");
      this.login = [];
    },
    AbrirModalPop() {
      this.ModalpopUp = !this.ModalpopUp;
    },
    handleResize() {
      if (window.innerWidth <= 800) {
        this.menuDesktop = false;
        this.menuMobile = true;
        this.leftDrawerOpen = false;
      }
      if (window.innerWidth >= 800) {
        this.menuDesktop = true;
        this.menuMobile = false;
        this.leftDrawerOpen = false;
      }
    },
  },
  created() {
    let login = JSON.parse(localStorage.getItem("login"));
    for (let i = 0; i < login.aplicativos.length; i++) {
      let rotas = login.aplicativos[i].recursos;
      this.liberacaoRotas(rotas);
      break;
    }
    this.nomeUsuario = login.usuario;
    this.imgColaborador = login.img;
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
});
</script>

<style scoped>
.logo-texto {
  font-size: 22px;
}
.tela-popup {
  max-width: 380px;
  padding: 0px 10px 15px 10px;
  position: absolute;
  z-index: 1;
  right: 1%;
  margin-left: -50px;
  top: 90%;
  box-shadow: 0 0 1em rgb(165, 165, 165);
}
@media (max-width: 500px) {
  .logo-texto {
    font-size: 17px;
  }
}
</style>
