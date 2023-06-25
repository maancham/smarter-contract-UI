import { Box, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import Header from '../components/Header';

const Team = () => {
  const teamMembers = [
    {
      name: "Sean Khatiri",
      bio: "UWaterloo 2024",
      linkedIn: "https://www.linkedin.com/in/seankhatiri/",
      github: "https://github.com/seankhatiri",
      image: "ape2.png",
    },
    {
      name: "Houmaan Chamani",
      bio: "UWaterloo 2024",
      linkedIn: "https://www.linkedin.com/in/houmch/",
      github: "https://github.com/maancham",
      image: "ape1.png",
    },
    {
      name: "Mohammad Moridi",
      bio: "UWaterloo 2023",
      linkedIn: "https://www.linkedin.com/in/m-moridi/",
      github: "https://github.com/Moridi",
      image: "ape3.png",
    },
    {
      name: "Taghi Badakhshan",
      bio: "UWaterloo 2024",
      linkedIn: "https://www.linkedin.com/in/mtbadakhshan/?originalSubdomain=ca",
      github: "https://github.com/mtbadakhshan",
      image: "ape4.png",
    },
  ];

  return (
    <>
      <Header />
      <VStack spacing={8} align="center">
        <Flex flexWrap="wrap" justifyContent="center">
          {teamMembers.map((member) => (
            <Box
              key={member.name}
              width="45%"
              padding="2rem"
              bg="white"
              boxShadow="md"
              marginBottom="2rem"
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
            >
              <Box marginBottom="1rem" style={{ maxWidth: "50%", margin: "0 auto" }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{ maxWidth: "100%", height: "auto", borderRadius: "50%" }}
                />
              </Box>
              <Heading as="h2" size="lg" marginBottom="1rem">
                {member.name}
              </Heading>
              <Text marginBottom="1rem">{member.bio}</Text>
              <Flex justifyContent="space-between" width="80%" marginTop="1rem">
                <Link href={member.linkedIn} target="_blank" rel="noopener noreferrer" color="blue">
                  <img src="linkedin-logo.png" alt="LinkedIn" style={{ width: "40px", height: "40px" }} />
                </Link>
                <Link href={member.github} target="_blank" rel="noopener noreferrer" color="blue" marginLeft="1rem">
                  <img src="github.png" alt="GitHub" style={{ width: "40px", height: "40px" }} />
                </Link>
              </Flex>
            </Box>
          ))}
        </Flex>
      </VStack>
    </>
  );
  
};

export default Team;
