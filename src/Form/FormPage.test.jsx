import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import FormPage from './FormPage'


describe('FormPage', () => {
    test('should ', () => {
        render(<FormPage/>)
        // screen.debug()
        expect(screen.getByText('Formulir Buku Baru')).toBeInTheDocument()
        expect(screen.getByLabelText(/Judul/)).toBeInTheDocument()
    })
})
