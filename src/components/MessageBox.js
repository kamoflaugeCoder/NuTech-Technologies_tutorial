import React from 'react'

export default function MessageBox(props) {
    return (
        <div className={`alert alert-${props.variant || 'info'}`}>
          {props.children} {/* 'children' is what is put in the 'MessageBox' on the HomeScreen*/ }
        </div>
    )
}
