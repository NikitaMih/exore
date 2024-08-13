import { Flex, Image, Paper, Title } from '@mantine/core';

export const Header = () => {
  return (
    <header>
      <Paper shadow='md' p={40}>
        <Flex justify={'flex-start'} align={'center'}>
          <Image src={'https://exore.pro/wp-content/uploads/2023/03/logo.svg'} h={60} mr={20} alt='exore' />
          <Title c={'blue'}>Тестовое задание на позицию React Frontend Developer</Title>
        </Flex>
      </Paper>
    </header>
  );
};
