import { render, screen } from '@testing-library/react'
import { describe, it ,expect } from 'vitest'
import { MemoryRouter } from 'react-router'
import Homepage from '../pages/Homepage'

describe('Homepage', () => {
    it('renders the homepage', () => {
        render(
            
            <MemoryRouter>
                <Homepage />
            </MemoryRouter>
        )

        const divElement = screen.queryByTestId('container')
        expect(divElement).toBeInTheDocument()

        expect(screen.getByText('Welcome to ShopSmart')).toBeInTheDocument()
        expect(screen.getByText('Your one-stop shop for all your fashion needs!')).toBeInTheDocument()
    })
})