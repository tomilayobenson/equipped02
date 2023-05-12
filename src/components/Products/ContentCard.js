import { useEffect, useState } from "react"
import { Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText, ListGroup, ListGroupItem } from "reactstrap"
const ContentCard = ({ productDetails: details }) => {
    const [qty, setQty] = useState(1);
    const [rentPrice, setRentPrice] = useState(0);
    const [daysNo, setDaysNo] = useState(() => details.minRentDays);
    const [weeksNo, setWeeksNo] = useState(0)
    const [monthsNo, setMonthsNo] = useState(0);

    const priceFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'CAD',
    });

    useEffect(() => {
        setRentPrice(() => ((daysNo * details.day) + (weeksNo * details.week) + (monthsNo * details.month)) * qty)
    }, [qty, daysNo, weeksNo, monthsNo])

    return (
        <Card
            color='light'
            outline
        >
            <CardHeader>
                <CardTitle tag="h5">
                    {details.title}
                </CardTitle>
            </CardHeader>
            <CardBody>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    {
                        (details.categories) &&
                        (details.categories.map((category, idx) =>
                            <span key={idx}>{idx !== 0 ? `, ${category.title}` : `${category.title}`}</span>
                        ))
                    }
                </CardSubtitle>

                <CardText>
                    {details.description}
                </CardText>
            </CardBody>
            <ListGroup flush>
                {details.forPurchase && <ListGroupItem>
                    <strong>Purchase Price:</strong> {priceFormatter.format(details.price / 100)} for quantity of {details.purchaseQuantity}
                </ListGroupItem>}
                {details.forRent && (
                    <>
                        <ListGroupItem>
                            <strong>Rent Price</strong> {priceFormatter.format(rentPrice / 100)}
                        </ListGroupItem>
                        <ListGroupItem>
                            <strong>No of Days:</strong>
                            <input
                                value={daysNo}
                                type="number"
                                min={0}
                                onChange={(e) => {
                                    if (weeksNo === 0 && monthsNo === 0 && e.target.value <= details.minRentDDays) {
                                        setDaysNo(details.minRentDDays)
                                    } else {
                                        setDaysNo(e.target.value)
                                    }
                                }}
                            />
                        </ListGroupItem>
                        <ListGroupItem>
                            <strong>No of Weeks:</strong>
                            <input
                                value={weeksNo}
                                type="number"
                                min={0}
                                onChange={(e) => setWeeksNo(e.target.value)}
                            />
                        </ListGroupItem>
                        <ListGroupItem>
                            <strong>No of Months:</strong>
                            <input
                                value={monthsNo}
                                type="number"
                                min={0}
                                onChange={(e) => setMonthsNo(e.target.value)}
                            />
                        </ListGroupItem>
                        <ListGroupItem>
                            <strong>Quantity:</strong>
                            <input
                                value={qty}
                                type="number"
                                min={1}
                                onChange={(e) => (e.target.value > details.rentQuantity) ? setQty(details.rentQuantity) : setQty(e.target.value)}
                            />
                        </ListGroupItem>
                    </>
                )}
            </ListGroup>
        </Card>
    )
}

export default ContentCard