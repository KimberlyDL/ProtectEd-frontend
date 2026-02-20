<template>
  <section class="relative overflow-hidden bg-platinum-50 pt-16 pb-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto text-center space-y-12">
      <!-- Hero Headline -->
      <div class="space-y-6">
        <h1 class="text-6xl sm:text-7xl lg:text-8xl font-black text-abyss-900 leading-tight">
          Learn. Grow.<br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-calm-lavender-600 to-safety-teal-500">Protect.</span>
        </h1>
        <p class="text-xl sm:text-2xl text-platinum-700 max-w-3xl mx-auto leading-relaxed">
          Gamified education for Gender Awareness and Violence Prevention. Trusted by 1000+ students and organizations.
        </p>
      </div>

      <!-- Role Selection / CTA -->
      <div class="space-y-6">
        <p class="text-sm font-semibold text-platinum-600 uppercase tracking-widest">Get started as a...</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <button class="px-8 py-3 bg-calm-lavender-600 text-white font-bold rounded-full hover:bg-calm-lavender-700 hover:shadow-lg transition-all">
            Student
          </button>
          <button class="px-8 py-3 bg-safety-teal-500 text-white font-bold rounded-full hover:bg-safety-teal-600 hover:shadow-lg transition-all">
            Educator
          </button>
          <button class="px-8 py-3 bg-azure-blue-600 text-white font-bold rounded-full hover:bg-azure-blue-700 hover:shadow-lg transition-all">
            Organization
          </button>
          <button class="px-8 py-3 border-2 border-platinum-300 text-abyss-900 font-bold rounded-full hover:bg-platinum-100 transition-all">
            School Leader
          </button>
        </div>
      </div>

      <!-- Hero Image/Illustration Placeholder -->
      <div class="relative mt-16 h-96 sm:h-[28rem] rounded-3xl bg-gradient-to-br from-calm-lavender-100 to-safety-teal-100 border-4 border-calm-lavender-200/50 flex items-center justify-center overflow-hidden">
        <div class="text-center">
          <div class="text-8xl mb-4">🎮</div>
          <p class="text-abyss-700 font-bold text-xl">Add your hero illustration here</p>
          <p class="text-platinum-600 mt-2">SVG, PNG, or any visual asset</p>
        </div>
      </div>

      <!-- Social Proof -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-platinum-200">
        <div class="text-center">
          <p class="text-4xl font-black text-calm-lavender-600">1000+</p>
          <p class="text-platinum-700 font-semibold">Active Learners</p>
        </div>
        <div class="hidden sm:block w-px h-12 bg-platinum-200"></div>
        <div class="text-center">
          <p class="text-4xl font-black text-safety-teal-600">50+</p>
          <p class="text-platinum-700 font-semibold">Schools & Orgs</p>
        </div>
        <div class="hidden sm:block w-px h-12 bg-platinum-200"></div>
        <div class="text-center">
          <p class="text-4xl font-black text-azure-blue-600">99%</p>
          <p class="text-platinum-700 font-semibold">Satisfaction</p>
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
