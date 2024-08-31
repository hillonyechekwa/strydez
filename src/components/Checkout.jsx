
// const publicKey = "pk_your_public_key_here"
// const amount = 1000000 // Remember, set in kobo!
// const [email, setEmail] = useState("")
// const [name, setName] = useState("")
// const [phone, setPhone] = useState("")

const Checkout = () => {
    return (
        <div>
            <div>
                <div>
                    <div></div>
                    <img
                        className="item-image"
                        src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                        alt="product"
                    />
                    <div className="item-details">
                        <p className="item-details__title">Coconut Oil</p>
                        <p className="item-details__amount">NGN{amount / 100}</p>
                    </div>
                </div>
                <div className="checkout">
                    <div className="checkout-form">
                        <div className="checkout-field">
                            <label>Name</label>
                            <input />
                        </div>
                        <div className="checkout-field">
                            <label>Email</label>
                            <input />
                        </div>
                        <div className="checkout-field">
                            <label>Phone</label>
                            <input />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout