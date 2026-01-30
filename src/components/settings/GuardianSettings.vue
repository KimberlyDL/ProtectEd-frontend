<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h3 class="text-lg font-medium text-gray-900">Guardian Information</h3>
        <p class="text-sm text-gray-500">Essential for minors and account recovery.</p>
      </div>
      <button @click="openModal()" class="btn-primary text-sm px-4 py-2 bg-indigo-600 text-white rounded-md">
        Add Guardian
      </button>
    </div>

    <div class="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-300">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Name</th>
            <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Relationship</th>
            <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
            <th class="relative py-3.5 pl-3 pr-4 sm:pr-6"></th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr v-for="guardian in guardians" :key="guardian.id">
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{{ guardian.full_name }}</td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ guardian.relationship }}</td>
            <td class="whitespace-nowrap px-3 py-4 text-sm">
              <span v-if="guardian.is_primary" class="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                Primary
              </span>
            </td>
            <td class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
              <button @click="deleteGuardian(guardian.id)" class="text-red-600 hover:text-red-900">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="showModal" class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 class="text-lg font-bold mb-4">Add New Guardian</h3>
        <div class="space-y-4">
          <input v-model="form.full_name" placeholder="Full Name" class="w-full border rounded-md p-2" />
          <select v-model="form.guardian_type" class="w-full border rounded-md p-2">
            <option value="parent">Parent</option>
            <option value="legal_guardian">Legal Guardian</option>
            <option value="other">Other</option>
          </select>
          <input v-model="form.phone_number" placeholder="+639XXXXXXXXX" class="w-full border rounded-md p-2" />
          <div class="flex items-center">
            <input type="checkbox" v-model="form.is_primary" class="mr-2" />
            <label class="text-sm">Set as Primary Guardian</label>
          </div>
        </div>
        <div class="mt-6 flex justify-end gap-2">
          <button @click="showModal = false" class="px-4 py-2 text-gray-600">Cancel</button>
          <button @click="saveGuardian" class="px-4 py-2 bg-indigo-600 text-white rounded-md">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useProfileStore } from '@/stores/profile';
import { useToastStore } from '@/stores/toast';

const profileStore = useProfileStore();
const toast = useToastStore();
const guardians = ref([]);
const showModal = ref(false);
const form = ref({ full_name: '', guardian_type: 'parent', phone_number: '', is_primary: false });

const saveGuardian = async () => {
  // Check primary constraint: Only one primary guardian allowed
  if (form.value.is_primary && guardians.value.some(g => g.is_primary)) {
    toast.addToast('A primary guardian already exists', 'error');
    return;
  }
  // API Call logic would go here via profileStore
  showModal.value = false;
};
</script>