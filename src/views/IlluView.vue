 <template>
  <div class="relative flex w-full overflow-hidden pt-16">
    <span class="scrolltxt whitespace-nowrap text-6xl font-semibold uppercase">Art direction Art direction &nbsp;</span>
    <span class="scrolltxt whitespace-nowrap text-6xl font-semibold uppercase">Art direction Art direction &nbsp;</span>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    <div class="relative h-full bg-blue-400 lg:row-span-2">
      <router-link to="/ugb">
        <img src="/image/UGB/UGBFINAL.jpg" alt="" class="h-full w-full object-cover" />
        <div
          class="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100"
        >
          <h2 class="text-center text-xs uppercase text-white">
            Ugly Boy With a Pretty Hearth <br />
            2022
          </h2>
        </div>
      </router-link>
    </div>

    <div class="relative w-full bg-blue-200">
      <router-link to="/fl">
        <img src="/image/FL/FL.jpg" alt="" class="object-cover" />
        <div
          class="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100"
        >
          <h2 class="text-center text-xs uppercase text-white">FEELING LOST IN FIELD <br />2022</h2>
        </div>
      </router-link>
    </div>
    <div class="relative w-full bg-blue-400">
      <router-link to="/moment">
        <img src="/image/Deemax/Cover.jpg" alt="" class="h-full w-full object-cover" />
        <div
          class="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100"
        >
          <h2 class="text-center text-xs uppercase text-white">
            Moments + 1000 <br />
            2022
          </h2>
        </div>
      </router-link>
    </div>

    <div class="relative h-full w-full bg-blue-500 lg:col-span-2 lg:h-64">
      <router-link to="/cs">
        <img src="/image/Cascade/cover.jpg" alt="" class="h-full w-full object-cover object-center" />
        <div
          class="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100"
        >
          <h2 class="text-center text-xs uppercase text-white">
            CASCADE <br />
            2022
          </h2>
        </div>
      </router-link>
    </div>
  </div>
</template>