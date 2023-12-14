/**
 * @jest-environment jsdom
 */
import {queryAllByAltText, queryAllByText, render} from '@testing-library/react'
import {Pricing} from '../components/Pricing'

it('renders homepage unchanged', () => {
    const { container } = render(<Pricing />)
    expect(container).toMatchSnapshot()
});

it('renders without errors', () => {
    const { container } = render(<Pricing />);
    // If the component renders without errors, the test passes.
    expect(container).toBeDefined();
});

it('displays correct total price', () => {
    const nightPrice = 151;
    const nightsAmount = 5;
    const totalPrice = nightPrice * nightsAmount;
    console.log(totalPrice);
    const { queryAllByText } = render(<Pricing />);
    const totalPriceElement = queryAllByText(`${totalPrice}`, {});
    expect(totalPriceElement).toHaveLength(2);
});