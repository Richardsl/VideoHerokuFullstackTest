import React from "react"

async function fetchText() {
  let response = await fetch("/api/1")

  console.log(response.status) // 200
  console.log(response.statusText) // OK

  if (response.status === 200) {
    return await response.text()
    // handle data
  }
}

export default function Home() {
  return (
    <>
      <div>Hello world from frontend homepage!</div>
      <button
        onClick={() => {
          console.log(fetchText())
        }}
      >
        Fetch from api
      </button>
    </>
  )
}
