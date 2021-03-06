import { Bar } from 'vue-chartjs'

export default {

  extends: Bar,

  props: ['data', 'options'],

  data () {
    return {
      defaultOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            barPercentage: 0.5,
            categoryPercentage: 0.8,
            ticks: {
              stepSize: 1,
              min: 0,
              autoSkip: false
            }
          }],
          yAxes: [{
            gridLines: {
              display: true
            },
            ticks: {
              beginAtZero: true,
              stepSize: 1,
              min: 0,
              userCallback: function (label) {
                if (Math.floor(label) === label) {
                  return label
                }
              }
            }
          }]
        }
      }
    }
  },

  methods: {
    update (reRender) {
      if (reRender) {
        this.renderChart(this.data, this.options)
      }

      this.$data._chart.update()
    }
  },

  mounted () {
    this.renderChart(this.data, this.options)
  }
}
