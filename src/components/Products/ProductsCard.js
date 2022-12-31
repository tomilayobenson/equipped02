import { Card, CardImg,CardImgOverlay, CardTitle } from "reactstrap";
//import { Link } from "react-router-dom";


const ProductsCard = ({product}) => {
    const {image,name} = product

  return (
   
    <Card className="mb-4">
        <CardImg  height='300' width='100%'   src={image} alt={name} />

         <CardImgOverlay >
               <CardTitle>{name}</CardTitle>
             
         </CardImgOverlay>
    </Card>
        
 
  )
}

export default ProductsCard