<template>
    <div class="flex flex-grow top-20">
      <div class="container">
        <transition name="fade" mode="out-in">
          <router-view>
          </router-view>              
        </transition>
      </div>
    </div>
</template>