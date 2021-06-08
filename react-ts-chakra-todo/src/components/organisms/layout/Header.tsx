import {memo, VFC} from "react";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerBody,
  Button
} from "@chakra-ui/react";
import {Drawer} from "@chakra-ui/modal"
import {HamburgerIcon} from "@chakra-ui/icons";

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <Flex
      as="nav"
      bg="teal.500"
      color="gray.50"
      align="center"
      justify="space-between"
      padding={{ base: 3, md: 5 }}
    >
      <Flex
        align="center"
        as="a"
        mr={8}
        _hover={{ cursor: "pointer" }}
      >
        <Heading
          as="h1"
          fontSize={{ base: "md", md: "lg" }}
        >
          ユーザー管理アプリ
        </Heading>
      </Flex>
      <Flex
        align="center"
        fontSize="sm"
        flexGrow={2}
        display={{ base: "none", md: "flex" }}
      >
        <Box pr={4}>
          <Link>ユーザー一覧</Link>
        </Box>
        <Link>設定</Link>
      </Flex>
      <IconButton
        aria-label="メニューボタン"
        icon={<HamburgerIcon />}
        size="sm"
        variant="unstyled"
        display={{ base: "block", md: "none" }}
        onClick={onOpen}
      />
      {/*TODO: サイドバー表示から実装 67. 13:40〜*/}
    </Flex>
    <Drawer
      placement="left"
      size="xs"
      isOpen={isOpen}
      onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%">TOP</Button>
            <Button w="100%">ユーザー一覧</Button>
            <Button w="100%">設定</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
    </>
  );
});
