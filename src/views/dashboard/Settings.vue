<template>
    <div class="space-y-6">
        <div class="bg-white dark:bg-abyss-800 rounded-xl p-8 border border-sun-200 dark:border-abyss-700">
            <router-link :to="{ name: 'user.dashboard' }" class="text-kaitoke-green-600 hover:underline text-sm font-medium mb-4 inline-block">
                ← Back to Dashboard
            </router-link>
            
            <h1 class="text-3xl font-bold text-abyss-900 dark:text-platinum-50 mb-2">
                ⚙️ Settings
            </h1>
            <p class="text-platinum-600 dark:text-platinum-300 mb-8">
                Manage your account and learning preferences.
            </p>

            <!-- Account Settings -->
            <div class="border-t border-sun-200 dark:border-abyss-700 pt-6">
                <h2 class="text-xl font-bold text-abyss-900 dark:text-platinum-50 mb-4">Account Settings</h2>
                
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-abyss-900 dark:text-platinum-100 mb-2">
                            Full Name
                        </label>
                        <input type="text" :value="userProfile.name" 
                            class="w-full px-4 py-2 rounded-lg border border-sun-200 dark:border-abyss-600 bg-platinum-50 dark:bg-abyss-900/50 text-abyss-900 dark:text-platinum-50" />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-abyss-900 dark:text-platinum-100 mb-2">
                            Email Address
                        </label>
                        <input type="email" :value="userProfile.email" disabled
                            class="w-full px-4 py-2 rounded-lg border border-sun-200 dark:border-abyss-600 bg-platinum-50 dark:bg-abyss-900/50 text-abyss-900 dark:text-platinum-50 opacity-60 cursor-not-allowed" />
                    </div>
                </div>
            </div>

            <!-- Privacy Settings -->
            <div class="border-t border-sun-200 dark:border-abyss-700 pt-6 mt-6">
                <h2 class="text-xl font-bold text-abyss-900 dark:text-platinum-50 mb-4">Privacy & Notifications</h2>
                
                <div class="space-y-3">
                    <label class="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" v-model="privacy.showOnLeaderboard" 
                            class="w-4 h-4 rounded border-sun-200 dark:border-abyss-600" />
                        <span class="text-abyss-900 dark:text-platinum-100">Show my name on leaderboard</span>
                    </label>
                    
                    <label class="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" v-model="privacy.emailNotifications" 
                            class="w-4 h-4 rounded border-sun-200 dark:border-abyss-600" />
                        <span class="text-abyss-900 dark:text-platinum-100">Email me achievement updates</span>
                    </label>
                </div>
            </div>

            <!-- Actions -->
            <div class="border-t border-sun-200 dark:border-abyss-700 pt-6 mt-6 flex gap-3">
                <button @click="saveSettings" 
                    class="px-4 py-2 bg-kaitoke-green-600 hover:bg-kaitoke-green-700 text-white font-medium rounded-lg transition">
                    Save Changes
                </button>
                <button @click="logout" 
                    class="px-4 py-2 border border-red-500 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 font-medium rounded-lg transition">
                    Logout
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const auth = useAuthStore()

const userProfile = ref({
    name: auth.user?.name || '',
    email: auth.user?.email || ''
})

const privacy = ref({
    showOnLeaderboard: true,
    emailNotifications: true
})

async function saveSettings() {
    // Save settings logic here
    console.log('[v0] Settings saved:', { userProfile: userProfile.value, privacy: privacy.value })
}

async function logout() {
    await auth.logout()
    router.push({ name: 'login' })
}
</script>
