var GeneralListItemBox = React.createClass({
  render: function(){
    return (
      <div className="general-list-item" onClick={this.props.onClick || null}>
        <div className="animator"></div>
        <div className="content">
          <div className="headline">{this.props.headline}</div>
          <div className="byline">{this.props.byline}</div>
        </div>
      </div>
    );
  }
});

var GeneralListInputBox = React.createClass({
  focusInput: function(){
    this.refs.input.focus();
  },
  blurInput: function(){
    this.refs.input.blur();
  },
  render: function(){
    return (
      <div className="general-list-item" onMouseEnter={this.focusInput} onMouseLeave={this.blurInput} onClick={this.props.onClick || null}>
        <div className="animator"></div>
        <div className="content">
          <span className="headline">{this.props.headline}</span>
          <span className="headline" style={{float: 'right'}}>
            <input type={this.props.type || 'text'} placeholder={this.props.placeholder} ref="input"/>
          </span>
        </div>
      </div>
    );
  }
});

var LayoutBoxes = React.createClass({
  getInitialState: function(){
    return {
      viewed: 0
    };
  },
  move: function(){
    console.log(this.state.viewed);
    this.setState({
      viewed: this.state.viewed + 1
    });
  },
  render: function(){
    var offset = 0;
    return(
      <div className="box-viewport">
        {
          this.props.children.map(function(Component){
            return(
              <div className="box" style={{transform: 'translate('+(100*((offset++)-this.state.viewed))+'%, 0%)'}}>
                {
                  React.cloneElement(Component, {
                    move: this.move
                  })
                }
              </div>
            );
          }.bind(this))
        }
      </div>
    );
  }
});
