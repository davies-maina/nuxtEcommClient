<template>
  <div>
    <div class="section">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column is-half">
            <img src="http://via.placeholder.com/620x620" alt="Product name" />
          </div>
          <div class="column is-half">
            <section class="section">
              <h1 class="title is-4">{{ product.name }}</h1>
              <p>{{ product.description }}</p>

              <hr />
              <!-- {{ product }} -->
              <span class="tag is-rounded is-medium">
                {{ product.price }}
              </span>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  //   data() {
  //     return {
  //       product: [],
  //     };
  //   },
  async asyncData({ params, store, $axios }) {
    // let response = await $axios.$get(`products/${params.slug}`);
    // return {
    //   product: response.data,
    // };
    let response = await store.dispatch(
      "products/product/fetchProduct",
      params.slug
    );
  },

  computed: {
    ...mapGetters({
      product: "products/product/product",
    }),
  },
};
</script>