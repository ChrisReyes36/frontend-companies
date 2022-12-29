export default {
  name: "companies",
  component: () =>
    import(
      /* webpackChunkName: "index" */ "@/modules/companies/layout/CompaniesLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "companies.index",
      component: () =>
        import(
          /* webpackChunkName: "index" */ "@/modules/companies/views/CompaniesIndex.vue"
        ),
    },
    {
      path: "create",
      name: "companies.create",
      component: () =>
        import(
          /* webpackChunkName: "create" */ "@/modules/companies/views/CompaniesCreate.vue"
        ),
    },
    {
      path: ":id/edit",
      name: "companies.edit",
      component: () =>
        import(
          /* webpackChunkName: "update" */ "@/modules/companies/views/CompaniesEdit.vue"
        ),
      props: (route) => ({
        id: route.params.id,
      }),
    },
  ],
};
