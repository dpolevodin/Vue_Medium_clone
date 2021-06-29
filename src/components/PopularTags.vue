<template>
  <div class="sidebar">
      <div v-if="isLoading">Loading tags...</div>
      <div v-if="error">Something bad happened</div>
      <div v-if="popularTags" class="side-bar">
          <p>Popular tags</p>
          <div class="tag-list">
              <router-link 
                v-for="PopularTag in popularTags" 
                :key="PopularTag" 
                :to="{name: 'tag', params: {slug: popularTag}}"
                class="tag-default tag-pill ng-binding ng-scope"
                >
                  {{PopularTag}}
              </router-link>
          </div>
      </div>
      </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/popularTags'

export default {
    name: 'McvPopularTags',
    computed: {
        ...mapState({
            isLoading: state => state.popularTags.isLoading,
            error: state => state.popularTags.error,
            popularTags: state => state.popularTags.data,
        })
    },
    mounted() {
        this.$store.dispatch(actionTypes.getPopularTags)
    }
}
</script>