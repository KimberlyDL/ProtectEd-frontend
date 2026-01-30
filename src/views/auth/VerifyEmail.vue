<template>
    <div class="min-h-screen flex items-center justify-center bg-platinum-50 dark:bg-abyss-900 px-4">
        <div
            class="max-w-md w-full text-center p-8 bg-white dark:bg-abyss-800 rounded-xl shadow-lg border border-sun-200 dark:border-abyss-700">

            <div v-if="status === 'loading'">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-kaitoke-green-600 mx-auto"></div>
                <h2 class="mt-4 text-xl font-semibold text-abyss-900 dark:text-platinum-50">Verifying your email...</h2>
            </div>

            <div v-else-if="status === 'success'">
                <div class="text-kaitoke-green-600 text-5xl mb-4">✓</div>
                <h2 class="text-2xl font-bold text-abyss-900 dark:text-platinum-50 mb-2">Email Verified!</h2>
                <p class="text-platinum-600 dark:text-platinum-400 mb-6">Your account is now active. You can proceed to
                    login.</p>
                <router-link :to="{ name: 'login' }"
                    class="bg-kaitoke-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-kaitoke-green-700 transition">
                    Go to Login
                </router-link>
            </div>

            <div v-else>
                <div class="text-red-500 text-5xl mb-4">✕</div>
                <h2 class="text-2xl font-bold text-abyss-900 dark:text-platinum-50 mb-2">Verification Failed</h2>
                <p class="text-platinum-600 dark:text-platinum-400 mb-6">{{ errorMessage }}</p>
                <router-link :to="{ name: 'verify-notice' }" class="text-kaitoke-green-600 font-medium hover:underline">
                    Request a new link
                </router-link>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import api from '@/utils/api'

const route = useRoute()
const status = ref('loading') // 'loading' | 'success' | 'error'
const errorMessage = ref('')

onMounted(async () => {
    const token = route.query.token

    if (!token) {
        status.value = 'error'
        errorMessage.value = 'Verification token is missing.'
        return
    }

    try {
        // Hits your backend route: router.get('/verify-email', authController.verifyEmail)
        await api.get(`/api/v1/auth/verify-email?token=${token}`)
        status.value = 'success'
    } catch (error) {
        status.value = 'error'
        errorMessage.value = error.response?.data?.message || 'The link is invalid or has expired.'
    }
})
</script>