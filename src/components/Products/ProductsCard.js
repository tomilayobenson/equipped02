import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardLink, CardBody, Button } from "reactstrap";
import { imageUrl } from "../../data/shared/baseUrl";
import { useNavigate } from "react-router-dom";

//import { Link } from "react-router-dom";


const ProductsCard = ({ product }) => {
  const { productPhotos, title, forRent, forPurchase, description } = product;
  const navigate = useNavigate()

  return (

    <Card className="mb-4">
      <CardImg height='300' width='100%' src={`${imageUrl}${productPhotos[0]}`} alt={title} />

      <CardImgOverlay className="d-flex justify-content-center align-items-center flex-column bg-trans text-white" >
        <CardTitle tag="h4">{title}</CardTitle>
        <CardText>
          {description}
        </CardText>
        <div>
          {forRent && (<Button color="warning" onClick={()=> navigate(`/products/${product._id}`)}>
            Rent
          </Button>)}{" "}
          {forPurchase && (<Button color="warning" onClick={()=> navigate(`/products/${product._id}`)}>
            Buy
          </Button>)}
        </div>


      </CardImgOverlay>
    </Card>


  )
}

export default ProductsCard