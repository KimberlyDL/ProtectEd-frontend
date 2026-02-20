<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-calm-lavender-50 via-platinum-50 to-safety-teal-50 pt-20 pb-32 px-4 sm:px-6 lg:px-8">
    <!-- Decorative elements -->
    <div class="absolute top-10 right-10 w-72 h-72 rounded-full bg-safety-teal-200/30 blur-3xl -z-10"></div>
    <div class="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-calm-lavender-200/20 blur-3xl -z-10"></div>

    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <!-- Left Content -->
      <div class="space-y-8">
        <div class="space-y-4">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-calm-lavender-100 rounded-full w-fit">
            <span class="text-2xl">⚡</span>
            <span class="text-sm font-semibold text-calm-lavender-600">Your Quest Awaits</span>
          </div>

          <h1 class="text-5xl sm:text-6xl font-black text-abyss-900 leading-tight">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-calm-lavender-600 to-safety-teal-500">Level Up</span> Your Knowledge.<br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-safety-teal-500 to-calm-lavender-600">Power Up</span> Your Safety.
          </h1>

          <p class="text-xl text-platinum-700 max-w-md leading-relaxed">
            Welcome to ProtectED, the interactive playground where GAD and VAWC education come to life. Discover a safer way to learn through quests, challenges, and AI-driven insights.
          </p>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 pt-4">
          <button class="group px-8 py-4 bg-gradient-to-r from-calm-lavender-600 to-safety-teal-500 text-white font-bold rounded-xl hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2">
            <span>🚀 Start Your Adventure</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button class="px-8 py-4 border-2 border-calm-lavender-600 text-calm-lavender-600 font-bold rounded-xl hover:bg-calm-lavender-50 transition-all">
            🎯 Explore the Mission
          </button>
        </div>

        <!-- Trust Badge -->
        <div class="pt-4 flex items-center gap-4 text-sm text-platinum-700">
          <div class="flex -space-x-2">
            <div class="w-8 h-8 rounded-full bg-calm-lavender-200 flex items-center justify-center font-bold text-calm-lavender-600">S</div>
            <div class="w-8 h-8 rounded-full bg-safety-teal-200 flex items-center justify-center font-bold text-safety-teal-600">T</div>
            <div class="w-8 h-8 rounded-full bg-azure-blue-200 flex items-center justify-center font-bold text-azure-blue-600">U</div>
          </div>
          <span>Trusted by 1000+ students & organizations</span>
        </div>
      </div>

      <!-- Right Content - Placeholder for Hero Image/SVG -->
      <div class="relative h-96 md:h-full flex items-center justify-center">
        <div class="relative w-full h-full max-w-md">
          <!-- Placeholder for your hero illustration/SVG -->
          <div class="w-full h-full rounded-3xl bg-gradient-to-br from-calm-lavender-200/30 to-safety-teal-200/30 border-4 border-calm-lavender-300/50 flex items-center justify-center">
            <div class="text-center">
              <div class="text-6xl mb-4">🎮</div>
              <p class="text-abyss-700 font-semibold">Your Hero Illustration Here</p>
              <p class="text-sm text-platinum-700 mt-2">Add your SVG or image asset</p>
            </div>
          </div>

          <!-- Floating Cards -->
          <div class="absolute -bottom-8 -left-8 px-4 py-3 bg-platinum-50 rounded-xl shadow-lg border border-platinum-200 w-40 animate-bounce" style="animation-delay: 0s">
            <p class="text-xs font-bold text-calm-lavender-600 mb-1">⭐ Achievement Unlocked!</p>
            <p class="text-xs text-platinum-700">Knowledge Master</p>
          </div>

          <div class="absolute -top-4 -right-4 px-4 py-3 bg-platinum-50 rounded-xl shadow-lg border border-platinum-200 w-40" style="animation: float 3s ease-in-out infinite">
            <p class="text-xs font-bold text-safety-teal-600 mb-1">🏆 Level 5</p>
            <p class="text-xs text-platinum-700">Safety Advocate</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>
