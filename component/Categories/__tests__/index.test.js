import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import CategoriesCircle, { DATA_LIST } from '../Circle';
import CategoriesList from '../List';
import mockData from '../../../mock/data.json';
import { createListCategories } from "../../../utils/functions/orderArray";

describe('Categories', () => {
    test("should return products of all categories list", () => {
        const { categories } = createListCategories(mockData);

        render(<CategoriesList categories={categories} />);

        categories.forEach((category) => {
            const { name } = category
            expect(screen.getByText(name)).toBeInTheDocument();
        })
    });

    test("should return products of all categories circle", () => {
        render(<CategoriesCircle />);

        DATA_LIST.forEach((data) => {
            const { title, image } = data
            expect(screen.getByText(title)).toBeInTheDocument();
            expect(screen.getByAltText(image)).toBeInTheDocument();
        })
    });
})