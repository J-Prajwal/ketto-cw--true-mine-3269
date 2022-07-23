import {
  IconButton,
  Input,
  Stack,
  MdPhone,
  Box,
  Text,
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
  Flex,
  Select,
  Container,
  Image,
  Img,
  Textarea,
  Portal,
  MenuDivider,
  MenuGroup,
  HStack,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
// import { navigate } from "react-dom";
import { ChevronDownIcon, PhoneIcon, ViewOffIcon } from "@chakra-ui/icons";
import plus from "../images/plus.jpg";
import qmark from "../images/qmark.png";

import { BiEnvelope } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { FaFlagUsa } from "react-icons/fa";
import { useParams } from "react-router-dom";

const NewFundRaiser2 = () => {
  const [menu, setMenu] = useState("English");
  const [pages,setPages]=useState({
    medical:false,
    NGO:false,
    other:false
  })
  const {cat}=useParams()
 useEffect(()=>{
  if(cat=="medical"){
    setPages({medical:true,NGO:false,other:false})
  }
  if(cat=="ngo"){
    setPages({medical:true,NGO:true,other:false})
  }
  if(cat=="others"){
    setPages({medical:true,NGO:false,other:true})
  }
 },[])

 

  const handleSubmit = () => {
    console.log();
  };
  return (
    <Container overflow="scroll"  backgroundColor="#3D3D3D" maxW="container.2xl" margin="auto" position="fixed"
     top={0}
    bottom={0}
    >
      <Container   pl={10} pt={10} maxW="container.md" margin="auto" >
        <Menu bg="white">
          <MenuButton
            outline={"none"}
            border={""}
            bg={"white"}
            as={Button}
            rightIcon={<ChevronDownIcon />}
            // rightIcon={<BiEnvelope />}
          >
            {menu}
          </MenuButton>
          <MenuList
            onChange={(e) => {
              setMenu(e.target.value);
            }}
            mt={"-10"}
            borderRadius={"15px"}
            width={"200px"}
          >
            <MenuItem
              onClick={(e) => {
                setMenu(e.target.value);
              }}
              value={"English"}
              borderRadius={"15px 15px 0px 0px"}
            >
              English
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                setMenu(e.target.value);
              }}
              value={"Hindi"}
            >
              Hindi
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                setMenu(e.target.value);
              }}
              value={"Tamil"}
            >
              Tamil
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                setMenu(e.target.value);
              }}
              value={"Bengali"}
              borderRadius={"0px 0px 15px 15px"}
            >
              Bengali
            </MenuItem>
          </MenuList>
        </Menu>
      </Container>
      <br />
      <Container 
        margin="auto"
        maxW="container.sm"
        
        paddingTop={"30px"}
        border={"2px solid green"}
        m="auto"
        bg="white"
        borderRadius={10}
      >
        <Text
          fontSize="16px"
          color="black"
          fontWeight="bold"
          fontFamily="Helvetica"
          textAlign={"center"}
          lineHeight="46px"
        >
          Tell Us more about your fund Raiser
        </Text>{" "}
        <hr />
       {pages.medical?<> 
       <Flex justifyContent={"center"} mt="10px">
          <Image w="20px" h="20px" src={plus}></Image>
          <Text fontSize={"13px"}>
            Raising funds for <strong>Medical Treatment</strong> purpose
          </Text>
        </Flex>
        <br />
        <Stack borderRadius={10} spacing={5} alignItems="center">
            
            <Container maxW="container.md" >
                <InputGroup>
                        <Input
                        variant="flushed"
                        placeholder="How much do you want to raise"/>
                        <Image w="20px" h= "20px" src={qmark}></Image>
                </InputGroup>
                <Text padding={2} fontSize="smaller">Should be minimum ₹ 2000 </Text>
            </Container>     
                 
                 
             
          <Container maxW="container.md" height={50} >
             <Menu  sx={{overflow:"scroll"}}   >
              <MenuButton width="100%" value='What will be the funds used for?' borderRadius="none" borderBottom="1px solid lightgrey" variant="flused"  as={Button} rightIcon={<ChevronDownIcon />}>
                     <Text textAlign="left" color="grey" fontWeight={400}>The patient is my..</Text>
              </MenuButton>
              <Container  maxW="container.md" background="white">
              <MenuList background="white" overflowY="scroll" height="30vh"   width="30vw">
                <MenuItem>Friend</MenuItem>
                <MenuList  >
                  <MenuGroup title="Parent">
                    <MenuItem>Father</MenuItem>
                    <MenuItem>Mother</MenuItem>
                    <MenuItem>Grand Father</MenuItem>
                    <MenuItem>Grand Mother</MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup title="Spouse">
                    <MenuItem>Husband</MenuItem>
                    <MenuItem>Wife</MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup title="Child">
                    <MenuItem>Son</MenuItem>
                    <MenuItem>Daughter</MenuItem>
                    <MenuItem>Twins</MenuItem>
                    <MenuItem>Grandson</MenuItem>
                    <MenuItem>Granddaughter</MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup title="Sibling">
                    <MenuItem>Brother</MenuItem>
                    <MenuItem>Sister</MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup title="Others">
                    <MenuItem>Friend</MenuItem>
                    <MenuItem>Friend's Family</MenuItem>
                    <MenuItem>Cousin</MenuItem>
                    <MenuItem>Uncle</MenuItem>
                    <MenuItem>Aunt</MenuItem>
                    <MenuItem>Nephew</MenuItem>
                    <MenuItem>Niece</MenuItem>
                    <MenuItem>Colleague</MenuItem>
                    <MenuItem>Relative</MenuItem>
                    <MenuItem>Legal Ward</MenuItem>
                    <MenuItem>Other</MenuItem>
                  </MenuGroup>
                </MenuList>
              </MenuList>
            </Container>
             
            </Menu>
          </Container>
         
          <InputGroup>
                  <FaFlagUsa/>
                  <Input  variant="flushed" outline="#30C9C8" placeholder='Your Mobile Number' />
                  
          </InputGroup>

           <Menu >
              <MenuButton width="100%" value='What will be the funds used for?' borderRadius="none" borderBottom="1px solid lightgrey" variant="flused"  as={Button} rightIcon={<ChevronDownIcon />}>
           <Text textAlign="left" color="grey" fontWeight={400}>How you first heard about ketto?</Text>
              </MenuButton>
              <Container maxW="container.md">
              <MenuList overflowY="scroll" height="30vh" width="32vw" direction="rtl">
                <MenuItem    value="Cancer Treatment">Cancer treatment</MenuItem>
                <MenuItem   value="Accident treatment">Accident treatment</MenuItem>
                <MenuItem  value="Liver / Kidney transplant">Liver/Kidney transplant</MenuItem>
                <MenuItem  value="Heart operation">Heart operation</MenuItem>
                <MenuItem  value="Pre-mature baby care (NICU)">Pre-mature baby care (NICU)</MenuItem>
                <MenuItem  value="Medicines (Ongoing treatment)">Medicines (Ongoing treatment)</MenuItem>
                <MenuItem  value="Memorial (Patient expired)">Memorial (Patient expired)</MenuItem>
                <MenuItem  value="others">others</MenuItem>
              </MenuList>
              </Container>
            </Menu>
          <Container maxW="container.sm">
            <HStack fontSize="smaller" borderRadius={10} border="1px dashed teal" width="55%"  p={3} spacing={5}>
                <Text >Add fundraiser image/video<br/><Text color="grey">(Optional)</Text></Text>
                <Button variant="outline" colorScheme="teal">Upload</Button>
            </HStack>
          </Container>
          <Text fontSize="12px" color="#b4ada6" fontStyle={"italic"}>
            You can easily make changes to your fundraiser at any time
          </Text>
          <Box bg="#bfefee" fontSize="14px" w="420px">
            <Text ml="20px">
              Ketto's zero platform fee policy will ensure more funds for you.
            </Text>
          </Box>
          <Box width="33.1vw" bgColor={"rgb(1,191,189)"}
            
            
             height="10vh"
            fontFamily={"sans-serif"}
            textAlign={"center"}
             
            fontWeight="bold"
            color={"white"}
            cursor={"pointer"}
            onClick={() => handleSubmit()}
      >
        <Text m="auto" p={10} >Save and continue{" "}</Text>
          </Box>
        </Stack>
        </>  
        : pages.NGO? <> 
        <Flex justifyContent={"center"} mt="10px">
           <Image w="20px" h="20px" src={plus}></Image>
           <Text fontSize={"13px"}>
             Raising funds for <strong>NGO/Charity</strong> purpose
           </Text>
         </Flex>
         <br />
         <Stack borderRadius={10} spacing={5} alignItems="center">
             
             <Container maxW="container.md" >
                 <InputGroup>
                         <Input
                         variant="flushed"
                         placeholder="How much do you want to raise"/>
                         <Image w="20px" h= "20px" src={qmark}></Image>
                 </InputGroup>
                 <Text padding={2} fontSize="smaller">Should be minimum ₹ 2000 </Text>
                 
             </Container>    
             <Container>
              <InputGroup>
                    <InputLeftElement
                      
                      children={<FaFlagUsa/>}
                    />
                    <Input  variant="flushed" outline="#30C9C8" placeholder='Fundraiser Title' />
                    
            </InputGroup>
             </Container> 
             <Container>
              <InputGroup>
                    <InputLeftElement
                      
                      children={<FaFlagUsa/>}
                    />
                    <Input  variant="flushed" outline="#30C9C8" placeholder='NGO Name' />
                    
            </InputGroup>
             </Container> 
             <Container>
              <InputGroup>
                    <InputLeftElement
                      
                      children={<FaFlagUsa/>}
                    />
                    <Input  variant="flushed" outline="#30C9C8" placeholder='Your Mobile Number' />
                    
            </InputGroup>
             </Container>
          
 
            <Menu >
               <MenuButton width="100%" value='What will be the funds used for?' borderRadius="none" borderBottom="1px solid lightgrey" variant="flused"  as={Button} rightIcon={<ChevronDownIcon />}>
            <Text textAlign="left" color="grey" fontWeight={400}>How you first heard about ketto?</Text>
               </MenuButton>
               <Container maxW="container.md">
               <MenuList overflowY="scroll" height="30vh" width="32vw" direction="rtl">
                 <MenuItem    value="Cancer Treatment">Cancer treatment</MenuItem>
                 <MenuItem   value="Accident treatment">Accident treatment</MenuItem>
                 <MenuItem  value="Liver / Kidney transplant">Liver/Kidney transplant</MenuItem>
                 <MenuItem  value="Heart operation">Heart operation</MenuItem>
                 <MenuItem  value="Pre-mature baby care (NICU)">Pre-mature baby care (NICU)</MenuItem>
                 <MenuItem  value="Medicines (Ongoing treatment)">Medicines (Ongoing treatment)</MenuItem>
                 <MenuItem  value="Memorial (Patient expired)">Memorial (Patient expired)</MenuItem>
                 <MenuItem  value="others">others</MenuItem>
               </MenuList>
               </Container>
             </Menu>
           <Container maxW="container.sm">
             <HStack fontSize="smaller" borderRadius={10} border="1px dashed teal" width="55%"  p={3} spacing={5}>
                 <Text >Add fundraiser image/video<br/><Text color="grey">(Optional)</Text></Text>
                 <Button variant="outline" colorScheme="teal">Upload</Button>
             </HStack>
           </Container>
           <Text fontSize="12px" color="#b4ada6" fontStyle={"italic"}>
             You can easily make changes to your fundraiser at any time
           </Text>
           <Box bg="#bfefee" fontSize="14px" w="420px">
             <Text ml="20px">
               Ketto's zero platform fee policy will ensure more funds for you.
             </Text>
           </Box>
           <Box width="33.1vw" bgColor={"rgb(1,191,189)"}
             
             
              height="10vh"
             fontFamily={"sans-serif"}
             textAlign={"center"}
              
             fontWeight="bold"
             color={"white"}
             cursor={"pointer"}
             onClick={() => handleSubmit()}
       >
         <Text m="auto" p={10} >Save and continue{" "}</Text>
           </Box>
         </Stack>
         </>  
        :  <> 
        <Flex justifyContent={"center"} mt="10px">
           <Image w="20px" h="20px" src={plus}></Image>
           <Text fontSize={"13px"}>
             Raising funds for <strong>Medical Treatment</strong> purpose
           </Text>
         </Flex>
         <br />
         <Stack borderRadius={10} spacing={5} alignItems="center">
             
             <Container maxW="container.md" >
                 <InputGroup>
                         <Input
                         variant="flushed"
                         placeholder="How much do you want to raise"/>
                         <Image w="20px" h= "20px" src={qmark}></Image>
                 </InputGroup>
                 <Text padding={2} fontSize="smaller">Should be minimum ₹ 2000 </Text>
             </Container>     
                  
                  
              
           <Container maxW="container.md" height={50} >
              <Menu sx={{overflow:"scroll"}}   >
               <MenuButton width="100%" value='What will be the funds used for?' borderRadius="none" borderBottom="1px solid lightgrey" variant="flused"  as={Button} rightIcon={<ChevronDownIcon />}>
                      <Text textAlign="left" color="grey" fontWeight={400}>The patient is my..</Text>
               </MenuButton>
               <Container  maxW="container.md" background="white">
               <MenuList background="white" overflowY="scroll" height="30vh"   width="30vw">
                 <MenuItem>Friend</MenuItem>
                 <MenuList  >
                   <MenuGroup title="Parent">
                     <MenuItem>Father</MenuItem>
                     <MenuItem>Mother</MenuItem>
                     <MenuItem>Grand Father</MenuItem>
                     <MenuItem>Grand Mother</MenuItem>
                   </MenuGroup>
                   <MenuDivider />
                   <MenuGroup title="Spouse">
                     <MenuItem>Husband</MenuItem>
                     <MenuItem>Wife</MenuItem>
                   </MenuGroup>
                   <MenuDivider />
                   <MenuGroup title="Child">
                     <MenuItem>Son</MenuItem>
                     <MenuItem>Daughter</MenuItem>
                     <MenuItem>Twins</MenuItem>
                     <MenuItem>Grandson</MenuItem>
                     <MenuItem>Granddaughter</MenuItem>
                   </MenuGroup>
                   <MenuDivider />
                   <MenuGroup title="Sibling">
                     <MenuItem>Brother</MenuItem>
                     <MenuItem>Sister</MenuItem>
                   </MenuGroup>
                   <MenuDivider />
                   <MenuGroup title="Others">
                     <MenuItem>Friend</MenuItem>
                     <MenuItem>Friend's Family</MenuItem>
                     <MenuItem>Cousin</MenuItem>
                     <MenuItem>Uncle</MenuItem>
                     <MenuItem>Aunt</MenuItem>
                     <MenuItem>Nephew</MenuItem>
                     <MenuItem>Niece</MenuItem>
                     <MenuItem>Colleague</MenuItem>
                     <MenuItem>Relative</MenuItem>
                     <MenuItem>Legal Ward</MenuItem>
                     <MenuItem>Other</MenuItem>
                   </MenuGroup>
                 </MenuList>
               </MenuList>
             </Container>
              
             </Menu>
           </Container>
          
           <InputGroup>
                   <InputLeftElement
                     
                     children={<FaFlagUsa/>}
                   />
                   <Input  variant="flushed" outline="#30C9C8" placeholder='Your Mobile Number' />
                   
           </InputGroup>
 
            <Menu >
               <MenuButton width="100%" value='What will be the funds used for?' borderRadius="none" borderBottom="1px solid lightgrey" variant="flused"  as={Button} rightIcon={<ChevronDownIcon />}>
            <Text textAlign="left" color="grey" fontWeight={400}>How you first heard about ketto?</Text>
               </MenuButton>
               <Container maxW="container.md">
               <MenuList overflowY="scroll" height="30vh" width="32vw" direction="rtl">
                 <MenuItem    value="Cancer Treatment">Cancer treatment</MenuItem>
                 <MenuItem   value="Accident treatment">Accident treatment</MenuItem>
                 <MenuItem  value="Liver / Kidney transplant">Liver/Kidney transplant</MenuItem>
                 <MenuItem  value="Heart operation">Heart operation</MenuItem>
                 <MenuItem  value="Pre-mature baby care (NICU)">Pre-mature baby care (NICU)</MenuItem>
                 <MenuItem  value="Medicines (Ongoing treatment)">Medicines (Ongoing treatment)</MenuItem>
                 <MenuItem  value="Memorial (Patient expired)">Memorial (Patient expired)</MenuItem>
                 <MenuItem  value="others">others</MenuItem>
               </MenuList>
               </Container>
             </Menu>
           <Container maxW="container.sm">
             <HStack fontSize="smaller" borderRadius={10} border="1px dashed teal" width="55%"  p={3} spacing={5}>
                 <Text >Add fundraiser image/video<br/><Text color="grey">(Optional)</Text></Text>
                 <Button variant="outline" colorScheme="teal">Upload</Button>
             </HStack>
           </Container>
           <Text fontSize="12px" color="#b4ada6" fontStyle={"italic"}>
             You can easily make changes to your fundraiser at any time
           </Text>
           <Box bg="#bfefee" fontSize="14px" w="420px">
             <Text ml="20px">
               Ketto's zero platform fee policy will ensure more funds for you.
             </Text>
           </Box>
           <Box width="33.1vw" bgColor={"rgb(1,191,189)"}
             
             
              height="10vh"
             fontFamily={"sans-serif"}
             textAlign={"center"}
              
             fontWeight="bold"
             color={"white"}
             cursor={"pointer"}
             onClick={() => handleSubmit()}
       >
         <Text m="auto" p={10} >Save and continue{" "}</Text>
           </Box>
         </Stack>
         </>  

        }
       
        
      </Container >
      
    </Container>
  );
};

export default NewFundRaiser2;
