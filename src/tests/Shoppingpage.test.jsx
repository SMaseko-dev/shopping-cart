import { render, screen } from '@testing-library/react'
import { describe, it ,expect } from 'vitest'
import { MemoryRouter } from 'react-router'
import Shoppingpage from '../pages/Shoppingpage'

describe('Shopping Page', () => {
    it('renders shopping page', () => {
        render(
            <MemoryRouter>
                <Shoppingpage />
            </MemoryRouter>
        )

        const divElement = screen.queryByTestId('shopping-container')
        expect(divElement).toBeInTheDocument()

        expect(screen.getByText('Shop Our Latest Collection')).toBeInTheDocument();
    }
    )})