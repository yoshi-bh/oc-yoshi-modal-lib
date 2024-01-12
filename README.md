<h1 align="center">Modal-Lib</h1>
<h4 align="center">A simple modal library for React that's very easy to use</h4>

# oc-yoshi-modal-lib

> React Library to add modals to your projects (part of a project for studies)

[![NPM](https://img.shields.io/npm/v/oc-yoshi-modal-lib.svg)](https://www.npmjs.com/package/oc-yoshi-modal-lib) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Key Features

- Easy to use: incredibly simple to setup a modal quickly
- Custom text: you can customize the text of the modal to your liking
- Custom eventHandler: you can decide what happens when the modal button is clicked

## Install

```bash
npm install --save oc-yoshi-modal-lib --force
```

## Usage

```jsx
import React, { useState } from 'react'

import { SimpleModal } from 'oc-yoshi-modal-lib'
import 'oc-yoshi-modal-lib/dist/index.css'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <h1>Basic Page</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen ? (
        <SimpleModal
          onClickHandler={() => setIsOpen(false)}
          text='Employee Created!'
        />
      ) : null}
    </div>
  )
}

export default App
```

## All props

| Prop           | Type     | Required?    | Default | Description                                          |
| -------------- | -------- | ------------ | ------- | ---------------------------------------------------- |
| text           | string   | **required** | false   | The text you want to display                         |
| onClickHandler | function | **required** | false   | Event handler for modal when close button is clicked |

## Credits

This software uses the following open source packages:

- [React](https://fr.reactjs.org/)
- [create-react-library](https://www.npmjs.com/package/create-react-library)

## License

MIT © [yoshi-bh](https://github.com/yoshi-bh)
