import React from 'react'
import renderer from 'react-test-renderer'
import About from './About'

describe('About snapshot', () => {
    it('Should render as expected', () => {
        const tree = renderer.create(
        <About/>
        )
        expect(tree.toJSON()).toMatchSnapshot()
    })
})