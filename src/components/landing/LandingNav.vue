<template>
  <nav class="sticky top-0 z-50 bg-platinum-50/95 backdrop-blur-sm border-b border-platinum-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-calm-lavender-600 to-safety-teal-500 flex items-center justify-center">
            <span class="text-white font-bold text-lg">P</span>
          </div>
          <span class="font-bold text-xl text-abyss-900">ProtectED</span>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-8">
          <a href="#mission" class="text-platinum-700 hover:text-calm-lavender-600 transition-colors text-sm font-medium">Our Mission</a>
          <a href="#features" class="text-platinum-700 hover:text-calm-lavender-600 transition-colors text-sm font-medium">Features</a>
          <a href="#impact" class="text-platinum-700 hover:text-calm-lavender-600 transition-colors text-sm font-medium">Impact</a>
          <a href="#about" class="text-platinum-700 hover:text-calm-lavender-600 transition-colors text-sm font-medium">About</a>
        </div>

        <!-- CTA Buttons -->
        <div class="flex items-center gap-3">
          <button class="hidden sm:inline-flex px-4 py-2 text-sm font-semibold text-calm-lavender-600 hover:bg-calm-lavender-50 rounded-lg transition-colors">
            Sign In
          </button>
          <button class="px-4 py-2 bg-gradient-to-r from-calm-lavender-600 to-safety-teal-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all hover:scale-105">
            Register
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>
