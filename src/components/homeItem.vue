<template>
  <div class="container pt-5 pl-5 pr-5 pb-3 bg-dark mt-5 shadow-lg rounded">
      <input class="form-control bg-light"
             :value="newItem"
             @change="getItem"
             placeholder="I need to..."
      />
        <button class="btn btn-primary mt-3" @click="addItem">
          Add to Cart
        </button>
        
        <show-item />
        <complate-item />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import showItem from './showItem'
import complateItem from './complateItem'

export default {
    name: 'homeItem',
    computed: {
        ...mapGetters(['newItem'])
    },
    components: {
        showItem,
        complateItem
    },
    methods: {
        getItem(e) {
            this.$store.dispatch('getItem', e.target.value)
        },
        addItem() {
            this.$store.dispatch('addItem'),
            this.$store.dispatch('clearItem')
        }
    }
}
</script>

<style scoped>
::placeholder{
    font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>