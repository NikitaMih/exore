import { Flex, Title } from '@mantine/core';

export const Footer = () => {
  return (
    <footer>
      <Flex justify={'space-between'} align={'center'} p={40} bg={'blue'}>
        <Title c={'white'} fz={18}>
          Telegram: @Nikita_Mih
        </Title>
        <Title c={'white'} fz={18}>
          Телефон: +375 (29) 399-31-98
        </Title>
      </Flex>
    </footer>
  );
};
