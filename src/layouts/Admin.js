import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import Modal from "components/Modal/modal.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import Add from "views/admin/add.js";
import Bank from "views/admin/withdraw.js";
import Game from "../views/admin/game";
import Game1 from "views/admin/game1";
import Head from "../components/Sidebar/Head";
import Menu from "../components/Sidebar/Menu";

export default function Admin() {
  return (
    <>
      <div className="g-sidenav-show  bg-gray-200">

        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
          <Head/>

          <Menu/>
          <Switch>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/profile" exact component={Settings} />
            <Route path="/add" exact component={Add} />
            <Route path="/withdraw" exact component={Bank} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/tables" exact component={Tables} />
            <Route path="/spin" exact component={Game} />
            <Route path="/tac" exact component={Game1} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
        </main>
      </div>

    </>
  );
}
