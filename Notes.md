### Create project

```
mkdir seed
cd seed
yarn init
```

### Add `react` and types for `typescript`

```
yarn add react react-dom\n
yarn add @types/react @types/react-dom --dev
```

### Add `emotion` for styling

```
yarn add @emotion/babel-plugin --dev
yarn add @emotion/react
```

### Add a `.babelrc` file

```
{
  "plugins": ["@emotion/babel-plugin"]
}
```

### Add a `tsconfig.json` file

```
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "@emotion/react"
  }
}
```

### Add `prettier`

```
yarn add --dev --exact prettier
echo {}> .prettierrc.json
```

### Add `eslint`

```
yarn add eslint --dev
yarn create @eslint/config
yarn add eslint-config-prettier --dev
```

and add prettier plugin to eslint config

```
  "extends": ["plugin:react/recommended", "prettier"],
```

### Add `parcel`

```
yarn add --dev parcel
```
