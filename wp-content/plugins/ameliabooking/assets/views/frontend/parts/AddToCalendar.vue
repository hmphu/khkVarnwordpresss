<template>
  <div>
    <div id="am-add-to-calendar" class="am-success-payment">

      <!-- Congratulations -->
      <h4>{{ $root.labels.congratulations }}!</h4>

      <!-- Trophy -->
      <div v-if="addToCalendarData.type === 'event'" class="am-svg-wrapper">
        <svg width="93px" height="75px" viewBox="0 0 93 75" version="1.1" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink">
          <!-- Generator: Sketch 48.2 (47327) - http://www.bohemiancoding.com/sketch -->
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g stroke="none" stroke-width="1" :fill="addToCalendarData.color" fill-rule="evenodd">
            <g id="trophy-2" :fill="addToCalendarData.color">
              <path d="M60.4208496,70.6040039 L60.4208496,57.4158691 L32.5792969,57.4158691 L32.5792969,70.6040039 L27.4505859,70.6040039 L27.4505859,75 L65.5495605,75 L65.5495605,70.6040039 L60.4208496,70.6040039 Z M54.5595703,67.673291 L38.4407227,67.673291 L38.4407227,63.2772949 L54.5595703,63.2772949 L54.5595703,67.673291 Z"
                    id="Shape" :fill="addToCalendarData.color" fill-rule="nonzero" opacity="0.70165308"></path>
              <path d="M72.8176758,6.71499023 C72.9522949,5.34711914 73.0227539,3.97749023 73.0227539,2.61196289 C55.5124512,-0.870703125 37.4876953,-0.870703125 19.9772461,2.61196289 C19.9772461,3.97734375 20.0477051,5.34697266 20.1823242,6.71499023 L9.08979492,6.71499023 L9.39433594,9.18237305 C10.3132324,16.6252441 12.7149902,23.8586426 16.5328125,30.6815918 C16.809082,31.1752441 17.0958984,31.6718262 17.385498,32.1575684 C19.3458984,35.4452637 22.9558594,37.4874023 26.8066406,37.4874023 L35.8078125,37.4874023 C37.7727539,39.2396484 39.8791992,40.7935547 42.1040039,42.1038574 L42.1040039,53.0200195 L50.8959961,53.0200195 L50.8959961,42.1038574 C53.1208008,40.7935547 55.2272461,39.2396484 57.1921875,37.4874023 L66.1933594,37.4874023 C70.0439941,37.4874023 73.6539551,35.4451172 75.614502,32.1578613 C75.9041016,31.6724121 76.190918,31.1758301 76.4671875,30.6818848 C80.2851563,23.8587891 82.6869141,16.6252441 83.6056641,9.18251953 L83.9103516,6.71513672 C83.9102051,6.71499023 72.8176758,6.71499023 72.8176758,6.71499023 Z M26.8069336,33.0912598 C24.4962891,33.0912598 22.3331543,31.8706055 21.1614258,29.905957 C20.8924805,29.4549316 20.6260254,28.9937988 20.3693848,28.5351562 C17.2555664,22.9702148 15.1592285,17.1203613 14.1224121,11.1111328 L20.840332,11.1111328 C22.4507813,19.143457 26.2381348,26.8858887 31.5210938,33.0912598 L26.8069336,33.0912598 Z M72.6310547,28.5353027 C72.3742676,28.9940918 72.1081055,29.4552246 71.8391602,29.905957 C70.6674316,31.870752 68.5041504,33.0912598 66.1936523,33.0912598 L61.4794922,33.0912598 C66.7624512,26.8858887 70.5498047,19.1433105 72.1602539,11.1111328 L78.8780273,11.1111328 C77.8412109,17.1202148 75.7450195,22.9700684 72.6310547,28.5353027 Z"
                    id="Shape" :fill="addToCalendarData.color" fill-rule="nonzero" opacity="0.70165308"></path>
              <path d="M48.8443002,15.7224529 C45.5005423,6.20144843 46.3007112,6.42871364 43.03539,15.7224529 C32.8222466,15.9270203 33.3325159,15.2730941 41.2359437,21.2032508 C38.2829325,30.8598674 37.785305,30.199333 45.9401324,24.5849342 C54.312169,30.3481616 53.5240673,30.6147888 50.6431719,21.2032508 C58.7816224,15.0978327 58.7603612,15.9209867 48.8443002,15.7224529 L48.8443002,15.7224529 Z"
                    id="Shape" fill="#FFFFFF"></path>
              <path d="M10.4665585,45.9585064 C7.95874007,38.817753 8.55886675,38.9882019 6.10987581,45.9585064 C-1.54998175,46.1119319 -1.16727978,45.6214873 4.76029109,50.0691048 C2.54553272,57.3115672 2.1723121,56.8161664 8.28843264,52.6053673 C14.5674601,56.9277878 13.9763838,57.1277582 11.8157123,50.0691048 C17.9195501,45.4900412 17.9036042,46.1074067 10.4665585,45.9585064 L10.4665585,45.9585064 Z"
                    id="Shape" :fill="addToCalendarData.color" opacity="0.145471014"></path>
              <path d="M87.4665585,45.9585064 C84.9587401,38.817753 85.5588668,38.9882019 83.1098758,45.9585064 C75.4500183,46.1119319 75.8327202,45.6214873 81.7602911,50.0691048 C79.5455327,57.3115672 79.1723121,56.8161664 85.2884326,52.6053673 C91.5674601,56.9277878 90.9763838,57.1277582 88.8157123,50.0691048 C94.9195501,45.4900412 94.9036042,46.1074067 87.4665585,45.9585064 L87.4665585,45.9585064 Z"
                    id="Shape-Copy" :fill="addToCalendarData.color" opacity="0.145471014"></path>
            </g>
          </g>
        </svg>
      </div>
      <div v-else class="am-svg-wrapper">
        <img class="svg am-congrats" :src="$root.getUrl+'public/img/trophy.svg'">
      </div>

      <!-- Messages -->
      <div>
        <p v-if="addToCalendarData.status === 'approved'">{{ $root.labels.booking_completed_approved }}</p>
        <p v-if="addToCalendarData.status === 'pending'">{{ $root.labels.booking_completed_pending }}</p>
      </div>

      <br>

      <!-- Selectbox -->
      <el-row type="flex" justify="center" v-if="addToCalendarData.active">
        <el-col :sm="12">
          <el-select :placeholder="$root.labels.select_calendar" v-model="calendarIndex">
            <el-option
                v-for="(item, index) in calendars"
                :key="index"
                :label="item.label"
                :value="index">
            </el-option>
          </el-select>
        </el-col>
      </el-row>

      <br>

      <!-- Button -->
      <div :class="{'is-disabled' : calendarIndex === null}" class="el-button el-button--primary calendar-link"
           @mouseover="setBookableConfirmStyle(true)"
           @mouseleave="setBookableConfirmStyle(false)"
           :style="bookableConfirmStyle"
           v-if="addToCalendarData.active">
        <a v-if="calendarIndex !== null"
           @click="executeIfMultipleLinks"
           :href="calendars[calendarIndex].links[0]"
           :target="(calendars[calendarIndex].type === 'ios' || calendars[calendarIndex].type === 'outlook') ? '_self' : '_blank'"
        >
          {{ $root.labels.add_to_calendar }}
        </a>
        <span v-else>
          {{ $root.labels.add_to_calendar }}
        </span>
      </div>

      <!-- Button Redirect URL After Appointment -->
      <div class="el-button el-button--primary redirect-link"
           @mouseover="setBookableConfirmStyle(true)"
           @mouseleave="setBookableConfirmStyle(false)"
           :style="bookableConfirmStyle">
        <a v-if="redirectUrlAfterAppointment !== '' "
           :href="redirectUrlAfterAppointment"
           target="_self"
        >
          {{ $root.labels.finish_appointment }}
        </a>
        <a v-else
           @click="closeDialog()"
        >
          {{ $root.labels.finish_appointment }}
        </a>
      </div>

    </div>
  </div>
