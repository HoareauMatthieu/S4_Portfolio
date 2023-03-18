<template>
  <div class="mt-32 sm:ml-24 sm:mr-24">
    <div class="-mb-16 h-screen">
      <h1 class="mb-7 ml-6 text-4xl font-bold tracking-tight sm:ml-0 sm:text-7xl">Moment + 1000</h1>
      <div class="h-4/6 bg-blue-400 sm:h-4/6">
        <img class="h-full w-full object-cover" src="/image/Deemax/Cover.jpg" alt="Moments + 1000 Album" />
      </div>
      <div class="flex justify-between">
        <div class="animate__animated animate__fadeIn p-4 text-sm">
          <p>Moment + 1000 - Deemax & Poivre Blanc</p>
        </div>

        <div class="p-4 text-sm">
          <p class="animate__animated animate__fadeIn text-right">12/2022</p>
        </div>
      </div>
    </div>

    <!--VERSION MOBILE -->
    <div class="block sm:hidden">
      <h2 class="reveal ml-6 text-7xl font-bold tracking-tight sm:text-9xl">In the abyss.</h2>
      <div class="flex flex-col items-center">
        <div class="mt-3 w-9/12">
          <img class="object-cover" src="/image/Deemax/Cover.jpg" alt="Moments + 1000 Album" @click="showOverlay(1)" />
          <div class="overlay bg-black bg-opacity-95" v-if="overlayShown1">
            <img class="object-contain" :src="overlayImageSrc1" @click="hideOverlay" />
            <p class="text-sm uppercase" @click="hideOverlay">(Click to close)</p>
          </div>
        </div>
        <div class="flex w-11/12 flex-col justify-between">
          <p class="reveal mt-6 text-justify text-xs transition-opacity duration-500">
            I had the opportunity to create the visuals for the double single of the rapper DeeMax in collaboration with his beatmaker
            Poivre Blanc. The main goal of this illustration was to represent the main theme of the project, through the psychological state
            of the man who is trapped in the abyss. To do so, I used a visual metaphor of the man immersed in the depths of the ocean, which
            symbolizes his emotional depth and isolation.To create this deep, dark atmosphere, I used dull colors to represent the depth of
            the water and the darkness of the environment.
          </p>
        </div>
      </div>
    </div>

    <!--VERSION Tablette -->
    <div class="hidden sm:block lg:hidden">
      <div class="flex gap-5">
        <div class="w-2/3 lg:w-1/2">
          <img class="object-cover lg:w-3/4" src="/image/Deemax/Cover.jpg" alt="Moments + 1000 Album" @click="showOverlay(1)" />
          <div class="overlay bg-black bg-opacity-95" v-if="overlayShown1">
            <img class="w-1/2 object-contain" :src="overlayImageSrc1" @click="hideOverlay" />
            <p class="text-sm uppercase" @click="hideOverlay">(Click to close)</p>
          </div>
        </div>
        <div class="flex w-1/3 flex-col justify-between lg:w-1/2">
          <p class="reveal mt-6 text-justify text-xs opacity-100 duration-1000 lg:transition-opacity">
            I had the opportunity to create the visuals for the double single of the rapper DeeMax in collaboration with his beatmaker
            Poivre Blanc. The main goal of this illustration was to represent the main theme of the project, through the psychological state
            of the man who is trapped in the abyss. To do so, I used a visual metaphor of the man immersed in the depths of the ocean, which
            symbolizes his emotional depth and isolation.
          </p>
          <h2 class="reveal cursor-pointer text-6xl font-bold tracking-tight">In the abyss.</h2>
        </div>
      </div>
    </div>

    <!--VERSION PC -->
    <div class="hidden lg:block">
      <div class="flex gap-5">
        <div class="w-2/3 lg:w-1/2">
          <img class="object-cover lg:w-3/4" src="/image/Deemax/Cover.jpg" alt="Moments + 1000 Album" @click="showOverlay(1)" />
          <div class="overlay bg-black bg-opacity-95" v-if="overlayShown1">
            <img class="w-1/2 object-contain" :src="overlayImageSrc1" @click="hideOverlay" />
            <p class="text-sm uppercase" @click="hideOverlay">(Click to close)</p>
          </div>
        </div>
        <div class="gap- flex w-1/3 flex-col justify-between gap-0 lg:w-1/2">
          <p class="duration-800 mt-6 text-justify text-xs opacity-100 transition-opacity lg:opacity-0" :id="descriptionId">
            I had the opportunity to create the visuals for the double single of the rapper DeeMax in collaboration with his beatmaker
            Poivre Blanc. The main goal of this illustration was to represent the main theme of the project, through the psychological state
            of the man who is trapped in the abyss. To do so, I used a visual metaphor of the man immersed in the depths of the ocean, which
            symbolizes his emotional depth and isolation.To create this deep, dark atmosphere, I used dull colors to represent the depth of
            the water and the darkness of the environment.
          </p>
          <h2
            class="reveal animate-pulse cursor-pointer text-5xl font-bold tracking-tight opacity-0 hover:animate-none lg:text-9xl"
            @click="toggleDescription"
            @mouseover="showDescription"
            @mouseout="hideDescription"
          >
            In the abyss.
          </h2>
          <p class="text-xs uppercase">( Move the mouse over the titles to learn more )</p>
        </div>
      </div>
    </div>

    <!--VERSION MOBILE -->
    <div class="block lg:hidden">
      <div class="mt-24 flex flex-col">
        <div class="flex w-full flex-row-reverse items-center gap-6">
          <img class="h-52 w-1/2 object-cover" src="/image/Deemax/deemman.png" alt="Moments + 1000 Album" @click="showOverlay(2)" />
          <div class="overlay bg-black bg-opacity-95" v-if="overlayShown2">
            <img class="object-contain sm:w-1/2" :src="overlayImageSrc2" @click="hideOverlay" />
            <p class="text-sm uppercase" @click="hideOverlay">(Click to close)</p>
          </div>
          <p class="reveal mt-6 w-1/2 px-3 text-justify text-xs duration-500">
            I also added a touch of white light to represent the surface of the water, which brings brightness to the cover and creates a
            visual contrast with the depth of the ocean. This white light also represents hope, freedom and the outside world, which the
            character will never be able to reach as long as he is trapped in the depths.
          </p>
        </div>
        <div class="flex w-full flex-row-reverse items-end gap-6">
          <h2 class="reveal w-1/2 cursor-pointer text-3xl font-bold tracking-tight sm:text-7xl">Shadow and light.</h2>
          <img class="h-52 w-1/2 object-cover object-center" src="/image/Deemax/deemwip.png" alt="Moments + 1000 Album" @click="showOverlay(3)" />
          <div class="overlay bg-black bg-opacity-95" v-if="overlayShown3">
            <img class="object-contain sm:w-1/2" :src="overlayImageSrc3" @click="hideOverlay" />
            <p class="text-sm uppercase" @click="hideOverlay">(Click to close)</p>
          </div>
        </div>
      </div>
    </div>

    <!--VERSION PC -->
    <div class="hidden lg:block">
      <div class="mt-40 flex flex-col">
        <div class="flex w-full flex-row-reverse items-center gap-6">
          <img class="h-52 w-1/2 object-cover" src="/image/Deemax/deemman.png" alt="Moments + 1000 Album" @click="showOverlay(2)" />
          <div class="overlay bg-black bg-opacity-95" v-if="overlayShown2">
            <img class="w-1/2 object-contain" :src="overlayImageSrc2" @click="hideOverlay" />
            <p class="text-sm uppercase" @click="hideOverlay">(Click to close)</p>
          </div>
          <p class="duration-800 mt-6 w-1/2 pr-52 pl-9 text-justify text-xs opacity-0 transition-opacity" :id="descriptionId2">
            I also added a touch of white light to represent the surface of the water, which brings brightness to the cover and creates a
            visual contrast with the depth of the ocean. This white light also represents hope, freedom and the outside world, which the
            character will never be able to reach as long as he is trapped in the depths.
          </p>
        </div>
        <div class="flex w-full flex-row-reverse items-end gap-6">
          <h2
            class="reveal w-1/2 animate-pulse cursor-pointer text-3xl font-bold tracking-tight opacity-0 hover:animate-none sm:text-7xl"
            @click="toggleDescription"
            @mouseover="showDescription"
            @mouseout="hideDescription"
          >
            Shadow and light.
          </h2>
          <img class="h-52 w-1/2 object-cover object-top pr-32" src="/image/Deemax/deemwip.png" alt="Moments + 1000 Album" @click="showOverlay(3)" />
          <div class="overlay bg-black bg-opacity-95" v-if="overlayShown3">
            <img class="w-1/2 object-contain" :src="overlayImageSrc3" @click="hideOverlay" />
            <p class="text-sm uppercase" @click="hideOverlay">(Click to close)</p>
          </div>
        </div>
      </div>
    </div>

    <!--VERSION MOBILE -->
    <div class="mx-auto w-11/12 items-center lg:hidden">
      <div class="mt-28 flex">
        <div class="w-1/2 pr-4">
          <h2 class="reveal h-1/3 pt-7 text-4xl font-bold tracking-tight sm:text-6xl">Metaphor.</h2>
          <img class="mb-6 w-full object-cover" src="/image/Deemax/deemzoom.png" alt="Moments + 1000 Album" @click="showOverlay(5)" />
          <div class="overlay bg-black bg-opacity-95" v-if="overlayShown5">
            <img class="object-contain sm:w-1/2" :src="overlayImageSrc5" @click="hideOverlay" />
            <p class="text-sm uppercase" @click="hideOverlay">(Click to close)</p>
          </div>
          <p class="reveal w-full text-justify text-xs duration-500">
            The viusel of this cover reflects the strong themes of the project, namely isolation, emotional depth and hope.
          </p>
        </div>
        <div class="w-1/2 pl-4">
          <img class="mb-6 w-full object-cover" src="/image/Deemax/deemzoom2.png" alt="Moments + 1000 Album" @click="showOverlay(4)" />
          <div class="overlay bg-black bg-opacity-95" v-if="overlayShown4">
            <img class="object-contain sm:w-1/2" :src="overlayImageSrc4" @click="hideOverlay" />
            <p class="text-sm uppercase" @click="hideOverlay">(Click to close)</p>
          </div>
          <p class="reveal w-full text-justify text-xs duration-500">
            I tried to capture the essence of the musical project by using strong visual symbols, dark colors and contrasting white light to
            bring the story to life and make the emotions of the character metaphorically trapped in the abyss felt.
          </p>
          <img class="mt-6 mb-6 w-full object-cover" src="/image/Deemax/deemman.png" alt="Moments + 1000 Album" @click="showOverlay(6)" />
          <div class="overlay bg-black bg-opacity-95" v-if="overlayShown6">
            <img class="object-contain sm:w-1/2" :src="overlayImageSrc6" @click="hideOverlay" />
            <p class="text-sm uppercase" @click="hideOverlay">(Click to close)</p>
          </div>
        </div>
      </div>
    </div>

    <!--VERSION PC -->
    <div class="hidden lg:block">
      <div class="mt-52 flex flex-col">
        <div class="flex w-full flex-row-reverse items-center gap-0">
          <img class="h-60 w-1/3 object-cover" src="/image/Deemax/deemzoom2.png" alt="Moments + 1000 Album" @click="showOverlay(4)" />
          <div class="overlay bg-black bg-opacity-95" v-if="overlayShown4">
            <img class="w-1/2 object-contain" :src="overlayImageSrc4" @click="hideOverlay" />
            <p class="text-sm uppercase" @click="hideOverlay">(Click to close)</p>
          </div>
          <p class="duration-800 mt-6 w-1/3 px-12 pl-9 text-justify text-xs opacity-0 transition-opacity" :id="descriptionId3">
            The viusel of this cover reflects the strong themes of the project, namely isolation, emotional depth and hope.
          </p>
          <img class="h-60 w-1/3 object-cover object-right-top" src="/image/Deemax/deemzoom.png" alt="Moments + 1000 Album" @click="showOverlay(5)" />
          <div class="overlay bg-black bg-opacity-95" v-if="overlayShown5">
            <img class="w-1/2 object-contain" :src="overlayImageSrc5" @click="hideOverlay" />
            <p class="text-sm uppercase" @click="hideOverlay">(Click to close)</p>
          </div>
        </div>
        <div class="flex w-full flex-row-reverse items-end">
          <p class="duration-800 w-1/3 pl-9 pb-6 pr-20 text-justify text-xs opacity-0 transition-opacity" :id="descriptionId4">
            I tried to capture the essence of the musical project by using strong visual symbols, dark colors and contrasting white light to
            bring the story to life and make the emotions of the character metaphorically trapped in the abyss felt.
          </p>
          <img class="h-60 w-1/3 object-cover object-center" src="/image/Deemax/deemman.png" alt="Moments + 1000 Album" @click="showOverlay(6)" />
          <div class="overlay bg-black bg-opacity-95" v-if="overlayShown6">
            <img class="w-1/2 object-contain" :src="overlayImageSrc6" @click="hideOverlay" />
            <p class="text-sm uppercase" @click="hideOverlay">(Click to close)</p>
          </div>
          <h2
            class="reveal w-1/3 animate-pulse cursor-pointer text-3xl font-bold tracking-tight opacity-0 hover:animate-none sm:text-6xl"
            @click="toggleDescription"
            @mouseover="showDescription"
            @mouseout="hideDescription"
          >
            Metaphor.
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bouton from "../components/icons/Bouton.vue";
export default {
  name: "MyComponent",
  components: { Bouton },
  data() {
    return {
      descriptionId: "description-" + Math.random().toString(36).substring(7),
      descriptionId2: "description-" + Math.random().toString(36).substring(7),
      descriptionId3: "description-" + Math.random().toString(36).substring(7),
      descriptionId4: "description-" + Math.random().toString(36).substring(7),
      descriptionVisible: false,
      overlayShown1: false,
      overlayShown2: false,
      overlayShown3: false,
      overlayShown4: false,
      overlayShown5: false,
      overlayShown6: false,
    };
  },
  methods: {
    showOverlay(index) {
      if (index === 1) {
        this.overlayShown1 = true;
      } else if (index === 2) {
        this.overlayShown2 = true;
      } else if (index === 3) {
        this.overlayShown3 = true;
      } else if (index === 4) {
        this.overlayShown4 = true;
      } else if (index === 5) {
        this.overlayShown5 = true;
      } else if (index === 6) {
        this.overlayShown6 = true;
      }
    },
    hideOverlay() {
      this.overlayShown1 = false;
      this.overlayShown2 = false;
      this.overlayShown3 = false;
      this.overlayShown4 = false;
      this.overlayShown5 = false;
      this.overlayShown6 = false;
    },
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
  computed: {
    overlayImageSrc1() {
      return this.overlayShown1 ? "/image/Deemax/Cover.jpg" : "/image/Deemax/Cover.jpg";
    },
    overlayImageSrc2() {
      return this.overlayShown2 ? "/image/Deemax/deemman.png" : "/image/Deemax/deemman.png";
    },
    overlayImageSrc3() {
      return this.overlayShown3 ? "/image/Deemax/deemwip.png" : "/image/Deemax/deemwip.png";
    },
    overlayImageSrc4() {
      return this.overlayShown4 ? "/image/Deemax/deemzoom2.png" : "/image/Deemax/deemzoom2.png";
    },
    overlayImageSrc5() {
      return this.overlayShown5 ? "/image/Deemax/deemzoom.png" : "/image/Deemax/deemzoom.png";
    },
    overlayImageSrc6() {
      return this.overlayShown6 ? "/image/Deemax/deemman.png" : "/image/Deemax/deemman.png";
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

