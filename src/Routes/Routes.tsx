import {compose} from "redux";
import {map, mount, route, withView} from "navi";
import {View} from "react-navi";
import Layout from "../Components/Layout/Layout";
import Home from "../Pages/Home/Home";
import React from "react";
import About from "../Pages/About/About";

export default compose<any>(
    withView((request, context: any, arg) => <Layout authService={context.authService}>
        <View />
    </Layout>),
    mount({
        '/': map((request, context: any) => route({
            title: 'Rookathon',
            view: <Home authService={context.authService} />
        })),
        '/about': map((request, context: any) => route({
            title: 'Rookathon',
            view: <About authService={context.authService} />
        })),
    })
)