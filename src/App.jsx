import React from "react";
import { MainLayout } from "./layout/main-layout";
import { Hero } from "./components/hero";
import { Products } from "./components/products";

function App() {
    return (
        <>
            <MainLayout />
            <Hero />
            <Products />
        </>
    );
}

export default App;
