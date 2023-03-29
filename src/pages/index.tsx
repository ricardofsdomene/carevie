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
import axios from "axios";
import React, { useState } from "react";
import { IMaskInput } from "react-imask";
import * as EmailValidator from "email-validator";

import {
  FaArrowRight,
  FaCheck,
  FaCheckSquare,
  FaClosedCaptioning,
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLocationArrow,
  FaMailchimp,
  FaMapPin,
  FaNetworkWired,
  FaNotEqual,
  FaPencilAlt,
  FaPhone,
  FaPython,
  FaReact,
  FaTiktok,
} from "react-icons/fa";

import {
  IoIosArrowForward,
  IoIosMail,
  IoMdClose,
  IoMdCloseCircleOutline,
} from "react-icons/io";
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
        window.location.href = "/obrigado";
      }, 2000);
    } else {
      toast({
        status: "error",
        description: "Falha ao enviar, entre em contato conosco.",
      });
    }
  }

  const html = `
  <head>
  <meta charset="UTF-8">
  <meta name="facebook-domain-verification" content="n4g5nov03b6c1q3d2avhvjvwi00kew" />
  <title>Corza Digital</title>

  <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-JE90HJ2K78">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JE90HJ2K78');
</script>

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
    fbq('track', 'PageView');
  </script>
  <noscript>
    <img height="1" width="1" src="https://www.facebook.com/tr?id=SEU_ID_DE_PIXEL_AQUI&ev=PageView&noscript=1"/>
  </noscript>
</head>
  `;

  function Jumbo1() {
    return (
      <Flex flexDir="column" overflowX="hidden">
        {mobile ? (
          <Flex w="100%" pl="6" pt={100} align="center">
            <Image
              src="/carevie.png"
              style={{
                width: 200,
                height: "auto",
              }}
            />
          </Flex>
        ) : (
          <Flex h={mobile ? "auto" : "100vh"} bg="#000102" flexDir="column">
            <Flex h="100%" w="100%" pt={50} px={100}>
              <Flex
                zIndex={2}
                flexDir="column"
                color="#FFF"
                p="8"
                w={mobile ? "100%" : 700}
              >
                <Image
                  src="/carevie.png"
                  style={{
                    width: 250,
                    height: "auto",
                  }}
                />
                <Text
                  mt="13.5vh"
                  fontFamily="Poppins"
                  fontWeight="bold"
                  fontSize={mobile ? "1.5rem" : tablet ? "2.5rem" : "2.4rem"}
                >
                  Sua estratégia de marketing médico personalizada. <br />
                  Resultados comprovados e compromisso com excelência.
                </Text>

                <Flex
                  zIndex={999}
                  mt="10"
                  bg="#014BEA"
                  justify="center"
                  align="center"
                  borderRadius="5"
                  py="3"
                  px="6"
                  w="-webkit-fit-content"
                  boxShadow="0px 0px 28px 4px #014BEA"
                >
                  <Text color="#FFF" fontWeight="bold" fontFamily="Poppins">
                    CLIQUE E AGENDE SUA SESSÃO ESTRATÉGICA GRATUITA
                  </Text>
                </Flex>

                <Flex
                  h={"30vw"}
                  w={"30vw"}
                  position="absolute"
                  zIndex={0}
                  mt={"13.5vh"}
                  right={20}
                  style={{
                    borderRadius: "50%",
                    backgroundImage:
                      "radial-gradient(circle, rgba(0,0,255,0), rgba(0,0,255,0.35) 80%, transparent 80%)",
                  }}
                />
              </Flex>
            </Flex>
          </Flex>
        )}
        {mobile && (
          <Flex
            pt="10"
            borderTop={mobile ? "0px solid transparent" : "1px solid #333"}
            bg="#000"
            w="100%"
            py={20}
            color="#FFF"
            flexDir={mobile ? "column" : "row"}
            fontFamily="Poppins"
            align={"center"}
            justify="space-around"
          >
            <Flex p="8" flexDir="column" w={mobile ? "100%" : "55%"}>
              <Text
                fontFamily="Poppins"
                textAlign={mobile ? "left" : "center"}
                fontSize={mobile ? "1.5rem" : "2.3rem"}
                fontWeight="bold"
                mt={mobile ? -10 : 0}
              >
                Cuidando da sua presença digital
                <br />e alcançando novos pacientes com nossas soluções de
                marketing para consultórios médicos.
              </Text>
              {/* <Text
                mt="6"
                maxW={mobile ? 400 : 700}
                fontFamily="Poppins"
                textAlign={mobile ? "left" : "center"}
                fontSize={mobile ? "1rem" : "1.55rem"}
              >
                Sua estratégia de marketing médico personalizada - Resultados
                comprovados e compromisso com excelência. Aumente sua presença
                online e conquiste mais pacientes com nossos serviços de tráfego
                pago para consultórios médicos, utilizando a nossa metodologia
                "Medboost"
              </Text> */}

              <Flex
                zIndex={999}
                mt="10"
                bg="#014BEA"
                justify="center"
                align="center"
                borderRadius="5"
                py="3"
                px="6"
                maxW={290}
                boxShadow="0px 0px 28px 4px #014BEA"
              >
                <Text color="#FFF" fontWeight="bold" fontFamily="Poppins">
                  CLIQUE E AGENDE SUA SESSÃO ESTRATÉGICA GRATUITA
                </Text>
              </Flex>
              <Flex
                h={300}
                w={300}
                position="absolute"
                zIndex={0}
                mt={-100}
                left={-170}
                style={{
                  borderRadius: "50%",
                  backgroundImage:
                    "radial-gradient(circle, rgba(0,0,255,0), rgba(0,0,255,0.3) 80%, transparent 80%)",
                }}
              />
              <Flex
                h={300}
                w={300}
                position="absolute"
                zIndex={0}
                right={0}
                style={{
                  borderRadius: "50%",
                  backgroundImage:
                    "radial-gradient(circle, rgba(208,91,119,0), rgba(208,91,119,0.2) 80%, transparent 80%)",
                }}
              />
            </Flex>
          </Flex>
        )}
      </Flex>
    );
  }

  function Jumbo2() {
    return (
      <Flex flexDir="column" w="100%" bg="#FFF">
        <Flex py="6" flexDir="column" maxW={1200} justify="center" mx="auto">
          <SimpleGrid
            spacingX={10}
            spacingY={5}
            p="6"
            columns={[1, 1, 2, 2, 2, 2]}
            spacing="0px"
          >
            <Flex
              borderRadius="10"
              justify="space-between"
              flexDir="column"
              bg="#F9F9F9"
              w="100%"
              px={35}
              py="10"
            >
              <Flex w="100%" justify="space-between" align="center">
                <Flex
                  border="1px solid #ddd"
                  borderRadius="full"
                  px="6"
                  w="-webkit-fit-content"
                  py="2"
                  justify="center"
                  align="center"
                >
                  <Text color="#333" fontWeight={500} fontFamily="Poppins">
                    COMO FUNCIONA?
                  </Text>
                </Flex>
              </Flex>
              <Text
                mt="10"
                color="#000"
                fontFamily="Poppins"
                fontSize={mobile ? "1.2rem" : "1.6rem"}
              >
                Nossa equipe de especialistas em marketing médico desenvolve um
                planejamento estratégico personalizado, com foco exclusivo no
                seu negócio, para que sua clínica ou consultório médico alcance
                o sucesso desejado.
              </Text>
            </Flex>
            <Flex
              borderRadius="10"
              justify="space-between"
              flexDir="column"
              bg="#F0F0F0"
              w="100%"
              px={35}
              py="10"
            >
              <Flex w="100%" justify="space-between" align="center">
                <Flex
                  border="1px solid #ddd"
                  borderRadius="full"
                  px="6"
                  w="-webkit-fit-content"
                  py="2"
                  justify="center"
                  align="center"
                >
                  <Text color="#333" fontWeight={500} fontFamily="Poppins">
                    COMO FUNCIONA?
                  </Text>
                </Flex>
              </Flex>
              <Text
                mt="10"
                color="#000"
                fontFamily="Poppins"
                fontSize={mobile ? "1.2rem" : "1.6rem"}
              >
                Nós construímos o melhor funil de captura e vendas para sua
                clínica ou consultório médico, utilizando estratégias de tráfego
                inteligente para atrair e converter pacientes potenciais em sua
                cidade ou estado. Deixe essa tarefa conosco e concentre-se em
                atender seus pacientes com excelência.
              </Text>
            </Flex>
          </SimpleGrid>
          <SimpleGrid
            spacingX={10}
            spacingY={5}
            px="6"
            pb="6"
            columns={[1, 1, 2, 2, 2, 2]}
            spacing="0px"
          >
            <Flex
              borderRadius="10"
              justify="space-between"
              flexDir="column"
              bg="#F9F9F9"
              w="100%"
              px={35}
              py="10"
            >
              <Flex w="100%" justify="space-between" align="center">
                <Flex
                  border="1px solid #ddd"
                  borderRadius="full"
                  px="6"
                  w="-webkit-fit-content"
                  py="2"
                  justify="center"
                  align="center"
                >
                  <Text color="#333" fontWeight={500} fontFamily="Poppins">
                    COMO FUNCIONA?
                  </Text>
                </Flex>
              </Flex>
              <Text
                mt="10"
                color="#000"
                fontFamily="Poppins"
                fontSize={mobile ? "1.2rem" : "1.6rem"}
              >
                Com nossa abordagem personalizada, criamos anúncios online
                exclusivos e direcionados para o seu negócio médico, aumentando
                a relevância de suas redes sociais e permitindo que você atinja
                o topo da mente de seus clientes ideais. Conte conosco para
                destacar sua clínica ou consultório médico na internet e atrair
                mais pacientes de forma eficaz.
              </Text>
            </Flex>
            <Flex
              borderRadius="10"
              justify="space-between"
              flexDir="column"
              bg="#F0F0F0"
              w="100%"
              px={35}
              py="10"
            >
              <Flex w="100%" justify="space-between" align="center">
                <Flex
                  border="1px solid #ddd"
                  borderRadius="full"
                  px="6"
                  w="-webkit-fit-content"
                  py="2"
                  justify="center"
                  align="center"
                >
                  <Text color="#333" fontWeight={500} fontFamily="Poppins">
                    COMO FUNCIONA?
                  </Text>
                </Flex>
              </Flex>
              <Text
                mt="10"
                color="#000"
                fontFamily="Poppins"
                fontSize={mobile ? "1.2rem" : "1.6rem"}
              >
                Oferecemos um dashboard analítico e prático para que você possa
                acompanhar de perto todos os processos do seu novo funil de
                captura e vendas, garantindo transparência e controle sobre suas
                campanhas de tráfego pago. Além disso, estamos sempre prontos
                para oferecer o melhor suporte do Brasil, garantindo que sua
                clínica ou consultório médico tenha todo o apoio necessário para
                alcançar o sucesso.
              </Text>
            </Flex>
          </SimpleGrid>
        </Flex>
      </Flex>
    );
  }

  function Jumbo3() {
    return (
      <Flex flexDir="column" py={mobile ? 0 : 50}>
        <Flex
          w="100%"
          align="center"
          flexDir={mobile ? "column" : "row"}
          maxW={1200}
          mx="auto"
        >
          <Flex
            flexDir="column"
            px={mobile ? "14" : "28"}
            pt={mobile ? 70 : 100}
            pb={mobile ? 50 : 100}
          >
            <Text
              color="#FFF"
              textAlign={mobile ? "left" : "left"}
              fontFamily="Poppins"
              fontWeight="bold"
              fontSize={mobile ? "2.5rem" : "3rem"}
            >
              QUEM SOMOS?
            </Text>
            <Text
              mt={mobile ? "10" : "20"}
              color="#FFF"
              textAlign={"left"}
              fontFamily="Poppins"
              fontSize={mobile ? "1.1rem" : "1.3rem"}
            >
              Bem-vindo ao CareVie, a solução perfeita para impulsionar o
              sucesso do seu consultório médico! Com anos de experiência em
              marketing online,, nossa equipe especializada está pronta para
              desenvolver estratégias personalizadas que ajudarão o seu negócio
              a crescer e se destacar no mercado.
              <br />
              <br />
              Com o CareVie, você terá acesso a um conjunto completo de serviços
              de publicidade online, focados em trazer resultados efetivos para
              o seu consultório médico. Nossa abordagem é personalizada para
              atender às suas necessidades específicas, e estamos sempre
              atualizados com as últimas tendências do mercado. Não deixe que a
              concorrência o deixe para trás. Entre em contato com a equipe do
              CareVie hoje mesmo e comece a impulsionar o sucesso do seu
              consultório médico!
            </Text>
            {!mobile && (
              <Flex
                mt="10"
                bg="#014BEA"
                justify="center"
                align="center"
                borderRadius="5"
                py="3"
                px="6"
                w="-webkit-fit-content"
                boxShadow="0px 0px 14px 4px #014BEA"
              >
                <Text color="#FFF" fontWeight="bold" fontFamily="Poppins">
                  CLIQUE E AGENDE SUA SESSÃO ESTRATÉGICA GRATUITA
                </Text>
              </Flex>
            )}
          </Flex>
          <Flex flexDir="column" mx="10" w="100%" px={mobile ? "12" : 0}>
            {desktop && (
              <Image
                src="https://images.pexels.com/photos/5867730/pexels-photo-5867730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{
                  borderRadius: 10,
                  boxShadow: "rgba(122, 178, 238, 0.6) 0 0 50px",
                  height: "auto",
                  width: mobile ? "80%" : "100%",
                }}
              />
            )}
            {mobile && (
              <Flex
                bg="#014BEA"
                justify="center"
                align="center"
                borderRadius="5"
                py="3"
                px="6"
                w="-webkit-fit-content"
                boxShadow="0px 0px 14px 4px #014BEA"
              >
                <Text
                  color="#FFF"
                  fontWeight="bold"
                  textAlign="center"
                  fontFamily="Poppins"
                >
                  CLIQUE E AGENDE SUA SESSÃO ESTRATÉGICA GRATUITA
                </Text>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>
    );
  }

  function Jumbo4() {
    function Item({ label = "" }) {
      return (
        <Flex align="center">
          <Flex
            p="4"
            px="6"
            boxShadow="rgba(255, 255, 255, 0.1) 0 0 10px"
            borderRadius="25"
            align="center"
          >
            <FaCheck color="#014BEA" fontSize="8rem" />

            <Text ml="6" fontFamily="Poppins" color="#FFF" fontSize="1rem">
              {label}
            </Text>
          </Flex>
        </Flex>
      );
    }

    return (
      <Flex flexDir="column" py={mobile ? 20 : 50} bg="#111" mt="20">
        <Flex
          w="100%"
          align="center"
          flexDir={mobile ? "column" : "column"}
          maxW={1200}
          mx="auto"
        >
          <Flex flexDir="column" px={mobile ? "8" : "8"}>
            <Text
              color="#FFF"
              textAlign={mobile ? "center" : "center"}
              fontFamily="Poppins"
              fontSize={mobile ? "2rem" : "2.5rem"}
            >
              ESSA SESSÃO ESTRATÉGICA{" "}
              <span style={{ fontWeight: "bold" }}>É PERFEITA PARA:</span>
            </Text>
          </Flex>
          <SimpleGrid
            mt="16"
            spacingX={10}
            spacingY={5}
            px="6"
            columns={[1, 1, 2, 2, 2, 2]}
            spacing="0px"
          >
            <Item label="Dentistas que desejam: Aumentar o fluxo de pacientes nos seus consultórios, elevando seu faturamento líquido e serem melhor remunerados pela hora trabalhada." />
            <Item label="Dentistas que desejam: Largar a vida corrida de plantões e ter mais tempo para viver a vida sob suas próprias regras, sejam elas quais forem." />
          </SimpleGrid>
          <SimpleGrid
            mt="6"
            spacingX={10}
            spacingY={5}
            px="6"
            columns={[1, 1, 2, 2, 2, 2]}
            spacing="0px"
          >
            <Item label="Dentistas que buscam maximizar suas taxas de conversão através da estruturação de um setor comercial sólido e robusto." />
            <Item label="Clínicas e Dentistas que já possuem algum grau de inserção no mercado digital, mas que almejam atingir a excelência em termos de tráfego pago." />
          </SimpleGrid>
          <SimpleGrid
            mt="6"
            spacingX={10}
            spacingY={5}
            px="6"
            columns={[1, 1, 2, 2, 2, 2]}
            spacing="0px"
          >
            <Item label="Dentistas e Médicos que procuram por uma assessoria de Marketing que enxerga o seu negócio como prioridade." />
            <Item label="Clínicas e Dentistas que procuram por uma assessoria de Marketing que enxerga o seu negócio como prioridade." />
          </SimpleGrid>
        </Flex>
      </Flex>
    );
  }
  function Jumbo5() {
    function Item({ label = "" }) {
      return (
        <Flex align="center" w="100%">
          <Flex
            p="4"
            px="6"
            boxShadow="rgba(255, 255, 255, 0.1) 0 0 10px"
            borderRadius="25"
            align="center"
            w={mobile ? 400 : 500}
          >
            <IoMdCloseCircleOutline
              color="#92312B"
              fontSize={mobile ? "2rem" : "3.5rem"}
            />

            <Text ml="6" fontFamily="Poppins" color="#FFF" fontSize="1rem">
              {label}
            </Text>
          </Flex>
        </Flex>
      );
    }

    return (
      <Flex flexDir="column" pt={mobile ? 20 : 50} pb={10}>
        <Flex
          w="100%"
          align="center"
          flexDir={mobile ? "column" : "column"}
          maxW={1200}
          mx="auto"
        >
          <Flex flexDir="column" px={mobile ? "8" : "8"}>
            <Text
              color="#FFF"
              textAlign={mobile ? "center" : "center"}
              fontFamily="Poppins"
              fontSize={mobile ? "1.65rem" : "2.5rem"}
            >
              EXCELÊNCIA DEMANDA FOCO, ENTÃO… <br />
              <span style={{ fontWeight: "bold" }}>
                NÃO OFERECEMOS OUTROS SERVIÇOS COMO:
              </span>
            </Text>
          </Flex>
          <SimpleGrid
            mt="16"
            spacingX={10}
            spacingY={5}
            px="6"
            columns={[1, 1, 2, 2, 2, 2]}
            spacing="0px"
          >
            <Item label="Gestão de mídias sociais" />
            <Item label="Secretaria Remota" />
          </SimpleGrid>
          <SimpleGrid
            mt="6"
            spacingX={10}
            spacingY={5}
            px="6"
            columns={[1, 1, 2, 2, 2, 2]}
            spacing="0px"
          >
            <Item label="Email Marketing" />
            <Item label="Criação de conteúdo" />
          </SimpleGrid>
          <Flex p={mobile ? "8" : 0}>
            <Flex
            mx="auto"
              w="90%"
              mt="10"
              bg="#014BEA"
              justify="center"
              align="center"
              borderRadius="5"
              py="3"
              px="6"
              boxShadow="0px 0px 14px 4px #014BEA"
            >
              <Text color="#FFF" fontWeight="bold" textAlign="center" fontFamily="Poppins">
                CLIQUE E AGENDE SUA SESSÃO ESTRATÉGICA GRATUITA
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex flexDir="column" cursor="default">
      <div dangerouslySetInnerHTML={{ __html: html }} />

      <Flex w="100%" flexDir="column">
        <Jumbo1 />
        <Jumbo2 />
        <Jumbo3 />
        <Jumbo4 />
        <Jumbo5 />

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
            <Image
              src="/carevie.png"
              style={{
                width: 200,
                height: "auto",
              }}
            />
          </Flex>
          <Flex flexDir="column" mt="4">
            <Text fontFamily="Poppins" fontSize={mobile ? "1rem" : "1rem"}>
              (11) 91579-9139
            </Text>
            <Text fontFamily="Poppins" fontSize={mobile ? "1rem" : "1rem"}>
              contato@carevie.com
            </Text>
            <Text
              fontFamily="Poppins"
              mt="4"
              fontSize={mobile ? "1rem" : "1rem"}
            >
              Calçada Antares, 1444 - Alphaville | CEP: 06443-065
            </Text>
            <Text
              mt="4"
              fontFamily="Poppins"
              fontSize={mobile ? "0.7rem" : "1rem"}
            ></Text>
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
