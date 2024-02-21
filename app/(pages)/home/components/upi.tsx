import * as React from "react"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import { Copy, Download, QrCode as QrCodeIcon, IndianRupee } from "lucide-react"
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
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import UPICode from "@/public/upiqr.png"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export function UPIQRCode() {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="default" className="w-full h-12 bg-gradient-to-r from-[#FF7909] via-white to-[#018B3D] text-black">
                        <p className="flex gap-x-1 items-center justify-center"><IndianRupee size={20} />UPI Payment 🇮🇳</p>
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Scan the QR Code</DialogTitle>
                        <DialogDescription>
                            Scan the below QR code with any of your UPI Payment app to support me.
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
                <Button variant="default" className="w-full h-12 bg-gradient-to-r from-[#FF7909] via-white to-[#018B3D] text-black">
                    <p className="flex gap-x-1 items-center justify-center"><IndianRupee size={20} />UPI Payment 🇮🇳</p>
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Scan the QR Code</DrawerTitle>
                    <DrawerDescription>
                        Scan the below QR code with any of your UPI Payment app to support me.
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
            <Image src={UPICode} className="w-full h-full border" alt="QR Code" width={500} height={500} priority />
            {/* download button */}
            <Link className="w-full" href={UPICode.src} download="hellofaizan-upi" target={'_blank'}>
                <Button variant="outline" className="w-full" onClick={() => {
                    toast("Downloaded 📁")
                }}>
                    Download <Download className="ml-2" size={15} />
                </Button>
            </Link>

            <hr className="w-full border-t border-zinc-800 my-2 md:my-3" />

            <div className="w-full flex gap-2">
                <Input
                    value="faizancurious@okicici"
                    readOnly
                    className="w-full text-center"
                />
                <Button variant="default" size={'icon'} className=" border border-neutral-500" onClick={() => {
                    navigator.clipboard.writeText("faizancurious@okicici")
                    toast("UPI ID copied to clipboard 📋")
                }}>
                    <Copy size={15} />
                </Button>
            </div>

        </div>
    )
}
