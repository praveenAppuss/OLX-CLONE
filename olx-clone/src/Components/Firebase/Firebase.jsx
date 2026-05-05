import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getStorage} from "firebase/storage"
import {collection, doc, getDoc, getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAqwRfzat2OMohYNujr_UVDK78JtBwkTeE",
  authDomain: "olx-clone-2f1df.firebaseapp.com",
  projectId: "olx-clone-2f1df",
  storageBucket: "olx-clone-2f1df.firebasestorage.app",
  messagingSenderId: "757507324717",
  appId: "1:757507324717:web:d68c466ca68359a472b1a4"
};


const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const provider = new GoogleAuthProvider()
const storage = getStorage()
const fireStore = getFirestore()


const fetchFromFireStore = async()=>{
    try{
        const productsCollection =collection(fireStore,'products')
        const productSnapshot =await getDoc(productsCollection)
        const productList = productSnapshot.docs.map(doc=>({
            id:doc.id,
            ...doc.data()
        }))
        console.log('Fetched products from FireStore',productList)
        return productList
    }
    catch(error){
        console.error('Error fetching products from Firestore:',error)
        return []
    }
}

export{
    auth,
    provider,
    storage,
    fireStore,
    fetchFromFireStore
}