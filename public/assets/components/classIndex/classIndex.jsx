var ClassIndexBox = React.createClass({
  getInitialState: function(){
    return CONFIG;
  },
  render: function(){
    var Classes = this.state.classes.map(function(i){
      return(
        <GeneralListItemBox onClick={this.props.move.bind(this)} headline={i.name} byline={'Assignments: '+i.assignments.length}/>
      );
    }, this);

    return <div className="class-index-list">{Classes}</div>;
  }
});
