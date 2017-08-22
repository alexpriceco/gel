import React from 'react'
import Icon from '../components/general/icon'
import Style from '../components/general/style'
import sheet from '../components/general/error.scss'

export default class Error extends React.Component {
  static getInitialProps ({ res, jsonPageRes }) {
    const statusCode = res ? res.statusCode : (jsonPageRes ? jsonPageRes.status : null)
    return { statusCode }
  }

  render () {
    const is404 = this.props.statusCode === 404
    return (
      <section>
        <Style sheet={sheet} />

        <article>
          <h1>Error: {this.props.statusCode}</h1>
          <div>
            { is404
              ? <p>
                Uh-oh, it looks like that page no longer exists, or never existed. Double-check the url, or <a href='mailto:support@evaline.io' title='Email Evaline support team'>contact support</a>.
              </p>
              : <p>
                Uh-oh, an error occurred! Our engineering team is on it, and you can watch for updates at <a href='http://status.evaline.io' title='Evaline status page'>status.evaline.io</a>.
              </p>
            }
            <a className='button' href={is404 ? 'mailto:support@evaline.io' : 'http://status.evaline.io'} title={is404 ? 'Contact support' : 'Launch status page'}>
              { is404 ? 'Contact support' : 'Open status page'}
            </a>
          </div>
        </article>
        <Icon name='evaline-wordmark' />
      </section>
    )
  }
}
