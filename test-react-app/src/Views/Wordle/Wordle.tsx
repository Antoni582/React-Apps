import { useEffect, useState } from "react"

const WordAPI = 'https://api.datamuse.com'

const Wordle = () => {
    const [word, setWord] = useState<string>('')
    useEffect(() => {
        const fetchWord = async () => {
            try {

                const res = await fetch(WordAPI + '/words?rel_jja=wordle')
                const data = await res.json()
                console.log(data)

            }
            catch (error) {

            }
            finally {

            }
        }
        fetchWord()
    }, [])



    return (<h1>Wordle Page</h1>)
}

export default Wordle