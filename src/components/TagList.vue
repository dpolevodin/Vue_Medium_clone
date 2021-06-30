<template>
  <ul class="tag-list">
      <li class="tag-default tag-pill tag-outline ng-binding ng-scope" v-for="tag in tags" :key="tag">
          {{tag}}
      </li>
  </ul>
</template>

<script>
import {mapState} from 'vuex'


export default {
    name: 'MvcTagList',
    computed: {
        ...mapState({
            tags: state => state.article.data.tagList
        }),
    }
}

</script>