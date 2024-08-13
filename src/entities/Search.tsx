import { Input } from '@mantine/core';
import { ChangeEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebouncedCallback } from 'use-debounce';

export const Search = () => {
  const [, setSearchParams] = useSearchParams();
  const [value, setValue] = useState('');

  const changeSearchParams = useDebouncedCallback(value => {
    setValue(value);
    setSearchParams({ search: value });
  }, 500);

  const handleOnChange = (value: string) => {
    setValue(value);
    changeSearchParams(value);
  };

  return (
    <Input
      fz={22}
      type='text'
      placeholder='Поиск'
      style={{ width: '70%' }}
      value={value}
      onChange={(event: ChangeEvent<HTMLInputElement>) => handleOnChange(event.target.value)}
    />
  );
};
