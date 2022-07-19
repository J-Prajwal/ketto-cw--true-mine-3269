import React, { useState } from 'react'
import { Container,HStack,Link,Image,Select,option,Text,Button, Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,} from '@chakra-ui/react'
  import {useNavigate} from "react-router-dom"
 import {TriangleDownIcon,LinkIcon} from "@chakra-ui/icons"
import Search from './Search'
 
const Header = () => {
 const navigate=useNavigate()
  return (
    <Container padding={5} maxW='container.xl' >
        <HStack spacing="auto">
            <HStack spacing={8} width="60%">
              <Image marginTop={-5} width="70px" src="https://ketto.gumlet.io/assets/images/logo-light-bg.svg?w=70&dpr=1.0"/>
              <Link _hover={{textDecoration:"none"}}>Browser Fundraiser</Link>
              <Menu>
                <MenuButton padding={2} fontWeight={400} variant="unstyled"  as={Button} rightIcon={<TriangleDownIcon fontSize={10}/>}>
                Fundraiser For
                </MenuButton>
                <MenuList >
                  <MenuItem  _hover={{ color: '#30C9C8' }} >Medical Treatment</MenuItem>
                  <MenuItem  _hover={{ color: '#30C9C8' }}  >NGO / Charity</MenuItem>
                  <MenuItem _hover={{ color: '#30C9C8' }}  >Other Cause</MenuItem>
                </MenuList>
            </Menu>
              <Link _hover={{textDecoration:"none"}}>How It Works</Link>
               <Text> | </Text>
              <Search/>
            </HStack>
            <HStack spacing="5">
            <Button height={8} color="green" border="2px solid green" fontWeight={500}  background="none" _hover={{background:"none"}} leftIcon={<LinkIcon/>} >Chat</Button>
              <Button height={8} color="#30C9C8" border="2px solid #30C9C8}" fontWeight={500}  background="none" _hover={{background:"#EAF9F9"}}>Start a Fundraiser</Button>
              <Button height={8}  fontWeight={400} variant="ghost"  _hover={{background:"none"}} >Sign In</Button>
            </HStack>
        </HStack>
    </Container>
  )
}

export default Header