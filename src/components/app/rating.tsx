'use client'

import { Star } from 'lucide-react'
import { useState } from 'react'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Slider } from '@/components/ui/slider'
import { useDevice } from '@/hooks/use-device'
import { useLocalStorage } from '@/hooks/use-local-storage'

import { Button } from '../ui/button'

interface RatingProps {
  id: string
}

export function Rating({ id }: RatingProps) {
  const [open, setOpen] = useState(false)
  const { isDesktop } = useDevice()
  const { value, set } = useLocalStorage<number | null>(`rating-${id}`, null)

  const [rating, setRating] = useState<number>(value ?? 0)

  function handleRatingChange() {
    if (typeof set === 'function') {
      set(rating)
      setOpen(false)
    }
  }

  const ratingText = value ? `Your rating: ${value}` : 'You didn’t rate this yet'

  if (isDesktop) {
    return (
      <div className="flex w-full flex-row-reverse items-center justify-end gap-4 pt-6">
        <p>{ratingText}</p>
        <Dialog
          onOpenChange={setOpen}
          open={open}
        >
          <DialogTrigger asChild>
            <Button className="w-full px-6 sm:w-max">
              <Star className="mr-2 size-4" />
              Rate
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-zinc-800 sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit your rating</DialogTitle>
              <DialogDescription>
                Your rating helps us improve our service. Current rating: {rating || value}
              </DialogDescription>
            </DialogHeader>
            <Slider
              className="w-full"
              defaultValue={[value ?? 0]}
              max={10}
              onValueChange={(value) => setRating(Number(value))}
              step={0.1}
              value={[rating]}
            />
            <DialogFooter>
              <Button onClick={handleRatingChange}>Confirm</Button>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    )
  }

  return (
    <div className="flex w-full flex-col justify-start gap-4 pt-6">
      <p>{ratingText}</p>
      <Drawer
        onOpenChange={setOpen}
        open={open}
      >
        <DrawerTrigger asChild>
          <Button className="w-full px-6 sm:w-auto">
            <Star className="mr-2 size-4" />
            Rate
          </Button>
        </DrawerTrigger>
        <DrawerContent className="bg-zinc-950/50 backdrop-blur-sm">
          <DrawerHeader className="mx-auto max-w-md">
            <DrawerTitle>Edit your rating</DrawerTitle>
            <DrawerDescription>
              Your rating helps us improve our service. Current rating: {rating || value}
            </DrawerDescription>
          </DrawerHeader>
          <Slider
            className="mx-auto w-[60%]"
            defaultValue={[rating]}
            max={10}
            onValueChange={(value) => setRating(Number(value))}
            step={0.1}
            value={[rating]}
          />
          <DrawerFooter>
            <Button onClick={handleRatingChange}>Confirm</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
