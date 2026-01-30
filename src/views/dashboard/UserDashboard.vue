<template>
    <div class="space-y-8">
        <!-- Welcome Header -->
        <div class="bg-gradient-to-r from-kaitoke-green-500 to-emerald-500 rounded-xl p-8 text-white shadow-lg">
            <h1 class="text-4xl font-bold mb-2">Welcome back, {{ userFirstName }}! 👋</h1>
            <p class="text-kaitoke-green-100 text-lg">You're making great progress on your learning journey. Keep up the momentum!</p>
        </div>

        <!-- Quick Stats -->
        <div class="grid md:grid-cols-4 gap-4">
            <div class="bg-white dark:bg-abyss-800 rounded-lg p-6 border border-sun-200 dark:border-abyss-700">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-platinum-600 dark:text-platinum-400 text-sm font-medium">Total Points</p>
                        <p class="text-3xl font-bold text-abyss-900 dark:text-platinum-50 mt-2">{{ stats.totalPoints }}</p>
                    </div>
                    <div class="w-12 h-12 bg-sun-100 dark:bg-sun-900/30 rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 text-sun-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div class="bg-white dark:bg-abyss-800 rounded-lg p-6 border border-kaitoke-green-200 dark:border-kaitoke-green-900">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-platinum-600 dark:text-platinum-400 text-sm font-medium">Modules Completed</p>
                        <p class="text-3xl font-bold text-abyss-900 dark:text-platinum-50 mt-2">{{ stats.modulesCompleted }}</p>
                    </div>
                    <div class="w-12 h-12 bg-kaitoke-green-100 dark:bg-kaitoke-green-900/30 rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 text-kaitoke-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div class="bg-white dark:bg-abyss-800 rounded-lg p-6 border border-electric-lime-200 dark:border-electric-lime-900">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-platinum-600 dark:text-platinum-400 text-sm font-medium">Badges Earned</p>
                        <p class="text-3xl font-bold text-abyss-900 dark:text-platinum-50 mt-2">{{ stats.badgesEarned }}</p>
                    </div>
                    <div class="w-12 h-12 bg-electric-lime-100 dark:bg-electric-lime-900/30 rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 text-electric-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>
            </div>

            <div class="bg-white dark:bg-abyss-800 rounded-lg p-6 border border-blue-200 dark:border-blue-900">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-platinum-600 dark:text-platinum-400 text-sm font-medium">Current Level</p>
                        <p class="text-3xl font-bold text-abyss-900 dark:text-platinum-50 mt-2">{{ stats.currentLevel }}</p>
                    </div>
                    <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Content Grid -->
        <div class="grid lg:grid-cols-3 gap-8">
            <!-- Left Column: Learning & Progress -->
            <div class="lg:col-span-2 space-y-8">
                <!-- Current Module -->
                <div class="bg-white dark:bg-abyss-800 rounded-lg p-8 border border-sun-200 dark:border-abyss-700">
                    <h2 class="text-2xl font-bold text-abyss-900 dark:text-platinum-50 mb-6">Continue Learning</h2>

                    <div v-if="currentModule" class="space-y-4">
                        <div class="flex items-start justify-between mb-4">
                            <div>
                                <h3 class="text-xl font-bold text-abyss-900 dark:text-platinum-50">{{ currentModule.title }}</h3>
                                <p class="text-platinum-600 dark:text-platinum-400 mt-1">{{ currentModule.description }}</p>
                            </div>
                            <span class="px-3 py-1 bg-kaitoke-green-100 dark:bg-kaitoke-green-900/30 text-kaitoke-green-700 dark:text-kaitoke-green-300 text-sm font-medium rounded-full">
                                {{ currentModule.category }}
                            </span>
                        </div>

                        <!-- Progress Bar -->
                        <div class="space-y-2">
                            <div class="flex items-center justify-between text-sm">
                                <span class="text-platinum-600 dark:text-platinum-400">Progress</span>
                                <span class="font-medium text-abyss-900 dark:text-platinum-50">{{ currentModule.progress }}%</span>
                            </div>
                            <div class="w-full h-2 bg-sun-200 dark:bg-abyss-700 rounded-full overflow-hidden">
                                <div class="h-full bg-gradient-to-r from-kaitoke-green-500 to-emerald-500 rounded-full transition-all duration-300" :style="{ width: currentModule.progress + '%' }"></div>
                            </div>
                        </div>

                        <button class="w-full mt-6 px-6 py-3 bg-kaitoke-green-600 hover:bg-kaitoke-green-700 text-white font-semibold rounded-lg transition shadow-md hover:shadow-lg">
                            Continue Module →
                        </button>
                    </div>
                </div>

                <!-- Active Learning Paths -->
                <div class="bg-white dark:bg-abyss-800 rounded-lg p-8 border border-sun-200 dark:border-abyss-700">
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-2xl font-bold text-abyss-900 dark:text-platinum-50">Your Learning Paths</h2>
                        <router-link to="#" class="text-kaitoke-green-600 dark:text-kaitoke-green-400 hover:text-kaitoke-green-700 dark:hover:text-kaitoke-green-300 text-sm font-medium">
                            View All →
                        </router-link>
                    </div>

                    <div class="space-y-3">
                        <div v-for="path in learningPaths" :key="path.id" class="p-4 border border-sun-100 dark:border-abyss-700 rounded-lg hover:border-kaitoke-green-300 dark:hover:border-kaitoke-green-800 transition">
                            <div class="flex items-center justify-between mb-3">
                                <h3 class="font-bold text-abyss-900 dark:text-platinum-50">{{ path.name }}</h3>
                                <span class="text-sm font-medium text-platinum-600 dark:text-platinum-400">{{ path.progress }}%</span>
                            </div>
                            <div class="w-full h-1.5 bg-sun-200 dark:bg-abyss-700 rounded-full overflow-hidden">
                                <div class="h-full bg-gradient-to-r from-kaitoke-green-500 to-emerald-500" :style="{ width: path.progress + '%' }"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Recent Activities -->
                <div class="bg-white dark:bg-abyss-800 rounded-lg p-8 border border-sun-200 dark:border-abyss-700">
                    <h2 class="text-2xl font-bold text-abyss-900 dark:text-platinum-50 mb-6">Recent Activity</h2>

                    <div class="space-y-4">
                        <div v-for="activity in recentActivities" :key="activity.id" class="flex items-start gap-4 pb-4 border-b border-sun-100 dark:border-abyss-700 last:border-b-0">
                            <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" :class="activity.iconBg">
                                <svg class="w-5 h-5" :class="activity.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path v-if="activity.type === 'quiz'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    <path v-else-if="activity.type === 'badge'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="font-medium text-abyss-900 dark:text-platinum-50">{{ activity.title }}</p>
                                <p class="text-sm text-platinum-600 dark:text-platinum-400">{{ activity.description }}</p>
                            </div>
                            <span class="text-xs text-platinum-600 dark:text-platinum-400 flex-shrink-0">{{ activity.time }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Sidebar: Achievements & Leaderboard -->
            <div class="space-y-8">
                <!-- Achievements -->
                <div class="bg-white dark:bg-abyss-800 rounded-lg p-6 border border-sun-200 dark:border-abyss-700">
                    <h3 class="text-xl font-bold text-abyss-900 dark:text-platinum-50 mb-4">Achievements</h3>

                    <div class="grid grid-cols-3 gap-3">
                        <div v-for="badge in badges" :key="badge.id" class="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-sun-50 dark:hover:bg-abyss-700 transition cursor-pointer" :title="badge.name">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center text-2xl" :class="badge.bgColor">
                                {{ badge.emoji }}
                            </div>
                            <span class="text-xs text-center font-medium text-abyss-900 dark:text-platinum-50 truncate">{{ badge.name }}</span>
                        </div>

                        <div class="flex flex-col items-center gap-2 p-3 rounded-lg bg-sun-50 dark:bg-abyss-700/50 border-2 border-dashed border-sun-300 dark:border-abyss-600">
                            <div class="w-12 h-12 rounded-full flex items-center justify-center text-2xl opacity-30">
                                🏆
                            </div>
                            <span class="text-xs text-center font-medium text-platinum-600 dark:text-platinum-400 text-[11px]">More coming</span>
                        </div>
                    </div>
                </div>

                <!-- Leaderboard -->
                <div class="bg-white dark:bg-abyss-800 rounded-lg p-6 border border-sun-200 dark:border-abyss-700">
                    <h3 class="text-xl font-bold text-abyss-900 dark:text-platinum-50 mb-4">Top Learners</h3>

                    <div class="space-y-3">
                        <div v-for="(leaderEntry, index) in leaderboard" :key="leaderEntry.id" class="flex items-center gap-3 p-3 rounded-lg" :class="index === 0 ? 'bg-sun-50 dark:bg-sun-900/20' : 'hover:bg-sun-50 dark:hover:bg-abyss-700 transition'">
                            <div class="w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm" :class="index === 0 ? 'bg-sun-500 text-white' : 'bg-sun-100 dark:bg-sun-900/30 text-sun-700 dark:text-sun-300'">
                                {{ index + 1 }}
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="font-medium text-abyss-900 dark:text-platinum-50 text-sm truncate">{{ leaderEntry.name }}</p>
                                <p class="text-xs text-platinum-600 dark:text-platinum-400">{{ leaderEntry.level }}</p>
                            </div>
                            <span class="text-sm font-bold text-sun-600 dark:text-sun-400 flex-shrink-0">{{ leaderEntry.points }}</span>
                        </div>

                        <button class="w-full mt-4 px-4 py-2 border border-sun-200 dark:border-abyss-600 text-abyss-900 dark:text-platinum-200 text-sm font-medium rounded-lg hover:bg-sun-50 dark:hover:bg-abyss-700 transition">
                            View Full Leaderboard
                        </button>
                    </div>
                </div>

                <!-- Resources -->
                <div class="bg-gradient-to-b from-kaitoke-green-50 to-emerald-50 dark:from-kaitoke-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 border border-kaitoke-green-200 dark:border-kaitoke-green-800">
                    <h3 class="text-xl font-bold text-abyss-900 dark:text-platinum-50 mb-4">Quick Resources</h3>

                    <div class="space-y-2">
                        <a href="#" class="flex items-center gap-2 p-2 rounded-lg hover:bg-kaitoke-green-100 dark:hover:bg-kaitoke-green-900/30 transition text-sm text-abyss-900 dark:text-platinum-200">
                            <svg class="w-4 h-4 text-kaitoke-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Learning Guide
                        </a>
                        <a href="#" class="flex items-center gap-2 p-2 rounded-lg hover:bg-kaitoke-green-100 dark:hover:bg-kaitoke-green-900/30 transition text-sm text-abyss-900 dark:text-platinum-200">
                            <svg class="w-4 h-4 text-kaitoke-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Support Chat
                        </a>
                        <a href="#" class="flex items-center gap-2 p-2 rounded-lg hover:bg-kaitoke-green-100 dark:hover:bg-kaitoke-green-900/30 transition text-sm text-abyss-900 dark:text-platinum-200">
                            <svg class="w-4 h-4 text-kaitoke-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                            Settings
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Mock user data - replace with actual auth store
const currentUser = ref({
    firstName: 'Alex',
    lastName: 'Johnson'
})

const userFirstName = computed(() => currentUser.value.firstName)

// Stats
const stats = ref({
    totalPoints: 2450,
    modulesCompleted: 8,
    badgesEarned: 5,
    currentLevel: 7
})

// Current module being worked on
const currentModule = ref({
    id: 1,
    title: 'Gender Equality & Empowerment',
    description: 'Learn about gender equality, social implications, and how to be an advocate for change.',
    category: 'GAD',
    progress: 65
})

// Learning paths
const learningPaths = ref([
    {
        id: 1,
        name: 'Gender & Development Essentials',
        progress: 75
    },
    {
        id: 2,
        name: 'Sexual Health & Safety',
        progress: 45
    },
    {
        id: 3,
        name: 'Violence Prevention Awareness',
        progress: 60
    }
])

// Recent activities
const recentActivities = ref([
    {
        id: 1,
        type: 'quiz',
        title: 'Quiz: Gender Equality',
        description: 'Completed with 92% score',
        time: '2 hours ago',
        iconBg: 'bg-kaitoke-green-100 dark:bg-kaitoke-green-900/30',
        iconColor: 'text-kaitoke-green-600'
    },
    {
        id: 2,
        type: 'badge',
        title: 'Badge Earned: Knowledge Seeker',
        description: 'You completed 5 modules!',
        time: '1 day ago',
        iconBg: 'bg-sun-100 dark:bg-sun-900/30',
        iconColor: 'text-sun-600'
    },
    {
        id: 3,
        type: 'activity',
        title: 'Scenario Challenge: Making Safe Choices',
        description: 'Completed interactive scenario',
        time: '2 days ago',
        iconBg: 'bg-blue-100 dark:bg-blue-900/30',
        iconColor: 'text-blue-600'
    }
])

// Badges earned
const badges = ref([
    {
        id: 1,
        name: 'Quick Start',
        emoji: '🚀',
        bgColor: 'bg-sun-100 dark:bg-sun-900/30'
    },
    {
        id: 2,
        name: 'Committed',
        emoji: '💪',
        bgColor: 'bg-kaitoke-green-100 dark:bg-kaitoke-green-900/30'
    },
    {
        id: 3,
        name: 'Scholar',
        emoji: '📚',
        bgColor: 'bg-blue-100 dark:bg-blue-900/30'
    },
    {
        id: 4,
        name: 'Quiz Master',
        emoji: '🧠',
        bgColor: 'bg-electric-lime-100 dark:bg-electric-lime-900/30'
    },
    {
        id: 5,
        name: 'Rising Star',
        emoji: '⭐',
        bgColor: 'bg-purple-100 dark:bg-purple-900/30'
    }
])

// Leaderboard
const leaderboard = ref([
    {
        id: 1,
        name: 'Sarah Chen',
        level: 'Level 12',
        points: 4850
    },
    {
        id: 2,
        name: 'Marcus Williams',
        level: 'Level 10',
        points: 3920
    },
    {
        id: 3,
        name: 'You',
        level: 'Level 7',
        points: 2450
    },
    {
        id: 4,
        name: 'Jamie Torres',
        level: 'Level 8',
        points: 2890
    },
    {
        id: 5,
        name: 'Emily Park',
        level: 'Level 6',
        points: 1650
    }
])
</script>
