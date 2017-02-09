import React, { PropTypes } from 'react'
import Button from '../button'
import Filter from '../filter'
import Icon from '../icon'
import Modal from '../modal'
import Result from '../result'
import { withStyles } from '../../lib/css'
import styles from './styles'
import toggle from '../../lib/toggle'

const SearchForm = ({
  tag: Tag,
  classNames,
  results,
  status,
  onChange,
  styles
}) => (
  <Tag className={classNames.search}>
    <Filter
      onChange={onChange}
      styles={styles.filter}
    />
    { !status && results.length ? (
      <ul className={classNames.results} >
        { results.map((result, i) => (
          <Result
            {...result}
            styles={styles.result}
            key={i}
          />
        )) }
      </ul>
    ) : null }

    { status === 'loading' && (
      <div className={classNames.loading}>
        <Icon name='loading' spin aria-label='Loading results' />
      </div>
    ) }

    { status === 'noResult' && (
      <p className={classNames.status}>No results found.</p>
    ) }

    { status === 'error' && (
      <p className={classNames.status}>Something went wrong!</p>
    ) }
  </Tag>
)

const ModalSearch = ({
  tag: Tag,
  onToggleOn,
  toggled,
  onToggleOff,
  classNames,
  styles,
  ...props
}) => (
  <Tag className={classNames.modal}>
    <Button
      onClick={onToggleOn}
      styles={styles.modalButton}
    >
      Open Modal
    </Button>
    <Modal
      isOpen={toggled}
      onRequestClose={onToggleOff}
      styles={styles.modal}
    >
      <SearchForm
        {...props}
        tag='div'
        classNames={classNames}
        styles={styles}
      />
    </Modal>
  </Tag>
)

const Search = ({
  modalTrigger,
  ...props
}) => {
  if (modalTrigger) {
    const ModalSearchForm = toggle(ModalSearch)
    return <ModalSearchForm {...props} />
  } else {
    return <SearchForm {...props} />
  }
}

Search.propTypes = {
  /**
  * The tag to be used for the containing element
  */
  tag: PropTypes.string,

  /**
  * Custom styles to be added to the element
  */
  styles: PropTypes.object,

  /**
  * Results to be listed
  */
  results: PropTypes.array,

  /**
  * Status of the search.
  */
  status: PropTypes.oneOf([
    'loading',
    'noResult',
    'error'
  ]),

  /**
  * The onChange event handler to be fired
  */
  onChange: PropTypes.func.isRequired
}

Search.defaultProps = {
  tag: 'div',
  styles: {},
  results: []
}

export default withStyles(styles)(Search)
