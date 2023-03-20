<template >
  <div class="bg-black">
    <header>
      <header-app class="z-50"></header-app>
    </header>
    <router-view class="z-10"></router-view>
    <footer :class="{ hidden: $route.name === 'Accueil' || $route.name === 'Apropos' || $route.name === 'Contact' }">
      <footer-app></footer-app>
    </footer>
  </div>
</template>

<script>
import HeaderApp from "./components/HeaderApp.vue";
import FooterApp from "./components/FooterApp.vue";
export default {
  name: "App",
  components: {
    HeaderApp,
    FooterApp,
  },
};
</script>