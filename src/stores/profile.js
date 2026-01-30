// src/stores/profile.js
import { defineStore } from 'pinia';
import api from '@/utils/api';
import { useToastStore } from './toast';

export const useProfileStore = defineStore('profile', {
    state: () => ({
        profile: null,
        privacySettings: null,
        notificationSettings: null,
        guardians: [],
        isLoading: false,
        error: null
    }),

    actions: {
        async fetchProfile(userId) {
            this.isLoading = true;
            try {
                const response = await api.get(`/users/${userId}/profile`);
                this.profile = response.data;
            } catch (err) {
                this.error = err.response?.data?.message || 'Failed to load profile';
            } finally {
                this.isLoading = false;
            }
        },

        async updateProfile(profileData) {
            const toast = useToastStore();
            try {
                const response = await api.put('/users/profile', profileData);
                this.profile = response.data.profile;
                toast.addToast('Profile updated successfully', 'success');
                return true;
            } catch (err) {
                toast.addToast(err.response?.data?.message || 'Update failed', 'error');
                return false;
            }
        },

        async uploadAvatar(file) {
            const toast = useToastStore();
            const formData = new FormData();
            formData.append('avatar', file);

            try {
                const response = await api.post('/users/avatar', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                if (this.profile) this.profile.avatar_url = response.data.avatar_url;
                toast.addToast('Avatar updated', 'success');
            } catch (err) {
                toast.addToast('Avatar upload failed', 'error');
            }
        },

        async fetchPrivacySettings() {
            try {
                const response = await api.get('/users/settings/privacy');
                this.privacySettings = response.data;
            } catch (err) {
                console.error('Privacy settings fetch failed', err);
            }
        },

        async updatePrivacySettings(data) {
            try {
                await api.put('/users/settings/privacy', data);
                this.privacySettings = data;
            } catch (err) {
                useToastStore().addToast('Failed to update privacy', 'error');
            }
        }
    }
});