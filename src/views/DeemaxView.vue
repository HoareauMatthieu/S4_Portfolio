<template>
  <div class="w-full pt-28">
    <img src="/image/Cap/Cover.jpg" alt="" class="object-cover" @click="showImageOverlay('/image/Cap/Cover.jpg')" />
  </div>
  <div id="image-overlay" @click="hideImageOverlay()">
    <img id="overlay-image" :src="overlayImageSrc" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      overlayImageSrc: "",
      overlayVisible: false,
    };
  },
  methods: {
    showImageOverlay(imageSrc) {
      this.overlayImageSrc = imageSrc;
      this.overlayVisible = true;
    },
    hideImageOverlay() {
      this.overlayVisible = false;
    },
  },
};
</script>

<style scoped>
#image-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 9999;
}

#overlay-image {
  max-width: 90%;
  max-height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

