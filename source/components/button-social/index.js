import React from 'react'
import ButtonShare from '../button-share'

export default props => {
  console.log(
    'The ButtonSocial component has been renamed and moved to the more reusable ButtonShare component. Support for importing from `constructicon/button-social` will be removed in version 3'
  )
  return <ButtonShare {...props} />
}
