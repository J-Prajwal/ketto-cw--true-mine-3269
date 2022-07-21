import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
  RadioGroup,
  Radio,
  Stack,
  InputGroup,
  InputLeftElement,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectway, setway] = useState(false);
  const [otp, setotp] = useState(false);
  return (
    <>
      <Button
        tabIndex={-1}
        my={4}
        data-cy="add-product-button"
        onClick={onOpen}
      >
        Sign in
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay></ModalOverlay>
        <ModalContent
          style={{
            position: "fixed",
            width: "43434px",

            // marginTop: "147px",
            // marginLeft: "207px",
            margin: "10% 49% 0% 27%",
          }}
        >
          <div
            style={{
              // border: "1px solid blue",
              borderRadius: "1%",
              backgroundColor: "white",
              width: "53%",
              height: "63%",
              position: "fixed",
            }}
          >
            <ModalHeader
              style={{
                textAlign: "center",
                paddingLeft: "30px",
                // border: "1px solid blue",
                fontSize: "x-large",
              }}
            >
              Login
            </ModalHeader>
            <ModalCloseButton style={{ fontSize: "large" }}></ModalCloseButton>
            <ModalBody pb={6}>
              <FormControl style={{ marginTop: "4%" }}>
                <Flex>
                  <div style={{ textAlign: "center",width:"47%" }}>
                    {selectway === false ? (
                      <>
                        <Input
                          style={{ width: "100%", marginBottom: "5%" }}
                          data-cy="add-product-title"
                          placeholder="Email/Mobile number"
                          name="title"
                          maxLength={1}
                          type={"number"}
                        />
                        {otp === true ? (
                          <>
                            <Input
                              style={{ width: "100%", marginBottom: "5%" }}
                              data-cy="add-product-title"
                              placeholder="Enter OTP"
                              maxLength={6}
                              name="title"
                            />
                          </>
                        ) : null}
                        <Button
                          style={{
                            width: "100%",
                            color: "white",
                            backgroundColor: "#01bfbd",
                          }}
                          onClick={() => setotp(!otp)}
                          data-cy="add-product-submit-button"
                        >
                          {otp !== true ? "Get OTP" : "Login"}
                        </Button>
                      </>
                    ) : (
                      <>
                        <Input
                          style={{ width: "100%", marginBottom: "5%" }}
                          data-cy="add-product-title"
                          placeholder="Email Address"
                          type={"email"}
                          name="title"
                        />
                        <Input
                          style={{ width: "100%", marginBottom: "5%" }}
                          data-cy="add-product-title"
                          placeholder="Password"
                          maxLength={8}
                          type={"password"}
                          name="title"
                        />
                        <Button
                          style={{
                            width: "100%",
                            color: "white",
                            backgroundColor: "#01bfbd",
                          }}
                          onClick={() => setotp(!otp)}
                          data-cy="add-product-submit-button"
                        >
                          Sign in
                        </Button>
                      </>
                    )}

                    <div style={{ textAlign: "center" }}>
                      <p
                        onClick={() => setway(!selectway)}
                        style={{
                          cursor: "pointer",
                          // margin: "5% 1% 3% 0%",
                          fontSize: "small",
                          marginTop: "8%",
                          color: "#01bfbd",
                        }}
                      >
                        {selectway === false
                          ? "Login via Password"
                          : "Login via OTP"}
                      </p>

                      <p
                        style={{
                          fontSize: "12px",
                          // marginRight: "19%",
                          marginTop: "8%",
                          // wodth:"100%",
                          // border:"1px solid red",
                          fontFamily: "sans-serif",
                          color: "gray",
                        }}
                      >
                        By continuing you agree to our{" "}
                        <span style={{ color: "#01bfbd", cursor: "pointer" }}>
                          Terms of Service
                        </span>{" "}
                        and{" "}
                        <span style={{ color: "#01bfbd", cursor: "pointer" }}>
                          Privacy <br></br>Policy
                        </span>
                      </p>
                      <p
                        style={{
                          margin: "29px 0px 0px 0px",
                          // marginTop:"17px",
                          color: "dimgray",
                          // fontSize: "large",
                          fontFamily: "sans-serif",
                        }}
                      >
                        Want to start a fundraiser?{" "}
                        <span style={{ color: "#01bfbd", cursor: "pointer" }}>
                          Click here
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* rightside */}
                  <div
                    style={{ width: "50%", border: "1px ", display: "flex" }}
                  >
                    <div>
                      <div style={selectway || otp? {height: "120px"}:{height:"100px"}}></div>
                      <p style={{ margin: "10px 0px 10px 50px" }}>Or</p>
                    </div>
                    <button
                      style={
                        selectway || otp ? 
                        {
                        border: "",
                        width: "80%",
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "large",
                        borderRadius: "2%",
                        // marginRight: "19%",
                        marginLeft: "10%",
                        backgroundColor: "#4285f4",
                        height: "40px",
                        marginTop:"120px"
                      } : {
                        border: "",
                        width: "80%",
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "large",
                        borderRadius: "2%",
                        // marginRight: "19%",
                        marginLeft: "10%",
                        backgroundColor: "#4285f4",
                        height: "40px",
                        marginTop:"100px"
                      }}
                    >
                      <img
                        style={{
                          cursor: "pointer",
                          width: "13%",
                          // height: "100%",
                          margin: "2%",
                        }}
                        src="https://cdn-icons.flaticon.com/png/512/2504/premium/2504914.png?token=exp=1658299748~hmac=80727ac986a21a8da705c74f5c58ee1a"
                        alt="img"
                      />
                      <span
                        style={{
                          cursor: "pointer",
                          margin: "5px 7% 0px 0%",
                          color: "white",
                        }}
                      >
                        Sign in with Google
                      </span>
                    </button>
                  </div>
                </Flex>
              </FormControl>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
