<template>
  <div class="tela-login">
    <div class="fundo-syclus" v-show="desktop">
      <img
        src="../assets/syclus_login.png"
        style="
          text-aligth: center;
          margin: 30px auto 0px auto;
          padding: 20px 20px 0px;
        "
      />
      <div style="padding: 0px 20px">
        <h4>Controle todo o seu negócio em uma única plataforma.</h4>
        <p style="font-size: 18px">Gestão empresarial eficiente e completa.</p>
      </div>
    </div>
    <div class="fundo-syclus bg-blue-10">
      <q-form @submit="Logar">
        <div
          style="width: 70%; margin: 170px auto; color: #fff"
          v-if="desktop === true"
        >
          <div>
            <h4>Login</h4>
          </div>
          <q-input
            dark
            v-model="vlogin"
            dense
            color="grey-3"
            label-color="grey-3"
            label="Login"
            :rules="[(val) => (val && val.length > 0) || 'Preencha o campo!']"
          />
          <q-input
            dark
            v-model="password"
            dense
            color="grey-3"
            label-color="grey-3"
            label="Password"
            :type="isPwd ? 'password' : 'text'"
            :rules="[
              (val) => (val !== null && val !== '') || 'Preencha o campo!',
            ]"
          >
            <template v-slot:append>
              <q-icon
                color="grey-3"
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <div>
            <q-btn
              color="primary full-width capitalize"
              label="Logar"
              type="submit"
              style="padding: 8px 0"
              dense
              rounded
            />
          </div>
        </div>
        <div
          style="
            width: 70%;
            margin: 170px auto;
            color: #fff;
            padding: 20px;
            border-radius: 8px;
          "
          class="bg-grey-1"
          v-if="desktop === false"
        >
          <div>
            <img
              src="../assets/syclus_mobile.png"
              style="text-aligth: center; margin: 0 auto; padding: 5px 0px 0px"
            />
          </div>
          <q-input
            v-model="vlogin"
            dense
            color="grey-9"
            label-color="grey-9"
            label="Login"
            :rules="[(val) => (val && val.length > 0) || 'Preencha o campo!']"
          />
          <q-input
            v-model="password"
            dense
            color="grey-9"
            label-color="grey-9"
            label="Password"
            :type="isPwd ? 'password' : 'text'"
            :rules="[
              (val) => (val !== null && val !== '') || 'Preencha o campo!',
            ]"
          >
            <template v-slot:append>
              <q-icon
                color="grey-9"
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <div>
            <q-btn
              color="primary full-width capitalize"
              label="Logar"
              type="submit"
              style="padding: 8px 0"
              dense
              rounded
              unelevated
            />
          </div>
        </div>
      </q-form>
    </div>
  </div>
</template>
<script>
import { senhaLogin } from "../commands/layouts/layoutColaborador";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      vlogin: "",
      password: "",
      isPwd: true,
      desktop: true,
    };
  },
  methods: {
    Logar() {
      let objSenhaLogin = senhaLogin();
      for (let i = 0; i < objSenhaLogin.login.length; i++) {
        var login = this.vlogin.toLowerCase();
        var password = this.password.toLowerCase();
        if (
          objSenhaLogin.login[i].usuario === login &&
          objSenhaLogin.login[i].senha === password
        ) {
          this.login = objSenhaLogin.login[i];
          localStorage.setItem("login", JSON.stringify(this.login));
          if (this.login) {
            this.confirmacaoLogin();
            this.$q.notify({
              color: "green-7",
              textColor: "white",
              message: "Seja Bem vindo!",
            });
            breack;
          }
        }
      }
      for (let i = 0; i < objSenhaLogin.login.length; i++) {
        var login = this.vlogin.toLowerCase();
        var password = this.password.toLowerCase();
        if (
          objSenhaLogin.login[i].usuario != login &&
          objSenhaLogin.login[i].senha != password
        ) {
          this.$q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "Login ou Senha não existente!",
          });
        }
      }
    },
    confirmacaoLogin() {
      this.$router.push({ name: "dashboard" });
    },

    handleResize() {
      window.innerWidth;
      if (window.innerWidth <= 827) {
        this.desktop = false;
      }
      if (window.innerWidth >= 827) {
        this.desktop = true;
      }
    },
  },
  setup() {
    const $store = useStore();
    const login = computed({
      get: () => $store.state.showcase.login,
      set: (val) => {
        $store.commit("showcase/autenticacaoLogin", val);
      },
    });
    return {
      login,
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
};
</script>

<style scope>
h4 {
  padding: 0;
  margin: 5px;
}
.tela-login {
  display: flex;
}
.fundo-syclus {
  width: 50%;
  height: 100vh;
  padding-top: 20px;
  margin: 0 auto;
  text-align: center;
}
@media only screen and (max-width: 827px) {
  .fundo-syclus {
    width: 100vh;
  }
}
</style>
