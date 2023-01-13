import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { Card, CardBody, CardFooter, Heading, Text, Button, Box, Flex, CardHeader, Divider } from "@chakra-ui/react"
import { fetchProduct } from '../../api';
import moment from "moment";
import ImageGallery from 'react-image-gallery';

import { useBasket } from '../../contexts/basketContext';




function ProductDetail() {
  const { product_id } = useParams();
  const { addToBasket, items } = useBasket();

  const { isLoading, isError, data } = useQuery(['product', product_id], () =>
    fetchProduct(product_id)
  );

  if (isLoading) {

    return <div>Loading..</div>
  }

  if (isError) {

    return <div>Error.</div>
  }

  const findBasketItem = items.find((item) => item._id === product_id)
  const images = data.photos.map((url) => ({ original: url }));

  return <div>
    <Card mx="20%" maxW='1000px' width = "full" justifyContent="center">
      <CardHeader>
        <Flex spacing='4'>
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>

            <Box>
              <Heading size='lg'>{data.title}</Heading>
              <Text pt="5">{moment(data.createdAt).format('DD/MM/YYYY')}</Text>
            </Box>
              <Divider />
          </Flex>
        </Flex>
      </CardHeader>

      <CardBody>
        <Text>{data.description}</Text>
      </CardBody>

      <ImageGallery items={images} />
      
      <CardFooter justify='space-between' flexWrap='wrap' sx={{ '& > button': { minW: '136px',},}}>
        <Button flex='1' variant='ghost' 
        colorScheme={findBasketItem ? 'pink' : 'green'}
        onClick={() => (addToBasket(data, findBasketItem))}> 
        {
          findBasketItem ? 'Remove from basket' : "Add to cart "
        }
        
        </Button>
      </CardFooter>
    </Card>
  </div>
}

export default ProductDetail;