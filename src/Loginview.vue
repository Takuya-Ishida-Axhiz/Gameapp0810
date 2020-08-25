<template>
    <div>
        <login :config="config"></login>
    </div>
</template>

<script>
import Login from "Login";
import firebase from "firebase";

export default {
  components: {
    Login
  },
  data() {
    return {
      config: {
        signInSuccessUrl: '<url-to-redirect-to-on-success>',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        tosUrl: '<your-tos-url>'
      }
    };
  }
};
</script>