<template>
    <div class="space-y-10">
        <section>
            <h3 class="text-lg font-medium text-gray-900 border-b pb-2">Deactivate Account</h3>
            <p class="mt-2 text-sm text-gray-600">Temporary disable your account. Your profile will be hidden until you
                log back in.</p>
            <button @click="confirmDeactivation"
                class="mt-4 bg-orange-50 text-orange-700 border border-orange-200 px-4 py-2 rounded-md hover:bg-orange-100 text-sm font-medium">
                Deactivate Account
            </button>
        </section>

        <section class="bg-red-50 p-6 rounded-lg border border-red-100">
            <h3 class="text-lg font-medium text-red-900">Delete Account</h3>
            <p class="mt-2 text-sm text-red-700">
                This will schedule your account for permanent deletion after <strong>30 days</strong>.
                All data, including badges and progress, will be lost.
            </p>

            <div v-if="!isDeleting" class="mt-4">
                <button @click="isDeleting = true"
                    class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 text-sm font-medium shadow-sm">
                    Request Account Deletion
                </button>
            </div>

            <div v-else class="mt-6 space-y-4">
                <div class="bg-white p-4 rounded border border-red-200">
                    <label class="block text-sm font-medium text-gray-700">
                        To confirm, please type <span class="font-bold text-red-600">DELETE MY ACCOUNT</span> below:
                    </label>
                    <input v-model="confirmText" type="text"
                        class="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm" />

                    <label class="block mt-4 text-sm font-medium text-gray-700">Confirm Password</label>
                    <input v-model="password" type="password"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm" />

                    <div class="mt-6 flex gap-3">
                        <button @click="requestDeletion" :disabled="!isFormValid"
                            class="flex-1 bg-red-600 text-white py-2 rounded-md disabled:opacity-50 font-bold">
                            Confirm Schedule for Deletion
                        </button>
                        <button @click="isDeleting = false"
                            class="px-4 py-2 text-gray-600 hover:text-gray-900">Cancel</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useProfileStore } from '@/stores/profile';
import { useToastStore } from '@/stores/toast';

const profileStore = useProfileStore();
const toast = useToastStore();

const isDeleting = ref(false);
const confirmText = ref('');
const password = ref('');

const isFormValid = computed(() => {
    return confirmText.value === 'DELETE MY ACCOUNT' && password.value.length > 0;
});

const confirmDeactivation = async () => {
    if (confirm('Are you sure you want to deactivate? Your profile will be hidden.')) {
        await profileStore.deactivateAccount();
    }
};

const requestDeletion = async () => {
    const success = await profileStore.requestAccountDeletion(password.value, "User requested deletion via settings");
    if (success) {
        toast.addToast('Account scheduled for deletion in 30 days', 'success');
        isDeleting.value = false;
    }
};
</script>