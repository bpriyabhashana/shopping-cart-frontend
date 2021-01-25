<template>
  <div style="padding: 5px">
    <div class="viewGuideMessage">
      <v-icon size="15">mdi-help-circle-outline</v-icon>
      This would guide you to take best decisions.
    </div>
    <line-chart
      id="taskChart"
      width="400"
      height="400"
      :chart-data="datacollection"
      :options="options"
    ></line-chart>
  </div>
</template>
<script>
import { mapState } from "vuex";
import LineChart from "~/components/charts/chart";

export default {
  layout: "layout_index",
  components: {
    LineChart
  },
  data() {
    return {
      options: null,
      penguinears: [],
      horseshoe: [],
      labels: []
    };
  },
  computed: {
    ...mapState({
      tableItems: state => state.price.tableItems
    })
  },
  mounted() {
    this.$store.dispatch("price/getTableItems");
    this.fillData();
  },
  methods: {
    fillData() {
      let memberActivity = this.memberActivity;
      Promise.all([]).finally(() => {});

      for (let index = 0; index < this.tableItems.length; ++index) {
        let record = this.tableItems[index];
        this.penguinears[index] = record.pricePenguin;
        this.horseshoe[index] = record.priceHorse;
        this.labels[index] = record.amount;
      }
      this.datacollection = {
        labels: this.labels,
        datasets: [
          {
            label: "Penguin-ears",
            borderColor: "#191B73",
            pointBackgroundColor: "#191B73",
            fill: false,
            data: this.penguinears,
            borderWidth: 2,
            lineTension: 0
          },
          {
            label: "Horseshoe",
            borderColor: "#FF0707",
            pointBackgroundColor: "#FF0707",
            fill: false,
            data: this.horseshoe,
            borderWidth: 2,
            lineTension: 0
          }
        ]
      };
      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: "bottom",
          align: "start",
          labels: {
            boxWidth: 12,
            fontColor: "#576377"
          }
        }
      };
    }
  }
};
</script>
<style scoped>
#taskChart {
  background-color: #fafafa;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  padding-top: 10px;
}
</style>
