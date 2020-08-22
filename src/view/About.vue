<template>
    <v-container>
        <v-layout column>
            <h1 class="title my-3">My Recipes</h1>
            <div
                v-for="(item, idx) in userRecipes"
                class="subheading mb-2"
                :key="idx"
            >
                {{ item }}
            </div>
            <v-flex mt-4>
                <v-btn color="primary" to="/menu">Go To Menu</v-btn>
                {{isAuthenticated}}
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'About',
    data() {
        return {
            isAuthenticated: this.$store.getters.isAuthenticated
        };
    },
    computed: {
        userRecipes() {
            return this.$store.state.userRecipes;
            // return ['hello','world']
        }
    },
    mounted() {
        this.getRecipes();
    },
    methods: {
        getRecipes() {
            this.$store.dispatch('getUserRecipes');
            console.log(this.$store.getters);
            console.log(this.$store.getters.isAuthenticated);
            // console.log('get Recipe');
        }
    }
};
</script>

<style scoped></style>