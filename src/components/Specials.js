import React from "react";
import Main from "./Main";
import { Box, Heading } from "@chakra-ui/react";
import CardSpecial from "./components/CardSpecial";


const specials = [
    {
        title: "Greek Salad",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        getImageSrc: () => require("../assets/greeksalad.jpg"),
    },

    {
        title: "Bruschetta",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        getImageSrc: () => require("../assets/bruschetta2.jpg"),
    },

    {
        title: "Lemon Dessert",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        getImageSrc: () => require("../assets/lemondessert.jpg"),
    },


]

const Specials = () => {
    return (
        <Main
            backgroundColor='#EDEFEE'
            p={8}
            alignItems="space-around"
            spacing={8}
            >
<Heading as="h1" id="specials">This week's specials</Heading>
<Box
display="grid"
gridTemplateColumns="repeat(2, minmax(0, 1fr))"
gridGap={8}
>
{specials.map((special) => (
    <CardSpecial
    key={special.title}
    title={special.title}
    description={special.description}
    imageSrc={special.getImageSrc()}
    />

) )}
</Box>
            </Main>
);
};

export default Specials