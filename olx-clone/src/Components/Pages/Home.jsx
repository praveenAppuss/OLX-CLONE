import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Login from '../Modal/Login'
import Sell from '../Modal/Sell'
import Card from '../Card/Card'
import { ItemsContext } from '../Context/Item'
import { fetchFromFireStore } from '../Firebase/Firebase'


const Home = () => {
    const [openModal,setModal]=useState(false)
    const [openModalSell,setModalSell]=useState(false)

    const toggleModal =()=>{setModal(!openModal)}
    const toggleModalSell =()=>{setModalSell(!openModalSell)}

    const itemsCtx =ItemsContext();//refer context value
    
    useEffect(()=>{
      const getItems =async ()=>{
        const datas = await fetchFromFireStore();
        itemsCtx ?.setItems(datas);//itemsCtx ?.setitems is the setItems function provided by the context.
                                   //datas is the fetched data from the firestore
      }
      getItems();

    },[])

    useEffect(()=>{
      console.log('updated items:',itemsCtx.items)
    },[itemsCtx.items])

  return (
    <div>
      <Navbar toggleModal={toggleModal} toggleModalSell={toggleModalSell}/>
      <Login toggleModal={toggleModal} status ={openModal}/>
      <Sell setItems={(itemsCtx).setItems} toggleModalSell={toggleModalSell} status={openModalSell}/>
      <Card items={(itemsCtx).items || []}/>
    </div>
  )
}

export default Home
