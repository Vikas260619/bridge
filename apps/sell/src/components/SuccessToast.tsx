import successToast from '../assets/images/toast.svg'
import { useEffect, useState } from 'react'
import { displayName } from 'apps/sell/jest.config'
interface Props {
  message: string
}

export default function SuccessToast(props: Props) {
  const [isSuccess, setSuccess] = useState(false)
  useEffect(() => {
    if (props.message) {
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
      }, 5000)
    }
  }, [props.message])
  if (isSuccess) {
    return (
      <div className="success-toast">
        <p
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={successToast} alt="logo" />
          <span>{props.message}</span>
        </p>
      </div>
    )
  } else {
    return null
  }
}
