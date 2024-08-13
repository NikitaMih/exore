import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group, TextInput, NumberInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { productApi } from 'src/app/services/ProductService';

type AddFormType = {
  images: string[];
  title: string;
  price: number | null;
};

export const AddProduct = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [createProduct] = productApi.useCreateProductMutation();
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      images: [''],
      title: '',
      price: null,
    },
  });

  const handleCreateProduct = async (values: AddFormType) => {
    await createProduct({
      images: [values.images],
      title: values.title,
      price: values.price,
    });
    form.reset();
    close();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title='Добавить продукт'>
        <form onSubmit={form.onSubmit(handleCreateProduct)}>
          <TextInput
            withAsterisk
            label='Ссылка изображения'
            placeholder='Ссылка'
            key={form.key('images')}
            {...form.getInputProps('images')}
          />
          <TextInput
            withAsterisk
            label='Название продукта'
            placeholder='Название продукта'
            key={form.key('title')}
            {...form.getInputProps('title')}
          />

          <NumberInput
            withAsterisk
            label='Цена продукта'
            placeholder='Цена'
            key={form.key('price')}
            {...form.getInputProps('price')}
          />

          <Group justify='flex-end' mt='md'>
            <Button type='submit'>Добавить продукт</Button>
          </Group>
        </form>
      </Modal>

      <Button onClick={open}>Добавить продукт +</Button>
    </>
  );
};
