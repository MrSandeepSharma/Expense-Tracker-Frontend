import { FaRegTrashCan } from "react-icons/fa6";

function CardList({ items=[], onClick=()=> {} }) {

    const reverseData = [...items].reverse();

  return (
    <ul className="flex flex-col gap-2 my-8">
        {
            reverseData.map(item => (
                <li 
                    className={`flex justify-between py-3 px-3 rounded-lg border-2 border-l-4
                        ${
                            item.category === "Savings" 
                                ? "border-l-green-800"
                                : item.category === "Investment" 
                                ? "border-l-blue-700"
                                : "border-l-red-600"
                        }
                    `}
                    key={item._id}>
                    <p className="font-xl">{item.name}-{item.amount}</p>
                    <button data-id={item._id} onClick={onClick}><FaRegTrashCan /></button>
                </li>
            ))
        }
    </ul>
  )
}

export default CardList
