
import React from 'react'

function ItemCard({text}) {
  return (
    <div className="flex item-center gap-x-2 ">
    <img src="public/icon-list.svg" alt="check list"/>
    <p className="text-xs">{text}</p>

</div>
  )
}

export default ItemCard




