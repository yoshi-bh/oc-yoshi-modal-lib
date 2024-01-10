# oc-yoshi-modal-lib

> React Library to add modals to your projects (part of a project for studies)

[![NPM](https://img.shields.io/npm/v/oc-yoshi-modal-lib.svg)](https://www.npmjs.com/package/oc-yoshi-modal-lib) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save oc-yoshi-modal-lib
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

## License

MIT © [yoshi-bh](https://github.com/yoshi-bh)
