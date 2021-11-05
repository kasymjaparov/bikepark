import "./Skeleton.css"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export default function SkeletonC() {
  return (
    <div className='skeletonC rent_bikes_row'>
      <Skeleton className="skeletonC_item" width='260px' height='370px' />
      <Skeleton className="skeletonC_item" width='260px' height='370px' />
      <Skeleton className="skeletonC_item" width='260px' height='370px' />
      <Skeleton className="skeletonC_item" width='260px' height='370px' />
      <Skeleton className="skeletonC_item" width='260px' height='370px' />
      <Skeleton className="skeletonC_item" width='260px' height='370px' />
    </div>
  )
}
