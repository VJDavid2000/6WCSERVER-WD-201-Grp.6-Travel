<!--
Name: David, Vincent Jericho C.
WD-201 (GROUP 6)
-->

<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Client Name</th>
                        <th>Travel Location</th>
                        <th>Travel Tag No.</th>
                        <th>Phone Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="travel in Travels" :key="travel._id">
                        <td>{{ travel.name }}</td>
                        <td>{{ travel.location }}</td>
                        <td>{{ travel.num }}</td>
                        <td>{{ travel.phone }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: travel._id }}" class="btn btn-success">Change Details
                            </router-link>

                            <button @click.prevent="deleteTravel(travel._id)" class="btn btn-danger">Delete Form</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                Travels: []
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                this.Travels = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteTravel(id){
                let apiURL = `http://localhost:4000/api/delete-travel/${id}`;
                let indexOfArrayItem = this.Travels.findIndex(i => i._id === id);
                if (window.confirm("Do You Wish To Clear Out This Form?")) {
                    axios.delete(apiURL).then(() => {
                        this.Travels.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>
<style>
    .btn-success {
        margin-right: 10px;
    }
</style>
