<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <LandingNav />

    <!-- Hero Section -->
    <HeroSection />

    <!-- Mission Section -->
    <MissionSection />

    <!-- Features Section -->
    <FeaturesSection />

    <!-- Impact Section -->
    <ImpactSection />

    <!-- About Section -->
    <AboutSection />

    <!-- Footer -->
    <LandingFooter />
  </div>
</template>

<script setup>
import LandingNav from '@/components/landing/LandingNav.vue'
import HeroSection from '@/components/landing/HeroSection.vue'
import MissionSection from '@/components/landing/MissionSection.vue'
import FeaturesSection from '@/components/landing/FeaturesSection.vue'
import ImpactSection from '@/components/landing/ImpactSection.vue'
import AboutSection from '@/components/landing/AboutSection.vue'
import LandingFooter from '@/components/landing/LandingFooter.vue'
</script>
