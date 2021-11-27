const Pet = () => {
  return React.createElement('div', {}, [
    React.createElement('h2', {}, 'Bora'),
    React.createElement('h3', {}, 'Dog'),
    React.createElement('h3', {}, 'Poodle')
  ]);
};

const App = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h1', { id: 'my-brand' }, 'Adopt Me!')
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
