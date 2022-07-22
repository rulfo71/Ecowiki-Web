export default function Button({ children, disabled, onClick }) {
    return (
      <>
        <button disabled={disabled} onClick={onClick}>
          {children}
        </button>
      </>
    )
  }