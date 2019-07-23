### Examples

**Standard Use**

```
<InputFile
  label='Upload a file'
  name='file'
  onChange={(file) => console.log(file)}
/>
```

**Multiple files**

```
<InputFile
  label='Upload multiple files'
  name='files'
  multiple
  placeholder='Choose many files...'
  onChange={(files) => console.log(files)}
/>
```

**Treatments**

The following treatments in your project's traits will be applied:

- `inputRoot` -> `root`
- `input` -> `field`
