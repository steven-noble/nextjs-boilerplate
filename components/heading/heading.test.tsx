import { render, screen } from '@testing-library/react'
import Heading from './index'

describe('Heading component', () => {
    test('Heading renders without crashing', () => {
        render(<Heading as="h1">Heading title</Heading>)
    })

    it('applies the provided className prop', () => {
        const className = 'custom-heading'
        render(
            <Heading as="h2" className={className}>
                Heading Text
            </Heading>
        )
        const headingElement = screen.getByRole('heading', {
            name: /heading text/i,
        })
        expect(headingElement).toHaveClass(className)
    })

    it('applies the provided colour prop', () => {
        const colour = 'red'
        render(
            <Heading as="h3" colour={colour}>
                Heading Text
            </Heading>
        )
        const headingElement = screen.getByRole('heading', {
            name: /heading text/i,
        })
        expect(headingElement).toHaveClass(`heading--${colour}`)
    })

    it('applies the underline style when underline prop is true', () => {
        render(
            <Heading as="h4" underline>
                Heading Text
            </Heading>
        )
        const headingElement = screen.getByRole('heading', {
            name: /heading text/i,
        })
        expect(headingElement).toHaveClass('heading--underline')
    })

    it('truncates the text when truncate prop is provided', () => {
        render(
            <Heading as="h6" truncate>
                Very long heading text that needs truncation
            </Heading>
        )
        const headingElement = screen.getByRole('heading', {
            name: /very long heading text that needs truncation/i,
        })
        expect(headingElement).toHaveClass('truncate')
    })

    it('highlights the specified word in the heading text', () => {
        const highlighted = 'World'
        render(
            <Heading as="h1" highlighted={highlighted}>
                Hello, World!
            </Heading>
        )
        const highlightElement = screen.getByText(highlighted)
        expect(highlightElement).toBeInTheDocument()
        expect(highlightElement).toHaveClass('heading__highlight')
    })

    it('does not highlight the specified word when highlightAll prop is false', () => {
        const highlighted = 'World'
        render(
            <Heading as="h2" highlighted={highlighted} highlightAll={false}>
                Hello, World, World!
            </Heading>
        )
        const highlightElements = screen.getAllByText(highlighted)
        expect(highlightElements).toHaveLength(1)
        expect(highlightElements[0]).toHaveClass('heading__highlight')
    })

    it('applies default props when not provided', () => {
        render(<Heading as="h3">Default Props</Heading>)
        const headingElement = screen.getByRole('heading', {
            name: /default props/i,
        })
        expect(headingElement).toHaveClass('heading--white')
        expect(headingElement).not.toHaveClass('heading--underline')
    })
})