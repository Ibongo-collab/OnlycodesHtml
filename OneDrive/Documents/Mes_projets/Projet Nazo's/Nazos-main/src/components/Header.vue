<template>
    <div class="header vld-parent">
        <!--========== SPINNER ==========-->
        <loading :active.sync="isLoading" :can-cancel="false" :is-full-page="fullPage"></loading>

        <!--========== HEADER ==========-->
        <header class="" id="header">
            <nav class="nav container">
                <p>
                    <a href="/" class="nav__logo text-decoration-none">
                        <img src="../../public/images/logo.jpg" alt="logo" width="25px" height="25px" />
                        nazosapp
                    </a>
                </p>
                <div class="nav__menu" id="nav-menu">
                    <div v-if="connected == true">
                        <div class="dropdown">
                            <p class="name-droptown">
                                Bonjour {{ client.prenom }} <i class="bx bxs-down-arrow"></i>
                            </p>
                            <div class="dropdown-content rounded pt-2">
                                <p>Mon compte</p>
                                <p>Mes commandes</p>
                                <p @click="deconnexion">Se déconnecter</p>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p class="nav__item">
                            <routerLink to="Login" class="connexion rounded bordure text-decoration-none text-center">
                                <b>Se connecter</b>
                            </routerLink>
                        </p>
                        <p class="new_nav_item">
                            <i class="bx bx-menu menu"></i>
                        </p>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
import axios from "axios";
// import Script from "../../module/script";
import Loading from "vue-loading-overlay";
// import Swal from "sweetalert2";
import "vue-loading-overlay/dist/vue-loading.css";
import constant from "../../constant";

export default {
  name: "Header",
  components: {
    Loading,
  },
  data: function() {
    return {
      // cryptId: "",
      isLoading: false,
      fullPage: true,
      client: null,
      email: "",
      connected: false,
      adresslivraisons: [],
    };
  },
  methods: {
    /* crypter l'id du client
            localid(id) {
                return (this.cryptId = this.script.encrypt(id.toString()));
            },*/
    getClient() {
      // Méthode qui récupère le client qui vient de s'authentifier
      axios
        .get(constant.apiURL + "client/getOne/" + this.email)
        .then((response) => {
          this.client = response.data;
          console.log(this.client);
          this.connected = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deconnexion() {
      // Méthode de déconnexion
      setTimeout(() => {
        localStorage.clear();
        this.connected == false;
        window.location.reload();
      }, 1000);
    },
  },
  mounted() {
    // test sur le token
    if (localStorage.getItem("token")) {
      this.email = localStorage.getItem("userEmail");
      this.getClient();
    }
    console.log(this.connected);
  },
  created() {},
};
</script>

<style scoped>
.name-droptown,
.dropdown {
  cursor: pointer;
}

.dropdown-content {
  text-align: start;
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content p {
  font-size: 13px;
  color: black;
  padding-top: 5px;
  padding-left: 10px;
  text-decoration: none;
  display: block;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.bordure {
  border: 0.2px solid rgb(236, 236, 236);
}

.btn-close {
  outline: none;
}

.md-progress-spinner {
  margin: 24px;
}

.md-field:last-child {
  margin-bottom: 40px;
}

.formulaire {
  padding: 5%;
}

.nav__logo {
  color: black;
  top: 6%;
  font-size: 18px;
  font-weight: 600;
}

.ajouter_une_adresse,
.adresse {
  font-weight: bold;
}

.ajouter_une_adresse {
  cursor: pointer;
}

.nav {
  text-align: center;
}

.inscription {
  color: black;
  padding: 1rem 2rem;
  background-color: #fff;
  margin-right: 10px;
  transition: 0.5s;
}

.inscription:hover {
  color: rgb(0, 0, 0);
  background-color: rgb(250, 248, 248);
}

.connexion {
  color: #f7b655;
  padding: 0.8rem 1.3rem;
  background-color: #fff;
  /*border: 1px solid rgb(247, 182, 85);*/
  margin-right: 0px;
  transition: 0.5s;
  font-size: 14px;
}

.connexion_facebook {
  color: #1b8cf7;
  padding: 0.8rem 1.4rem;
  background-color: #fff;
  border: 1px solid #0482f8;
  margin-right: 0px;
  transition: 0.5s;
  font-size: 14px;
}

.connexion_facebook:hover {
  color: #1b8cf7;
  background-color: #bcdeff;
}

.connexion_google {
  color: rgb(122, 122, 122);
  padding: 0.8rem 1.5rem;
  background-color: #fff;
  border: 1px solid rgb(131, 131, 131);
  margin-right: 0px;
  transition: 0.5s;
  font-size: 14px;
}

.connexion_google:hover {
  color: rgb(122, 122, 122);
  background-color: rgb(223, 223, 223);
}

.menu {
  font-size: 36px;
}

@media screen and (min-width: 645px) {
  .new_nav_item {
    display: none;
  }
}

@media (max-width: 575px) {
}
</style>
