import "./Rents.css"
import RentHeader from "../../components/RentHeader/RentHeader"
import RentFilters from "../../components/RentFilters/RentFilters"
import { useDispatch, useSelector } from "react-redux"
import { getAll } from "../../store/actions/bikes"
import { useEffect } from "react"
import RentBikes from "../../components/RentBikes/RentBikes"
import Loading from "../../components/Loading/Loading"

export default function Rent() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAll())
  }, [])
  const loadingBikes = useSelector(state => state.bikes.allBikes.loading)
  return (
    <div className='rent '>
      <RentHeader />
      <div className='delivery block-prefix rent_bikes'>
        <div className='delivery_block'>
          {!loadingBikes ? (
            <div>
              <RentFilters />
              <RentBikes />
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  )
}
