import { Component } from "react"
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"
import { Statistics } from "./Statistics/Statistics"
import { Section, NoFeedbackText } from "./Section.styled"


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,

  }

  handleClick = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      }
    })
  }

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
      return total;
    }

    countPositiveFeedbackPercentage = (total) => {
      if(total < 1){
        return 0;
      }
      const percentage = this.state.good/total*100;
      return Math.round(percentage);
    }

    isFeedbackGiven = () => {
      if (this.state.good > 0 || 
      this.state.bad > 0 || 
      this.state.neutral > 0){
        return true
      } else {
        return false;
      }
    }

    getRenderElements = () => {
      if (this.isFeedbackGiven()){
        return(
        <Statistics 
          stats = {this.state}
          total = {this.countTotalFeedback()}
          percentage = {this.countPositiveFeedbackPercentage(this.countTotalFeedback())}/>
          )
      } else {
        return (<NoFeedbackText>No feedback yet :c</NoFeedbackText>)
      }
    }


  render(){
    return(
      <>
      <Section>
        <h2>Please leave feedback</h2>
        <FeedbackOptions handleClick = {this.handleClick} />
      </Section>
      <Section>
        {this.getRenderElements()}
      </Section>
    </>
    )
  };
}
