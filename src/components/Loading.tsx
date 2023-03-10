import { Center, Spinner } from 'native-base';

export function Loading() {
  return (
    <Center bg="gray.700" flex={1}>
      <Spinner color="secondary.700" />
    </Center>
  );
}
