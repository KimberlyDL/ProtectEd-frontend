<template>
  <section id="about" class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center space-y-4 mb-16">
        <h2 class="text-4xl sm:text-5xl font-black text-gray-900">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Built for Impact</span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          ProtectED serves students, educators, and organizations committed to creating safer, more informed communities.
        </p>
      </div>

      <!-- Who It's For Grid -->
      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <!-- For Educational Institutions -->
        <div class="group relative">
          <div class="absolute inset-0 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div class="relative bg-white rounded-2xl border-2 border-purple-200 p-8 hover:border-purple-400 transition-all">
            <div class="h-16 w-16 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 mb-6 flex items-center justify-center text-white text-3xl">
              🎓
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">For Educational Institutions</h3>
            <p class="text-gray-600 leading-relaxed">
              Provide students with a safe, gamified environment to explore GAD and sexual health education that is age-appropriate and fun.
            </p>

            <ul class="mt-6 space-y-3">
              <li class="flex items-center gap-2 text-gray-600">
                <span class="text-purple-600 font-bold">✓</span> Curriculum-aligned content
              </li>
              <li class="flex items-center gap-2 text-gray-600">
                <span class="text-purple-600 font-bold">✓</span> Student engagement analytics
              </li>
              <li class="flex items-center gap-2 text-gray-600">
                <span class="text-purple-600 font-bold">✓</span> Teacher dashboard & resources
              </li>
              <li class="flex items-center gap-2 text-gray-600">
                <span class="text-purple-600 font-bold">✓</span> Certification programs
              </li>
            </ul>

            <button class="mt-6 w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
              For Schools
            </button>
          </div>
        </div>

        <!-- For Organizations -->
        <div class="group relative">
          <div class="absolute inset-0 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div class="relative bg-white rounded-2xl border-2 border-pink-200 p-8 hover:border-pink-400 transition-all">
            <div class="h-16 w-16 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 mb-6 flex items-center justify-center text-white text-3xl">
              🤝
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">For Organizations</h3>
            <p class="text-gray-600 leading-relaxed">
              Boost member participation in VAWC prevention programs through interactive workshops and data-driven engagement.
            </p>

            <ul class="mt-6 space-y-3">
              <li class="flex items-center gap-2 text-gray-600">
                <span class="text-pink-600 font-bold">✓</span> Custom workshop programs
              </li>
              <li class="flex items-center gap-2 text-gray-600">
                <span class="text-pink-600 font-bold">✓</span> Member engagement tracking
              </li>
              <li class="flex items-center gap-2 text-gray-600">
                <span class="text-pink-600 font-bold">✓</span> Impact measurement tools
              </li>
              <li class="flex items-center gap-2 text-gray-600">
                <span class="text-pink-600 font-bold">✓</span> Community reporting
              </li>
            </ul>

            <button class="mt-6 w-full px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
              For Organizations
            </button>
          </div>
        </div>
      </div>

      <!-- Final CTA Section -->
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 p-12 md:p-16 text-center">
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
            <button class="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:shadow-xl transition-all hover:scale-105">
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
