<template>
  <div class="home">
    <Authenticator :social-providers="['facebook', 'google']" v-slot="{user, signOut} ">
      <h3> Hi {{ user.attributes.email }}</h3>
      <button @click="signOut">Sign Out</button>
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