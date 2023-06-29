import React from 'react'
import MenuItems from './MenuItems'

export default function DesktopNav() {

  return (
    <div className="hidden lg:flex w-[50%] justify-around font-semibold">
      <MenuItems />
    </div>
  );
}
