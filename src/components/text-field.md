```jsx
const Demo = () => {
  const [value, setValue] = React.useState("");
  return (
    <TextField
      label="Age"
      type="number"
      id="age"
      value={value}
      onChangeValue={setValue}
    />
  );
};

<Demo />;
```
