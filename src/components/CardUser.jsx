export default function CardUser({userName, userEmail, userImage}) {
  return (
    <div className="flex items-center gap w-60 bg-neutral-800 p-2">
      <img className="bg-slate-300 rounded-full h-9 w-9 mx-2" src={userImage}/>
      <div>
        <p className="text-sm">{ userName }</p>
        <p className="text-xs">{ userEmail }</p>
      </div>
    </div>
  )
}
