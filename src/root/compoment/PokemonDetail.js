import {useParams} from 'react-router-dom'

const PokeDetail = () => {
const {id} = useParams();
const {type} = useParams();
const {desc} = useParams();
console.log(id)
return (
    <>
        <h1>{id}</h1>
        <p>{type}</p>
        <p>{desc}</p>
    </>
)

}

export default PokeDetail;