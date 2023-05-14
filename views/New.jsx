import React from 'react'

const New = () => {
  return (
    <div>
        <h1>Create new Pokemon entry:</h1>
        <form action='/pokemon' method='POST'>
            name: <input type='text' name='name'/>
            <br/>
            type: <input type="text" name="type" />
            <input type='submit' name='' value='Create Pokemon'/>
        </form>
    </div>
  )
}

export default New