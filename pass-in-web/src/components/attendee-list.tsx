import { Search } from 'lucide-react'

export function AttendeeList() {
  return (
    <div className="flex items-center gap-3">
      <h1 className="font-bold text-2xl">Participantes</h1>
      <div className="flex w-72 items-center gap-3 rounded-lg border border-white/10 px-3 py-1.5 text-sm">
        <Search className="size-4 text-emerald-300" />
        <input
          type="text"
          className="flex-1 bg-transparent outline-none"
          placeholder="Buscar participante..."
        />
      </div>
    </div>
  )
}
