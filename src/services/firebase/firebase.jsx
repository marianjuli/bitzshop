import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { 
    collection, 
    getDocs, 
    query, 
    where, 
    doc, 
    getDoc, 
    writeBatch, 
    addDoc, 
    Timestamp 
} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCXGA_UYOCR0mJmcuE5l85RGC_BmG438oA",
  authDomain: "bitz-project.firebaseapp.com",
  projectId: "bitz-project",
  storageBucket: "bitz-project.appspot.com",
  messagingSenderId: "335902526930",
  appId: "1:335902526930:web:7d76bbecb0060abad80c0b"
}

const app = firebase.initializeApp(firebaseConfig)

export const db = getFirestore(app)


export const getFirebase = () => {
    return app
}

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        getDocs(collection(db, 'category')).then((querySnapshot) => {
            const categories = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            }) 
            resolve(categories)
        }).catch((error) => {
            reject(`Error obteniendo categorias: ${error}`)
        })
    }) 
}

export const getProducts = (key, operator, value) => {
    return new Promise((resolve, reject) => {
        const collectionQuery = key && operator && value ?  query(collection(db, 'Items'), where(key, operator, value)) : collection(db, 'Items')
        
        getDocs(collectionQuery).then((querySnapshot) => {
            const products = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            }) 
            resolve(products)
        }).catch((error) => {
            reject(`Error obtendiendo productos ${value ? 'por categoria' : ''}: ${error}` )
        })

    })
}

export const getProductById = (itemid) => {
    return new Promise((resolve, reject) => {
        getDoc(doc(db, 'Items' , itemid)).then((querySnapshot) => {
            const product = { id: querySnapshot.id, ...querySnapshot.data()}
            resolve(product)
        }).catch((error) => {
            reject('Error obteniendo producto: ' + error)
        })
    })
}

export const createOrder = (objOrder) => {


    return new Promise((resolve, reject) => {
        objOrder = {
            ...objOrder,
            date: Timestamp.fromDate(new Date())
        }
        const batch = writeBatch(db)
        const outOfStock = []
            
        objOrder.items.forEach((prod, i) => {
            getDoc(doc(db, 'Items', prod.id)).then(DocumentSnapshot => {
                if(DocumentSnapshot.data().stock >= objOrder.items[i].quantity) {
                    
                    batch.update(doc(db, 'Items', DocumentSnapshot.id), {
                        stock: DocumentSnapshot.data().stock - objOrder.items[i].quantity
                    })
                } else {
                    outOfStock.push({...DocumentSnapshot.data(), id: DocumentSnapshot.id})
                }
                    
            })
        })

        if(outOfStock.length === 0) {
            addDoc(collection(db, 'orders'), objOrder).then(() => {
                batch.commit().then(() => {
                    resolve('La orden se ejecutó con éxito')
                })
            }).catch((error) => {
                reject('Error al ejecutar la orden: ' + error)
            })
    }})
}
