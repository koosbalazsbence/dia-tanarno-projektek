"use client"

import * as React from "react"
import { Globe } from "lucide-react"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LanguageDropdown() {
    const [language, setLanguage] = React.useState("hu")

    return (
        <Select defaultValue={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-44">
                <Globe className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="en">English (EN)</SelectItem>
                <SelectItem value="hu">Magyar (HU)</SelectItem>
            </SelectContent>
        </Select>
    )
}