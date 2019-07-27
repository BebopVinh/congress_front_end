import React from 'react'
import { Button } from 'semantic-ui-react'
import { fetchSenate, fetchLoyalists, fetchMavericks, fetchTruants, fetchBySeniority, fetchByAge } from '../actions/senate'
import { connect } from 'react-redux'


class SenateSorter extends React.Component {
  constructor(props) {
    super()
  }


  render (){
    let tips = (
      `Click on any card's gavel icon to get or update the Senator's most recent bill!`
    )
    return (
      <>
        <h1 className="center">
          Who's Who in the U.S. Senate?  Let's sort them out.
        </h1>
        <h4 className="center">How to play: sort senators or narrow results with search.  Then see if you can guess the name!  Stumped?  Click on "Guess Who?"</h4>

        <div className='social center'>
          <Button size="big" color="green" onClick={() => this.props.fetchLoyalists()}>Party Loyalists</Button>
          <Button size="big" color="blue" onClick={() => this.props.fetchMavericks()}>Party Mavericks</Button>
          <Button size="big" color="red" onClick={() => this.props.fetchTruants()}>Most Truant</Button>
          <Button size="big" color="black" onClick={() => this.props.fetchBySeniority()}>Longest Serving</Button>
          <Button size="big" color="orange" onClick={() => this.props.fetchByAge()}>Oldest</Button>
          <Button
            size="big"
            color="yellow"
            className="ui icon button"
            data-tooltip={tips}>
            <i className="question icon"></i>
          </Button>
        </div>
      </>
    )
  }
}




export default connect(null, { fetchSenate, fetchLoyalists, fetchMavericks, fetchTruants, fetchBySeniority, fetchByAge })(SenateSorter)
