<template>
  <v-dialog v-model="localData">
    <v-card>
      <v-card-title>{{ packageData.package?.name }}</v-card-title>
      <v-card-text>
        <div><strong>Scope:</strong> {{ packageData.package?.scope }}</div>
        <div><strong>Version:</strong> {{ packageData.package?.version }}</div>
        <div><strong>Description:</strong> {{ packageData.package?.description }}</div>
        <div><strong>Keywords:</strong> {{ packageData.package?.keywords?.join(', ') }}</div>
        <div><strong>Date:</strong> {{ packageData.package?.date }}</div>
        <div><strong>NPM:</strong> <a :href="packageData.package?.links?.npm">{{ packageData.package?.links?.npm }}</a></div>
        <div><strong>Homepage:</strong> <a :href="packageData.package?.links?.homepage">{{ packageData.package?.links?.homepage }}</a></div>
        <div><strong>Repository:</strong> <a :href="packageData.package?.links?.repository">{{ packageData.package?.links?.repository }}</a></div>
        <div><strong>Bugs:</strong> <a :href="packageData.package.links?.bugs">{{ packageData.package?.links?.bugs }}</a></div>
        <div><strong>Author:</strong> {{ packageData.package?.author?.name }} ({{ packageData.package?.author?.email }})</div>
        <div><strong>Publisher:</strong> {{ packageData.package?.publisher?.username }} ({{ packageData.package?.publisher?.email }})</div>
        <div><strong>Maintainers:</strong> {{ packageData.package?.maintainers?.map(m => m.username).join(', ') }}</div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" text @click="localData = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'AppPackage',
  props: {
    packageData: {
      type: Object,
      required: true
    }
  },
  computed: {
    localData: {
      get() {
        return true
      },
      set(newValue) {
        this.$emit('input', newValue)
      }
    }
  },
}
</script>

<style scoped>

</style>
