import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '../with-styles'
import styles from './styles'
import Button from '../button'

const SearchResult = ({
  image,
  subtitle,
  title,
  url,
  button,
  cta,
  classNames
}) => (
  <li className={`c11n-search-result ${classNames.root}`}>
    {image && (
      <div>
        <img src={image} alt={title} className={classNames.avatar} />
      </div>
    )}
    <div className={classNames.titles}>
      <h4 className={classNames.title}>{title}</h4>
      {subtitle && <h6 className={classNames.subtitle}>{subtitle}</h6>}
    </div>
    <div>
      <Button
        tag='a'
        href={url}
        aria-label={cta}
        children={cta}
        target='_blank'
        rel='noopener'
        {...button}
      />
    </div>
  </li>
)

SearchResult.propTypes = {
  /**
   * Image URL
   */
  image: PropTypes.string,

  /**
   * Name of the result to display
   */
  title: PropTypes.string.isRequired,

  /**
   * Additional text to display below the title
   */
  subtitle: PropTypes.string,

  /**
   * The URL for the page
   */
  url: PropTypes.string,

  /**
   * Props to be passed into the button
   */
  button: PropTypes.object,

  /**
   * The button text
   */
  cta: PropTypes.string,

  /**
   * Custom styles to be applied
   */
  styles: PropTypes.object
}

SearchResult.defaultProps = {
  cta: 'Support'
}

export default withStyles(styles)(SearchResult)
