import { Card, Image, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IProduct } from 'src/shared/models/IProduct';

export const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <Card shadow='sm' padding='xl' w={300} h={440}>
        <Card.Section>
          <Image src={product.images[0]} h={300} alt={product.title} />
        </Card.Section>

        <Title fw={500} size='lg' mt='md'>
          {product.title}
        </Title>

        <Text mt='xs' c='dimmed' size='sm'>
          {product.price}
        </Text>
      </Card>
    </Link>
  );
};
