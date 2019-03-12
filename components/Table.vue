<template>
  <v-data-table :headers="headers" :items="names" class="elevation-1">
    <template v-slot:items="props">
      <td
        class="text-xs-left"
        v-for="(header,index) of headerData"
        :key="index"
      >{{ props.item[header] }}</td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: ["headers", "names", "headerData"]
};
</script>
