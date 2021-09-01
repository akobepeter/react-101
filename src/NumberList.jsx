

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map(function(number) {
        return(
            <li style={{listStyle: 'none',}} key={number.index}>{number *2}</li>
        )
    })
    return (
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default NumberList
