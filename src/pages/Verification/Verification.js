import React from "react"
import "./Verification.css"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { verification } from "../../store/actions/auth"
import { useHistory } from "react-router-dom"

export default function Verification() {
  const { token } = useParams()
  const dispatch = useDispatch()
  const verifState = useSelector(state => state.auth.verification)
  let history = useHistory()
  const [seconds, setSeconds] = React.useState(5)

  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000)
    } else {
      setSeconds("0")
    }
  })

  React.useEffect(() => {
    dispatch(verification(token, history))
  }, [])

  return (
    <div className='verification'>
      <h1 className='verification_title delivery_subtitle'>
        {verifState.message}
      </h1>
      {verifState.success && (
        <div className='verification_text'>
          Вы будете автоматически переадресованы через {seconds} секунд
        </div>
      )}
    </div>
  )
}
