import {Col, Row} from 'reactstrap'
import ProductsCard from "./ProductsCard";
import { useSelector } from 'react-redux';




const ProductList = () => {
  const products = useSelector((state)=>state.products.productsArray)
  return (
       
      <Row className="ms-auto mt-5">
          {
            products.map((product)=>{
                  return (
                    <Col sm={6} lg={4}  key={product._id}>
                           <ProductsCard  product={product}/>                          
                    </Col>
                  )
     })
          }
      </Row>   
  )
}

export default ProductList