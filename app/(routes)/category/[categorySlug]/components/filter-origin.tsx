"use client"

import { useGetProductField } from "@/api/getProductField"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

type FilterOriginProps = {
    setFilterOrigin: (origin: string) => void
}

const FilterOrigin = (props: FilterOriginProps) => {
    const { setFilterOrigin } = props
    const { result, loading } = useGetProductField()
    console.log("origins:", result)

    return (
        <div className="my-5">
            <p className="mb-3 font-bold">Origen</p>
            {loading && result.length === 0 && (
                <p>Cargando origen...</p>
            )}
            <RadioGroup onValueChange={(value) => setFilterOrigin(value)}>
                {result.length > 0 && result.map((origin) => (
                    <div key={origin} className="flex items-center space-x-2">
                        <RadioGroupItem value={origin} id={origin} />
                        <Label htmlFor={origin}>{origin}</Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}

export default FilterOrigin