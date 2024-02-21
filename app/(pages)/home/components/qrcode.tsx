import * as React from "react"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import { Copy, Download, QrCode as QrCodeIcon } from "lucide-react"
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
import QRcodeImg from "@/public/qrcode.png"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export function QRCode() {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant={'ghost'} size={'icon'} className='flex-row items-center flex hover:bg-gray-500/5'>
                        <QrCodeIcon className='p-[2px] rounded' />
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Share my Portfolio</DialogTitle>
                        <DialogDescription>
                            Recomend my portfolio to your friends or family, so that i can help them build the next big thing.
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
                <Button variant={'ghost'} size={'icon'} className='flex-row items-center flex hover:bg-gray-500/5'>
                    <QrCodeIcon className='p-[2px] rounded' />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Share my Portfolio</DrawerTitle>
                    <DrawerDescription>
                        Recomend my portfolio to your friends or family, so that i can help them build the next big thing.
                    </DrawerDescription>
                </DrawerHeader>
                <ProfileForm className="px-4 mb-5" />
            </DrawerContent>
        </Drawer>
    )
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
    return (
        <div className={cn("flex flex-col items-start gap-4 mt-2", className)}>
            <Image src={QRcodeImg} className="w-full h-full" alt="QR Code" width={500} height={500} priority />
            {/* download button */}
            <Link className="w-full" href={QRcodeImg.src} download="hellofaizan-qrcode" target={'_blank'}>
                <Button variant="outline" className="w-full">
                    Download <Download className="ml-2" size={15} />
                </Button>
            </Link>

            <hr className="w-full border-t border-zinc-800 my-3" />

            <div className="w-full flex gap-2">
                <Input
                    value="https://v2.hellofaizan.tech"
                    readOnly
                    className="w-full text-center"
                />
                <Button variant="default" size={'icon'} className=" border border-neutral-500" onClick={() => {
                    navigator.clipboard.writeText("https://v2.hellofaizan.tech")
                    toast("Copied to clipboard 📋")
                }}>
                    <Copy size={15} />
                </Button>
            </div>

        </div>
    )
}
