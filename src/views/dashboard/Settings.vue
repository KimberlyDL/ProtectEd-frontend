<template>
    <div class="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
            <h1 class="text-3xl font-bold text-gray-900">Account Settings</h1>
            <p class="mt-2 text-sm text-gray-600">Manage your ProtectEd profile, privacy, and security preferences.</p>
        </div>

        <div class="flex flex-col md:flex-row gap-8">
            <aside class="w-full md:w-64 space-y-1">
                <nav class="flex flex-col space-y-1">
                    <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id" :class="[
                        activeTab === tab.id
                            ? 'bg-indigo-50 text-indigo-700 border-indigo-500'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-transparent',
                        'group flex items-center px-3 py-2 text-sm font-medium border-l-4 transition-colors duration-150'
                    ]">
                        <component :is="tab.icon" class="mr-3 h-5 w-5 flex-shrink-0" />
                        {{ tab.name }}
                    </button>
                </nav>
            </aside>

            <main class="flex-1 bg-white rounded-lg shadow p-6">
                <transition mode="out-in" name="fade">
                    <component :is="currentComponent" />
                </transition>
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { User, Shield, Bell, Users, Settings as SettingsIcon } from 'lucide-vue-next';
import { useAuthStore } from '@/stores/auth';
import { useProfileStore } from '@/stores/profile';

// Lazy load sub-components (We will build these next)
import ProfileSettings from '@/components/settings/ProfileSettings.vue';
import PrivacySettings from '@/components/settings/PrivacySettings.vue';
import GuardianSettings from '@/components/settings/GuardianSettings.vue';
import NotificationSettings from '@/components/settings/NotificationSettings.vue';
import AccountManagement from '@/components/settings/AccountManagement.vue';

const auth = useAuthStore();
const profileStore = useProfileStore();

const activeTab = ref('profile');

const tabs = [
    { id: 'profile', name: 'Profile', icon: User, component: ProfileSettings },
    { id: 'guardians', name: 'Guardians', icon: Users, component: GuardianSettings },
    { id: 'privacy', name: 'Privacy', icon: Shield, component: PrivacySettings },
    { id: 'notifications', name: 'Notifications', icon: Bell, component: NotificationSettings },
    { id: 'account', name: 'Account', icon: SettingsIcon, component: AccountManagement },
];

const currentComponent = computed(() => {
    const tab = tabs.find(t => t.id === activeTab.ref);
    return tab ? tab.component : ProfileSettings;
});

onMounted(async () => {
    if (auth.user) {
        await profileStore.fetchProfile(auth.user.id);
    }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>