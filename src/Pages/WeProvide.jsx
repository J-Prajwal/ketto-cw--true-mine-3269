import React from 'react'
import { Button,HStack, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box} from '@chakra-ui/react'


const WeProvide = () => {
  return (
    <div>
        <div
          style={{
            background: "#fff",
            // borderBottom: "8px solid #f0f0f0",
            fontFamily: "Poppins, sans-serif",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <div>
            <div style={{ borderBottam: "8px solid #f0f0f0" }}>
              <div
                style={{
                  fontSize: "40px",
                  color: "#2b2b2b",
                  fontWeight: "700",
                  textAlign: "center",
                  paddingBottom: "40px",
                  marginTop: "40px"
                }}>We provide everything you need</div>


              <div style={{ flexDirection: "column",marginLeft:"5rem" }}>
                <div style={{ flexDirection: "row", display: "flex", marginTop:"1rem",  }}>


                  <div
                    style={{
                      width: "50%",
                      display: "flex",
                 
                    }}>
                    <div>
                      <img
                        style={{ 
                            width: "43px",
                             marginTop: "10px"
                             ,marginRight:"3rem",
                            
                             }}
                        src="https://images.squarespace-cdn.com/content/v1/607610837a01e85307cedd49/1619470115905-FSO2CWBUQ2X67RKE11A7/Icons_Grants.png?format=500w"
                      />
                    </div>


                    <div style={{width: "25rem" }}>
                          
                      <h2>Payout</h2>
                      <p>
                      This is your money, you can withdraw it at any point during the course of your fundraiser
                      </p>
                    </div>
                    <div>
                      <img
                        style={{ width: "40px",marginRight:"3rem",
                    
                          marginTop: "10px" 
                        
                        }}
                        src="https://www.westminster.ac.uk/sites/default/public-files/styles/icons/public/icons/globe-icon-turqoise.png?itok=S0zM9krA"
                      />
                    </div>
                    <div style={{ width: "25rem",  }}>
                                              
                      <h3>International payment support</h3>
                      <p>We accept donations in multiple currencies from anywhere in the world</p>
                    </div>
                  </div>

                  
                  <div style={{ width: "43%", display: "flex" ,textAlign:"left"}}>
                    <div>
                      <img
                        style={{
                             width: "50px",marginRight:"3rem",marginTop: "10px"  }}
                                                                              
                        src="https://aconsa-lab.com/wp-content/uploads/2019/11/icono-participacion.png"/>
                    </div>
                    <div style={{ width: "20rem"  }}>
                                              
                      <h1>Multiple people - Same Fundraiser</h1>

                      <p>
                      Multiple people manage and fundraise for your cause
                      </p>
                    </div>
                  </div>
                </div>


                <div style={{ flexDirection: "row", display: "flex", marginTop:"3rem",  }}>
                  <div style={{ flexDirection: "row", display: "flex" }}>


                    <div
                      style={{
                        width: "50%",
                        display: "flex",}}>
                       
                      
                      
                      <div>
                        <img
                          style={{ width: "43px", marginTop: "10px",marginRight:"3rem",  }}
                                    
                          src="https://www.qognify.com/wp-content/uploads/2021/05/icon-enhanced-resiliency.png"/>
                      </div>
                      <div style={{width: "340px",  }}>
                        
                         
                      
                        
                        <h3>Personalized Web App</h3>
                        <p>
                        Get instant updates on your fundraiser'
                        s  via instant alerts, email 
                        and track realtime on Ketto's web app
                        </p>
                      </div>
                      <div>
                        <img
                          style={{ width: "43px", marginTop: "10px" ,marginRight:"3rem",  }}
                       
                      
                          src="https://tabloo.com/sites/default/files/2021-11/user_0.svg"/>
                      </div>
                      <div style={{  width: "340px", }}>
                                              
                       
                         
                        <h3>Dedicated Fundraiser expert</h3>
                        <p>
                        A dedicated fundraiser expert 
                        guides you through your fundraising
                        </p>
                      </div>
                    </div>
                    
                    <div
                      style={{width: "50%",display: "flex", }}>
                        
                        
                      
                     
                    
                      <div>
                        <img
                          style={{ width: "43px",
                           marginTop: "10px",marginRight:"3rem",
                        
                         }}
                          src="https://spacesolutions.be/wp-content/uploads/2020/01/icon_business-incubation.png"
                        />
                      </div>
                      <div style={{ width: "340px" }}>
                                          
                        <h3>Keep the raised amount</h3>
                        <p>You will receive all the raised
                        amount after the transactional,
                        processing fee.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


                <div style={{ flexDirection: "row", display: "flex", marginTop:"3rem",  }}>
                  <div style={{ flexDirection: "row", display: "flex" }}>


                    <div
                      style={{  width: "50%", display: "flex",  }}>
                      
                       
                       
                    
                      <div>
                        <img
                          style={{ width: "43px", marginTop: "10px" ,marginRight:"3rem" , }}
                          src="https://www.leaseplan.com/-/jssmedia/leaseplan-digital/shared/icons/aqua-blue/contact/innovation_l_aqua_blue.svg?iar=0&rev=fdb35e2231de425f85255d506f88f87c"
                        />
                      </div>
                      <div style={{width: "340px" , }}>
                       
                           
                       
                         
                        <h3>24/7 support</h3>
                        <p>
                        We offer you 24*7 assistance 
                        via call, WhatsApp, Email, SMS
                        and our Instant Chatting Interface
                        </p>
                      </div>

                      <div>
                        <img
                          style={{ width: "43px", marginRight:"3rem",marginTop: "10px"}}
                          src="https://metricool.com/wp-content/uploads/advertising.png"
                        />
                      </div>
                      <div style={{  width: "340px", }}>
                       
                       
                       
                       
                        <h3>Advertising support</h3>
                        <p>
                        We provide marketing and 
                        promotional support for
                         your fundraiser
                        </p>
                      </div>
                    </div>
                    <div
                      style={{ width: "50%", display: "flex", }}>
                       
                      <div>
                        <img
                          style={{ width: "43px",
                           marginTop: "10px",marginRight:"3rem", }}
                    
                        
                          src="https://www.thinkhealthstl.org/content/sites/stlouisco/Tools.jpg"
                        />
                      </div>
                      <div style={{width: "340px", }}>
                      
                          
                       
                          
                        <h3>Fundraising Marketing tool</h3>
                        <p>
                        A highly intelligent marketing
                         tool, which provides all insights
                          on your fundraiser
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div></div>
          <div></div>


    <HStack style={{ marginLeft:"20rem", padding:"20px ", marginTop:"3rem"
    }}>
  <Button backgroundColor={"#30C9C8"} color={"white"} padding={"25"} >
   SATRT A FUNDRAISER
  </Button>
  <Button color={"#30C9C8"} backgroundColor={"white"} padding={"25"} border={"1px solid #30C9C8 "}>
    BROUSE FUNDRAISER
  </Button>
</HStack>



{/* ------------------------------faq--------------------------------------------------- */}


<Accordion allowToggle>
<h1 style={{fontSize:"20px" ,fontWeight:"bold" ,marginLeft:"2rem"}}>FAQS</h1>
  <AccordionItem backgroundColor={"white"}>
    <h2>
      <AccordionButton>
        <Box flex='1'  lineHeight='42px'  fontSize='17px' textAlign='left'>
        How do I raise funds?
        </Box>
        <AccordionIcon  style={{color:"#30C9C8"}}/>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} display='flex'>
    To Start a Fundraiser, follow the three steps:<br/>
    1.Sign up on Ketto.<br/>
    2.Fill up the form<br/>
    3.Hit Submit
      
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem backgroundColor={"white"}>
    <h2>
      <AccordionButton>
        <Box flex='1'lineHeight='42px' fontSize='17px' textAlign='left'>
        Can I raise funds for a friend as well?
        </Box>
        <AccordionIcon style={{color:"#30C9C8"}} />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Yes, you can also raise funds for a friend, a loved one or anyone in need during life's crucial moments
      
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem backgroundColor={"white"}>
    <h2>
      <AccordionButton>
        <Box flex='1'lineHeight='42px' fontSize='17px' textAlign='left'>
        Does the raised amount reach the individual directly?
        </Box>
        <AccordionIcon style={{color:"#30C9C8"}} />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    With Ketto, the money you collect goes directly to the bank account associated 
    with your fundraising page. Raising money for yourself or anyone has never been easier.
      
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem backgroundColor={"white"}>
    <h2>
      <AccordionButton>
        <Box flex='1'lineHeight='42px' fontSize='17px' textAlign='left'>
        Is it safe?
        </Box>
        <AccordionIcon  style={{color:"#30C9C8"}}/>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Your Ketto fundraiser features the very best in secure payment encryption technology. Not only 
    are your donors online payments safe, your money 
    is stored securely until you're ready to request a withdrawal via electronic bank transfer.
      
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem backgroundColor={"white"}>
    <h2>
      <AccordionButton>
        <Box flex='1'lineHeight='42px' fontSize='17px' textAlign='left'>
        What if I don't reach my goal?
        </Box>
        <AccordionIcon style={{color:"#30C9C8"}} />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    No problem. You will still receive the raised amount after the transactional processing fee.
To know more about transactional processing fee, visit: www.ketto.org/support/plans-and-pricing
      
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem backgroundColor={"white"}>
    <h2>
      <AccordionButton>
        <Box flex='1'lineHeight='42px' fontSize='17px' textAlign='left'>
        I have more questions, who do I write to?
        </Box>
        <AccordionIcon style={{color:"#30C9C8"}} />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    You can write to info@ketto.org Know someone who needs funds for medical
     treatment urgently? Help them out by sharing this information with them.
     
    </AccordionPanel>
  </AccordionItem>
</Accordion>



          



        </div>
        </div>


  )
}

export default WeProvide