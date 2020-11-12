<template>
    <v-layout column nowrap>
        <toolbar></toolbar>

        <section>
            <v-parallax :src="heroImg" height="700">
                <v-layout
                    column
                    align-center
                    justify-center
                    class="white--text"
                >
                    <h1 class="text-xl mb-2 text-center">RLab</h1>
                    <div class="subheading mb-3 text-center">
                        Research Lab based in Taipei
                    </div>
                    <router-link to="/dashboard/">
                    <v-btn
                        class="blue lighten-2 mt-5"
                        dark
                        large
                        href="/pre-made-themes"
                    >
                        Get Started
                    </v-btn>
                    </router-link>
                </v-layout>
            </v-parallax>
        </section>

        <section>
            <v-layout column wrap class="m-5" align-center>
                <v-flex xs12 sm4 class="my-3">
                    <div class="text-center">
                        <h2 class="headline">
                            The best research lab in town
                        </h2>
                        <span class="subheading">
                            Cras facilisis mi vitae nunc
                        </span>
                    </div>
                </v-flex>
                <v-flex xs12>
                    <v-container grid-list-xl>
                        <v-layout row wrap align-center>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-center">
                                        <v-icon
                                            x-large
                                            class="blue--text text--lighten-2"
                                            >mdi-invert-colors</v-icon
                                        >
                                    </v-card-text>
                                    <v-card-title
                                        primary-title
                                        class="layout justify-center"
                                    >
                                        <div class="headline text-center">
                                            Design Center
                                        </div>
                                    </v-card-title>
                                    <v-card-text>
                                        Cras facilisis mi vitae nunc lobortis
                                        pharetra. Nulla volutpat tincidunt
                                        ornare. Pellentesque habitant morbi
                                        tristique senectus et netus et malesuada
                                        fames ac turpis egestas. Nullam in
                                        aliquet odio. Aliquam eu est vitae
                                        tellus bibendum tincidunt. Suspendisse
                                        potenti.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-center">
                                        <v-icon
                                            x-large
                                            class="blue--text text--lighten-2"
                                            >mdi-flash</v-icon
                                        >
                                    </v-card-text>
                                    <v-card-title
                                        primary-title
                                        class="layout justify-center"
                                    >
                                        <div class="headline">
                                            Quick responses
                                        </div>
                                    </v-card-title>
                                    <v-card-text>
                                        Cras facilisis mi vitae nunc lobortis
                                        pharetra. Nulla volutpat tincidunt
                                        ornare. Pellentesque habitant morbi
                                        tristique senectus et netus et malesuada
                                        fames ac turpis egestas. Nullam in
                                        aliquet odio. Aliquam eu est vitae
                                        tellus bibendum tincidunt. Suspendisse
                                        potenti.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-center">
                                        <v-icon
                                            x-large
                                            class="blue--text text--lighten-2"
                                            >mdi-pen</v-icon
                                        >
                                    </v-card-text>
                                    <v-card-title
                                        primary-title
                                        class="layout justify-center"
                                    >
                                        <div class="headline text-center">
                                            Completely Open Sourced
                                        </div>
                                    </v-card-title>
                                    <v-card-text>
                                        Cras facilisis mi vitae nunc lobortis
                                        pharetra. Nulla volutpat tincidunt
                                        ornare. Pellentesque habitant morbi
                                        tristique senectus et netus et malesuada
                                        fames ac turpis egestas. Nullam in
                                        aliquet odio. Aliquam eu est vitae
                                        tellus bibendum tincidunt. Suspendisse
                                        potenti.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </section>

        <section>
            <v-parallax :src="sectionImg" height="380">
                <v-layout column align-center justify-center>
                    <div class="headline white--text mb-3 text-center">
                        Get in touch with us
                    </div>
                    <em>Have quick meetings</em>
                </v-layout>
            </v-parallax>
        </section>

        <section>
            <v-container grid-list-xl>
                <v-layout row wrap justify-center class="my-5">
                    <v-flex xs12 sm4>
                        <v-card class="elevation-0 transparent">
                            <v-card-title
                                primary-title
                                class="layout justify-center"
                            >
                                <div class="headline">Company info</div>
                            </v-card-title>
                            <v-card-text>
                                Cras facilisis mi vitae nunc lobortis pharetra.
                                Nulla volutpat tincidunt ornare. Pellentesque
                                habitant morbi tristique senectus et netus et
                                malesuada fames ac turpis egestas. Nullam in
                                aliquet odio. Aliquam eu est vitae tellus
                                bibendum tincidunt. Suspendisse potenti.
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 sm4 offset-sm1>
                        <v-card class="elevation-0 transparent">
                            <v-card-title
                                primary-title
                                class="layout justify-center"
                            >
                                <div class="headline">Contact us</div>
                            </v-card-title>
                            <v-card-text>
                                Cras facilisis mi vitae nunc lobortis pharetra.
                                Nulla volutpat tincidunt ornare.
                            </v-card-text>
                            <v-list class="transparent">
                                <v-list-item>
                                    <v-list-item-action>
                                        <v-icon
                                            class="blue--text text--lighten-2"
                                            >mdi-phone</v-icon
                                        >
                                    </v-list-item-action>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            >777-867-5309</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-action>
                                        <v-icon
                                            class="blue--text text--lighten-2"
                                            >mdi-map</v-icon
                                        >
                                    </v-list-item-action>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            >Taipei, TW</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-action>
                                        <v-icon
                                            class="blue--text text--lighten-2"
                                            >mdi-email</v-icon
                                        >
                                    </v-list-item-action>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            >contact@rlab.com</v-list-item-title
                                        >
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>

        <v-footer class="blue darken-2">
            <v-layout row wrap align-center>
                <v-flex xs12>
                    <div class="white--text ml-3">
                        Made with
                        <a
                            class="white--text"
                            href="https://vuetifyjs.com"
                            target="_blank"
                            >Vuetify</a
                        >
                    </div>
                </v-flex>
            </v-layout>
        </v-footer>
    </v-layout>
</template>

<script>
export default {
    name: "MainPage",
    components: {},

    data() {
        return {
            title: "Your Logo",
            heroImg: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
            sectionImg:
                "https://cdn.trendhunterstatic.com/thumbs/cool-backgrounds.jpeg"
        };
    },
    created() {
        this.$vuetify.theme.dark = true;
    }
};
</script>
