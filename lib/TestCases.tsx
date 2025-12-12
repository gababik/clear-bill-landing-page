import React from 'react'
import { render } from '@testing-library/react'

import Header from '../components/header'
import Footer from '../components/footer'
import SavingsCalculator from '../components/savings-calculator'
import Uploader from '../components/uploader'
import Button from '../components/ui/button'

// Test cases

describe('Component smoke tests', () => {
	test('Header renders without crashing', () => {
		const { container } = render(<Header />)
		expect(container).toBeTruthy()
	})

	test('Footer renders without crashing', () => {
		const { container } = render(<Footer />)
		expect(container).toBeTruthy()
	})

	test('SavingsCalculator renders without crashing', () => {
		const { container } = render(<SavingsCalculator />)
		expect(container).toBeTruthy()
	})

	test('Uploader renders without crashing', () => {
		const { container } = render(<Uploader />)
		expect(container).toBeTruthy()
	})

	test('UI Button renders and accepts children', () => {
		const { getByText } = render(<Button>Click me</Button>)
		expect(getByText('Click me')).toBeTruthy()
	})
})

export {}