</template>

<script>
  import imageMixin from '../../../js/common/mixins/imageMixin'
  import helperMixin from '../../../js/backend/mixins/helperMixin'

  export default {

    mixins: [imageMixin, helperMixin],

    props: {
      bookableType: null,
      addToCalendarData: null
    },

    data () {
      return {
        hoverConfirm: false,
        calendarIndex: null,
        calendars: [],
        redirectUrlAfterAppointment: this.$root.settings.general.redirectUrlAfterAppointment
      }
    },

    mounted () {
      // Customization hook
      if ('beforeAddToCalendarLoaded' in window) {
        window.beforeAddToCalendarLoaded(this.addToCalendarData)
      }

      if (this.addToCalendarData.active) {
        this.showCalendar()
      }

      this.inlineSVG()
      this.scrollView('am-add-to-calendar')
    },

    methods: {
      formatTime: function () {},

      getCalendarLinkData: function () {},

      executeIfMultipleLinks: function () {},

      setBookableConfirmStyle: function () {},

      showCalendar: function () {},

      closeDialog () {
        this.$emit('closeDialogAddToCalendar')
      }
    },

    computed: {
      bookableConfirmStyle () {
        return this.hoverConfirm ? {
          color: this.addToCalendarData.color,
          borderColor: this.addToCalendarData.color,
          backgroundColor: this.addToCalendarData.color,
          opacity: 0.8
        } : {
          color: '#ffffff',
          backgroundColor: this.addToCalendarData.color,
          borderColor: this.addToCalendarData.color,
          opacity: 1
        }
      }
    }

  }
</script>