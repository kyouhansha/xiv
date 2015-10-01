import React from 'react'

var Action = React.createClass({
    render () {
        var { children, ...props } = this.props

        return (
            <button {...props}>
                <label className="action-text">
                    {children}
                </label>
            </button>
        )
    }
})

export default Action
