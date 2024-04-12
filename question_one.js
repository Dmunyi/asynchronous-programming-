async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    console.log(value);
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}

const values = ['value1', 'value2', 'value3'];
iterateWithAsyncAwait(values);