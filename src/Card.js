import { Box, Image, Badge, Wrap, WrapItem, Center } from '@chakra-ui/react';

function Card({
  flag,
  name,
  capital,
  languages,
  population,
  subregion,
  region,
}) {
  return (
    <Box
      ml="10px"
      mr="10px"
      mt="20px"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src={flag} alt={name} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {name}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {region} &bull; {subregion}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          <Wrap ml={'5px'} spacing="10px" align="center">
            Languages:{' '}
            {languages &&
              languages.map((language, index) => (
                <WrapItem key={index}>
                  <Center>{language.name}</Center>
                </WrapItem>
              ))}
          </Wrap>
        </Box>

        <Box>Population: {population}</Box>
        <Box>Capital: {capital}</Box>
      </Box>
    </Box>
  );
}

export default Card;
