import "./SkeletonOrders.css"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export default function SkeletonOrders() {
  return (
    <div className='skeletonOrders'>
      <Skeleton className='skeletonOrders_item' width='100%' height='62px' />
      <Skeleton className='skeletonOrders_item' width='100%' height='62px' />
      <Skeleton className='skeletonOrders_item' width='100%' height='62px' />
    </div>
  )
}
