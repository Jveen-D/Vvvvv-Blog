import { createEventHook } from '@vueuse/core'

export function useMyFetch() {
  const fetchResult = createEventHook<Response>()
  const fetchError = createEventHook<any>()

    fetch('/api/content/users/profile?api_access_key=kingofthekill', {
        method: 'GET'
    })
    .then(result => fetchResult.trigger(result))
    .catch(error => fetchError.trigger(error.message))

  return {
    onResult: fetchResult.on,
    onError: fetchError.on
  }
}