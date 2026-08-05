const LeftContent = () => {
  return (
    <div id='left' className='h-full w-1/3 flex flex-col justify-center gap-8'>
      <div className='max-w-xl'>
        <p className='text-sm uppercase tracking-[0.4em] text-slate-500 mb-4'>Target audience</p>
        <h1 className='text-6xl font-black leading-tight text-slate-950'>Build a digital banking experience for underserved customers.</h1>
        <p className='mt-8 text-lg leading-8 text-slate-600'>Create trusted financial products that serve underserved, underbanked, and average customers with clarity and speed.</p>
      </div>

      <div className='flex flex-wrap gap-4'>
        <button className='rounded-full bg-black px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white'>Get started</button>
        <button className='rounded-full border border-slate-900 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-900'>Learn more</button>
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <div className='rounded-3xl bg-slate-100 p-6'>
          <p className='text-xs uppercase tracking-[0.3em] text-slate-500'>Focus</p>
          <p className='mt-3 font-semibold text-slate-900'>Customer trust</p>
        </div>
        <div className='rounded-3xl bg-slate-100 p-6'>
          <p className='text-xs uppercase tracking-[0.3em] text-slate-500'>Speed</p>
          <p className='mt-3 font-semibold text-slate-900'>Seamless onboarding</p>
        </div>
      </div>
    </div>
  )
}

export default LeftContent