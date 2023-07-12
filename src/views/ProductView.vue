<template>
  <div>
    <div class="row mt-4">
      <div class="col">
        <h1>List Product</h1>
      </div>
      <div class="col">
        <a class="btn btn-primary btn-sm" href="/add_product">Add Product</a>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <b-table
          striped
          hover
          :items="items"
          :fields="fields"
          label-sort-asc=""
          label-sort-desc=""
          label-sort-clear=""
        >
          <template v-slot:cell(actions)="{ item }">
            <b-button @click="editItem(item.id)">Edit</b-button>
          </template>
        </b-table>
      </div>
      <div class="col-lg-6">
        <table class="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, i) in products" :key="i">
              <td>{{ product.id }}</td>
              <td>{{ product.name }}</td>
              <td>{{ product.type }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [
        { id: 1, type: "Handphone", name: "Samsung" },
        { id: 2, type: "Television", name: "Polytron" },
        { id: 3, type: "Laptop", name: "Macbook" },
      ],
      fields: [
        {
          key: "id",
          sortable: true,
        },
        {
          key: "type",
          sortable: true,
        },
        {
          key: "name",
          sortable: true,
        },
        { key: "actions" },
      ],
      products: [],
    };
  },
  methods: {
    editItem(item) {
      console.log(item);
    },
    getDataProducts() {
      axios.get("http://127.0.0.1:3000/api/products").then((response) => {
        this.products = response.data;
      });
      console.log(this.products);
    },
  },
  mounted() {
    this.getDataProducts();
  },
};
</script>
