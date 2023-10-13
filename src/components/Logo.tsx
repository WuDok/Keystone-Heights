export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 99 24" aria-hidden="true" {...props}>
      <path
        className="fill-emerald-400"
        d="M2,9V4A2,2,0,0,1,4,2h6.38l4,7Zm8,2V22H20a2,2,0,0,0,2-2V11Z"
      />
      <path
        className="fill-zinc-900 dark:fill-white"
        d="M12.68,2H20a2,2,0,0,1,2,2V9H16.68ZM8,11H2v9a2,2,0,0,0,2,2H8Z"
      />

      <text
        className="fill-zinc-900 dark:fill-white"
        x={250}
        y={150}
        style={{
          fontFamily: 'ArialRoundedMTBold',
          fontSize: '160px',
        }}
        transform="matrix(.125 0 0 .11512 -2.657 1.548)"
      >
        {'GIFT'}
      </text>
    </svg>
  )
}
