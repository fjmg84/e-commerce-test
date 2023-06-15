import { render, screen } from '@testing-library/react'
import ProductHome from '../../pages/products'
import mockData from '../../mock/data.json';
import { createListCategories } from '../../utils/functions/orderArray';
import '@testing-library/jest-dom'

describe('ProductHome', () => {

    test("should return snapshot", () => {
        const { categories } = createListCategories(mockData);
        const products = mockData;

        const result = render(<ProductHome categories={categories} products={products} />);
        expect(result).toMatchSnapshot();
    });
})