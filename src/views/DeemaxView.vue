<template>
  <div class="relative w-full pt-56">
    <img src="/image/Cap/Cover.jpg" alt="" class="h-44 w-full object-cover" />
    <div class="overlay absolute inset-0 hidden">
      <img src="/image/Cap/Cover-full.jpg" alt="" class="h-full w-full object-contain" />
    </div>
  </div>
</template>

<style>
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.2s ease-in-out;
  opacity: 0;
}

.overlay img {
  max-width: 80%;
  max-height: 80%;
}

.overlay:hover {
  opacity: 1;
}
</style>

