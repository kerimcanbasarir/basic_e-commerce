import React from 'react'
import moment from "moment"
import { Image, Card, CardBody, CardFooter, Divider, Stack, Heading, Text, ButtonGroup, Button, Box, Badge } from '@chakra-ui/react'
import { Link } from "react-router-dom"

import { useBasket } from '../../contexts/basketContext'

function Cards({ item }) {
    const { addToBasket, items } = useBasket();
    const findBasketItem = items.find(
        (basket_item) => basket_item._id === item._id
    );

    return (
        <div>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="1">
                <Card maxW='sm'>
                    <Link to={`/product/${item._id}`}>
                        <CardBody>
                            <Image
                                src={item.photos[0]}
                                alt='product'
                                borderRadius='lg'
                                loading="lazy"
                            />
                            <Badge borderRadius='full' px='2' mt='6' colorScheme='pink'> New</Badge>
                            <Stack mt='6' spacing='3'>

                                <Heading size='md'>{item.title}</Heading>

                                <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
                                    {item.description}
                                </Box>
                                <Text>
                                    {moment(item.createdAt).format("DD/MM/YYYY")}
                                </Text>
                                <Text fontSize='2xl' >
                                    {item.price} ₺
                                </Text>
                            </Stack>
                        </CardBody>
                    </Link>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button
                                colorScheme={findBasketItem ? "pink" : "green"}
                                onClick={() => addToBasket(item, findBasketItem)}
                            >
                                {findBasketItem ? "Remove from basket" : "Add to basket"}
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </Box>

        </div>

    )


}

export default Cards;