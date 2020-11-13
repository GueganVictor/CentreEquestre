<template>
    <v-app id="inspire">
        <v-navigation-drawer
            v-model="drawer"
            app
            disable-resize-watcher
            mobile-breakpoint="0"
            clipped
        >
            <v-list dense>
                <router-link to="/dashboard/">
                    <v-list-item link>
                        <v-list-item-action>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Home</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link to="/dashboard/users">
                    <v-list-item link>
                        <v-list-item-action>
                            <v-icon>mdi-account-multiple</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Users</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link to="/dashboard/awards">
                    <v-list-item link>
                        <v-list-item-action>
                            <v-icon>mdi-trophy-variant</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Awards</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link to="/dashboard/publications">
                    <v-list-item link>
                        <v-list-item-action>
                            <v-icon>mdi-book-multiple</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Publications</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link to="/dashboard/research_domains">
                    <v-list-item link>
                        <v-list-item-action>
                            <v-icon>mdi-book-multiple</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>Research Domains</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link to="/dashboard/Professor2Publications">
                    <v-list-item link>
                        <v-list-item-action>
                            <v-icon>mdi-link-variant</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title
                                >Professor2Publications</v-list-item-title
                            >
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link to="/dashboard/Professor2Awards">
                    <v-list-item link>
                        <v-list-item-action>
                            <v-icon>mdi-link</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title
                                >Professor2Awards</v-list-item-title
                            >
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link to="/dashboard/Professor2Domains">
                    <v-list-item link>
                        <v-list-item-action>
                            <v-icon>mdi-link-variant</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title
                                >Professor2Domains</v-list-item-title
                            >
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link to="/dashboard/Publication2Awards">
                    <v-list-item link>
                        <v-list-item-action>
                            <v-icon>mdi-link</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title
                                >Publication2Awards</v-list-item-title
                            >
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link to="/dashboard/Publication2Domains">
                    <v-list-item link>
                        <v-list-item-action>
                            <v-icon>mdi-link-variant</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title
                                >Publication2Domain</v-list-item-title
                            >
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app clipped-left>
            <v-toolbar-title>Equideo Dashboard</v-toolbar-title>
            <v-spacer></v-spacer>

            <a href="/"><v-btn text>Return to website</v-btn></a>
        </v-app-bar>

        <v-main>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="10">
                        <router-view></router-view>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>

        <v-footer app>
            <span>&copy; 2020</span>
        </v-footer>
    </v-app>
</template>

<!--  -->

<script>
export default {
    props: {},
    data: () => ({
        drawer: null
    }),
    created() {
        this.$vuetify.theme.dark = true;
    },
    methods: {}
};
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>
