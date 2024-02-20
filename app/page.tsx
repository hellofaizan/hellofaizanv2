"use client"

import { useToast } from "@/components/ui/use-toast"
import Home from "./(pages)/home/page"

export default function page() {
  const { toast } = useToast()

  return (
    <Home />
  )
}
