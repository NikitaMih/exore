import { IProduct } from 'src/shared/models/IProduct';
import { productApi } from 'src/app/services/ProductService';
import { Container, Flex, Loader } from '@mantine/core';
import { ProductCard } from 'src/widgets/ProductCard';
import { Search } from 'src/entities/Search';
import { Sort } from 'src/entities/Sort';
import { CountSwitch } from 'src/entities/CountSwitch';
import { AddProduct } from './AddProduct';
import { useSearchParams } from 'react-router-dom';
import { Empty } from 'src/shared/ui/Empty';

export const ProductsList = () => {
  const [searchParams] = useSearchParams();
  const count = searchParams.get('count') || 8;
  const sort = searchParams.get('sort');
  const title = searchParams.get('search');
  const productsList = productApi.useGetAllProductsQuery({ count, sort });
  const productsBySearch = productApi.useGetProductsBySearchQuery(title);

  const isLoading = productsList.isLoading || productsBySearch.isLoading;
  const data = title ? productsBySearch.data : productsList.data;

  return (
    <Container fluid p={80}>
      <Flex mb={20} justify={'space-between'}>
        <Search />
        <AddProduct />
      </Flex>
      <Flex mb={20} justify={'space-between'}>
        <CountSwitch />
        <Sort />
      </Flex>
      <Flex gap='md' justify={'center'} direction='row' wrap='wrap'>
        {isLoading ? (
          <Loader color='blue' m={150} />
        ) : data?.products && data?.products.length > 0 ? (
          data?.products.map((product: IProduct) => <ProductCard product={product} />)
        ) : (
          <Empty />
        )}
      </Flex>
    </Container>
  );
};
