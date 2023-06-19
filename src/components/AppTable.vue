<template>
  <v-container dense fluid class='table-wrapper'>
    <v-table
        fixed-header
        height='100%'
        class='my-table' v-if='packagesNpmObjects.length > 0'>
      <thead style='background: #E4E8FD'>
      <tr>
        <th
            v-for='title in headers'
            :key='title'
            style='background: #E4E8FD'
        >{{ title }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for='pack in packagesNpmObjects'
          :key='pack.package .name'
          @click='packageData = pack; showDialog = true'
      >
        <td>{{ pack.package.name }}</td>
        <td>{{ pack.package.version }}</td>
        <td>{{ pack.package.author?.name || '' }}</td>
        <td>{{ pack.package.description }}</td>
        <td>{{ formatDate(pack.package.date) }}</td>
      </tr>
      </tbody>
    </v-table>
    <v-col v-else class='my-table'></v-col>
    <v-pagination
        v-if='packagesNpmObjects.length > 0'
        v-model='currentPage'
        :total-visible='5'
        :length='Math.ceil(totalPackages / pageSize)'
    />
  </v-container>
  <AppPackage
      v-if='packageData'
      :packageData='packageData'
      @input="showDialog = false"
  />
</template>

<script>
import {mapGetters} from 'vuex'
import AppPackage from '@/components/AppPackage'

export default {
  name: 'AppTable',
  components: {AppPackage},
  computed: {
    ...mapGetters(['packagesNpmObjects', 'totalPackages', 'pageSize', 'packageName']),
    currentPage: {
      get() {
        return this.$store.state.packagesData.currentPage
      },
      set(value) {
        this.$store.commit('setCurrentPage', value)
        if (this.packageName) {
          const packageName = this.packageName
          const from = Math.ceil((this.currentPage - 1) * this.pageSize)
          this.$store.dispatch('getPackagesByName', {packageName, from})
        }
      }
    },
  },
  watch: {
    showDialog(value) {
      if (!value) {
        this.packageData = null
      }
    }
  },
  data() {
    return {
      showDialog: false,
      packageData: null,
      headers: [
        'Name',
        'Version',
        'Author',
        'Description',
        'Date',
      ],
    }
  },
  methods: {
    formatDate(date) {
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
      }).format(new Date(date))
    }
  }
}
</script>

<style lang='scss'>
.table-wrapper {
  height: calc(100% - 250px);

  .my-table {
    height: calc(100vh - 350px);
    min-height: 240px;
    max-width: 100%;
    box-shadow: 0 6px 25px rgba(177, 187, 205, 0.15), 0 1.3px 5.6px rgba(214, 224, 242, 0.09), 0 0.4px 1.7px rgba(214, 224, 242, 0.06);
    border: 1px solid #ccc;

    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    ::-webkit-scrollbar-track {
      background-color: lightblue;
    }

    ::-webkit-scrollbar-thumb {
      background-color: blue;
      border-radius: 16px;
    }

    tbody {
      tr {
        &:hover {
          background-color: rgba(204, 204, 204, .5);
        }
      }
    }

    td {
      word-wrap: break-word;
      max-width: 100px;
    }
  }
}

</style>
