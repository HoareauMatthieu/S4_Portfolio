<template class="container h-screen overflow-hidden 0">
  <main>
    <div class="mt-56">
      <img src="/image/Fringz/Propos.gif" alt="Description de l'image" class="mr-auto ml-auto h-auto w-72 object-cover" />
      <h1 class="mt-4 text-center text-2xl font-bold uppercase tracking-tight">Fringz</h1>
      <p class="mx-auto w-11/12 pt-3 text-center text-xs font-bold sm:w-6/12 lg:w-5/12">MATTHIEU HOAREAU</p>
      <p class="mx-auto w-11/12 pt-3 text-center text-sm sm:w-6/12 lg:w-5/12">
        I am a 19 years old French artist working on different media for different industries (corporation, music industry ...). Do not
        hesitate to contact me for your project
      </p>
      <p class="pt-3 text-center text-xs">“The one thing the world can never have enough of is exaggeration.”</p>
      <p class="text-center text-xs">Salvador Dali</p>
    </div>

    <p class="absolute top-28 right-4 animate-pulse p-4 text-2xl underline"><a href="https://www.instagram.com/7fringz/">Instagram</a></p>
    <p class="absolute top-36 right-4 animate-pulse p-4 text-2xl underline"><a href="https://twitter.com/7Fringz">Twitter</a></p>

    <p class="absolute bottom-0 left-4 p-4">PORTFOLIO FRINGZ</p>
  </main>
  <router-link to="/mentions"> <p class="absolute bottom-0 right-0 p-4">Legal notices</p></router-link>
</template>

<script>
import IconLogo from "../components/icons/IconLogo.vue";
import Bouton from "../components/icons/Bouton.vue";
export default {
  components: { IconLogo, Bouton },
};
</script>