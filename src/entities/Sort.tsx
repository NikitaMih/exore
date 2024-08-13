/* eslint-disable @typescript-eslint/no-explicit-any */
import { Group, Select, Text } from '@mantine/core';
import { useSearchParams } from 'react-router-dom';
import { sortParams } from 'src/shared/mocks/mock';

export const Sort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchDefault = searchParams.get('sort');

  const handleOnChange = (value: any) => {
    if (value) {
      searchParams.set('sort', value);
      searchParams.delete('search');
    } else {
      searchParams.delete('sort');
    }
    setSearchParams(searchParams);
  };

  return (
    <Group>
      <Text fz={18} mr={10}>
        Сортировать заголовки:
      </Text>
      <Select value={searchDefault} placeholder='По умолчанию' data={sortParams} onChange={handleOnChange} />
    </Group>
  );
};
