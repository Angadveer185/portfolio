import React from 'react'

function BottomPage() {
  return (
    <div className="flex h-full w-full overflow-hidden rounded-[2.5rem] border border-black/10 bg-[#e6cdb6] p-4 shadow-[0_16px_35px_rgba(0,0,0,0.08)]">
      <div className="flex h-full w-full flex-col rounded-[2rem] border border-black/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.45),transparent_12%,transparent_88%,rgba(0,0,0,0.03))] p-6">
        <div className="mb-4 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.35em] text-text-quaternary/55">
          <span>Loose page</span>
          <span>Notes</span>
        </div>

        <div className="grid flex-1 gap-3 text-sm leading-6 text-text-quaternary/70">
          <div className="rounded-[1.25rem] border border-dashed border-black/10 bg-white/25 p-4">
            This under-layer helps the sketchbook read like a stack of real
            pages instead of a flat card.
          </div>
          <div className="rounded-[1.25rem] border border-black/10 bg-white/35 p-4">
            Add project snapshots, a short timeline, or a hand-written list of
            goals here if you want the layout to feel more personal.
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomPage
