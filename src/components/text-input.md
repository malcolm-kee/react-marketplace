```jsx
const Demo = () => {
  const [value, setValue] = React.useState("");

  return <TextInput value={value} onChangeValue={setValue} />;
};

<Demo />;
```

`onChange` still works, albeit it's more direct to use `onChangeValue`.

```jsx
const Demo = () => {
  const [value, setValue] = React.useState("");

  return (
    <TextInput
      value={value}
      onChange={(ev) => setValue(ev.target.value)}
      placeholder="onChange example"
    />
  );
};

<Demo />;
```
