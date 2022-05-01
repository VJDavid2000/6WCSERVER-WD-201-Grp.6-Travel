<!--
Name: David, Vincent Jericho C.
WD-201 (GROUP 6)
-->

<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h2 class="text-center">Add Your Own Travel Wishlist Here</h2>
            <form @submit.prevent="handleSubmitForm">

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
                    <button class="btn btn-danger btn-block">Enter Form</button>
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
                travel: {
                    name: '',
                    location: '',
                    num: '',
                    phone: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create-travel';
                
                axios.post(apiURL, this.travel).then(() => {
                  this.$router.push('/view')
                  this.travel = {
                    name: '',
                    location: '',
                    num: '',
                    phone: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>
