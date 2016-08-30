var AssignmentIndexBox = React.createClass({
  getInitialState: function(){
    for(var i=0; i<CONFIG.classes.length; i++){
      if(CONFIG.classes[i].id === Number(this.props.params.id)){
        return CONFIG.classes[i];
      }
    }
  },
  render: function(){
    var Classes = this.state.assignments.map(function(i){
      return <GeneralListItemBox headline={i.name} byline={i.due}/>;
    });

    return <div className="assignment-index-list">{Classes}</div>;
  }
});
