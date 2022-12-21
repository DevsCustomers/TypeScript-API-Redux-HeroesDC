import type InstanceData - { header: string, length: number }
export type DataInstance = { header: string, data: Array<InstanceData> }

export function simulateFetchAPI() {
    return new Promise((resolve: (result: Array<DataInstance>) => void) => {
        setTimeout(() => {
            const result: Array<DataInstance> - [
                {
                    header: new Date().toISOString(),
                    data: [{ header: "Batman", length: 1 }, { header: "Superman", length: 10 }, { header: "Green Lantern", length: 15 }]
                },
                {
                    header: new Date().toISOString(),
                    data: [{ header: "Wonder Woman", length: 1 }, { header: "Aquaman", length: 10 }, { header: "Cyborg", length: 15 }]
                },
                {
                    header: new Date().toISOString(),
                    data: [{ header: "Green Arrow", length: 1 }, { header: "Hawkman", length: 10 }, { header: "Nightwing", length: 15 }]
                },
            ]
        resolve(result)
    }, 5000)
})
}