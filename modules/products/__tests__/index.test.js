import { render } from '@testing-library/react'
import ProductHome from '../../../pages/products'
import mockData from '../../../mock/data.json';
import { createListCategories } from '../../../utils/functions/orderArray';
import '@testing-library/jest-dom'
import { ProductProvider } from '../context';

describe('ProductHome', () => {

    const wrapper = (children) => <ProductProvider>{children}</ProductProvider>

    test("should return snapshot", () => {
        const { categories } = createListCategories(mockData);
        const products = mockData;

        const result = render(wrapper(<ProductHome categories={categories} products={products} />));
        expect(result).toMatchSnapshot();
    });
})