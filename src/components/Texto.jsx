import CardUser from "./CardUser";

export default function Texto({ title, children }) {
    // Criar componente content aqui depois
    return (
      <div className="flex gap-4 flex-col items-center justify-center border w-full p-40 rounded-lg bg-black border-white">
        <div className="flex items-center justify-center p-4 bg-neutral-800">
          <p>{ title }</p>
        </div>
        { children }
      </div>
  )
}
