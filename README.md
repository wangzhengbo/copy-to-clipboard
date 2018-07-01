# copy-to-clipboard2
Copy text to clipboard on the browser.

# Install
```bash
$ npm install copy-to-clipboard2 --save
```

# Example
```js
import copyToClipboard from 'copy-to-clipboard2';

copyToClipboard('Text').then(() => {
    console.log('Copyed successfully.')
}).catch(err => {
    console.error('Copyed failed', err)
})
```