<!-- frontend\src\components\nav\home_sidebar.vue -->
<script setup>
import { ref, computed, onMounted, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from '@/utils/api'
import {
    ClipboardList,
    UserPlus,
    Users,
    Settings,
    ChevronLeft,
    ChevronRight,
    SquareArrowUpRight,
    Share2
} from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

/** Props:
 * - isMobileOpen: toggles off-canvas on small screens
 * - userId: optional current user id
 */
const props = defineProps({
    isMobileOpen: { type: Boolean, default: false },
    userId: { type: [String, Number, null], default: null },
})
const emit = defineEmits(['close-mobile-sidebar', 'expanded-change'])

/* ------- responsive + mode ------- */
const expanded = ref(false)
const width = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)
const isMobile = computed(() => width.value < 768)

const mode = computed(() => {
    if (isMobile.value) return props.isMobileOpen ? 'mobile-full' : 'hidden'
    return expanded.value ? 'full' : 'icon'
})
const isHidden = computed(() => mode.value === 'hidden')
const isMobileShown = computed(() => mode.value === 'mobile-full')
const isIcon = computed(() => mode.value === 'icon')
const isFull = computed(() => mode.value === 'full')

watchEffect(() => emit('expanded-change', isFull.value))

/* ------- learning modules data ------- */
const modules = ref([
    { id: 1, name: 'Gender & Power', icon: '👥', progress: 65, status: 'in-progress' },
    { id: 2, name: 'Recognizing VAWC', icon: '🚨', progress: 100, status: 'completed' },
    { id: 3, name: 'Sexual Health 101', icon: '💚', progress: 40, status: 'in-progress' },
    { id: 4, name: 'Support Resources', icon: '🤝', progress: 0, status: 'not-started' },
])

const myLearningPaths = ref([
    { id: 1, name: 'VAWC Prevention', progress: 65, modules: 4 },
    { id: 2, name: 'Sexual Health', progress: 40, modules: 5 },
    { id: 3, name: 'GAD Management', progress: 25, modules: 6 },
])

/* ------- helpers ------- */
function goModule(moduleId) {
    router.push({ name: 'module', params: { id: moduleId } })
}

function goPath(pathId) {
    router.push({ name: 'learning-path', params: { id: pathId } })
}

function goLeaderboard() {
    router.push({ name: 'leaderboard' })
}

function goSettings() {
    router.push({ name: 'settings' })
}

/* ------- organizations data ------- */
const mine = ref([])
const all = ref([])
const reqs = ref([])
const loading = ref({ mine: false, all: false, req: false })

async function loadMine() {
    loading.value.mine = true
    try {
        const { data } = await axios.get('/api/organizations/my')
        mine.value = data || []
    } finally {
        loading.value.mine = false
    }
}

async function loadAll() {
    loading.value.all = true
    try {
        const { data } = await axios.get('/api/organizations', { params: { scope: 'others' } })
        all.value = data || []
    } finally {
        loading.value.all = false
    }
}

async function loadReqs() {
    loading.value.req = true
    try {
        const { data } = await axios.get('/api/organizations/my-requests')
        reqs.value = data || []

        console.log('Loaded my requests:', reqs.value);
    } finally {
        loading.value.req = false
    }
}

/* ------- logo helpers (same behavior as OrgDetail) ------- */
const R2_WORKER_ENDPOINT = import.meta.env.VITE_R2_WORKER_ENDPOINT || ''

function getOrgLogoUrl(org) {
    if (!org || !org.logo) return ''

    const path = org.logo
    if (typeof path !== 'string') return ''

    // Already full URL
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return path
    }

    // Use R2 worker endpoint if configured
    if (!R2_WORKER_ENDPOINT) return ''

    const cleanEndpoint = R2_WORKER_ENDPOINT.replace(/\/$/, '')
    const cleanPath = path.startsWith('/') ? path.slice(1) : path

    return `${cleanEndpoint}/${cleanPath}`
}

function getOrgInitials(org) {
    const name = org?.name || ''
    const parts = name.trim().split(/\s+/).filter(Boolean)
    if (!parts.length) return '?'

    const first = parts[0]?.[0] || ''
    const second = parts[1]?.[0] || ''
    return (first + second).toUpperCase()
}

function goSharedDocuments() {
    // If user has a current org, show shared docs for that org
    if (currentId.value) {
        router.push({
            name: 'org.shared-documents',
            params: { id: currentId.value }
        })
    } else {
        // [FIXED] Go to the new dedicated route instead of query param
        router.push({ name: 'home.shared-documents' })
    }
}

/* ------- helpers ------- */
const currentId = computed(() => props.orgId ?? route.params.id ?? null)

function goOrg(id) {
    router.push({ name: 'orgs.org', params: { id } })
}

function goManage(id) {
    router.push({ name: 'org.overview', params: { id } })
}

function goMyRequests() {
    router.push({ name: 'orgs.requests' })
}

if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => (width.value = window.innerWidth))
}

onMounted(() => {
    loadMine()
    loadAll()
    loadReqs()
})
</script>

