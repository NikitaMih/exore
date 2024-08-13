import { productApi } from 'src/app/services/ProductService';
import { Container, Flex, Image, Loader, Rating, Text, Title } from '@mantine/core';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { EditProduct } from 'src/features/EditProduct';

export const DetailProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { data, error, isLoading } = productApi.useGetProductByIdQuery(productId);

  if (error) {
    navigate('/404');
  }

  return (
    <>
      {isLoading ? (
        <Container fluid p={80}>
          <Flex align={'center'} justify={'center'}>
            <Loader color='blue' m={200} />
          </Flex>
        </Container>
      ) : (
        <Container>
          <Link to={'/'}>Назад</Link>
          <Container size={'md'} p={80}>
            <Flex gap='md' direction='column' align={'center'}>
              <Image src={data?.images[0]} h={400} w={400} alt={data?.title} />
              <Rating defaultValue={data?.rating} />
              <Title fw={500} size='lg' mt='md'>
                Название: {data?.title}
              </Title>
              <Text mt='xs' c='dimmed' size='sm'>
                Цена: {data?.price}
              </Text>
              <Text mt='xs' c='dimmed' size='sm'>
                Категория: {data?.category}
              </Text>
              <Text mt='xs' c='dimmed' size='sm'>
                Бренд: {data?.brand}
              </Text>
              <EditProduct product={data} />
            </Flex>
          </Container>
        </Container>
      )}
    </>
  );
};
