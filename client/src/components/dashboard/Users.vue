<template>
    <v-data-table
        :headers="headers"
        :search="search"
        :items="fetchedData"
        class="elevation-1"
    >
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>My CRUD</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            v-on:click="passwordShow = true"
                            color="primary"
                            dark
                            class="mb-2"
                            v-bind="attrs"
                            v-on="on"
                            >New Item</v-btn
                        >
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field
                                            v-model="editedItem.name"
                                            label="Name"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field
                                            v-model="editedItem.email"
                                            label="Email"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-menu
                                            v-model="menu"
                                            :close-on-content-click="false"
                                            :nudge-right="40"
                                            transition="scale-transition"
                                            offset-y
                                            min-width="290px"
                                        >
                                            <template
                                                v-slot:activator="{ on, attrs }"
                                            >
                                                <v-text-field
                                                    v-model="
                                                        editedItem.birthdate
                                                    "
                                                    label="Birthdate"
                                                    readonly
                                                    v-bind="attrs"
                                                    v-on="on"
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker
                                                v-model="editedItem.birthdate"
                                                @input="menu = false"
                                            ></v-date-picker>
                                        </v-menu>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-select
                                            :items="roles"
                                            v-model="editedItem.role"
                                            label="Role"
                                        ></v-select>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field
                                            v-model="editedItem.address"
                                            label="Address"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field
                                            :disabled="!passwordShow"
                                            v-model="editedItem.password"
                                            label="Password"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-select
                                            :items="genders"
                                            v-model="editedItem.gender"
                                            label="Gender"
                                        ></v-select>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="close"
                                >Cancel</v-btn
                            >
                            <v-btn color="blue darken-1" text @click="save"
                                >Save</v-btn
                            >
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </template>
        <template v-slot:item.action="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)">
                mdi-delete
            </v-icon>
        </template>
        <template v-slot:no-data>
            <v-btn text>No data to show</v-btn>
        </template>
    </v-data-table>
</template>

<script>
export default {
    
    data: () => ({
        // csrf: document
        //     .querySelector('meta[name="csrf-token"]')
        //     .getAttribute("content"),
        url: "get/users",
        passwordShow: false,
        hasError: false,
        genders: ["F", "M"],
        roles: [
            "teacher",
            "professor",
            "undergraduate_student",
            "graduate_student",
            "visitor"
        ],
        menu: false,
        headers: [
            { text: "Name", value: "name" },
            { text: "Email", value: "email" },
            { text: "Birtdate", value: "birthdate" },
            { text: "Role", value: "role" },
            { text: "Address", value: "address", sortable: false },
            { text: "Gender", value: "gender" },
            { text: "Action", value: "action", sortable: false }
        ],
        editedItem: {
            id: 0,
            name: "",
            email: "",
            birthdate: new Date().toISOString().substr(0, 10),
            role: "",
            address: "",
            gender: ""
        },
        defaultItem: {
            id: 0,
            name: "",
            email: "",
            birthdate: "",
            role: "",
            address: "",
            gender: ""
        },
        edited: {},
        search: "",
        dialog: false,
        fetchedData: [],
        editedIndex: -1
    }),
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? "New Item" : "Edit Item";
        }
    },
    watch: {
        dialog(val) {
            val || this.close();
        }
    },
    created() {
        this.url = "http://127.0.0.1:8000/" + this.url;
        this.initialize();
    },
    methods: {
        initialize() {
            const self = this;
            fetch(this.url)
                .then(function(response) {
                    if (response.status !== 200) {
                        console.log(
                            "Looks like there was a problem. Status Code: " +
                                response.status
                        );
                        return;
                    }
                    response.json().then(function(data) {
                        self.fetchedData = data;
                    });
                })
                .catch(function(err) {
                    console.log("Fetch Error :-S", err);
                });
        },
        editItem(item) {
            this.editedIndex = this.fetchedData.indexOf(item);
            this.passwordShow = false;
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },
        deleteItem(item) {
            const index = this.fetchedData.indexOf(item);
            confirm("Are you sure you want to delete this item?") &&
                fetch(this.url + "/" + this.fetchedData[index].id, {
                    method: "DELETE",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "X-CSRF-TOKEN": this.csrf
                    },
                    body: JSON.stringify(this.editedItem)
                })
                    .then(function(response) {
                        return response.json();
                    })
                    .then(function(result) {
                        if (!result.error) {
                            console.log("good");
                        } else {
                            
                            console.log(result);
                        }
                    });
            this.fetchedData.splice(index, 1);
        },
        close() {
            this.dialog = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },
        save() {
            console.log(JSON.stringify(this.editedItem));

            if (this.editedIndex > -1) {
                Object.assign(
                    this.fetchedData[this.editedIndex],
                    this.editedItem
                );
                fetch(this.url + "/" + this.editedItem.id, {
                    method: "PUT",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "X-CSRF-TOKEN": this.csrf
                    },
                    body: JSON.stringify(this.editedItem)
                })
                    .then(function(response) {
                        return response.json();
                    })
                    .then(function(result) {
                        if (!result.error) {
                            console.log("good");
                        } else {
                            
                            console.log(result);
                        }
                    });
            } else {
                fetch(this.url, {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "X-CSRF-TOKEN": this.csrf
                    },
                    body: JSON.stringify(this.editedItem)
                })
                    .then(function(response) {
                        return response.json();
                    })
                    .then(function(result) {
                        if (!result.error) {
                            console.log("good");
                        } else {
                            
                            console.log(result);
                        }
                    }); // a remplacer
                this.fetchedData.push(this.editedItem);
            }
            this.close();
        }
    }
};
</script>
