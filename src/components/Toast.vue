<template>
    <div
        class="pointer-events-auto relative flex w-full max-w-sm overflow-hidden rounded-2xl bg-white dark:bg-abyss-600 transition-all duration-300 shadow-lg dark:shadow-2xl border border-slate-200 dark:border-abyss-500 group"
    >
        <!-- Colored accent bar with rounded ends -->
        <div class="absolute left-0 top-2 bottom-2 w-1.5 rounded-r-xl" :class="currentStyle.barColor"></div>

        <div class="flex-1 p-5 pl-5">
            <div class="flex items-start gap-3">
                <div class="mt-0.5 shrink-0 p-2 rounded-lg" :class="currentStyle.iconBg">
                    <component 
                        :is="currentStyle.icon" 
                        size="18" 
                        :class="currentStyle.iconColor" 
                        strokeWidth="2.5" 
                    />
                </div>

                <div class="flex-1 min-w-0">
                    <p class="text-sm font-semibold text-abyss-800 dark:text-platinum-100 leading-tight">
                        {{ toast.message }}
                    </p>
                    <p class="text-xs font-medium text-platinum-600 dark:text-platinum-500 uppercase tracking-wide mt-1">
                        {{ toast.type }}
                    </p>
                </div>
            </div>
        </div>

        <button 
            @click="handleClose" 
            class="flex items-center justify-center px-4 hover:bg-slate-50 dark:hover:bg-abyss-500 transition-colors group/btn border-l border-slate-200 dark:border-abyss-500 shrink-0"
            aria-label="Close notification"
        >
            <XIcon size="16" class="text-platinum-600 dark:text-platinum-400 group-hover/btn:text-calm-lavender-600 dark:group-hover/btn:text-calm-lavender-400 transition-colors" />
        </button>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { 
    CheckCircle2, 
    AlertCircle, 
    AlertTriangle, 
    Info, 
    X as XIcon 
} from 'lucide-vue-next'
import { useToastStore } from '@/stores/toast'

const toastStore = useToastStore()
const props = defineProps({
    toast: { 
        type: Object, 
        required: true 
    }
})

const handleClose = () => {
    toastStore.removeToast(props.toast.id)
}

// Semantic Theme Mapping
const themeConfig = {
    success: {
        icon: CheckCircle2,
        iconColor: 'text-neon-pink-600 dark:text-neon-pink-400',
        iconBg: 'bg-neon-pink-50 dark:bg-neon-pink-900/30',
        barColor: 'bg-neon-pink-600'
    },
    error: {
        icon: AlertCircle,
        iconColor: 'text-vawc-orange-600 dark:text-vawc-orange-400',
        iconBg: 'bg-vawc-orange-50 dark:bg-vawc-orange-900/30',
        barColor: 'bg-vawc-orange-600'
    },
    warning: {
        icon: AlertTriangle,
        iconColor: 'text-safety-teal-600 dark:text-safety-teal-400',
        iconBg: 'bg-safety-teal-50 dark:bg-safety-teal-900/30',
        barColor: 'bg-safety-teal-600'
    },
    info: {
        icon: Info,
        iconColor: 'text-calm-lavender-600 dark:text-calm-lavender-400',
        iconBg: 'bg-calm-lavender-50 dark:bg-calm-lavender-900/30',
        barColor: 'bg-calm-lavender-600'
    }
}

const currentStyle = computed(() => themeConfig[props.toast.type] || themeConfig.info)
</script>

<style scoped>
@keyframes slideIn {
    from { 
        transform: translateX(30px) scale(0.95); 
        opacity: 0; 
        filter: blur(8px);
    }
    to { 
        transform: translateX(0) scale(1); 
        opacity: 1; 
        filter: blur(0);
    }
}

.pointer-events-auto {
    animation: slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>

how can i make the colored border left rounded too?

Then i have implemented a uniform style theme that i want to apply here too. can you implement it to this too?
