<template>
  <div class="space-y-6">
    <div>
      <h3 class="text-lg font-medium text-gray-900">Notification Preferences</h3>
      <p class="mt-1 text-sm text-gray-500">Control how and when you receive updates from the platform.</p>
    </div>

    <div class="divide-y divide-gray-200 border-t border-b border-gray-200">
      <div class="flex items-start py-4">
        <div class="flex-1">
          <label class="text-sm font-medium text-gray-900">Safety Alerts</label>
          <p class="text-xs text-blue-600">Mandatory alerts for platform safety and emergency contacts.</p>
        </div>
        <div class="ml-3 flex h-5 items-center">
          <input type="checkbox" checked disabled class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 opacity-50" />
        </div>
      </div>

      <div class="flex items-start py-4">
        <div class="flex-1">
          <label class="text-sm font-medium text-gray-900">Email Notifications</label>
          <p class="text-xs text-gray-500">Receive summaries of your progress and achievement alerts.</p>
        </div>
        <div class="ml-3 flex h-5 items-center">
          <input v-model="notifs.email_notifications" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
        </div>
      </div>

      <div class="flex items-start py-4">
        <div class="flex-1">
          <label class="text-sm font-medium text-gray-900">Learning Reminders</label>
          <p class="text-xs text-gray-500">Get notified when it's time to continue your GAD modules.</p>
        </div>
        <div class="ml-3 flex h-5 items-center">
          <input v-model="notifs.module_reminders" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
        </div>
      </div>
    </div>

    <div class="flex justify-end">
      <button @click="saveNotifs" class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 text-sm font-medium">
        Update Preferences
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useProfileStore } from '@/stores/profile';

const profileStore = useProfileStore();
const notifs = ref({
  email_notifications: true,
  module_reminders: true,
  safety_alerts: true // Always true
});

const saveNotifs = async () => {
  await profileStore.updateNotificationSettings(notifs.value);
};
</script>