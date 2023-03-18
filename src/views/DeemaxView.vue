<template>
  <div class="h-4/6 bg-blue-400 sm:h-4/6">
    <img class="h-1/3 w-full object-cover" src="/image/Cap/Cover.jpg" alt="Deemax" @click="showOverlay(1)" />
    <div class="overlay" v-if="overlayShown1">
      <img class="object-contain" :src="overlayImageSrc1" @click="hideOverlay" />
    </div>
    <img class="h-1/3 w-full object-cover" src="/image/Cap/DEEM.jpg" alt="Deemax" @click="showOverlay(2)" />
    <div class="overlay" v-if="overlayShown2">
      <img class="object-contain" :src="overlayImageSrc2" @click="hideOverlay" />
    </div>
    <img class="h-1/3 w-full object-cover" src="/image/Cap/DEEV8.jpg" alt="Deemax" @click="showOverlay(3)" />
    <div class="overlay" v-if="overlayShown3">
      <img class="object-contain" :src="overlayImageSrc3" @click="hideOverlay" />
    </div>
  </div>
</template>

<style>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
</style>

<script>
export default {
  data() {
    return {
      overlayShown1: false,
      overlayShown2: false,
      overlayShown3: false,
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
      }
    },
    hideOverlay() {
      this.overlayShown1 = false;
      this.overlayShown2 = false;
      this.overlayShown3 = false;
    },
  },
  computed: {
    overlayImageSrc1() {
      return this.overlayShown1 ? "/image/Cap/Cover.jpg" : "";
    },
    overlayImageSrc2() {
      return this.overlayShown2 ? "/image/Cap/DEEM.jpg" : "";
    },
    overlayImageSrc3() {
      return this.overlayShown3 ? "/image/Cap/DEEV8.jpg" : "";
    },
  },
};
</script>


