<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5"
                >Available Meal Plans</v-flex
            >
        </v-layout>
        <v-layout row wrap class="meal-plans">
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="http://source.unsplash.com/hjCA3ecCXAQ"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text"
                                            >KETO</span
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Keto</h3>
                            <div>
                                The Keto diet is a high-fat, adequate-protein,
                                low-carbohydrate diet. The diet forces the body
                                to burn fats rather than carbohydrates by
                                putting the body into ketosis.
                            </div>
                        </div>
                    </v-card-text>
 <!-- <v-card-actions v-if="['menu'].includes($route.name)"> -->
                    <v-card-actions>
                        <v-btn
                            outlined
                            block
                            color="green"
                            @click="showRecipes('keto')"
                            data-cy="plansKetoBtn"
                        >
                            Select This Plan</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="http://source.unsplash.com/6S27S6pZ6o0"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text"
                                            >PALEO</span
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Paleo</h3>
                            <div>
                                The Paleo diet requires the predominant
                                consumption of foods presumed to have been the
                                only foods available to or consumed by humans
                                during the Paleolithic era.
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            outlined
                            block
                            color="green"
                            @click="showRecipes('paleo')"
                            data-cy="plansPaleoBtn"
                        >
                            Select This Plan</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img
                            src="http://source.unsplash.com/1SPu0KT-Ejg"
                            height="500px"
                        >
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text"
                                            >VEGAN</span
                                        >
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>

                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">Vegan</h3>
                            <div>
                                The vegan diet abstains from the use of animal
                                products. The vegan diet does not consume meat,
                                diary products, eggs or any all other
                                animal-derived ingredients.
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            outlined
                            block
                            color="green"
                            @click="showRecipes('vegan')"
                            data-cy="plansVeganBtn"
                        >
                            Select This Plan</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomePlans',
    methods: {
        showRecipes(plan) {
            alert(plan);
            this.$store.dispatch('getRecipes', plan);
        }
    }
};

//test for axios
/*
export default {
    name: 'HomePlans',
    data() {
        return {
            recipes: []
        };
    },
    methods: {
        showRecipes(plan) {
            axios
                .get('https://api.edamam.com/search', {
                    params: {
                        q: plan,
                        app_id: '5b6623d5',
                        app_key: '46674aa2193dbb7b88ffd897331e661a',
                        from: 0,
                        to: 9
                    }
                })
                .then(response => {
                    response = response.data;
                    this.recipes = response.hits;
                })
                .catch(() => {
                    this.recipes = [];
                });
        }
    }
};
*/
</script>

<style scoped></style>
