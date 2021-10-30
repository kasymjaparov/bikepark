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
  const { loading, success, failed, bikes } = useSelector(
    state => state.bikes.allBikes
  )
  return (
    <div className='rent '>
      <RentHeader />
      <div className='delivery block-prefix rent_bikes'>
        <div className='delivery_block'>
          <RentFilters />
          {loading && <Loading />}
          {success && <RentBikes />}
          {failed && <div>Ошибка сервера</div>}
          {bikes.length == 0 && !loading && <div>Таких велосипедов нет</div>}
        </div>
      </div>
    </div>
  )
}
