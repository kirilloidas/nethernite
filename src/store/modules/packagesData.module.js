import getApi from '@/api/get'

const packagesDataModule = {
    state: {
        chosenPackage: null,
        packagesNpm: [],
        packageName: '',
        currentPage: 1,
        pageSize: 10
    },
    actions: {
        async getPackagesByName({commit}, payload) {
            const result = await getApi.getPackagesByAxios(payload)
            if (result.data.objects && result.data.objects.length === 0) {
                commit('setMessage', 'Packages not found')
            }
            commit('setPackages', result.data)
        }
    },
    mutations: {
        setChosenPackage(state, payload) {
            state.chosenPackage = payload
        },
        setPackages(state, payload) {
            state.packagesNpm = payload
        },
        setPackageName(state, payload) {
            state.packageName = payload
        },
        setCurrentPage(state, payload) {
            state.currentPage = payload
        },

    },
    getters: {
        chosenPackage: state => state.chosenPackage,
        packageName: state => state.packageName,
        currentPage: state => state.currentPage,
        pageSize: state => state.pageSize,
        packagesNpmObjects: state => state.packagesNpm.objects || [],
        totalPackages: state => state.packagesNpm.total || 0,
    }
}

export default packagesDataModule
