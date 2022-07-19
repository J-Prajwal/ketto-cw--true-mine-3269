import React, { useEffect, useState } from 'react'
import {Box,Heading,Text,Button,Input,HStack,Container,Select,Grid,GridItem,Spinner} from "@chakra-ui/react"
 
import { Filter } from '../Components/FilterCategory'
import { useSelector,useDispatch } from 'react-redux'
import { getdata } from '../Redux/AppReducer/app.actions'
import { BrowserFundingCard } from '../Components/BrowserFundingCard'
const BrowseFundraiser = () => {
  const [filter,setFilter]=useState("")
  const dispatch=useDispatch()
  const data=useSelector((state)=>state.AppReducer.funds)
  const isLoading=useSelector((state)=>state.AppReducer.isLoading)
 
  useEffect(()=>{
    dispatch(getdata(filter))
  },[filter])
 
  return (
    <>
    <Container height={450} maxW="container.2xl" backgroundSize="cover" backgroundRepeat="no-repeat" backgroundImage="https://www.ketto.org/assets/images/Sip-banner-people/sip-banner-pc.png" >
      <Box  paddingTop="6%" paddingLeft="10%" width="auto">
        <Heading fontSize={48} color="white" margin={5}>Save A Child Everyday</Heading>
        <Text fontSize={24} color="white" margin={5}>Join monthly donors with Social Impact and Start saving needy children every month</Text>
        <Button margin={5} color="#4C829C" variant="solid">Start Giving Monthly</Button>
        </Box>
      </Container>
      <Container maxW="container.xl" display="flex">
        {/* <HStack > */}
         <Filter onChange={(value)=>setFilter(value)}/>
          <Box width="80%"   marginTop={10} >
          <Input variant='outline' placeholder='Search for fundraisers' />
            <HStack  marginTop={10}>
              <label htmlFor="cat">Showing fundaraisers for </label>
              <Select id="cat" placeholder='All Categories' width="30%" >
                <option value="education">Education</option>
                <option value="medical">Medical</option>
                <option value="Women_&_girls"> Women % Girls</option>
                <option value="animals">Animals</option>
                <option value="creative">Creative</option>
                <option value="food_&_hunger">Food & Hunger</option>
                <option value="environment">Environment</option>
                <option value="memorial">Memorial</option>
                <option value="community_development">Community Development</option>
                <option value="others">Others</option>
              </Select>



              <label htmlFor="city">from </label>
              <Select id="city" placeholder='All Locations'width="30%">
                <option value="mumbai">Mumbai</option>
                <option value="bengaluru">Bengaluru</option>
                <option value="delhi"> Delhi</option>
                <option value="noida">Noida</option>
                <option value="hyderbad">Hyderbad</option>
                <option value="chennai">Chennai</option>
                <option value="kolkata">Kolkata</option>
                <option value="jaipur">Jaipur</option>
                <option value="lucknow">Lucknow</option>
                <option value="others">Others</option>
              </Select>
            </HStack>
            {isLoading==true?<Box margin="auto"><Spinner width={10} height={10}textAlign="center"/></Box>:null
            }
            {data?.length==0?<Text>No results found</Text>:<Grid templateColumns='repeat(3, 1fr)' gap={6} marginTop={10}>
                  {data?.map((el)=>{
                    return <GridItem  key={el.id}><BrowserFundingCard {...el}/></GridItem>
                  })}
            </Grid>}
           
            
          
          </Box>
        {/* </HStack> */}

      </Container>
     
    </>
  )
}

export default BrowseFundraiser