import { Button, Flex, Text } from '@mantine/core';
import { useSearchParams } from 'react-router-dom';
import { countControl } from 'src/shared/mocks/mock';

type CountControlType = {
  value: number;
  label: string;
};

export const CountSwitch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const count = searchParams.get('count') || 8;

  const handleCount = (value: number) => {
    searchParams.delete('search');
    searchParams.set('count', value.toString());
    setSearchParams(searchParams);
  };

  return (
    <Flex align={'center'}>
      <Text fz={18} mr={10}>
        Выводимое количество родуктов:
      </Text>
      {countControl.map((button: CountControlType) => (
        <Button mr={10} disabled={+count === button.value} onClick={() => handleCount(button.value)}>
          {button.label}
        </Button>
      ))}
    </Flex>
  );
};
