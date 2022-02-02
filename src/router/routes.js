const routes = [
  /*{
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        name: "dashboard",
        component: () => import("src/pages/DashboardPrincipal.vue"),
      },
    ],
  },*/
  {
    path: "/login",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      { path: "", name: "login", component: () => import("pages/Login.vue") },
    ],
  },

  {
    path: "/notificacao",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "notificacao",
        component: () => import("src/pages/DashboardNotificacao.vue"),
      },
    ],
  },
  {
    path: "/producao",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/producao",
        name: "producao",
        component: () => import("src/pages/DashboardProducao.vue"),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
