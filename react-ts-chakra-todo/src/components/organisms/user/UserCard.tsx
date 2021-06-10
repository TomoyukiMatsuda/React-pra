import { memo, VFC } from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";

interface Props {
  imageUrl: string;
  userName: string;
  fullName: string;
}

export const UserCard: VFC<Props> = memo((props) => {
  const { imageUrl, userName, fullName } = props;

  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          boxSize="160px"
          src={imageUrl}
          alt={userName}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
