import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardLink, CardBody, Button } from "reactstrap";
import { baseUrl } from "../../data/shared/baseUrl";
//import { Link } from "react-router-dom";


const ProductsCard = ({ product }) => {
  const { productPhotos, title, forRent, forPurchase, description } = product

  return (

    <Card className="mb-4">
      <CardImg height='300' width='100%' src={`${baseUrl}${productPhotos[0]}`} alt={title} />

      <CardImgOverlay className="d-flex justify-content-center align-items-center flex-column bg-trans text-white" >
        <CardTitle tag="h4">{title}</CardTitle>
        <CardText>
          {description}
        </CardText>
        <div>
          {forRent && (<Button color="warning">
            Rent
          </Button>)}{" "}
          {forPurchase && (<Button color="warning">
            Buy
          </Button>)}
        </div>


      </CardImgOverlay>
    </Card>


  )
}

export default ProductsCard