import { useEffect, useState, memo } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from "../../services/firebase/firebaseConfig";
import ItemList from "../../components/ItemList/ItemList";

const ItemListMemo = memo(ItemList); 

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    const productsRef = categoryId 
      ? query(collection(db, 'products'), where('category', '==', categoryId))
      : collection(db, 'products');
    
    
    getDocs(productsRef)
        .then(snapshot => {
          const productsAdapted = snapshot.docs.map(doc => {
            const data = doc.data()
            return { id: doc.id, ...data}
          })

          setProducts(productsAdapted)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
        })
  }, [categoryId]);

  if(loading) {
    return <h1>Cargando...</h1>
  }

  if(products && products.length === 0) {
    return <h1>No hay productos</h1>
  }
  
  return (
    <>
      <h2>{categoryId ? categoryId : title}</h2>
      <ItemList products={products}/>
    </>
  );
};

export default ItemListContainer;
