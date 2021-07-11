import snarkdown from 'snarkdown'

export const getMarkdownContents = async (fileName) => {
    const markdown = await fetch(`http://localhost:3000/static/content/${fileName}.md`)
    .then(res => res.text())
    .then(text => text)
    return snarkdown(markdown)
}