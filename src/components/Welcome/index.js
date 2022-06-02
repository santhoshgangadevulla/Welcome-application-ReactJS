// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'subscribed' : 'subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="container">
        <div className="box">
          <h1 className="heading">Welcome</h1>
          <p className="note">Thank you! Happy Learning</p>
          <button className="button" type="button" onClick={this.onSubscribe}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
