import fs from 'fs';

const { readFile, writeFile } = fs;

readFile('./first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  const first = result;
  readFile('./second.txt','utf-8', (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    const second = result;
    writeFile('./result.txt', `Result:\n${first}\n${second}`, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  })
});

