import React, { useState } from 'react'
import styles from "./Crowd.module.css";
import { CVideo } from './CVideo';
import data1 from "./sam.json"
import { Container,Text,Heading,HStack } from '@chakra-ui/react';



export const CFunding = () => {
  
    const [details] = useState(data1);
    return (
        <Container maxW="container.2xl" marginTop={50}>
           
           <Heading padding={5} textAlign="center">What is Crowdfunding?</Heading>
           <Text textAlign="center">In its simplest form, Crowdfunding is a practice of giving monetary funds to<br/> overcome specific social, cultural, or economic hurdles individuals face in their <br/> daily lives.</Text>
            <HStack margin="auto"width="70%">

                    {details.map((item1) => {
                        return <CVideo data={item1} />
                    })}

             </HStack>

        
        </Container>
    )
}

