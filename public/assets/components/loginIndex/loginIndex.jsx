var LoginBox = React.createClass({
  getInitialState: function(){
    return {
      username: '',
      password: ''
    }
  },
  render: function(){
    return (
      <GeneralListInputBox headline="agnott" type="password" placeholder="password"/>
    );
  }
});
