import React from 'react'

interface ILoadingComp {
    opacity?: number
}

const LoadingComp: React.FC<ILoadingComp> = (props) => {
  return (<>
    <div>
        <div className="loading-children-container">
            <div className="loading-spinner" style={{opacity: props.opacity}}></div>
        </div>
    </div>
    </>)
}

export default LoadingComp