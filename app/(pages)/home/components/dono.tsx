import * as React from "react"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import { Coffee, CoffeeIcon, BadgeDollarSign, Heart, IndianRupee } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { UPIQRCode } from "./upi"

export function Dono() {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant={'link'} size={'icon'} className='flex flex-row items-center hover:bg-gray-500/5' >
                        <Coffee className='hover:text-yellow-400 p-[2px] rounded' />
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Buy me a Coffee</DialogTitle>
                        <DialogDescription>
                            You got an interest to donate me a coffee to keep me awake and work more. Thats soo nice of you.
                        </DialogDescription>
                    </DialogHeader>
                    <ProfileForm />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant={'link'} size={'icon'} className='flex flex-row items-center hover:bg-gray-500/5' >
                    <Coffee className='hover:text-yellow-400 p-[2px] rounded' />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Buy me a Coffee</DrawerTitle>
                    <DrawerDescription>
                        You got an interest to donate me a coffee to keep me awake and work more. Thats soo nice of you.
                    </DrawerDescription>
                </DrawerHeader>
                <ProfileForm className="px-4" />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
    return (
        <div className={cn(
            className,
            "flex justify-center flex-col gap-y-2"
        )}>
            <UPIQRCode />
            <Button variant="default" className="w-full h-12 bg-yellow-500 text-black" onClick={() => {
                window.open('https://www.buymeacoffee.com/hellofaizan', '_blank')
            }}>
                <p className="flex gap-x-1 items-center justify-center"><CoffeeIcon size={20} />Buy me a Coffee</p>
            </Button>
            <Button variant="default" className="w-full h-12 bg-[#21262D] text-white" onClick={() => {
                window.open('https://github.com/sponsors/hellofaizan', '_blank')
            }}>
                <p className="flex gap-x-1 items-center justify-center"><Heart color="#DA61A3" size={20} />Github Sponsor</p>
            </Button>
            <Button variant="default" className="w-full h-12 bg-[#003087] text-white" onClick={() => {
                window.open('https://www.paypal.com/paypalme/hellofaizan', '_blank')
            }}>
                <p className="flex gap-x-1 items-center justify-center"><BadgeDollarSign size={20} />Through PayPal</p>
            </Button>
        </div>
    )
}
