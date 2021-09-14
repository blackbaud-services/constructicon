### Examples

**Social Links**

Links to the required social profiles

```
import ButtonGroup from '../button-group';

<ButtonGroup align='center'>
  <ButtonShare type='facebook' href='http://facebook.com' />
  <ButtonShare type='instagram' href='http://instagram.com' />
  <ButtonShare type='youtube' href='http://youtube.com' />
  <ButtonShare type='twitter' href='http://twitter.com' />
</ButtonGroup>
```

**External Share**

Share the current page on supported social networks or via email

```
import ButtonGroup from '../button-group';

<ButtonGroup align='center'>
  <ButtonShare type='facebook' share />
  <ButtonShare type='twitter' url='https://blackbaud.com' title='Blackbaud' share />
  <ButtonShare type='linkedin' share />
  <ButtonShare type='reddit' share />
  <ButtonShare type='pinterest' share />
  <ButtonShare type='mail' share />
  <ButtonShare type='messenger' share />
  <ButtonShare type='sms' share />
  <ButtonShare type='whatsapp' share />
</ButtonGroup>
```

**Custom Styles**

Takes styles the same as a `Button` component

```
<ButtonShare type='facebook' share styles={{ backgroundColor: 'blue' }} />
```
