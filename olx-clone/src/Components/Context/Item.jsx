import { collection, getDoc, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { fireStore } from "../Firebase/Firebase";

const context =createContext(null)
export const ItemsContext=()=>useContext(context)

export const ItemsContexProvider=({children})=>{
    const [items,setItems]=useState(null);

    useEffect(()=>{
        const fetchFromFireStore =async ()=>{

            try {
                const productsCollection =collection(fireStore,'Products')
                const productSnapshot =await getDocs(productsCollection)
                const productList =productSnapshot.docs.map(doc=>({
                    id:doc.id,
                    ...doc.data()
                }))
                setItems(productList)
                
            } catch (error) {
                console.log(error,'error fecthing products')
            }
        }
        fetchFromFireStore();
    },[])
    return (
        <>
        <context.Provider value={{items,setItems}}>
            {children}
        </context.Provider>
        </>
    )
}