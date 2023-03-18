<template class="container h-screen overflow-hidden ">
  <main>
    <div class="pt-36">
      <span class="sr-only">Accueil</span>

      <div class="mx-12 hidden justify-between pt-32 text-sm uppercase lg:flex">
        <p>Matthieu Hoareau | Fringz</p>
        <p>Digital Designer</p>
        <p>Visual Porduction</p>
        <p>Brand Identity</p>
      </div>

      <div class="absolute bottom-16 flex w-full flex-col gap-2 pl-10 pr-10 lg:bottom-2 lg:mt-32 lg:flex-row">
        <h1 class="lg:hidden">Matthieu Hoareau | Fringz</h1>
        <!-- DIV 1 -->
        <div class="boxcontainer lg:w-10/12">
          <img class="h-full w-full" src="/image/Bleu/video.gif" alt="" />
          <div class="banner">
            <h1 class="text-8xl font-bold leading-none lg:text-max">PORT FOLIO</h1>
          </div>
          <!--  <video autoplay loop muted><source src="/image/Bleu/bleu.mp4" type="video/mp4" /></video>
          <div class="banner">
            <h1 class="text-8xl font-bold leading-none lg:text-max">PORT FOLIO</h1>
          </div>-->
        </div>

        <!------------------------------------------------------------------------------------------------------------------------->
        <!-- DIV 3 (cachée) -->

        <div class="flex justify-between text-xs lg:hidden">
          <p>Designer Digital</p>
          <p>Visual Production</p>
          <p>Visual Identity</p>
        </div>

        <!------------------------------------------------------------------------------------------------------------------------->

        <!-- DIV 2 -->
        <div class="grid-col-3 grid h-fit w-full gap-8 text-center uppercase lg:my-auto lg:w-2/3">
          <Bouton class="col-span-2 col-start-2 list-none text-xs sm:text-xl" id="button1">
            <li>
              <router-link to="/artdirection">--> Art Direction</router-link>
            </li>
          </Bouton>
          <Bouton class="col-span-2 list-none text-xs sm:text-xl">
            <li>
              <router-link to="/illu">--> Illustration Work</router-link>
            </li>
          </Bouton>
          <Bouton class="col-span-2 col-start-2 list-none text-xs sm:text-xl" id="button2">
            <li>
              <router-link to="/scolaire">--> School Project</router-link>
            </li>
          </Bouton>

          <Bouton class="col-span-2 list-none text-xs sm:text-xl">
            <li>
              <router-link to="/artiste">--> Travaux</router-link>
            </li>
          </Bouton>
        </div>
        <!------------------------------------------------------------------------------------------------------------------------->
      </div>
    </div>
    <router-link to="/mentions"> <p class="absolute bottom-0 right-0 p-4">Legal notices</p></router-link>
  </main>
</template>

<script>
import IconLogo from "../components/icons/IconLogo.vue";
import Bouton from "../components/icons/Bouton.vue";
export default {
  components: { IconLogo, Bouton },
};
</script>

