import React from 'react';

const input = {
    "products": [
        {
            "variants": ["souffle", "cake", "ice-cream"]
        },
        {
            "variants": ["cherry"]
        },
        {
            "variants": ["XL"]
        }
    ]
};

const input2 = {
    "products": [
        {
            "variants": ["souffle", "cake", "ice-cream"]
        },
        {
            "variants": ["choco"]
        },
        {
            "variants": ["XL"]
        }
    ]
};

const Test = () => {
    const store = input;
    const store2 = input2;

    // แปลง input เป็น output ผ่านการ map
    const output = [];
    const output2 = [];

    store.products[0].variants.forEach((variant1) => {
        store.products[1].variants.forEach((variant2) => {
            store.products[2].variants.forEach((variant3) => {
                const combination = `${variant1} ${variant2} ${variant3}`;
                output.push(combination);
            });
        });
    });

    store2.products[0].variants.forEach((variant1) => {
        store2.products[1].variants.forEach((variant2) => {
            store2.products[2].variants.forEach((variant3) => {
                const combination = `${variant1} ${variant2} ${variant3}`;
                output2.push(combination);
            });
        });
    });

    return (
        <div>
            <table className='border-2'>
                <thead className='border-2'>
                    <tr className='border-2'>
                        <th>FOOD 1</th>
                        <th >SIZE</th>
                    </tr>
                </thead>
                <tbody className='border-2'>
                    {store.products[0].variants.map((variant1) => (
                        store.products[1].variants.map((variant2) => (
                            store.products[2].variants.map((variant3, index) => (
                                <tr key={index}>
                                    <td>{`${variant1} ${variant2} `}</td>
                                    <td >{`${variant3}`}</td>
                                </tr>
                            ))
                        ))
                    ))}
                </tbody>
            </table>

            <table className='border-2 mt-5'>
                <thead className='border-2'>
                    <tr className='border-2'>
                        <th>FOOD 2</th>
                        <th >SIZE</th>
                    </tr>
                </thead>
                <tbody className='border-2'>
                    {store2.products[0].variants.map((variant1) => (
                        store2.products[1].variants.map((variant2) => (
                            store2.products[2].variants.map((variant3, index) => (
                                <tr key={index}>
                                    <td>{`${variant1} ${variant2} `}</td>
                                    <td >{`${variant3}`}</td>
                                </tr>
                            ))
                        ))
                    ))}
                </tbody>
            </table>

        </div>

    );
};

export default Test;
