import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group, TextInput, NumberInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { productApi } from 'src/app/services/ProductService';
import { IProduct } from 'src/shared/models/IProduct';

type EditFormType = {
  images: string;
  title: string;
  price: number | null;
  category: string;
  brand: string;
};

export const EditProduct = ({ product }: { product: IProduct }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [editProduct] = productApi.useEditProductMutation();
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      images: product?.images[0],
      title: product?.title,
      price: product?.price,
      category: product?.category,
      brand: product?.brand,
    },
  });

  const handleCreateProduct = async (values: EditFormType) => {
    await editProduct({
      data: values,
      id: product.id,
    });
    form.reset();
    close();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title='Редактировать продукт'>
        <form onSubmit={form.onSubmit(handleCreateProduct)}>
          <TextInput
            withAsterisk
            label='Ссылка изображения'
            placeholder='Ссылка'
            key={form.key('images')}
            {...form.getInputProps('images')}
          />
          <TextInput label='Название продукта' key={form.key('title')} {...form.getInputProps('title')} />

          <NumberInput
            label='Цена продукта'
            placeholder='Цена'
            key={form.key('price')}
            {...form.getInputProps('price')}
          />

          <TextInput
            withAsterisk
            label='Категория'
            placeholder='Введите категорию'
            key={form.key('category')}
            {...form.getInputProps('category')}
          />

          <TextInput
            withAsterisk
            label='Бренд'
            placeholder='Название бренда'
            key={form.key('brand')}
            {...form.getInputProps('brand')}
          />

          <Group justify='flex-end' mt='md'>
            <Button type='submit'>Сохранить</Button>
          </Group>
        </form>
      </Modal>

      <Button onClick={open}>Редактировать</Button>
    </>
  );
};
