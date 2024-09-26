import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from 'lucide-react'

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="font-bold text-2xl">Participantes</h1>
        <div className="flex w-72 items-center gap-3 rounded-lg border border-white/10 px-3 py-1.5">
          <Search className="size-4 text-emerald-300" />
          <input
            type="text"
            className="flex-1 border-0 bg-transparent p-0 text-sm outline-none"
            placeholder="Buscar participante..."
          />
        </div>
      </div>

      <div className=" rounded-lg border border-white/10">
        <table className="w-full">
          <thead>
            <tr className="border-white/10 border-b">
              <th
                style={{ width: 48 }}
                className="px-4 py-3 text-left font-semibold text-sm"
              >
                <input
                  type="checkbox"
                  className="size-4 rounded border-white/10 bg-black/20"
                />
              </th>
              <th className="px-4 py-3 text-left font-semibold text-sm">
                Código
              </th>
              <th className="px-4 py-3 text-left font-semibold text-sm">
                Participantes
              </th>
              <th className="px-4 py-3 text-left font-semibold text-sm">
                Data de inscrição
              </th>
              <th className="px-4 py-3 text-left font-semibold text-sm">
                Data do check-in
              </th>
              <th
                style={{ width: 64 }}
                className="px-4 py-3 text-left font-semibold text-sm"
              />
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, i) => {
              return (
                <tr
                  key={i}
                  className="border-white/10 border-b hover:bg-white/5"
                >
                  <td className="px-4 py-3 text-sm text-zinc-300">
                    <input
                      type="checkbox"
                      className="size-4 rounded border-white/10 bg-black/20"
                    />
                  </td>
                  <td>12383</td>
                  <td className="px-4 py-3 text-sm text-zinc-300">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">
                        Luis Felipe Salvarani
                      </span>
                      <span>felipe_salvarani@hotmail.com</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-300">
                    7 dias atrás
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-300">
                    3 dias atrás
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-300">
                    <button
                      type="button"
                      className="rounded-md border border-white/10 bg-black/20 p-1.5"
                    >
                      <MoreHorizontal className="size-4" />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="px-4 py-3 text-sm text-zinc-300" colSpan={3}>
                Mostrando 10 de 228 items
              </td>
              <td
                className="px-4 py-3 text-right text-sm text-zinc-300"
                colSpan={3}
              >
                <div className="inline-flex items-center gap-8">
                  <span>Página 1 de 23</span>

                  <div className="flex gap-1.5">
                    <button
                      type="button"
                      className="rounded-md border border-white/10 bg-white/10 p-1.5"
                    >
                      <ChevronsLeft className="size-4" />
                    </button>
                    <button
                      type="button"
                      className="rounded-md border border-white/10 bg-white/10 p-1.5"
                    >
                      <ChevronLeft className="size-4" />
                    </button>
                    <button
                      type="button"
                      className="rounded-md border border-white/10 bg-white/10 p-1.5"
                    >
                      <ChevronRight className="size-4" />
                    </button>
                    <button
                      type="button"
                      className="rounded-md border border-white/10 bg-white/10 p-1.5"
                    >
                      <ChevronsRight className="size-4" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
