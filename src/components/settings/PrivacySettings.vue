<template>
    <div class="space-y-8">
        <div>
            <h3 class="text-lg font-medium text-gray-900">Privacy & Visibility</h3>
            <p class="mt-1 text-sm text-gray-500">Control how your data is shared with the ProtectEd community.</p>
        </div>

        <div class="space-y-4">
            <div class="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
                <div>
                    <p class="font-medium text-gray-900">Public Profile</p>
                    <p class="text-xs text-gray-500">Allow other players to see your achievements and bio.</p>
                </div>
                <input type="checkbox" v-model="settings.profile_visibility"
                    class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            </div>

            <div class="flex items-center justify-between p-4 border rounded-lg">
                <div>
                    <p class="font-medium text-gray-900">Show Achievements</p>
                    <p class="text-xs text-gray-500">Display badges on your public profile.</p>
                </div>
                <input type="checkbox" v-model="settings.show_achievements"
                    class="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
            </div>

            <div class="flex items-center justify-between p-4 border rounded-lg bg-blue-50">
                <div>
                    <p class="font-medium text-blue-900">Safety Alerts</p>
                    <p class="text-xs text-blue-700">Critical notifications for your protection. Cannot be disabled.</p>
                </div>
                <div class="text-blue-600">
                    <ShieldCheckIcon class="h-6 w-6" />
                </div>
            </div>
        </div>

        <div class="flex justify-end">
            <button @click="updateSettings" class="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
                Save Privacy Preferences
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { ShieldCheckIcon } from 'lucide-vue-next';
import { useProfileStore } from '@/stores/profile';

const profileStore = useProfileStore();
const settings = ref({
    profile_visibility: false, // Default is private
    show_achievements: true,
    safety_alerts: true // Locked by design
});

const updateSettings = async () => {
    await profileStore.updatePrivacySettings(settings.value);
};
</script>