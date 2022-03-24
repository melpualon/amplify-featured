<template>
  <div class="home">
    <Authenticator >
      <template v-slot="{user, signOut} ">
        <h3> Hi {{ user.attributes.email }}</h3>
        <button @click="signOut">Sign Out</button>
      </template>
      <template v-slot:sign-up-header>
        <h3>Custom Sign In Header</h3>
      </template>
      <template v-slot:sign-up-footer>
        <h3>Custom Sign In Footer</h3>
      </template>
    </Authenticator>
  </div>
</template>

// variation="modal"
// :social-providers="['facebook']"

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import { defineComponent } from 'vue'
import { Authenticator } from '@aws-amplify/ui-vue'

export default {
  name: 'HomeView',
  components: { Authenticator }
}
</script>

<style>
[data-amplify-theme] {
  --amplify-colors-font-primary: #333;
  /* you can also use references: */
  --amplify-colors-font-secondary: red;
}

.amplify-button {
  font-size: 2rem;
  padding: 1rem 2rem;
  background: none;
  border: 2px solid black;
}

.amplify-button:hover {
  background: red !important;
}
</style>