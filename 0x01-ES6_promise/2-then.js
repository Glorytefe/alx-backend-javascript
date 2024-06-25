export default function handleResponseFromAPI(promise) {
  if (promise instanceof Promise) {
    promise
      .then(() => {
        console.log('Got a response from the API');
        return {
          status: 200,
          body: 'success',
        };
      })
      .catch(() => {
        console.log('Got a response from the API');
        return new Error();
      });
  }
}
