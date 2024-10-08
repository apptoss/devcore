import aptIcon from "@/assets/apt.svg"
import { useBalance } from "@/components/balance"
import { Input, InputProps } from "@/components/ui/input"

export const AmountInput = ({
  amount,
  onChangeAmount,
  ...props
}: InputProps & { amount?: number; onChangeAmount: (amount: number) => void }) => {
  const { balance } = useBalance()

  const addPercentAmount = (percent: number) => {
    const am = (amount ?? 0) * (1 + percent / 100)
    onChangeAmount(am)
  }

  return (
    <div className='space-y-3'>
      <div className='flex justify-between gap-3 items-center w-full'>
        <Input
          id='amount'
          placeholder='0'
          type='number'
          className='border-none w-[80%] px-0 font-semibold text-4xl shadow-none focus-visible:ring-transparent'
          value={amount ?? ''}
          onChange={(e) => {
            const amount = e.target.valueAsNumber
            onChangeAmount(amount)
          }}
          {...props}
        />
        <div className='font-medium flex gap-1 items-center'>
          <img src={aptIcon} className='size-5'/>
          APT
        </div>
      </div>

      <div className='flex justify-between text-muted-foreground text-sm'>
        <div className='flex gap-2 font-semibold'>
          <button
            className='w-[28px] ring-1 px-1 py-[2px] rounded-lg ring-muted-foreground/50'
            onClick={() => addPercentAmount(-50)}
          >
            ½
          </button>
          <button
            className='w-[28px] ring-1 px-1 py-[2px] rounded-lg ring-muted-foreground/50'
            onClick={() => addPercentAmount(100)}
          >
            2
          </button>
        </div>
        <div className='flex gap-2 items-center'>
          <div>{balance} APT</div>
          <button
            className='ring-1 px-1 py-[2px] rounded-lg ring-muted-foreground font-semibold'
            onClick={() => onChangeAmount(Number(balance))}
          >
            Max
          </button>
        </div>
      </div>
    </div>
  )
}
