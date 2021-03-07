import React, { useState, createContext } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = props => {
    return (
        <NavbarContext.Provider>
            {props.children}
        </NavbarContext.Provider>
    );
};