<template>
  <section id="about" class="py-20 px-4 sm:px-6 lg:px-8 bg-platinum-50">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center space-y-4 mb-16">
        <h2 class="text-5xl sm:text-6xl font-black text-abyss-900 mb-6">
          Built for Impact
        </h2>
        <p class="text-xl text-platinum-700 max-w-2xl mx-auto">
          ProtectED serves students, educators, and organizations committed to safer, more informed communities.
        </p>
      </div>

      <!-- Who It's For Grid -->
      <div class="grid md:grid-cols-2 gap-12 mb-16">
        <!-- For Schools -->
        <div class="space-y-6">
          <div class="text-5xl">🎓</div>
          <h3 class="text-2xl font-bold text-abyss-900">For Schools</h3>
          <p class="text-platinum-700 leading-relaxed">
            Provide safe, gamified education for GAD and sexual health that is age-appropriate and curriculum-aligned.
          </p>
          <ul class="space-y-2">
            <li class="flex gap-3 text-platinum-700">
              <span class="text-calm-lavender-600 font-bold">✓</span>
              <span>Curriculum-aligned content</span>
            </li>
            <li class="flex gap-3 text-platinum-700">
              <span class="text-calm-lavender-600 font-bold">✓</span>
              <span>Student engagement tracking</span>
            </li>
            <li class="flex gap-3 text-platinum-700">
              <span class="text-calm-lavender-600 font-bold">✓</span>
              <span>Teacher dashboard & reports</span>
            </li>
          </ul>
          <button class="px-6 py-3 w-full bg-calm-lavender-600 text-white font-semibold rounded-lg hover:bg-calm-lavender-700 transition-all">
            For Schools
          </button>
        </div>

        <!-- For Organizations -->
        <div class="space-y-6">
          <div class="text-5xl">🤝</div>
          <h3 class="text-2xl font-bold text-abyss-900">For Organizations</h3>
          <p class="text-platinum-700 leading-relaxed">
            Boost member participation in VAWC prevention through interactive workshops and data-driven engagement.
          </p>
          <ul class="space-y-2">
            <li class="flex gap-3 text-platinum-700">
              <span class="text-safety-teal-600 font-bold">✓</span>
              <span>Custom workshop programs</span>
            </li>
            <li class="flex gap-3 text-platinum-700">
              <span class="text-safety-teal-600 font-bold">✓</span>
              <span>Member engagement tracking</span>
            </li>
            <li class="flex gap-3 text-platinum-700">
              <span class="text-safety-teal-600 font-bold">✓</span>
              <span>Impact measurement tools</span>
            </li>
          </ul>
          <button class="px-6 py-3 w-full bg-safety-teal-500 text-white font-semibold rounded-lg hover:bg-safety-teal-600 transition-all">
            For Organizations
          </button>
        </div>
      </div>

      <!-- Final CTA Section -->
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-calm-lavender-600 via-safety-teal-500 to-calm-lavender-600 p-12 md:p-16 text-center">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          <div class="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        </div>

        <div class="relative z-10">
          <h2 class="text-4xl sm:text-5xl font-black text-white mb-6">
            Ready to Build a Safer Community?
          </h2>
          <p class="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of educators and organizations making a real difference through ProtectED.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="px-8 py-4 bg-platinum-50 text-calm-lavender-600 font-bold rounded-xl hover:shadow-xl transition-all hover:scale-105">
              Register Your Institution
            </button>
            <button class="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all">
              Request a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