<template>
    <!-- Mobile overlay -->
    <Transition enter-active-class="transition-opacity duration-200"
        leave-active-class="transition-opacity duration-200" enter-from-class="opacity-0" leave-to-class="opacity-0">
        <div v-if="isMobileShown" class="fixed inset-0 z-40 md:hidden bg-black/50"
            @click="$emit('close-mobile-sidebar')" />
    </Transition>

    <aside :class="[
        'fixed top-16 left-0 bottom-0 z-40',
        'border-r bg-white text-abyss-900 border-sun-200',
        'dark:bg-abyss-900 dark:text-platinum-300 dark:border-abyss-700',
        'transition-all duration-300 ease-in-out',
        isHidden && 'hidden md:block',
        isIcon && 'w-20 md:block',
        isFull && 'w-64 md:block',
        isMobileShown && 'w-72 md:hidden'
    ]">
        <div class="h-full flex flex-col overflow-y-auto">
            <!-- Expand/Collapse button (desktop only) -->
            <div v-if="!isMobileShown"
                class="hidden md:flex items-center justify-end p-2 border-b border-sun-200 dark:border-abyss-700">
                <button @click="expanded = !expanded"
                    class="p-2 rounded-lg hover:bg-sun-100 dark:hover:bg-abyss-800 transition"
                    :aria-label="isFull ? 'Collapse sidebar' : 'Expand sidebar'">
                    <ChevronLeft v-if="isFull" class="h-4 w-4" />
                    <ChevronRight v-else class="h-4 w-4" />
                </button>
            </div>

            <nav class="flex-1 px-2 py-4 space-y-4">
                <!-- Continue Learning -->
                <section>
                    <div v-if="isFull || isMobileShown"
                        class="px-2 text-[11px] uppercase tracking-wide text-rose-600 dark:text-rose-400">
                        Continue Learning
                    </div>
                    <div v-else class="flex items-center justify-center my-3">
                        <div class="h-1.5 w-1.5 rounded-full bg-sun-300 dark:bg-abyss-600"></div>
                    </div>

                    <template>
                        <button v-for="module in modules" :key="'module-' + module.id" @click="goModule(module.id)"
                            :title="module.name" :class="[
                                'w-full rounded-lg transition px-3 py-2',
                                'hover:bg-sun-100 dark:hover:bg-abyss-800',
                                'text-left',
                                route.params.id == module.id
                                    ? 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300'
                                    : ''
                            ]">
                            <div :class="[
                                'flex items-center gap-3',
                                isIcon ? 'justify-center' : 'justify-between'
                            ]">
                                <div :class="[isIcon ? '' : 'flex items-center gap-3 flex-1 min-w-0']">
                                    <span class="text-lg">{{ module.icon }}</span>
                                    <span v-if="!isIcon" class="truncate font-heading text-sm font-[300]">
                                        {{ module.name }}
                                    </span>
                                </div>
                                <span v-if="!isIcon && module.progress > 0"
                                    class="text-xs text-platinum-500 flex-shrink-0">
                                    {{ module.progress }}%
                                </span>
                            </div>
                        </button>
                    </template>
                </section>

                <hr class="border-sun-200 dark:border-abyss-700" />

                <!-- Learning Paths -->
                <section>
                    <div v-if="isFull || isMobileShown"
                        class="px-2 text-[11px] uppercase tracking-wide text-rose-600 dark:text-rose-400">
                        Learning Paths
                    </div>
                    <div v-else class="flex items-center justify-center my-3">
                        <div class="h-1.5 w-1.5 rounded-full bg-sun-300 dark:bg-abyss-600"></div>
                    </div>

                    <template>
                        <button v-for="path in myLearningPaths" :key="'path-' + path.id" @click="goPath(path.id)"
                            :title="path.name" :class="[
                                'w-full rounded-lg transition px-3 py-2',
                                'hover:bg-sun-100 dark:hover:bg-abyss-800',
                                'text-left'
                            ]">
                            <div :class="[
                                'flex items-center gap-3',
                                isIcon ? 'justify-center' : 'justify-between'
                            ]">
                                <div v-if="!isIcon" class="flex-1 min-w-0">
                                    <p class="truncate font-heading text-sm font-[300]">
                                        {{ path.name }}
                                    </p>
                                    <div class="mt-1 h-1.5 bg-sun-100 dark:bg-abyss-700 rounded-full overflow-hidden">
                                        <div class="h-full bg-kaitoke-green-500"
                                            :style="{ width: path.progress + '%' }"></div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </template>
                </section>

                <hr class="border-sun-200 dark:border-abyss-700" />

                <!-- Engagement -->
                <section>
                    <div v-if="isFull || isMobileShown"
                        class="px-2 text-[11px] uppercase tracking-wide text-rose-600 dark:text-rose-400">
                        Engagement
                    </div>

                    <button @click="goLeaderboard()" :class="[
                        'w-full rounded-lg transition px-3 py-2',
                        'hover:bg-sun-100 dark:hover:bg-abyss-800',
                        'text-left'
                    ]">
                        <div :class="[
                            'flex items-center gap-3',
                            isIcon ? 'justify-center' : 'justify-start'
                        ]">
                            <span class="text-lg">🏆</span>
                            <span v-if="!isIcon" class="font-heading text-sm font-[300]">
                                Leaderboard
                            </span>
                        </div>
                    </button>

                    <button @click="goSettings()" :class="[
                        'w-full rounded-lg transition px-3 py-2 mt-2',
                        'hover:bg-sun-100 dark:hover:bg-abyss-800',
                        'text-left'
                    ]">
                        <div :class="[
                            'flex items-center gap-3',
                            isIcon ? 'justify-center' : 'justify-start'
                        ]">
                            <span class="text-lg">⚙️</span>
                            <span v-if="!isIcon" class="font-heading text-sm font-[300]">
                                Settings
                            </span>
                        </div>
                    </button>
                </section>
            </nav>
        </div>
    </aside>
</template>
