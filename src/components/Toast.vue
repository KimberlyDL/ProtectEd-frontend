<template>
    <div
        class="pointer-events-auto relative flex w-full max-w-sm overflow-hidden rounded-[1.2rem] bg-white/80 dark:bg-abyss-900/95 backdrop-blur-md transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.4)] border border-slate-200 dark:border-platinum-900/20 group custom-font-poppins"
    >
        <div class="absolute left-0 top-1 bottom-1 w-1 rounded-r-full" :class="currentStyle.barColor"></div>

        <div class="flex-1 p-4 pl-5">
            <div class="flex items-start gap-3">
                <div class="mt-0.5">
                    <component 
                        :is="currentStyle.icon" 
                        size="18" 
                        :class="currentStyle.iconColor" 
                        strokeWidth="3" 
                    />
                </div>

                <div class="flex-1 min-w-0">
                    <p class="text-[12px] font-[700] text-abyss-900 dark:text-platinum-100 leading-tight tracking-tight uppercase italic">
                        {{ toast.message }}
                    </p>
                    <p class="text-[8px] font-black text-platinum-500 dark:text-platinum-600 uppercase tracking-widest mt-1 italic">
                        Registry Update // {{ toast.type }}
                    </p>
                </div>
            </div>
        </div>

        <button 
            @click="handleClose" 
            class="flex items-center justify-center px-4 hover:bg-slate-50 dark:hover:bg-platinum-900/10 transition-colors group/btn border-l border-slate-100 dark:border-platinum-900/20"
            aria-label="Close"
        >
            <XIcon size="14" class="text-platinum-400 dark:text-platinum-700 group-hover/btn:text-calm-lavender-600 dark:group-hover/btn:text-calm-lavender-400 transition-colors" />
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

// Institutional Theme Mapping
const themeConfig = {
    success: {
        icon: CheckCircle2,
        iconColor: 'text-neon-pink-600 dark:text-neon-pink-400',
        barColor: 'bg-neon-pink-600'
    },
    error: {
        icon: AlertCircle,
        iconColor: 'text-safety-teal-600 dark:text-safety-teal-400',
        barColor: 'bg-safety-teal-600'
    },
    warning: {
        icon: AlertTriangle,
        iconColor: 'text-vawc-orange-500 dark:text-vawc-orange-400',
        barColor: 'bg-vawc-orange-500'
    },
    info: {
        icon: Info,
        iconColor: 'text-calm-lavender-600 dark:text-calm-lavender-400',
        barColor: 'bg-calm-lavender-600'
    }
}

const currentStyle = computed(() => themeConfig[props.toast.type] || themeConfig.info)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');

.custom-font-poppins {
    font-family: 'Poppins', sans-serif !important;
}

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
