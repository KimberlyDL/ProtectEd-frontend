<template>
    <div class="space-y-8 divide-y divide-gray-200">
        <div class="space-y-6 sm:pt-0">
            <div>
                <h3 class="text-lg font-medium leading-6 text-gray-900">Public Profile</h3>
                <p class="mt-1 text-sm text-gray-600">This information will be displayed publicly if your profile
                    visibility is set to public.</p>
            </div>

            <div class="flex flex-col sm:flex-row items-center gap-6">
                <div class="relative">
                    <img :src="profileData.avatar_url || '/default-avatar.png'" alt="Profile Avatar"
                        class="h-24 w-24 rounded-full object-cover border-2 border-indigo-100" />
                    <label
                        class="absolute bottom-0 right-0 bg-white rounded-full p-1.5 shadow-sm border border-gray-200 cursor-pointer hover:bg-gray-50">
                        <CameraIcon class="h-4 w-4 text-gray-600" />
                        <input type="file" class="hidden" accept="image/jpeg,image/png" @change="handleAvatarUpload" />
                    </label>
                </div>
                <div class="flex-1 space-y-4 w-full">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Display Name</label>
                        <input v-model="profileData.display_name" type="text"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="How others see you" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Bio</label>
                        <textarea v-model="profileData.bio" rows="3" maxlength="500"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Tell us about yourself (max 500 characters)"></textarea>
                    </div>
                </div>
            </div>
        </div>

        <div class="pt-8 space-y-6">
            <div>
                <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                <p class="mt-1 text-sm text-gray-600">This data is private and only used for platform safety and
                    verification.</p>
            </div>

            <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-3">
                    <label class="block text-sm font-medium text-gray-700">Date of Birth</label>
                    <input v-model="profileData.date_of_birth" type="date"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>

                <div class="sm:col-span-3">
                    <label class="block text-sm font-medium text-gray-700">Sex</label>
                    <select v-model="profileData.sex"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="prefer_not_to_say">Prefer not to say</option>
                    </select>
                </div>

                <div class="sm:col-span-4">
                    <label class="block text-sm font-medium text-gray-700">Phone Number</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                        <input v-model="profileData.phone_number" type="text" placeholder="+639XXXXXXXXX"
                            class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                    <p class="mt-1 text-xs text-gray-500">Format: +639XXXXXXXXX</p>
                </div>
            </div>
        </div>

        <div class="pt-8 space-y-6">
            <div>
                <h3 class="text-lg font-medium leading-6 text-gray-900">Emergency Contact</h3>
                <p class="mt-1 text-sm text-gray-600">Who should we contact in case of an emergency?</p>
            </div>

            <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-3">
                    <label class="block text-sm font-medium text-gray-700">Contact Name</label>
                    <input v-model="profileData.emergency_contact_name" type="text"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
                <div class="sm:col-span-3">
                    <label class="block text-sm font-medium text-gray-700">Relationship</label>
                    <input v-model="profileData.emergency_contact_relationship" type="text"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
            </div>
        </div>

        <div class="pt-5">
            <div class="flex justify-end gap-3">
                <button type="button"
                    class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none">Cancel</button>
                <button @click="saveProfile" :disabled="isSaving"
                    class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50">
                    {{ isSaving ? 'Saving...' : 'Save Changes' }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { CameraIcon } from 'lucide-vue-next';
import { useProfileStore } from '@/stores/profile';
import { useToastStore } from '@/stores/toast';

const profileStore = useProfileStore();
const toast = useToastStore();
const isSaving = ref(false);

const profileData = ref({
    display_name: '',
    bio: '',
    date_of_birth: '',
    sex: 'prefer_not_to_say',
    phone_number: '',
    emergency_contact_name: '',
    emergency_contact_relationship: '',
    avatar_url: ''
});

onMounted(() => {
    if (profileStore.profile) {
        profileData.value = { ...profileStore.profile };
    }
});

const handleAvatarUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Validate file size (5MB limit as per guide)
    if (file.size > 5 * 1024 * 1024) {
        toast.addToast('Image must be less than 5MB', 'error');
        return;
    }

    await profileStore.uploadAvatar(file);
    profileData.value.avatar_url = profileStore.profile.avatar_url;
};

const saveProfile = async () => {
    // Validate PH phone number format
    const phoneRegex = /^\+639\d{9}$/;
    if (profileData.value.phone_number && !phoneRegex.test(profileData.value.phone_number)) {
        toast.addToast('Please use the format +639XXXXXXXXX', 'error');
        return;
    }

    isSaving.ref = true;
    const success = await profileStore.updateProfile(profileData.value);
    isSaving.ref = false;
};
</script>