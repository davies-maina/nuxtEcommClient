<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" :to="{ name: 'index' }"
          >CART LOGO</nuxt-link
        >

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <template v-for="category in categories">
            <template v-if="category.children.length">
              <div
                class="navbar-item has-dropdown is-hoverable"
                :key="category.slug"
              >
                <nuxt-link
                  class="navbar-link"
                  :to="{
                    name: 'categories-slug',
                    params: { slug: category.slug },
                  }"
                  >{{ category.name }}</nuxt-link
                >

                <div class="navbar-dropdown">
                  <nuxt-link
                    class="navbar-item"
                    :to="{
                      name: 'categories-slug',
                      params: { slug: child.slug },
                    }"
                    v-for="child in category.children"
                    :key="child.slug"
                    >{{ child.name }}</nuxt-link
                  >
                  <!-- <a class="navbar-item"> Jobs </a>
                  <a class="navbar-item"> Contact </a>
                  <hr class="navbar-divider" />
                  <a class="navbar-item"> Report an issue </a> -->
                </div>
              </div>
            </template>

            <template v-else>
              <nuxt-link
                class="navbar-item"
                :key="category.slug"
                :to="{
                  name: 'categories-slug',
                  params: { slug: category.slug },
                }"
                >{{ category.name }}</nuxt-link
              >
            </template>
          </template>
          <!-- <a class="navbar-item"> Documentation </a> -->
        </div>
        <!-- {{ categories }} -->

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light"> Log in </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      categories: "categories",
    }),
  },
};
</script>