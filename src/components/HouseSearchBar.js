import React from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'semantic-ui-react'
import HouseCard from './HouseCard'


class HouseSearchBar extends React.Component {
  constructor(props) {
    super()
    this.state = {
      search: '',
      showNames: true,
      senate: props.house
    }
  }


  updateSearch= (event) => {
    this.setState({search: event.target.value.substr(0, 100)})
  }

//handle flipclick


  render (){

    let searchInstructions =
      "search by name, state, party, next election year or gender (type the full word 'female' or 'male'); 'president' for presidential candidates,'freshmen' for the newest faces!"


    let filteredReps = this.props.reps.filter(
      (rep) => {
        let searchTerm = rep.last_name + rep.first_name + rep.state_full_name + rep.gender_search_term + rep.party_full_name + rep.next_election

        if (rep.running_for_president === true){
          searchTerm += "president"
        }

        if (rep.seniority < 2){
          searchTerm += "freshmen"
        }

        let input = this.state.search.toLowerCase()
          if (input === "male"){
            input = "womenfalse"
          } else if (input === "female"){
            input = "womentrue"
          }
        //!== -1 means not found?
        return searchTerm.toLowerCase().indexOf(input) !== -1
      }
    )

    return (
      <>
        <br/>
        <div className="ui fluid icon input">
          <Button label="FLIP" onClick={this.handleFlipClick}/>
          <input
            type="text"
            placeholder={searchInstructions}
            value={this.state.search}
            onChange={this.updateSearch}
          />
          <i className="search icon"></i>
        </div>

        <h2 className='ui block header center'>{filteredReps.length} representatives meet your search requirements</h2><br/>

        <Card.Group itemsPerRow={5}>
          {filteredReps.map(rep =>
            <HouseCard
              showNames={this.state.showNames}
              bills={[]}
              key={rep.id} {...rep}/>
            )}

        </Card.Group>
      </>
    )
  }
}


const mapStateToProps = state => ({reps: state.house})

export default connect(mapStateToProps)(HouseSearchBar)
