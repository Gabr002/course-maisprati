import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NewsCard from './NewsCard'

describe('NewsCard', () => {
    it('deve renderizar a categoria e o titulo recebidos por props', () => {
        render(
            <MemoryRouter>
                <NewsCard id={1} categoria="Tecnologia" titulo="Novo Smartphone" />
            </MemoryRouter>
        )

        expect(screen.getByText('Tecnologia')).toBeInTheDocument()
        expect(screen.getByText('Novo Smartphone')).toBeInTheDocument()
    })
})