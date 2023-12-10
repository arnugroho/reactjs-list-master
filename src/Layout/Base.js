import React, {useState} from "react";
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Recipes from '../Components/Recipes'
// import LayoutStyles from './LayoutStyle'
import {CssBaseline} from "@mui/material";
import {Route, Routes} from "react-router-dom";

//Halaman base untuk layout
const Base = () => {
    // const classes = LayoutStyles();
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    }
    return (
        <div
            // className={classes.root}
        >
            <CssBaseline/>
            <Header toggleDrawer={toggleDrawer} open={open}/>
            <Sidebar toggleDrawer={toggleDrawer} open={open}/>
            <main
                // className={classes.content}
            >
                <div
                    // className={classes.appBarSpacer}
                />
                <Routes>
                    <Route path="/" >
                        <Route path="recipes" element={<Recipes/>}/>
                        <Route path="rother" />
                    </Route>
                </Routes>
                <Footer/>
            </main>
        </div>
    )
};

export default Base;
