import fs from 'fs-promise';

const lineCount = filename => {
  const onSuccess = data => Promise.resolve(data.toString().split('\n').length);
  const onError = () => Promise.reject(
    new Error(`problem reading file: ${filename}`));

  //noinspection JSUnresolvedFunction
  return fs.readFile(filename).then(onSuccess)
    .catch(onError);
};

export { lineCount };
