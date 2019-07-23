import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'



class SenateCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        front: true
     }
   }

   toggleCard = () =>{
    this.setState((prevState)=>{
      return {front: !prevState.front}
    })
  }

  render() {
     let facebook = this.props.senator.facebook_account
     let twitter = this.props.senator.twitter_account
     let youtube = this.props.senator.you_tube_account
     let website = this.props.senator.website

     let name

     this.state.front? name = "Guess Who?" : name = this.props.senator.first_name + ' ' + this.props.senator.last_name


    return (
      <Card onClick={this.toggleCard}>
        <Image src={this.props.senator.party_logo} wrapped ui={false} />

        <Card.Content>
          <Card.Header>
            Sen. {name}<br/>
            {this.props.senator.party}-{this.props.senator.state}
          </Card.Header>

          <Card.Description>
            Years in office: {this.props.senator.seniority} <br/>
            Age: {this.props.senator.age}<br/>
            Next election: {this.props.senator.next_election}<br/>
            Missed votes: {this.props.senator.missed_votes_pct}%<br/>
            Votes party line {this.props.senator.votes_with_party_pct}%<br/>

          </Card.Description>
        </Card.Content>

        <Card.Content extra>
          <div>
            <a href={facebook}><Icon name='facebook' /></a>
            <a href={twitter}><Icon name='twitter' /></a>
            <a href={youtube}><Icon name='youtube' /></a>
            <a href={website}>WEBSITE</a>
          </div>
        </Card.Content>
      </Card>
    )
  }
}

export default SenateCard
