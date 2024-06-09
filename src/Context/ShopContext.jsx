import React, { createContext } from "react";
import all_product from "../Components/Assests/all_product"

export const ShopContext = createContext(null);

const ShopContextProvider = (props)=> {
    const ContectValue = {all_product}

    return(
        <ShopContext.Provider value={ContectValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;