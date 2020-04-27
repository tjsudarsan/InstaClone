function connect(mapStateToProps, mapDispatchToProps) {
  const reduxState = {
    name: 'sudarsan',
    age: 23,
  };

  const Component = function (ComposedComponent) {
    // Operations
    const newState = mapStateToProps(reduxState);
    return ComposedComponent(newState);
  };

  return Component;
}

const App = (props) => {
  console.log(props);
};

const mapStateToProps = (state) => ({
  name: state.name,
  age: state.age,
});

connect(mapStateToProps)(App);
