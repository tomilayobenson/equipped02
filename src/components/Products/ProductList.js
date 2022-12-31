import { Products } from '../../data/shared/PRODUCTS'
import {Col, Row} from 'reactstrap'
import ProductsCard from "./ProductsCard";




const ProductList = () => {
  return (
       
      <Row className="ms-auto mt-5">
          {
            Products.map((product)=>{
                  return (
                    <Col sm={4}  key={product.id}>
                           <ProductsCard  product={product}/>
                          
                    </Col>

                  )
     })
          }
      </Row>
   
  )
}

export default ProductList