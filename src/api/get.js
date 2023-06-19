import {api} from '@/api/index'

export default {
    getPackagesByAxios({packageName, from}) {
        return api().get(`/search?text=${packageName}&from=${from}&size=10`)
    }
}
