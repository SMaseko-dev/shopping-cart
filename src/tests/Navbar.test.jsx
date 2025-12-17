import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Navbar from '../components/Navbar'
import { describe, it ,expect } from 'vitest'

describe('Navbar', () => {
    it('renders the navbar component wrapped in memoryrouter to handle link components', () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        )

        const navbarElement = screen.getByTestId('navbar-container');
        expect(navbarElement).toBeInTheDocument();

        expect(screen.getByText('SHOPSMART')).toBeInTheDocument();

        expect(screen.getByRole('link', { name: /HOME/i})).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /SHOP/i})).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /CART/i})).toBeInTheDocument();
    })
})