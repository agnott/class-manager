var GeneralListItemBox = React.createClass({
  getInitialState: function(){
    return {};
  },
  render: function(){
    return (
      <div className="general-list-item">
        <div className="animator"></div>
        <div className="content">
          <Link to={this.props.link || ''}>
            <div className="headline">{this.props.headline}</div>
            <div className="byline">{this.props.byline}</div>
          </Link>
        </div>
      </div>
    )
  }
});
