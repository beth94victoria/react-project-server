import React from 'react'
import renderer from 'react-test-renderer'
import Services from './Services'

describe('Services snapshot', () => {
    it('Should render as expected', () => {
        const tree = renderer.create(
        <Services page="http://localhost:3000/services">Services</Services>
        )
        expect(tree.toJSON()).toMatchSnapshot()
    })
})