

const Breadcrumbs = ({children}: any) => {
  return (

      <div className="flex justify-end text-sm text-gray-500 mb-2">
        <span>{children}</span>
      </div>
  )
}

export default Breadcrumbs