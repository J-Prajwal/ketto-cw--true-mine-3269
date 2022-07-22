import React, { useEffect, useState } from 'react'
import { Container,HStack,Image,Select,option,Text,Button, Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,} from '@chakra-ui/react'
  import {Link} from "react-router-dom"
  import {useNavigate} from "react-router-dom"
 import {TriangleDownIcon,LinkIcon} from "@chakra-ui/icons"
import Search from './Search'
 
import { useDispatch } from 'react-redux'
import Login from './Signin&signup'
 
const Header = () => {
 const navigate=useNavigate()
 
  return (
   <Container  boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" maxW="container.2xl"> <Container     padding={5} maxW='container.xl' className='navbarheader'>
        <HStack spacing="auto">
            <HStack spacing={8} width="60%">
              <Image cursor="pointer" onClick={()=>{navigate("/")}} marginTop={-5} width="70px" src="https://ketto.gumlet.io/assets/images/logo-light-bg.svg?w=70&dpr=1.0"/>
              <Link to="/crowdfunding/fundraisers/" _hover={{textDecoration:"none"}}>Browser Fundraisers</Link>
              <Menu>
                <MenuButton padding={2} fontWeight={400} variant="unstyled"  as={Button} rightIcon={<TriangleDownIcon fontSize={10}/>}>
                Fundraiser For
                </MenuButton>
                <MenuList >
                  <MenuItem  _hover={{ color: '#30C9C8' }} onClick={()=>{navigate("new/crowdfunding/type=medical")}}>Medical Treatment</MenuItem>
                  <MenuItem  _hover={{ color: '#30C9C8' }} onClick={()=>{navigate("new/crowdfunding/type=ngo")}} >NGO / Charity</MenuItem>
                  <MenuItem _hover={{ color: '#30C9C8' }} onClick={()=>{navigate("new/crowdfunding/type=others")}}  >Other Cause</MenuItem>
                </MenuList>
            </Menu>
              <Link to="/crowdfunding" _hover={{textDecoration:"none"}}>How It Works</Link>
               <Text> | </Text>
              <Search/>
            </HStack>
            <HStack spacing="5">
            <Button height={8} color="green" border="2px solid green" fontWeight={500}  background="none" _hover={{background:"none"}} leftIcon={<LinkIcon/>} >Chat</Button>
              <Button height={8} color="#30C9C8" border="2px solid #30C9C8}" fontWeight={500}  background="none" _hover={{background:"#EAF9F9"}}>Start a Fundraiser</Button>
              <Button height={8}  fontWeight={400} variant="ghost"  _hover={{background:"none"}} ><Login/></Button>
            </HStack>
        </HStack>
    </Container>
    </Container>
  )
}

export default Header