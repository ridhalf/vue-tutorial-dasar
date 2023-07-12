<template>
    <div>
        <div class="row">
            <div class="col-lg-6">
                <h1>Add Data</h1>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-lg-6">
                <b-form @submit="onSubmit">
                <b-form-group id="input-group-1" label="Product Type:" label-for="type">
                    <b-form-input id="type" v-model="form.type" placeholder="Enter type" required></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Product Name:" label-for="name">
                    <b-form-input id="name" v-model="form.name" placeholder="Enter name" required></b-form-input>
                </b-form-group>
                <b-button type="submit" class="mt-4" variant="primary">Submit</b-button>
            </b-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                type: '',
                name: '',
            },
            
            
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },
        
    },
    
}
</script>