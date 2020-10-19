import React from "react"

async function fetchText() {
  let response = await fetch("/api/1")
    .then(response => response.text())
    .then(data => {
      console.log(data)
      const e = document.getElementById("foo")
      e.innerText(data)
    })

  console.log(response.status) // 200
  console.log(response.statusText) // OK

  if (response.status === 200) {
    console.log(response.text())
    // handle data
  }
}

export default function Home() {
  return (
    <>
      <div>Hello world from frontend homepage!</div>
      <div if="foo"></div>
      <button
        onClick={() => {
          fetchText()
        }}
      >
        Fetch from api
      </button>
    </>
  )
}
