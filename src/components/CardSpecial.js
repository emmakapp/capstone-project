import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import delivery from "./delivery.jpg";
import React from "react";

const CardSpecial = ({ title, description, imageSrc }) => {

    return (
        <VStack
        color={"#497E57"}
        backgroundColor={"#EDEFEE"}
        cursor="pointer"
        borderTopRadius={"16"}
        >

        <Image borderTopRadius={"16"} src={imageSrc} alt={title} />
          <VStack spacing={4} p={4} alignItems={"flex-start"}>
            <HStack justifyContent={"space-between"} alignItems={"justify"}>
            <Heading><div className="cardtitle">{title}</div></Heading>
            </HStack>
       <Text><p>{description}</p></Text>
       <HStack spacing={2} alignItems={"center"}>
        <p>Order a delivery</p>
        <Image src="./assets/delivery.jpg"></Image>
       </HStack>
      </VStack>
      </VStack>
    );
};

export default CardSpecial;
