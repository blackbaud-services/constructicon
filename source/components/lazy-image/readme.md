### Examples

**Standard Use**

Pass a url to an image

```
<LazyImage
  url={'https://images.unsplash.com/photo-1533134957610-83185986f38b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7b7339cf658125119e20ac303b516e80&auto=format&fit=crop&w=2550&q=80'}
/>
```

With a custom size and background color

```
<LazyImage
  color='primary'
  styles={{ width: '100%' }}
  loadingProps={{
    color: 'light'
  }}
  url={'https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5336ef9a22072d557608c8e1f62b7737&auto=format&fit=crop&w=1650&q=80'}
/>
```

With a custom loading spinner

```
<LazyImage
  url={'https://images.unsplash.com/photo-1533109721025-d1ae7ee7c1e1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=610919124dcd3cc1a8fbc12779531030&auto=format&fit=crop&w=1650&q=80'}
>
  Loading...
</LazyImage>
```

With lazy loading and a callback

```
<LazyImage
  lazy
  styles={{ height: '30em' }}
  onLoad={() => { console.log('the image has been lazy loaded') }}
  url={'https://images.unsplash.com/photo-1533153309598-39dd04d03af2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=762be954da945ab02dc032fa36850d9c&auto=format&fit=crop&w=581&q=80'}
/>
```
