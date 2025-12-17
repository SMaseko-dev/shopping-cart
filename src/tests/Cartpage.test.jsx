import { render, screen } from '@testing-library/react'
import { describe, it ,expect } from 'vitest'
import { MemoryRouter } from 'react-router'
import Cartpage from '../pages/Cartpage'

describe('Shopping Page', () => {
    it('renders Cart page', () => {
        render(
            <MemoryRouter>
                <Cartpage />
            </MemoryRouter>
        )

        const divElement = screen.queryByTestId('cartpage-container')
        expect(divElement).toBeInTheDocument()

        expect(screen.getByText('Your Shopping Cart')).toBeInTheDocument();
    }
    )})