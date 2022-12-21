import type InstanceData = { header: string, length: number }
export type DataInstance = { header: string, data: Array<InstanceData> }

export function simulateFetchAPI() {
    return new Promise((resolve: (result: Array<DataInstance>) => void) => {
        setTimeout(() => {
            const result: Array<DataInstance> = [
                {
                    header: new Date().toISOString(),
                    data: [{ header: "Batman", length: 1 }, { header: "Superman", length: 2 }, { header: "Green Lantern", length: 3 }]
                },
                {
                    header: new Date().toISOString(),
                    data: [{ header: "Wonder Woman", length: 4 }, { header: "Aquaman", length: 5 }, { header: "Cyborg", length: 6 }]
                },
                {
                    header: new Date().toISOString(),
                    data: [{ header: "Green Arrow", length: 7 }, { header: "Hawkman", length: 8 }, { header: "Nightwing", length: 9 }]
                },
            ]
        resolve(result)
    }, 5000)
})
}