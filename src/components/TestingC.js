import React from 'react';
const TestingC = (props) => {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            img: "https://www.gstatic.com/webp/gallery/5.webp"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img: "https://www.gstatic.com/webp/gallery/4.webp"
        }
    ]

    return (


        items.map((item, i) => <Item key={i} item={item} />)


    )
}

function Item(props) {
    return (
        <>

            <img style={{ width: '100em', height: '30em', marginLeft: '40px', marginTop: '20px' }} src={props.item.img} />
            <p style={{ position: 'overflow', margin: '10px 20px 30px 40px' }}>{props.item.description}</p>
            <p>{props.item.name}</p>
        </>
    )
}
export default TestingC;

