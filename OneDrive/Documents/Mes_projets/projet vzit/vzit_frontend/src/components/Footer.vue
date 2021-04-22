<template>
    <div class="footer">
        <!--footer starts from here-->
        <footer class="footer" style="font-weight: 500;">
            <div class="container bottom_border">
                <div class="row">
                    <div class=" col-sm-4 col-md col-sm-4  col-12 col">
                        <h5 class="headin5_amrc col_white_amrc pt2 font-weight-normal" style="font-size: 17px;">CONTACT
                        </h5>
                        <!--headin5_amrc-->
                        <p><i class="fa fa-location-arrow"></i> 4 Rue Moungali 9 Brazzaville </p>
                        <p><i class="fa fa-phone"></i> +242-068378982 </p>
                        <p><i class="fa fa fa-envelope"></i> cg.kissi@gmail.com </p>
                        <p class="mt10">
                            <a class="navbar-brand" routerLink="/home"><img src="../assets/images/logo.png"
                                    alt="logo" width="50" height="50"></a>
                            <small class="d-block mb-3 text-muted">&copy; 2020-2021</small>
                        </p>

                    </div>


                    <div class=" col-sm-4 col-md  col-6 col">
                        <h5 class="headin5_amrc col_white_amrc pt2 font-weight-normal" style="font-size: 17px;">KISSI
                        </h5>
                        <!--headin5_amrc-->
                        <ul class="footer_ul_amrc">
                            <li><a href="">Equipe médicale</a></li>
                            <li><a href="">Equipe développment</a></li>
                            <li><a href="">Tarif & modalité</a></li>
                            <li><a href="">Politique de confidentialité</a></li>
                            <li><a href="">Mentions légales</a></li>
                        </ul>
                        <!--footer_ul_amrc ends here-->
                    </div>


                    <div class=" col-sm-4 col-md  col-6 col">
                        <h5 class="headin5_amrc col_white_amrc pt2 font-weight-normal" style="font-size: 17px;">ACCÈS
                        </h5>
                        <!--headin5_amrc-->
                        <ul class="footer_ul_amrc">
                            <li><a href="">Accès praticiens</a></li>
                            <li><a href="">Accès patients</a></li>
                            <li><a href="">Accès pharmacien</a></li>
                        </ul>
                        <!--footer_ul_amrc ends here-->
                    </div>


                    <div class=" col-sm-4 col-md  col-12 col">
                        <h5 class="headin5_amrc col_white_amrc pt2 font-weight-normal" style="font-size: 17px;">AIDE
                        </h5>
                        <!--headin5_amrc ends here-->

                        <ul class="footer_ul_amrc">
                            <li><a href="">Consulter un médecin</a></li>
                            <li><a href="">Mon ordonnance</a></li>
                            <li><a href="">Obtenir un certificat médical</a></li>
                            <li><a href="">Foire aux questions</a></li>
                            <li><a href="">Nous contacter</a></li>
                            <li><a href="">Signaler</a></li>
                        </ul>
                        <!--footer_ul2_amrc ends here-->
                    </div>
                </div>
            </div>


            <div class="container">
                <!--foote_bottom_ul_amrc ends here-->
                <p class="text-center">Copyright @2021 | <a href="#">kissi</a></p>

                <ul class="foote_bottom_ul_amrc">
                    <li><a href=""><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href=""><i class="fab fa-youtube"></i></a></li>
                    <li><a href=""><i class="fab fa-linkedin"></i></a></li>
                    <li><a href=""><i class="fab fa-instagram"></i></a></li>
                </ul>
                <!--social_footer_ul ends here-->
            </div>

        </footer>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    /*footer*/
    .col_white_amrc {
        color: #FFF;
    }
    a{
        text-decoration: none;
        color: white;
    }

    footer {
        width: 100%;
        background-color: #16262e;
        min-height: 250px;
        padding: 10px 0px 25px 0px;
    }

    .pt2 {
        padding-top: 40px;
        margin-bottom: 20px;
    }

    footer p {
        font-size: 13px;
        color: #CCC;
        padding-bottom: 0px;
        margin-bottom: 8px;
    }

    .mb10 {
        padding-bottom: 15px;
    }

    .footer_ul_amrc {
        margin: 0px;
        list-style-type: none;
        font-size: 14px;
        padding: 0px 0px 10px 0px;
    }

    .footer_ul_amrc li {
        padding: 0px 0px 5px 0px;
    }

    .footer_ul_amrc li a {
        color: #CCC;
    }

    .footer_ul_amrc li a:hover {
        color: #fff;
        text-decoration: none;
    }

    .fleft {
        float: left;
    }

    .padding-right {
        padding-right: 10px;
    }

    .footer_ul2_amrc {
        margin: 0px;
        list-style-type: none;
        padding: 0px;
    }

    .footer_ul2_amrc li p {
        display: table;
    }

    .footer_ul2_amrc li a:hover {
        text-decoration: none;
    }

    .footer_ul2_amrc li i {
        margin-top: 5px;
    }

    .bottom_border {
        border-bottom: 1px solid #323f45;
        padding-bottom: 20px;
    }

    .foote_bottom_ul_amrc {
        list-style-type: none;
        padding: 0px;
        display: table;
        margin-top: 10px;
        margin-right: auto;
        margin-bottom: 10px;
        margin-left: auto;
    }

    .foote_bottom_ul_amrc li {
        display: inline;
    }

    .foote_bottom_ul_amrc li a {
        color: #999;
        margin: 0 12px;
    }

    .social_footer_ul {
        display: table;
        margin: 15px auto 0 auto;
        list-style-type: none;
    }

    .social_footer_ul li {
        padding-left: 20px;
        padding-top: 10px;
        float: left;
    }

    .social_footer_ul li a {
        color: rgb(19, 73, 223);
        border: 1px solid rgb(19, 73, 223);
        padding: 8px;
        border-radius: 50%;
    }

    .headin5_amrc {
        color: #444449;
    }

    .social_footer_ul li i {
        width: 20px;
        height: 20px;
        text-align: center;
    }
</style>