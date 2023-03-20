<template>
  <div class="mt-32 sm:ml-24 sm:mr-24  bg-black">
    <div class="-mb-16 h-screen">
      <h1 class="mb-7 ml-6 text-4xl font-bold tracking-tight sm:ml-0 sm:text-7xl">Burning Boy</h1>
      <div class="h-4/6 bg-blue-400 sm:h-4/6">
        <img class="h-full w-full object-cover object-left-top" src="/image/Bb/Color.jpg" alt="Burning Boy Tee" />
      </div>
      <div class="flex justify-between">
        <div class="animate__animated animate__fadeIn p-4 text-sm">
          <p>BURNING BOY - FRINGZ 06/2022</p>
        </div>
        <div class="p-4 text-sm">
          <p class="animate__animated animate__fadeIn text-center">Creation of a brand image</p>
        </div>
        <div class="p-4 text-sm">
          <p class="animate__animated animate__fadeIn text-right">VISUAL TEXTILE + ART DIRECTION + COMMUNICATION</p>
        </div>
      </div>
    </div>

    <!--VERSION MOBILE -->
    <div class="block sm:hidden">
      <h2 class="reveal ml-6 text-7xl font-bold tracking-tight sm:text-9xl">Expand the vision..</h2>
      <div class="flex flex-col items-center">
        <div class="mt-3 w-9/12">
          <img class="object-cover" src="/image/Bb/Bbvisu.png" alt="Burning Boy Tee" @click="showOverlay(1)" />
          <div class="overlay bg-black bg-opacity-95" v-if="overlayShown1">
            <img class="object-contain" :src="overlayImageSrc1" @click="hideOverlay" />
            <p class="text-sm uppercase" @click="hideOverlay">(Click to close)</p>
          </div>
        </div>
        <div class="flex w-11/12 flex-col justify-between">
          <p class="reveal mt-6 text-justify text-xs transition-opacity duration-500">
            Burning Boy is a textile project that I initiated with the goal of extending my vision and creativity to other media than
            digital artwork. The basic concept was to create a small line of clothing with a strong theme around which to communicate. The
            inspiration came from the creation itself and the theme of the collection was the "flame" of passion that burns within each of
            us and that just wants to come out. This representation of the flame was made around a character as an emblem: the Burning Boy.
            To be a "Burning Boy" is to let this flame come out and to realize your desires, to fulfill your passions.
          </p>
        </div>
      </div>
    </div>

    <!--VERSION Tablette -->
    <div class="hidden sm:block lg:hidden">
      <div class="flex gap-5">
        <div class="w-2/3 lg:w-1/2">
          <img class="object-cover lg:w-3/4" src="/image/Bb/Bbvisu.png" alt="Burning Boy Tee" @click="showOverlay(1)" />
          <div class="overlay bg-black bg-opacity-95" v-if="overlayShown1">
            <img class="w-1/2 object-contain" :src="overlayImageSrc1" @click="hideOverlay" />
            <p class="text-sm uppercase" @click="hideOverlay">(Click to close)</p>
          </div>
        </div>
        <div class="flex w-1/3 flex-col justify-between lg:w-1/2">
          <p class="reveal mt-6 text-justify text-xs opacity-100 duration-1000 lg:transition-opacity">
            Burning Boy is a textile project that I initiated with the goal of extending my vision and creativity to other media than
            digital artwork. The basic concept was to create a small line of clothing with a strong theme around which to communicate. The
            inspiration came from the creation itself and the theme of the collection was the "flame" of passion that burns within each of
            us and that just wants to come out. This representation of the flame was made around a character as an emblem: the Burning Boy.
          </p>
          <h2 class="reveal cursor-pointer text-6xl font-bold tracking-tight">Expand the vision..</h2>
        </div>
      </div>
    </div>

    <!--VERSION PC -->
    <div class="hidden lg:block">
      <div class="flex gap-5">
        <div class="w-2/3 lg:w-1/2">
          <img class="object-cover lg:w-3/4" src="/image/Bb/Bbvisu.png" alt="Burning Boy Tee" @click="showOverlay(1)" />
          <div class="overlay bg-black bg-opacity-95" v-if="overlayShown1">
            <img class="w-1/2 object-contain" :src="overlayImageSrc1" @click="hideOverlay" />
            <p class="text-sm uppercase" @click="hideOverlay">(Click to close)</p>
          </div>
        </div>
        <div class="gap- flex w-1/3 flex-col justify-between gap-0 lg:w-1/2">
          <p class="duration-800 mt-6 text-justify text-xs opacity-100 transition-opacity lg:opacity-0" :id="descriptionId">
            Burning Boy is a textile project that I initiated with the goal of extending my vision and creativity to other media than
            digital artwork. The basic concept was to create a small line of clothing with a strong theme around which to communicate. The
            inspiration came from the creation itself and the theme of the collection was the "flame" of passion that burns within each of
            us and that just wants to come out. This representation of the flame was made around a character as an emblem: the Burning Boy.
            To be a "Burning Boy" is to let this flame come out and to realize your desires, to fulfill your passions.
          </p>
          <h2
            class="reveal animate-pulse cursor-pointer text-5xl font-bold tracking-tight opacity-0 hover:animate-none lg:text-8xl"
            @click="toggleDescription"
            @mouseover="showDescription"
            @mouseout="hideDescription"
          >
            Expand the vision..
          </h2>
          <p class="text-xs uppercase">( Move the mouse over the titles to learn more )</p>
        </div>
      </div>
    </div>

    <!--VERSION MOBILE -->
    <div class="block lg:hidden">
      <div class="mt-24 flex flex-col">
        <div class="flex w-full flex-row-reverse items-center gap-6">
          <img class="h-52 w-1/2 object-cover" src="/image/Bb/Mockup.png" alt="Burning Boy Tee" @click="showOverlay(2)" />
          <div class="overlay bg-black bg-opacity-95" v-if="overlayShown2">
            <img class="object-contain sm:w-1/2" :src="overlayImageSrc2" @click="hideOverlay" />
            <p class="text-sm uppercase" @click="hideOverlay">(Click to close)</p>
          </div>
          <p class="reveal mt-6 w-1/2 px-3 text-justify text-xs duration-500">
            The visual had to have a concept that speaks to people, the character in flame was then translated on textiles with a drop of
            two black and white tee shirt and stickers. The whole was accompanied by video communicating the values of the Burning Boys and
            photos of products.
          </p>
        </div>
        <div class="flex w-full flex-row-reverse items-end gap-6">
          <h2 class="reveal w-1/2 cursor-pointer text-3xl font-bold tracking-tight sm:text-7xl">Concept.</h2>
          <img class="h-52 w-1/2 object-cover object-center" src="/image/Bb/motion.gif" alt="Burning Boy Tee" @click="showOverlay(3)" />
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
          <img class="h-52 w-1/2 object-cover object-top" src="/image/Bb/Mockup.png" alt="Burning Boy Tee" @click="showOverlay(2)" />
          <div class="overlay bg-black bg-opacity-95" v-if="overlayShown2">
            <img class="w-1/2 object-contain" :src="overlayImageSrc2" @click="hideOverlay" />
            <p class="text-sm uppercase" @click="hideOverlay">(Click to close)</p>
          </div>
          <p class="duration-800 mt-6 w-1/2 pr-52 pl-9 text-justify text-xs opacity-0 transition-opacity" :id="descriptionId2">
            The visual had to have a concept that speaks to people, the character in flame was then translated on textiles with a drop of
            two black and white tee shirt and stickers. The whole was accompanied by video communicating the values of the Burning Boys and
            photos of products.
          </p>
        </div>
        <div class="flex w-full flex-row-reverse items-end gap-6">
          <h2
            class="reveal w-1/2 animate-pulse cursor-pointer text-3xl font-bold tracking-tight opacity-0 hover:animate-none sm:text-7xl"
            @click="toggleDescription"
            @mouseover="showDescription"
            @mouseout="hideDescription"
          >
            Concept.
          </h2>
          <img class="h-52 w-1/2 object-cover object-center pr-32" src="/image/Bb/motion.gif" alt="Burning Boy Tee" @click="showOverlay(3)" />
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
          <h2 class="reveal h-1/3 pt-7 text-4xl font-bold tracking-tight sm:text-6xl">Project extensions.</h2>
          <img class="mb-6 w-full object-cover" src="/image/Bb/Bbtee.jpg" alt="Burning Boy Tee" @click="showOverlay(5)" />
          <div class="overlay bg-black bg-opacity-95" v-if="overlayShown5">
            <img class="object-contain sm:w-1/2" :src="overlayImageSrc5" @click="hideOverlay" />
            <p class="text-sm uppercase" @click="hideOverlay">(Click to close)</p>
          </div>
          <p class="reveal w-full text-justify text-xs duration-500">
            To push the concept even further, a contest was organized for the owners of Burning Boy products to push the creative flame
            theme.
          </p>
        </div>
        <div class="w-1/2 pl-4">
          <img class="mb-6 w-full object-cover" src="/image/Bb/Color.jpg" alt="Burning Boy Tee" @click="showOverlay(4)" />
          <div class="overlay bg-black bg-opacity-95" v-if="overlayShown4">
            <img class="object-contain sm:w-1/2" :src="overlayImageSrc4" @click="hideOverlay" />
            <p class="text-sm uppercase" @click="hideOverlay">(Click to close)</p>
          </div>
          <p class="reveal w-full text-justify text-xs duration-500">
            Each person in possession of an item had the opportunity to submit creative content (of any kind) and the winner walked away
            with a canvas of the original Bunring Boy illustration.
          </p>
          <img class="mt-6 mb-6 w-full object-cover" src="/image/Bb/Mockuplogo.png" alt="Burning Boy Tee" @click="showOverlay(6)" />
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
          <img class="h-60 w-1/3 object-cover" src="/image/Bb/Color.jpg" alt="Burning Boy Tee" @click="showOverlay(4)" />
          <div class="overlay bg-black bg-opacity-95" v-if="overlayShown4">
            <img class="w-1/2 object-contain" :src="overlayImageSrc4" @click="hideOverlay" />
            <p class="text-sm uppercase" @click="hideOverlay">(Click to close)</p>
          </div>
          <p class="duration-800 mt-6 w-1/3 px-12 pl-9 text-justify text-xs opacity-0 transition-opacity" :id="descriptionId3">
            To push the concept even further, a contest was organized for the owners of Burning Boy products to push the creative flame
            theme.
          </p>
          <img class="h-60 w-1/3 object-cover object-top" src="/image/Bb/Bbtee.jpg" alt="Burning Boy Tee" @click="showOverlay(5)" />
          <div class="overlay bg-black bg-opacity-95" v-if="overlayShown5">
            <img class="w-1/2 object-contain" :src="overlayImageSrc5" @click="hideOverlay" />
            <p class="text-sm uppercase" @click="hideOverlay">(Click to close)</p>
          </div>
        </div>
        <div class="flex w-full flex-row-reverse items-end">
          <p class="duration-800 w-1/3 pl-9 pb-6 pr-20 text-justify text-xs opacity-0 transition-opacity" :id="descriptionId4">
            Each person in possession of an item had the opportunity to submit creative content (of any kind) and the winner walked away
            with a canvas of the original Bunring Boy illustration.
          </p>
          <img class="h-60 w-1/3 object-cover object-center" src="/image/Bb/Mockuplogo.png" alt="Burning Boy Tee" @click="showOverlay(6)" />
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
            Project extensions.
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
      return this.overlayShown1 ? "/image/Bb/Bbvisu.png" : "/image/Bb/Bbvisu.png";
    },
    overlayImageSrc2() {
      return this.overlayShown2 ? "/image/Bb/Mockup.png" : "/image/Bb/Mockup.png";
    },
    overlayImageSrc3() {
      return this.overlayShown3 ? "/image/Bb/motion.gif" : "/image/Bb/motion.gif";
    },
    overlayImageSrc4() {
      return this.overlayShown4 ? "/image/Bb/Color.jpg" : "/image/Bb/Color.jpg";
    },
    overlayImageSrc5() {
      return this.overlayShown5 ? "/image/Bb/Bbtee.jpg" : "/image/Bb/Bbtee.jpg";
    },
    overlayImageSrc6() {
      return this.overlayShown6 ? "/image/Bb/Mockuplogo.png" : "/image/Bb/Mockuplogo.png";
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

