import React from 'react'
import {Box,Heading,Text,Button,Input,HStack,Container} from "@chakra-ui/react"
 
import { Filter } from '../Components/FilterCategory'
const BrowseFundraiser = () => {
  return (
    <>
    <Container height={450} maxW="container.2xl" backgroundSize="cover" backgroundRepeat="no-repeat" backgroundImage="https://www.ketto.org/assets/images/Sip-banner-people/sip-banner-pc.png" >
      <Box  paddingTop="6%" paddingLeft="10%" width="auto">
        <Heading fontSize={48} color="white" margin={5}>Save A Child Everyday</Heading>
        <Text fontSize={24} color="white" margin={5}>Join monthly donors with Social Impact and Start saving needy children every month</Text>
        <Button margin={5} color="#4C829C" variant="solid">Start Giving Monthly</Button>
        </Box>
      </Container>
      <HStack>
        <Filter/>
        <Input variant='outline' placeholder='Outline' />
      </HStack>
    </>
  )
}

export default BrowseFundraiser