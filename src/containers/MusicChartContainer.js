import React from 'react';
import Top20Songs from '../components/Top20Songs.js'

class MusicChartContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      top20: [],
    };
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({ top20: songs.feed.entry}))
    .catch(err => console.error)
  }

  render(){
    return (
      <div>
      <h1>UK Top 20 Songs:</h1>
      <Top20Songs top20 = {this.state.top20}/>
      </div>
    );
  }

}

export default MusicChartContainer;
