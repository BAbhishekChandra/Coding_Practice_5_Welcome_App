// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  subscribeClicked = () => {
    const {isSubscribed} = this.state

    if (isSubscribed === false) {
      this.setState({isSubscribed: true})
    } else {
      this.setState({isSubscribed: false})
    }
  }

  render() {
    const {isSubscribed} = this.state

    return (
      <div className="main-container">
        <div className="bg-container">
          <h1 className="heading">Welcome</h1>
          <p className="description">Thank you! Happy Learning</p>
          <div className="button-container">
            {isSubscribed ? (
              <button
                className="custom-button"
                type="button"
                onClick={this.subscribeClicked}
              >
                Subscribed
              </button>
            ) : (
              <button
                className="custom-button"
                type="button"
                onClick={this.subscribeClicked}
              >
                Subscribe
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome
