<template>
  <section class="bg-platinum-50 pt-20 pb-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <!-- Two Column: Content + Visual -->
      <div class="grid md:grid-cols-2 gap-16 items-center">
        
        <!-- Left: Content -->
        <div class="space-y-8">
          <div class="space-y-6">
            <h1 class="text-5xl md:text-6xl font-black text-abyss-900 leading-tight">
              Level Up Your Knowledge.<br />
              <span class="text-calm-lavender-600">Power Up Your Safety.</span>
            </h1>
            
            <p class="text-lg text-platinum-700 leading-relaxed">
              Welcome to ProtectED, the interactive playground where GAD and VAWC education come to life. Discover a safer way to learn through quests, challenges, and AI-driven insights.
            </p>
          </div>

          <!-- Primary CTA -->
          <button class="px-8 py-4 bg-calm-lavender-600 hover:bg-calm-lavender-700 text-white font-bold rounded-full text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 inline-flex items-center gap-2">
            Start Your Adventure
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <!-- Social Proof -->
          <div class="flex items-center gap-3 text-sm text-platinum-700">
            <div class="flex -space-x-2">
              <div class="w-8 h-8 rounded-full bg-calm-lavender-200 flex items-center justify-center text-xs font-bold text-calm-lavender-600">S</div>
              <div class="w-8 h-8 rounded-full bg-safety-teal-200 flex items-center justify-center text-xs font-bold text-safety-teal-600">T</div>
              <div class="w-8 h-8 rounded-full bg-azure-blue-200 flex items-center justify-center text-xs font-bold text-azure-blue-600">U</div>
            </div>
            <span class="font-semibold">1000+ students & organizations trust us</span>
          </div>
        </div>

        <!-- Right: Hero Visual -->
        <div class="relative h-96 flex items-center justify-center">
          <div class="w-full h-full rounded-3xl bg-gradient-to-br from-calm-lavender-100 to-safety-teal-100 border-2 border-calm-lavender-200 flex flex-col items-center justify-center gap-4">
            <div class="text-8xl">🎮</div>
            <div class="text-center">
              <p class="text-abyss-900 font-bold text-xl">Add Your Hero/Mascot</p>
              <p class="text-sm text-platinum-700">SVG or image illustration</p>
            </div>
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
