import error from '../assets/images/error.svg'

interface Props {
  message: string
  showDetails?: boolean
  handleShowDetails?(): void
}

export default function ErrorToast(props: Props) {
  if (props.message.length) {
    return (
      <div className="flex justify-between items-center py-4 px-4 error-toast-holder">
        <div className="flex">
          <img src={error} alt="logo" className="mr-2" />
          <div>{props.message}</div>
        </div>
        {props.showDetails && (
          <div
            className="text-14 text-bold cursor-pointer error-toast-details-div"
            onClick={() => {
              if (props.handleShowDetails) props.handleShowDetails()
            }}
          >
            SHOW DETAILS
          </div>
        )}
      </div>
    )
  } else {
    return (
      <div className="invisible error-holder flex">
        <p className="flex">
          <img src={error} alt="logo" />
          <span>{props.message}</span>
        </p>
      </div>
    )
  }
}
