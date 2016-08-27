var ClassIndexBox = React.createClass({
  getInitialState: function(){
    return CONFIG;
  },
  render: function(){
    var Classes = this.state.classes.map(function(i){
      return <GeneralListItemBox headline={i.name} byline={'Assignments: '+i.assignments.length} link={'/classes/'+i.id}/>;
    });

    return <div className="class-index-list">{Classes}</div>;
  }
});
