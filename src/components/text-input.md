```jsx
const Demo = () => {
  const [value, setValue] = React.useState("");

  return <TextInput value={value} onChangeValue={setValue} />;
};

<Demo />;
```
