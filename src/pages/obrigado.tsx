import {
  Flex,
  Text,
  Icon,
  Image,
  SimpleGrid,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Select,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";

import axios from "axios";

import { IMaskInput } from "react-imask";

import {
  FaArrowRight,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLocationArrow,
  FaMailchimp,
  FaMapPin,
  FaNetworkWired,
  FaPencilAlt,
  FaPhone,
  FaPython,
  FaReact,
  FaTiktok,
} from "react-icons/fa";

import { IoIosArrowForward, IoIosMail } from "react-icons/io";
import {
  SiExpo,
  SiExpress,
  SiFacebook,
  SiGoogleadmob,
  SiGoogleads,
  SiGooglecloud,
  SiInstagram,
  SiTiktok,
  SiTypescript,
} from "react-icons/si";

import useMediaQuery from "../utils/useMediaQuery";
import * as EmailValidator from "email-validator";
import Head from "next/head";

export default function Page() {
  const { mobile, tablet, desktop } = useMediaQuery();

  const toast = useToast();

  const [getInTouch, setGetInTouch] = useState(false);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [employees, setEmployees] = useState<string>("1-2");
  const [invoicing, setInvoicing] = useState<string>("1.000-5.000");

  const [sending, setSending] = useState(false);

  const [messageSent, setMessageSent] = useState<boolean>(false);

  async function postLead() {
    const res = await axios.post(
      `https://corza-dot-membros-375000.rj.r.appspot.com/lead`,
      {
        name,
        email,
        phone,
        message,
        invoicing,
        employees,
      }
    );
    console.log(res.data);
    if (res.status === 200) {
      setSending(true);
      setTimeout(() => {
        setMessageSent(true);
        setSending(false);
        setGetInTouch(false);
      }, 2000);
    } else {
      toast({
        status: "error",
        description: "Falha ao enviar, entre em contato conosco.",
      });
    }
  }

  const [hasReloaded, setHasReloaded] = useState(false);

  const html = `
    <head>
    <meta charset="UTF-8">
    <meta name="facebook-domain-verification" content="n4g5nov03b6c1q3d2avhvjvwi00kew" />
    <title>Minha página</title>

    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-JE90HJ2K78">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JE90HJ2K78');
</script>

    <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '228774192860933');
      fbq('track', 'CADASTROTDA');
    </script>
    <noscript>
      <img height="1" width="1" src="https://www.facebook.com/tr?id=SEU_ID_DE_PIXEL_AQUI&ev=PageView&noscript=1"/>
    </noscript>
  </head>
    `;

  return (
    <Flex flexDir="column" cursor="default">
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Flex w="100%" flexDir="column">
        <Flex bg="#000102" flexDir="column">
          <Flex
            position="fixed"
            style={{
              backdropFilter: "blur(10px)",
              opacity: 0.99,
            }}
            zIndex={9}
            w="100%"
            p="6"
            px="8"
            align="center"
            justify="space-between"
          >
            <Image
              mx="auto"
              src="/h2.png"
              style={{
                height: 40,
                width: "auto",
              }}
            />
          </Flex>
          <Flex
            w="100%"
            justify="center"
            align="center"
            style={{
              background: "linear-gradient(to bottom, #06915C -100%, #000 80%)",
            }}
          >
            <Flex
              mt="20"
              zIndex={2}
              maxW="100vw"
              flexDir="column"
              justify="center"
              align="center"
              color="#FFF"
              p="8"
              w={mobile ? "100%" : 900}
            >
              <Text
                fontFamily="Poppins"
                textAlign="center"
                mt="10"
                fontWeight="bold"
                fontSize={mobile ? "1.25rem" : tablet ? "2rem" : "2.5rem"}
              >
                Parabéns! Você está prestes a impulsionar o sucesso do seu
                negócio. Em breve, um de nossos especialistas entrará em contato
                com você.
              </Text>
              <Text
                mt="4"
                fontFamily="Poppins"
                textAlign="center"
                fontSize={mobile ? "1rem" : tablet ? "1.5rem" : "1.4rem"}
              >
                O método TDA em 7 passos ajuda a entender por que seu negócio
                não está alcançando os resultados desejados e fornece um passo a
                passo para superar as metas de faturamento.
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          pt={messageSent ? "0" : "10"}
          bg="#000"
          w="100%"
          py={20}
          color="#FFF"
          flexDir={mobile ? "column" : "row"}
          fontFamily="Poppins"
          align="center"
          justify="center"
          px="8"
        >
          <Flex align="center">
            <Flex align="center" transform="rotate(-90deg)"></Flex>
            <Flex flexDir="column" bg="#000" maxW={900} borderRadius="20">
              <Flex
                flexDir={mobile ? "column" : "row"}
                align={mobile ? "flex-start" : "center"}
                mt="10"
              >
                <Flex align="center">
                  <Flex
                    style={{
                      height: 10,
                      width: 35,
                      backgroundColor: "red",
                      borderRadius: 15,
                    }}
                  />
                  <Text
                    ml="2"
                    style={
                      {
                        // textShadow: "rgba(255, 0, 0, 1) 0 0 70px",
                      }
                    }
                    fontFamily="Poppins"
                    textAlign="left"
                    fontSize={mobile ? "0.8rem" : "1rem"}
                  >
                    Faturamento em empresa aplicando o método TDA
                  </Text>
                </Flex>
                <Flex align="center" mt={mobile ? "4" : "0"}>
                  <Flex
                    ml={mobile ? "0" : "4"}
                    style={{
                      height: 10,
                      width: 35,
                      backgroundColor: "#aaa",
                      borderRadius: 15,
                    }}
                  />
                  <Text
                    ml="2"
                    style={
                      {
                        // textShadow: "rgba(255, 0, 0, 1) 0 0 70px",
                      }
                    }
                    fontFamily="Poppins"
                    textAlign="left"
                    fontSize={mobile ? "0.8rem" : "1rem"}
                  >
                    Faturamento em empresa concorrente
                  </Text>
                </Flex>
              </Flex>
              <Image
                mt={10}
                src="/graph.webp"
                style={{
                  width: 700,
                  height: "auto",
                }}
              />
              <Text
                mt={100}
                fontFamily="Poppins"
                textAlign="center"
                fontSize={mobile ? "1rem" : "1rem"}
              >
                Você esta agindo para o seu negocio prosperar ou para falir?
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          bg="#000"
          color="#FFF"
          justify="space-between"
          w="100%"
          py={20}
          px={10}
          fontFamily="Poppins"
          align={mobile ? "flex-start" : "center"}
          flexDir={mobile ? "column" : "row"}
        >
          <Flex flexDir="column">
            <Text
              fontFamily="Poppins"
              mb="4"
              fontSize={mobile ? "2rem" : tablet ? "2.5rem" : "3.5rem"}
            >
              Corza®
            </Text>
          </Flex>
          <Flex flexDir="column"></Flex>
          <Flex flexDir="column">
            <Text fontFamily="Poppins" fontSize={mobile ? "0.7rem" : "1rem"}>
              Corza Digital Consultoria LTDA.
            </Text>
            <Text
              mt="4"
              fontFamily="Poppins"
              fontSize={mobile ? "0.7rem" : "1rem"}
            >
              Calçada Antares, 1444 - Alphaville | CEP: 06443-065
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Modal
        scrollBehavior="inside"
        isCentered
        size={mobile ? "lg" : "3xl"}
        isOpen={getInTouch}
        onClose={() => setGetInTouch(!getInTouch)}
      >
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent bg="#202123" color="#FFF" borderRadius="25">
          <ModalBody p={0} borderRadius="25">
            <Flex flexDir={mobile ? "column" : "row"} align="center">
              <Flex
                justify="space-between"
                bg={mobile ? "#202123" : "#111"}
                p="8"
                w={mobile ? "100%" : "50%"}
                h={mobile ? "auto" : 520}
                flexDir="column"
              >
                <Flex flexDir="column">
                  <Text
                    color="#FFF"
                    fontWeight="bold"
                    fontFamily="Poppins"
                    fontSize="1.4rem"
                  >
                    Informação de contato
                  </Text>
                  <Text
                    color="#FFF"
                    mt="2"
                    fontFamily="Poppins"
                    fontSize="0.9rem"
                  >
                    Nossa equipe está pronta pra te atender e levar seu negócio
                    para um outro nível
                  </Text>
                </Flex>
                <Flex flexDir="column">
                  <Flex
                    cursor="default"
                    mt={mobile ? 10 : 0}
                    align="center"
                    fontSize="1.2rem"
                  >
                    <Icon as={FaPhone} mr="2" />
                    <Text color="#FFF" fontFamily="Poppins" fontWeight="bold">
                      (11) 91579-9139
                    </Text>
                  </Flex>
                  <Flex
                    cursor="default"
                    mt="4"
                    align="center"
                    fontSize="1.2rem"
                  >
                    <Icon as={IoIosMail} mr="2" />
                    <Text color="#FFF" fontFamily="Poppins" fontWeight="bold">
                      suporte@corza.com.br
                    </Text>
                  </Flex>
                </Flex>
                <Flex align="center">
                  <Icon as={FaMapPin} mr="2" />
                  <Text color="#FFF" fontFamily="Poppins" fontSize="0.9rem">
                    Alphaville, São Paulo
                  </Text>
                </Flex>
              </Flex>
              {sending ? (
                <Flex
                  py={mobile ? 0 : "8"}
                  px={mobile ? "8" : "8"}
                  justify="space-between"
                  h={mobile ? "auto" : 500}
                  flexDir="column"
                >
                  <Flex py={50}>
                    <Image
                      src="/loading.gif"
                      style={{
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Flex>
                </Flex>
              ) : (
                <Flex
                  py={mobile ? 0 : "8"}
                  px={mobile ? "8" : "8"}
                  justify="space-between"
                  h={mobile ? "auto" : 500}
                  flexDir="column"
                  w="100%"
                >
                  <Flex flexDir="column" w="100%">
                    <Flex
                      flexDir={mobile ? "column" : "row"}
                      w="100%"
                      align="center"
                    >
                      <Flex flexDir="column" w="100%">
                        <Text
                          color="#FFF"
                          fontFamily="Poppins"
                          fontSize="0.9rem"
                        >
                          Qual seu nome?
                        </Text>
                        <Input
                          mt="2"
                          _active={{
                            outline: "none !important",
                            border: "0px solid transparent",
                          }}
                          _focus={{
                            outline: "none !important",
                            border: "0px solid transparent",
                          }}
                          _hover={{
                            outline: "none !important",
                            border: "0px solid transparent",
                          }}
                          style={{
                            outline: "none !important",
                            border: "1px solid #333",
                          }}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </Flex>
                      <Flex
                        ml={mobile ? "0" : "4"}
                        mt={mobile ? "4" : "0"}
                        w="100%"
                        flexDir="column"
                      >
                        <Text
                          color="#FFF"
                          fontFamily="Poppins"
                          fontSize="0.9rem"
                        >
                          Qual seu Whatsapp?
                        </Text>
                        <Input
                          as={IMaskInput}
                          px="2.5"
                          mask="(00) 00000-0000"
                          mt="2"
                          onChange={(
                            e: React.ChangeEvent<HTMLInputElement>
                          ) => {
                            setPhone(e.target.value);
                          }}
                          _active={{
                            outline: "none !important",
                            border: "0px solid transparent",
                          }}
                          _focus={{
                            outline: "none !important",
                            border: "0px solid transparent",
                          }}
                          _hover={{
                            outline: "none !important",
                            border: "0px solid transparent",
                          }}
                          style={{
                            outline: "none !important",
                            border: "1px solid #333",
                          }}
                        />
                      </Flex>
                    </Flex>
                    <Text
                      mt="4"
                      color="#FFF"
                      fontFamily="Poppins"
                      fontSize="0.9rem"
                    >
                      Qual seu Email?
                    </Text>
                    <Input
                      mt="2"
                      _active={{
                        outline: "none !important",
                        border: "0px solid transparent",
                      }}
                      _focus={{
                        outline: "none !important",
                        border: "0px solid transparent",
                      }}
                      _hover={{
                        outline: "none !important",
                        border: "0px solid transparent",
                      }}
                      style={{
                        outline: "none !important",
                        border: "1px solid #333",
                      }}
                      _placeholder={{
                        color: "#fff",
                      }}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <Flex mt="4" flexDir="column">
                      <Text color="#FFF" fontFamily="Poppins" fontSize="0.9rem">
                        Sua mensagem
                      </Text>
                      <Textarea
                        onChange={(e) => {
                          setMessage(e.target.value);
                        }}
                        mt="2"
                        h={150}
                        maxH={150}
                        _active={{
                          outline: "none !important",
                          border: "0px solid transparent",
                        }}
                        _focus={{
                          outline: "none !important",
                          border: "0px solid transparent",
                        }}
                        _hover={{
                          outline: "none !important",
                          border: "0px solid transparent",
                        }}
                        style={{
                          outline: "none !important",
                          border: "1px solid #333",
                        }}
                      />
                    </Flex>
                  </Flex>
                  <Flex
                    onClick={() => {
                      if (!name.split(" ")[0]) {
                        toast({
                          status: "error",
                          description: "Insira seu nome",
                        });
                      } else if (!EmailValidator.validate(email)) {
                        toast({
                          status: "error",
                          description: "Insira um E-mail válido",
                        });
                      } else if (!phone) {
                        toast({
                          status: "error",
                          description: "Insira um Whatsapp válido",
                        });
                      } else {
                        postLead();
                      }
                    }}
                    my="8"
                    cursor="pointer"
                    bg="#1ABA14"
                    justify="center"
                    align="center"
                    borderRadius="full"
                    py="2.5"
                  >
                    <Text
                      fontFamily="Poppins"
                      fontWeight={600}
                      color="#FFF"
                      fontSize="1rem"
                    >
                      Entrar em contato
                    </Text>
                  </Flex>
                </Flex>
              )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
