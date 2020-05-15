<template>
  <div>
    <NavBar></NavBar>
    <v-content>
      <v-container fluid>
        <v-row>
          <v-col>
            <span class="ml-1 title">
              <span class='mt-2'>ALERTS</span>
            </span>
          </v-col>
          <v-col cols="6" lg="4" sm="12">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              solo
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-card>
          <v-data-table
            elevation-1
            :headers="headers"
            :items="Alerts"
            :search="search"
          >
            <template v-slot:item.Status="{item}">
               <v-chip :class="getColor(item.Status)">{{ item.Status }}</v-chip>
            </template>
            <template v-slot:item.Acknowledged="{ item }">
              <v-simple-checkbox
                background-color="primary"
                v-model="item.Acknowledged"
                :disabled="item.Acknowledged"
                @input="AckAlert(item.name)"
                ripple
              ></v-simple-checkbox>
            </template>
          </v-data-table>
        </v-card>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
export default {
  components: {
    NavBar
  },
  computed: {
    Alerts () {
      return this.$store.getters.getAlerts
    }
  },
  methods: {
    getColor (Status) {
      if (Status === 'ACTIVE') return 'red--text'
      if (Status === 'SOLVED') return 'green--text'
    },
    AckAlert (name) {
      console.log(name)
    }
  },
  data () {
    return {
      search: '',
      headers: [
        {
          text: 'SOURCE',
          align: 'start',
          value: 'name'
        },
        { text: 'DATE-TIME', value: 'time' },
        { text: 'STATUS', value: 'Status' },
        { text: 'ACKNOWLEDGE', value: 'Acknowledged' },
        { text: 'ALERT TYPE', value: 'AlertType' }
      ]
    }
  }
}
</script>
