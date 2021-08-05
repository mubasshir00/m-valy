import React, { Children, createContext, useContext, useEffect, useReducer } from 'react'
import reducer from '../reducer/products_reducer'
import {
    SIDEBAR_CLOSE,
    SIDEBAR_OPEN,
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR,
} from '../action'
const initialState = {
    isSidebarOpen : false ,
}

const ProductsContext = createContext()

export const ProductsProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const openSiderbar = () => {
        dispatch({type: SIDEBAR_OPEN})
    }
    const closeSidebar = () =>{
        dispatch({type:SIDEBAR_CLOSE})
    }
   
    return (
        <ProductsContext.Provider value={{...state,openSiderbar,closeSidebar}}>
            {children}
        </ProductsContext.Provider>
    )
}
export const useProductsContext = () =>{
    return useContext(ProductsContext)
}
// export default ProductsProvider
