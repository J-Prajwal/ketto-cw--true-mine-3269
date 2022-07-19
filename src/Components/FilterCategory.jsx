import { VStack,ListItem,Divider,Container,Box,List,Button } from "@chakra-ui/react"


export const Filter=()=>{
    return  <List spacing={3} background="#F5F5F5"  width="15%" padding={5} >
       <ListItem fontWeight={700}>CATEGORY</ListItem>
             <Divider />
        <ListItem  >All Categories</ListItem>
        <ListItem>Edcation</ListItem>
        <ListItem>Women & Girls</ListItem>
        <ListItem>Animals</ListItem>
        <ListItem>Creative</ListItem>
        <ListItem>Food & Hunger</ListItem>
        <ListItem>Environment</ListItem>
        <ListItem>Children</ListItem>
        <ListItem>Memorial</ListItem>
        <ListItem >Community Development</ListItem>
        <ListItem fontWeight={700} color="#30C9C8">Others</ListItem>
        <Divider/>
        <ListItem><Button variant="solid" background="#30C9C8" color="white" _hover={{background:"teal"}}>Start a Fundraiser</Button></ListItem>
        </List>
     
}