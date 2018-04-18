<template>
  <div class="animated fadeIn">
      <div class="row">
        <div class="col-12">
          <div>
            <b-card :title="$route.meta.title">
              <router-view></router-view>
            </b-card>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import nav from '../_nav'

export default {
  name: 'sub',
  components: {
  },
  data () {
    return {
      nav: nav.items
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched
    }
  },
  created: function () {
  }
}
</script>
