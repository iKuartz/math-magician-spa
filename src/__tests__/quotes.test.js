import renderer from 'react-test-renderer';
import Quotes from '../components/Quotes';

it('Checking if Quotes page renders correctly', () => {
  const tree = renderer
    .create(
        <Quotes />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});