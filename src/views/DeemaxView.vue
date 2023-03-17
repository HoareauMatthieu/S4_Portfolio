<template>
  <img src="/image/Cap/Cover.jpg" alt="" />
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

