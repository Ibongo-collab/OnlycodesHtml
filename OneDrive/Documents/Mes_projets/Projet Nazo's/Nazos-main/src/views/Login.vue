<template>
    <div class="login">
        <!--========== SPINNER ==========-->
        <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="fullPage"></loading>
        <Header />
        <div class="container">
            <div class="row">
                <div class="col-auto mx-auto">
                    <div class="content rounded">
                        <form>
                            <p class="titre-login">{{ titre }}</p>

                            <!-- Mode d'authentification -->
                            <div class="mode-authentification" v-if="continuemail == false">
                                <button type="button" name="submit" class="button-facebook rounded">
                                    <span class="content">
                                        <i class="bx bxl-facebook-circle"></i>
                                    </span>
                                    Continuer avec Facebook
                                </button>
                                <div class="order-one">
                                    <div class="order-two">
                                        <span class="order-three">
                                            <span class="order-four">ou</span>
                                        </span>
                                    </div>
                                </div>
                                <button type="button" name="submit" class="button rounded" @click="continueToemail">
                                    Continuer avec une adresse e-mail
                                </button>

                                <p class="text-muted">
                                    En continuant, vous acceptez nos
                                    <router-link to="">Conditions Générales</router-link> et notre
                                    <router-link to="">Politique de Confidentialité</router-link>.
                                    Nous utilisons vos données personnelles pour vous offrir une
                                    expérience personnalisée, ainsi que pour mieux comprendre et
                                    améliorer notre service.
                                </p>
                            </div>
                            <!-- Mode d'authentification -->

                            <!--  Formulaire de connexion -->
                            <div class="formulaire-connexion" v-if="continuemail == true">
                                <div class="form-group mb-3">
                                    <label for="email">Adresse email</label>
                                    <input type="email" id="email" class="input-email text-muted" 
                                    pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                        placeholder="Ex. m.malonga@exemple.cg" v-model="email" />
                                    <p class="text-danger" style="font-size: 12px">{{ error }}</p>
                                </div>
                                <div class="form-group mb-3" v-if="passwordDisplay == true">
                                    <label for="password">Mot de passe</label>
                                    <input type="password" id="password" class="input-email text-muted"
                                        placeholder="Mot de passe" v-model="password" />
                                </div>
                                <div class="form-group mb-3">
                                    <button type="button" name="submit" class="button rounded" :disabled="isDisabled"
                                        @click="getEmail" v-if="passwordDisplay == false">
                                        Continuer
                                    </button>
                                    <button type="button" name="submit" class="button rounded" @click="authentification"
                                        v-if="passwordDisplay == true">
                                        Connexion
                                    </button>
                                </div>
                                <router-link to="">Mot de passe oublié ?</router-link>
                            </div>
                            <!--  Formulaire de connexion -->
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
import constant from "../../constant";
// import Swal from "sweetalert2";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
// import md5 from "../../node_modules/md5";

export default {
  name: "Login",
  components: {
    Header,
    Footer,
    Loading,
  },
  data() {
    return {
      continuemail: false,
      passwordDisplay: false,
      emailTest: false,
      email: '',
      password: '',
      titre: 'Inscription ou connexion',
      error: '',
      isLoading: false,
      fullPage: true,
    };
  },
  methods: {
    continueToemail() {
      // test sur l'affichage
      this.continuemail = true;
    },
    getEmail() {
      // test sur l'existance de l'email
      if (this.email != '') {
        axios
          .get(constant.apiURL + 'client/getEmail/' + this.email)
          .then((response) => {
            if (response.data == true) {
              console.log(response.data);
              this.passwordDisplay = true;
              this.titre = 'Connexion avec email';
            } else {
              // instructions
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    authentification() {
      // méthode d'authentification du client
      this.isLoading = true;
        setTimeout(() => {
      axios
        .post(constant.apiURL + 'login', {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          if (response.status == 200) {
              console.log(response.data);
              localStorage.setItem('token', response.data.token);
              localStorage.setItem('userEmail', response.data.email);
            
            this.isLoading = false;
            this.$router.push('/');
          } else {
            this.isLoading = false;
            console.log(response.data);
            this.error = response.data.message;
          }
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
          this.error = 'oups, nous ne parvenons pas à trouver ces identifiants. Réesayez.';
        });
        }, 2000);
    },
  },
  computed: {
    isDisabled() {
      // contrôle sur l'activation du bouton
      return !this.email;
    },
  },
  mounted(){
      if(localStorage.getItem('token')){
          this.$router.push('/')
      }
  }
};
</script>

<style scoped>
.titre-login {
  font-size: 20px;
}

.container-fluid {
  margin-top: 0.5%;
}

/*----- input -----*/
label {
  font-family: "BasisGrotesque";
}

.input-email {
  width: 100%;
  font-size: 13px;
  font-family: "BasisGrotesque";
  padding: 0.8rem 0.4rem;
  outline: #fdcd3b;
  border-radius: 4px;
  border: 1px solid rgb(211, 201, 201);
}

/*----- button -----*/
button {
  font-family: "BasisGrotesque";
}

.button {
  background-color: #f7b655;
  color: #fff;
  padding: 0.8rem 1rem;
  border: 1px solid #f7b655;
  width: 100%;
  outline: none;
  font-weight: 500;
  font-size: 15px;
}

.button:hover {
  transition: 0.3s;
  background-color: #fdb03c;
  color: #fff;
}

.button-facebook {
  background-color: #327bbb;
  color: #fff;
  padding: 0.8rem 1rem;
  border: 1px solid #327bbb;
  width: 100%;
  outline: none;
  font-weight: 500;
  font-size: 15px;
  margin-top: 15px;
}

.button-facebook:hover {
  background-color: #2571b4;
}

.order-one {
  padding-top: 16px;
  padding-bottom: 16px;
}

.order-two {
  display: flex;
  justify-content: center;
  align-items: center;
}

.order-three {
  position: relative;
  width: 100%;
  height: 20px;
}

.order-four {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  background-color: white;
  padding: 0 15px;
  color: #828585;
}

/*----- formulaire -----*/

.text-muted {
  margin-top: 20px;
  font-size: 13px;
}

.content {
  width: 450px;
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 14px;
  border-radius: 1rem;
  padding: 10px 0;
}

.content form {
  padding: 30px;
}

.content input[type="checkbox"] {
  margin-top: 3px;
}

.content .row div:first-child {
  width: 177px;
  padding-left: 15px;
}

.content .row div:last-child {
  width: 177px;
  padding-left: 15px;
}

@media (max-width: 455px) {
  .content {
    width: 390px;
  }
}

@media (max-width: 400px) {
  .content {
    width: 320px;
  }

  .button,
  .button-facebook {
    font-size: 13px;
  }
}

@media (max-width: 330px) {
  .content {
    width: 315px;
  }
}
</style>
