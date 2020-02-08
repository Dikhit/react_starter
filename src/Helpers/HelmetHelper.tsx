import React from "react";
import Helmet from "react-helmet";


export default function HelmetHelper() {

    return (
        <React.Fragment>
            <Helmet>

                <script src="assets/js/jquery.js"></script>

                <script src="assets/js/popper.min.js"></script>

                <script src="assets/js/bootstrap.min.js"></script>

                <script src="assets/js/jquery.appear.min.js"></script>

                <script src="assets/js/jquery.jCounter.js"></script>

                <script src="assets/js/jquery.magnific-popup.min.js"></script>

                <script src="assets/js/owl.carousel.min.js"></script>

                <script src="assets/js/wow.min.js"></script>

                <script src="assets/js/isotope.pkgd.min.js"></script>


                <script src="assets/js/main.js"></script>
            </Helmet>
        </React.Fragment>
    )
}