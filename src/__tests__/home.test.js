import renderer from 'react-test-renderer';
import Home from '../components/Home';

it('Checking if Home page renders correctly', () => {
  const tree = renderer
    .create(
       <Home />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
