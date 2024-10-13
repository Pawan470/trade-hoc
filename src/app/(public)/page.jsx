"use client"

import withAuth from "@/hoc/withAuth"

export const page = () => {
  return (
    <div>page</div>
  )
}


export default withAuth(page)