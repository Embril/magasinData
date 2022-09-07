import React, { useEffect, useState } from 'react'

const Areas = () => {
  const [areas, setAreas] = useState([])
  const [loading, setLoading] = useState(false)
  const [elspot, setElspot] = useState([])

  useEffect(() => {
    const getAreas = async () => {
      setLoading(true)
      const response = await fetch(
        'https://biapi.nve.no/magasinstatistikk/api/Magasinstatistikk/HentOmråder',
      )
      setAreas(await response.json())
      setLoading(false)
    }
    getAreas()
  }, [])

  const Loading = () => {
    return <></>
  }

  const ShowAreas = () => {
    return (
      <>
        <div></div>
      </>
    )
  }

  return (
    <>
      <div>{loading ? <Loading /> : <ShowAreas />}</div>
    </>
  )
}
export default Areas
