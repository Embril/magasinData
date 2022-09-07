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

  console.log(areas)

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
      <div>
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12 mb-5">
              <h1 className="display-6 fw-bolder text-center">LOCATIONS</h1>
              <hr />
            </div>
          </div>
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowAreas />}
          </div>
        </div>
      </div>
    </>
  )
}
export default Areas
