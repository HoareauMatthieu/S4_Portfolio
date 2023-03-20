<template class="container h-screen overflow-hidden ">
  <div class="hidden lg:block">
    <div class="flex flex-col gap-6">
      <h1 class="duration-800 mt-48 text-center text-7xl font-bold opacity-100 transition-opacity lg:opacity-0" :id="descriptionId">
        CONTACT ME FOR YOUR PROJECT
      </h1>
      <p class="duration-800 mx-auto w-1/2 text-center text-xs opacity-100 transition-opacity lg:opacity-0" :id="descriptionId2">
        For all your visual projects ( Art direction, Animation, visual creation, print...) do not hesitate to contact me. I would be very
        happy that we collaborate together!
      </p>
      <bouton class="mx-auto w-1/2 text-2xl" @click="toggleDescription" @mouseover="showDescription" @mouseout="hideDescription">
        <a href="mailto:7fringz@gmail.com">CONTACT ME</a>
      </bouton>
      <div
        class="duration-800 mx-auto grid w-2/3 grid-cols-2 grid-rows-2 gap-4 text-center opacity-100 transition-opacity md:grid-cols-4 lg:opacity-0"
        :id="descriptionId3"
      >
        <img src="/image/Bleu/Cover.jpg" alt="Image 1" class="h-full w-full object-cover" />
        <img src="/image/FL/FL.jpg" alt="Image 2" class="h-full w-full object-cover" />
        <img src="/image/Bb/Bbvisu.png" alt="Image 3" class="h-full w-full object-cover" />
        <img src="/image/Np/mockup2.jpg" alt="Image 4" class="h-full w-full object-cover" />
      </div>
    </div>
  </div>

  <!--MOBIL-->
  <div class="lg:hidden">
    <div class="flex flex-col gap-6">
      <h1 class="duration-800 mt-48 text-center text-xl font-bold opacity-100 transition-opacity lg:opacity-0">
        CONTACT ME FOR YOUR PROJECT
      </h1>
      <p class="mx-auto w-10/12 text-center text-xs">
        For all your visual projects ( Art direction, Animation, visual creation, print...) do not hesitate to contact me. I would be very
        happy that we collaborate together!
      </p>
      <bouton class="mx-auto w-1/2 animate-pulse text-xl">
        <a href="mailto:7fringz@gmail.com">CONTACT ME</a>
      </bouton>
      <div
        class="duration-800 mx-auto grid w-2/3 grid-cols-2 grid-rows-2 gap-4 text-center opacity-100 transition-opacity md:grid-cols-4 lg:opacity-0"
      >
        <img src="/image/Bleu/Cover.jpg" alt="Image 1" class="h-full w-full object-cover" />
        <img src="/image/FL/FL.jpg" alt="Image 2" class="h-full w-full object-cover" />
        <img src="/image/Bb/Bbvisu.png" alt="Image 3" class="h-full w-full object-cover" />
        <img src="/image/Np/mockup2.jpg" alt="Image 4" class="h-full w-full object-cover" />
      </div>
    </div>
  </div>
  <p class="absolute top-28 right-4 animate-pulse p-4 text-base underline lg:text-2xl">
    <a href="https://www.instagram.com/7fringz/">Instagram</a>
  </p>
  <p class="absolute top-36 right-4 animate-pulse p-4 text-base underline lg:text-2xl"><a href="https://twitter.com/7Fringz">Twitter</a></p>
  <p class="absolute bottom-0 right-0 p-4">Legal notices</p>
  <router-link to="/mentions"> <p class="absolute bottom-0 right-0 p-4">Legal notices</p></router-link>
</template>


<script>
import IconLogo from "../components/icons/IconLogo.vue";
import Bouton from "../components/icons/Bouton.vue";
export default {
  components: { IconLogo, Bouton },
  name: "MyComponent",
  components: { Bouton },
  data() {
    return {
      descriptionId: "description-" + Math.random().toString(36).substring(7),
      descriptionId2: "description-" + Math.random().toString(36).substring(7),
      descriptionId3: "description-" + Math.random().toString(36).substring(7),
      descriptionId4: "description-" + Math.random().toString(36).substring(7),
      descriptionVisible: false,
    };
  },
  methods: {
    toggleDescription() {
      this.descriptionVisible = !this.descriptionVisible;
    },
    showDescription() {
      if (!this.descriptionVisible) {
        const description = document.getElementById(this.descriptionId);
        if (description) {
          description.style.opacity = "1";
        }
      }
      if (!this.descriptionVisible) {
        const description = document.getElementById(this.descriptionId2);
        if (description) {
          description.style.opacity = "1";
        }
      }
      if (!this.descriptionVisible) {
        const description = document.getElementById(this.descriptionId3);
        if (description) {
          description.style.opacity = "1";
        }
      }
      if (!this.descriptionVisible) {
        const description = document.getElementById(this.descriptionId4);
        if (description) {
          description.style.opacity = "1";
        }
      }
    },
    hideDescription() {
      if (!this.descriptionVisible) {
        const description = document.getElementById(this.descriptionId);
        if (description) {
          description.style.opacity = "0";
        }
      }
      if (!this.descriptionVisible) {
        const description = document.getElementById(this.descriptionId2);
        if (description) {
          description.style.opacity = "0";
        }
      }
      if (!this.descriptionVisible) {
        const description = document.getElementById(this.descriptionId3);
        if (description) {
          description.style.opacity = "0";
        }
      }
      if (!this.descriptionVisible) {
        const description = document.getElementById(this.descriptionId4);
        if (description) {
          description.style.opacity = "0";
        }
      }
    },
    reveal() {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    },
  },

  mounted() {
    window.addEventListener("scroll", this.reveal);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.reveal);
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin-top: 60px;
}
#description {
  display: none;
}

.overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
</style>



