import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Row,
  Col
} from "reactstrap";
import { useParams } from "react-router";
import { imageUrl } from "../data/shared/baseUrl";
import ImagesCarousel from "../components/Products/ImagesCarousel";
import ContentCard from "../components/Products/ContentCard";

const ProductDetails = () => {
  const { ProductId } = useParams();
  const [activeImage, setActiveImage] = useState(null)
  const products = useSelector((state)=>state.products.productsArray)
  const details = products.find(product => product._id==ProductId)
  const productPhotos = details.productPhotos;

  const listedImages = (arr) => {
    const dividedImages = []
    const images = arr;
    if (images.length <= 3) {
      dividedImages.push(images)
      return dividedImages;
    }
    while (images.length) {
      //call carousel for each slide
      const imagePart = images.splice(0, 3);
      dividedImages.push(imagePart);
    }
    return dividedImages;
  }

  useEffect(() => {
    console.log(details)
  }, [])

  return (
    <Container>
      <Row className='my-5'>
        <Col xs={12} md={7}>
          <img
            alt='title'
            src={(!productPhotos.length) ? null : (activeImage ? (imageUrl + activeImage) : (imageUrl + productPhotos[0]))}
            className="d-block"
            style={{ width: '100%', height: 'auto' }}
          />
          <ImagesCarousel productImages={listedImages(productPhotos)} setActiveImage={setActiveImage} />
        </Col>
        <Col xs={12} md={5}>
          <ContentCard productDetails={details} />
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetails