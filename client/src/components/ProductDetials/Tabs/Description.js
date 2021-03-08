import { useEffect, useRef } from "react";

const Description = ({ product }) => {
    const description = useRef('');

    useEffect(() => {
        description.current.innerHTML = product.description
    }, [product.description]);

    return (
        <div className="description description___style" ref={description}>
        </div>
    )
}
export default Description;