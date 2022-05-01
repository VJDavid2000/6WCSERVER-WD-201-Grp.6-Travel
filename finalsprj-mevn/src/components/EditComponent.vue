<!--
Name: David, Vincent Jericho C.
WD-201 (GROUP 6)
-->

<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h2 class="text-center">Update Your Travel Wishlist</h2>
            <form @submit.prevent="handleUpdateForm">

                <div class="form-group">
                    <label>Client Name</label>
                    <input type="text" class="form-control" v-model="travel.name" required>
                </div>

                <div class="form-group">
                    <label>Travel Location</label>
                    <input type="text" class="form-control" v-model="travel.location" required>
                </div>

                <div class="form-group">
                    <label>Travel Tag No.</label>
                    <input type="text" class="form-control" v-model="travel.num" required>
                </div>

                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="text" class="form-control" v-model="travel.phone" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-danger btn-block">Update Details</button>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            travel: { }
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-travel/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.travel = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-travel/${this.$route.params.id}`;
            axios.put(apiURL, this.travel).then((res) => {
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>
