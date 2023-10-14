import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'
import HeroComponent from './HeroCompo'

export class MainErrorBoundary extends Component {
    render() {
        return (
            <div className='text-center p-2'>
                <h1 className='text-2xl mb-1'>Main Error Boundary</h1>

                {/* <ErrorBoundary>
                    <HeroComponent heroName="Bat Man" />
                    <HeroComponent heroName="Super Man" />
                    <HeroComponent heroName="Joker" />
                </ErrorBoundary> */}

                <ErrorBoundary>
                    <HeroComponent heroName="Bat Man" />
                </ErrorBoundary>
                <ErrorBoundary>
                    <HeroComponent heroName="Super Man" />
                </ErrorBoundary>
                <ErrorBoundary>
                    <HeroComponent heroName="Joker" />
                </ErrorBoundary>
            </div>
        )
    }
}

export default MainErrorBoundary