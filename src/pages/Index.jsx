import { Box, Button, Input, Text, VStack, Textarea, Heading, Divider } from "@chakra-ui/react";
import { FaDownload, FaMagic, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          文本摘要简报生成平台
        </Heading>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg">
            自动提取内容生成文本摘要简报
          </Heading>
          <Text mt={4}>利用平台能力从输入文本自动提取内容，生成简短的文本摘要简报。</Text>
          <Textarea placeholder="输入文本" mt={4} />
          <Button leftIcon={<FaMagic />} colorScheme="blue" mt={4}>
            生成简报
          </Button>
        </Box>

        <Divider />

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg">
            支持用户自定义文本长度生成摘要简报
          </Heading>
          <Text mt={4}>根据用户设定的文本长度，自动生成符合要求的文本摘要简报。</Text>
          <Input placeholder="设置文本长度" mt={4} />
          <Button leftIcon={<FaMagic />} colorScheme="blue" mt={4}>
            生成简报
          </Button>
        </Box>

        <Divider />

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg">
            用户自定义文本主题生成摘要简报
          </Heading>
          <Text mt={4}>用户可输入文本主题，在平台基于分析对象的基础上，自动生成与主题相关的文本摘要简报。</Text>
          <Input placeholder="输入主题" mt={4} />
          <Button leftIcon={<FaMagic />} colorScheme="blue" mt={4}>
            生成简报
          </Button>
        </Box>

        <Divider />

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg">
            自动生成期刊文本摘要简报
          </Heading>
          <Text mt={4}>平台基于分析的期刊论文，为用户自动生成期刊文本摘要简报。</Text>
          <Input placeholder="输入或选择期刊论文" mt={4} />
          <Button leftIcon={<FaMagic />} colorScheme="blue" mt={4}>
            生成简报
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
