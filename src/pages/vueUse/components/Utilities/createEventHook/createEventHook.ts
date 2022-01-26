import { createEventHook } from '@vueuse/core';

const useMyFetch = async () => {
  const response = await fetch('/api/content/users/profile?api_access_key=kingofthekill', {
    method: 'GET',
  });
  return response.json();
};
export const Featch = () => {
  const fetchResult = createEventHook<Response>();
  const fetchError = createEventHook<any>();
  useMyFetch()
    .then((result) => fetchResult.trigger(result))
    .catch((error) => fetchError.trigger(error.message));
  return {
    onResult: fetchResult.on,
    onError: fetchError.on,
  };
};
