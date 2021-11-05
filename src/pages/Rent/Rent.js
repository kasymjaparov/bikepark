import "./Rents.css"
import RentHeader from "../../components/RentHeader/RentHeader"
import RentFilters from "../../components/RentFilters/RentFilters"
import { useDispatch, useSelector } from "react-redux"
import { getAll } from "../../store/actions/bikes"
import { useEffect } from "react"
import RentBikes from "../../components/RentBikes/RentBikes"
import { Button } from "react-bootstrap"
import SkeletonBike from "../../components/SkeletonBike/SkeletonBike"

export default function Rent(props) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAll())
  }, [])
  const { loading, success, failed, bikes } = useSelector(
    state => state.bikes.allBikes
  )
  const choosenBikes = useSelector(state => state.bikes.choosenBikes)
  return (
    <div className='rent '>
      <RentHeader />
      <div className='delivery block-prefix rent_bikes'>
        <div className='delivery_block'>
          <RentFilters />
          {loading && <SkeletonBike />}
          {success && <RentBikes />}
          {success && (
            <Button
              disabled={!choosenBikes.length}
              className='rent_bikes_button'
              onClick={() => props.history.push("/application")}
            >
              Далее
            </Button>
          )}
          {bikes.length == 0 && !loading && <div>Таких велосипедов нет</div>}
        </div>
      </div>
    </div>
  )
}
