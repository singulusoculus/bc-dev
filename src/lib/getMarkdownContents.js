import snarkdown from 'snarkdown'

export const getMarkdownContents = async (fileName, fetch) => {
    const url = `/static/content/${fileName}.md`
    const markdown = await fetch(url)
    // .then(res => res.text())
    // .then(text => text)
    const text = await markdown.text()

    return await snarkdown(text)
}


export const getFileContents = async (fileNames, skFetch, host) => {
    let fileContents = {}
    for (let i = 0; i < fileNames.length; i++) {
        const url = `http://${host}/static/content/${fileNames[i]}.md`
        const res = await skFetch(url)
        const text = await res.text()
        const md = await snarkdown(text)
        fileContents[fileNames[i]] = md
    }
    return fileContents
}