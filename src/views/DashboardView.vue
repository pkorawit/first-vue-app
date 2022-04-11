<template>
<<<<<<< HEAD
  <Bar v-if="loaded"
=======
  <Bar
    v-if="loaded"
>>>>>>> 08d914074a7771616af5646ffc2d2b96cbd9b82b
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Bar } from 'vue-chartjs/legacy'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: {
    Bar
  },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  mounted(){
    //Get data from Firestore
    this.loaded = false
    const db = this.$firebase.firestore();
    db.collection("teams")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.chartData.labels.push(doc.data().title)
          this.chartData.datasets[0].data.push(doc.data().voteCount)
<<<<<<< HEAD
          this.loaded = true
        });
      });
=======
          this.loaded = true;
        });        
      });
    
>>>>>>> 08d914074a7771616af5646ffc2d2b96cbd9b82b
  },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: [],
        datasets: [
          {
<<<<<<< HEAD
            label: 'No of Vote',
=======
            label: 'Vote Counts',
>>>>>>> 08d914074a7771616af5646ffc2d2b96cbd9b82b
            backgroundColor: 'indigo',
            data: []
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>
