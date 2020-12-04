<template>
    <div class="itemList">
        <ul v-for="item in items" :key="item.id" class="list rounded">
            <div class="items ml-4 d-flex">
                <div class="group1">
                    <li>
                        {{ item.body }}
                    </li>
                </div>
                
                <div class="d-flex ml-2 group2">
                    <h6 @click="remove(item)" class="text-danger">Remove</h6>
                    <h6 @click="complate(item)" class="ml-2">Complet</h6>
                    <h6 @click="edit(item)" class="text-light ml-2">Edit</h6>
                </div>
            </div>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'showTodo',
    computed: {
        ...mapGetters(['items']),
    },
    methods: {
        edit(item) {
            this.$store.dispatch('editItem', item)
        },
        remove(item) {
            this.$store.dispatch('removeItem', item)
        },
        complate(item) {
            this.$store.dispatch('complateItem', item)
        }
    }
}
</script>

<style scoped>
.itemList {
    margin-top: 30px;
}
.list {
    list-style: none;
    color: #eee;
    font-family: Georgia, 'Times New Roman', Times, serif;
    background: rgba(255, 255, 255, .1);
    padding: 5px;
}
.items {
    padding-top: 2px;
    justify-content: space-between;
}
.itemList .list .group2{
    margin-top: 3px;
    padding-right: 5px;
}
h6{
    user-select: none;
}
</style>