import React from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import Head from "../../components/Sidebar/Head";
import Menu from "../../components/Sidebar/Menu";

export default function Settings() {
  return (
    <>
        <div className="g-sidenav-show  bg-gray-200">
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
            <Head/>

            <Menu/>
            <div className="container-fluid py-4">

            <CardSettings />
        </div>
        {/*<div className="w-full lg:w-4/12 px-4">*/}
        {/*  <CardProfile />*/}
        {/*</div>*/}
        </main>
        </div>
    </>
  );
}
