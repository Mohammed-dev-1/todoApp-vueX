<template>
    <div class="complateList shadow-lg rounded">
        <div class="container pb-3">
            <div class="p-2" v-if="complateItem.length"><h4>complet List :</h4></div>
            <ul v-for="item in complateItem" :key="item.id" class="list  rounded">
                <div class="items ml-4 d-flex">
                    <div class="group1">
                        <li>
                            {{ item.body }}
                        </li>
                    </div>
                        
                    <div class="ml-2 pt-2 pr-1 group2">
                        <h6 @click="remove(item)" class="btn btn-danger ml-2">Remove</h6>
                    </div>
                </div>
            </ul>
        </div>    
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'complate',
    computed: {
        ...mapGetters(['complateItem'])
    },
    methods: {
        remove(item) {
            this.$store.dispatch('removeItem', item)
        }
    }
}
</script>

<style scoped>
.complateList {
    color: #e6e6e6;
    background: rgba(255, 255, 255, .1);
}
.list {
    list-style: none;
    color: #262626;
    font-family: Georgia, 'Times New Roman', Times, serif;
    background: #e6e6e6;
    padding: 4px;
}
.items {
    justify-content: space-between;
    align-items: center;
}
h6{
    user-select: none;
}
</style>