/**
 * Axe.ts
 *
 * Axe test script.
 * Fetch  a page and print the result.
 * <tr>
 *     <td> <a href="https://www.google.com">Google</a> </td>
 *     <td> <a href="https://www.github.com">Github</a> </td>
 * </tr>
 * <tr>
 */

interface FetchRequest {
    url: string
    options: object
}
async function fetchAsync (request: FetchRequest): Promise<string> {
    return await fetch(request.url, request.options)
        .then(async (response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }

            return await response.blob()
        })
        .then(async (response) => {
            return await response.text()
        })
}

async function main (): Promise<void> {
    const result = await fetchAsync({
        url: 'https://www.google.com',
        options: {}
    })
    console.log(result)
}

main().catch((error) => {
    console.error(error)
})