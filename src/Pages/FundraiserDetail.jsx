import { Container,Button, Heading,Box, Stack,Text,HStack,Image,VStack } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import{BsFillShareFill,BsFillSuitHeartFill } from "react-icons/bs"
import {AiFillFacebook} from  "react-icons/ai"
import {AiTwotoneAlert,AiOutlineCreditCard} from "react-icons/ai"
import {BsGlobe} from "react-icons/bs"
 
import {BiQrScan} from "react-icons/bi"
export const FundraiserDetail=()=>{

    const {name}= useParams()
     const [curr,setcurr]=useState(null)
    useEffect(()=>{
        axios.get("https://qr1zme.sse.codesandbox.io/funds").then((res)=>{
            let temp=res.data.filter((el)=>{
                if(el.title.split(" ").join("")==name){
                    return el
                }
              
            })
            
            setcurr(temp[0])
           
        }).catch((err)=>{
            console.log(err)
        })
    },[name])
    console.log(curr)
    return <Container maxW="container.2xl" margin={5}>
        <Container maxW="container.xl" margin="auto">
                <HStack spacing="auto" padding={3} margin="auto"  width="sm"  borderRadius={50} backgroundColor="#FFF2E4" >
                     <AiTwotoneAlert  color="red" fontSize={24}/>
                    <Text color="darkred" textAlign="center">This fundraiser is in an urgent need of funds</Text>
                </HStack>
      <Heading padding={5}  width="auto" textAlign="center"  fontWeight={600}  >{curr?.title} </Heading>

        <HStack spacing="auto">
            <Container  maxW="container.xl" mt={10}>
                <Box  boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
                    <Image src={curr?.mainImg}/>
                   <HStack margin="auto">
                    <Box width="80%"></Box>
                    <Box pt={10} pr={20} pb={20}>
                    <Button  _hover={{background:'#30C9C8' ,color:"white"}} color= '#30C9C8' background="none" leftIcon={<BsFillShareFill/>} borderRadius="none" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" >Share This Fundraiser</Button>
                    </Box>
                   
                   </HStack>
                </Box>
                <Box boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"></Box>
                <Box boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"></Box>
                <Box boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"></Box>
                <Box boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"></Box>
            </Container>
           
            <Container padding={10}>
                 
               <Box >
                    <Button backgroundColor= '#30C9C8' _hover={{background:"teal"}} color="white"padding={10} width="80%" leftIcon={<BsFillSuitHeartFill/>} fontSize="larger" fontWeight={700} >CONTRIBUTE NOW</Button>
                    <HStack spacing={5} padding={2} m="auto">
                        <Button _hover={{color:'teal',border:"2px solid teal"} }variant="outline" leftIcon={<AiOutlineCreditCard/>} fontSize={10}>All credit <br/> & Debit Cards</Button>
                        <Button  _hover={{color:'teal',border:"2px solid teal"} } variant="outline"  leftIcon={<BsGlobe/>} fontSize={10}>Net <br/> banking</Button>
                        <Button  _hover={{color:'teal',border:"2px solid teal"} } variant="outline" leftIcon={<BiQrScan/>} fontSize={10}>Paytm & <br/>UPI</Button>
                    </HStack>
                    <Button leftIcon={<AiFillFacebook color='white'/>}  colorScheme="blue" padding={8} width="80%">Spread the word (640 shares)</Button>
                   <Box>
                     <Text color="darkblue" paddingLeft={10}><i>Every Social media share can bring ₹5000</i></Text>
                   </Box>
                    <Stack pl={5} pt={5}>
                        <Heading   fontWeight={400}>{curr?.raised}</Heading>
                        <Text  color="grey" ><i>raised of {curr?.goal} goal</i></Text>
                        <Box bg="#30C9C8" width="80%" height={4} color="#30C9C8" borderRadius={50}>.</Box>
                    </Stack>
                    <HStack width="80%" spacing="auto" margin={5}>
                        <HStack  >
                            <Heading fontWeight={400} fontSize="xx-large">{curr?.supporters}</Heading>
                            <Text> supporters</Text>
                        </HStack>
                        <HStack >
                            <Heading fontWeight={400} fontSize="xx-large">{curr?.daysLeft} </Heading>
                            <Text>days left</Text>
                        </HStack>
                       
                    </HStack>
                </Box> 
               
                <Box boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"></Box>
                <Box boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"></Box>
                <Box boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"></Box>
                <Box boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"></Box>
            </Container>
        </HStack>
    </Container>
    </Container> 
}