"use client"
import CustomPagination from "@/components/common/Pagination"
import CustomSelect from "@/components/common/Select"
import CustomBreadcrumb from "@/components/common/Breadcrumb/CustomBreadcrumb"
import { Accordion, Col, Container, Row } from "react-bootstrap"
import CommonSearch from "@/components/common/Search/CommonSearch"
import { CartIcon } from "@/assets/svgIcons/SvgIcon"
import productimg from "../../../assets/images/product_img.png"
import Image from "next/image"
import "./Market.scss"

const Market = () => {
 

    return (
        <>
            <div className="market py-100">
                <Container>
                    <section className="market_inner">
                        <div className="market_heading text-center">
                            <h1>TradeReply Marketplace</h1>
                        </div>
                        <div className="market_shopcart d-flex align-items-center justify-content-between justify-content-md-center">
                            <div className="market_shopcart_selectshop">
                                <CustomSelect
                                    options={options}
                                    placeholder="Shop"
                                />
                            </div>
                            <div className="market_shopcart_btn order-md-last">
                                <button type="button" className="d-flex align-items-center">
                                    <CartIcon />
                                    Cart (0)
                                </button>
                            </div>
                            <div className="education_search">
                                <CommonSearch
                                    placeholder="Search for terms"
                                    icon={true}
                                />
                            </div>
                        </div>
                        <div className="market_inner_heading">
                            <h4>TradeReply Courses</h4>
                            <CustomBreadcrumb
                                to="#"
                                linkname="Shop"
                                pagename="Courses"
                            />
                        </div>
                    </section>

                    <section className="market_products">
                        <div className="market_products_row">
                            <div className="market_products_filtercol">
                                <div className="market_products_filter">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>asset type</Accordion.Header>
                                            <Accordion.Body>
                                                <button type="button">Stocks</button>
                                                <button type="button">Cryptocurrency</button>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Rating</Accordion.Header>
                                            <Accordion.Body>
                                                <button type="button">Stocks</button>
                                                <button type="button">Cryptocurrency</button>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Format</Accordion.Header>
                                            <Accordion.Body>
                                                <button type="button">Stocks</button>
                                                <button type="button">Cryptocurrency</button>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>Skill Level</Accordion.Header>
                                            <Accordion.Body>
                                                <button type="button">Stocks</button>
                                                <button type="button">Cryptocurrency</button>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>Price Range</Accordion.Header>
                                            <Accordion.Body>
                                                <button type="button">Stocks</button>
                                                <button type="button">Cryptocurrency</button>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                            <section className="market_products_productcol">
                                <div className="d-flex align-items-md-center justify-content-between">
                                    <div className="market_products_count">
                                        <p className="blue_text">1-20 of 20</p>
                                    </div>
                                    <div className="d-lg-flex justify-content-end">
                                        <div className="market_products_pagination ms-lg-5 mb-3 mb-lg-0 order-lg-last">
                                            <CustomPagination />
                                        </div>
                                        <div className="market_products_sort d-flex align-items-center ">
                                            <h5>Sort by:</h5>
                                            <CustomSelect
                                                options={shortoptions}
                                                placeholder="Most popular"
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className="market_products_product">
                                    <div className="market_products_product_row">
                                        <Row className="gx-xl-5">
                                            {marketproducts?.map((item, index) => {
                                                return (
                                                    <Col key={index} xl={4} md={6} xs={6}>
                                                        <div className="market_products_card">
                                                            <div className="market_products_card_img">
                                                                <Image src={item.img} alt="img" />
                                                            </div>
                                                            <div className="market_products_card_content">
                                                                <h4 className="my-2 py-1">{item.title}</h4>
                                                                <h4>{item.price}</h4>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                )
                                            })}
                                        </Row>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                </Container>
            </div>
        </>
    )
}


const options = [
    {
        value: "Shop",
        label: "Shop"
    },
    {
        value: "Buy",
        label: "Buy"
    },
    {
        value: "Sell",
        label: "Sell"
    }
];
const shortoptions = [
    {
        value: "Most popular",
        label: "Most popular"
    },
    {
        value: "Newest Items",
        label: "Newest Items"
    },
    {
        value: "Highest to Lowest Price",
        label: "Highest to Lowest Price"
    },
    {
        value: "Lowest to Highest Price",
        label: "Lowest to Highest Price"
    },
];
const marketproducts = [
    {
        img: productimg,
        title: "Mastering the stock market",
        price: "$11.95"
    },
    {
        img: productimg,
        title: "Mastering the stock market",
        price: "$11.95"
    },
    {
        img: productimg,
        title: "Mastering the stock market",
        price: "$11.95"
    },
    {
        img: productimg,
        title: "Mastering the stock market",
        price: "$11.95"
    },
    {
        img: productimg,
        title: "Mastering the stock market",
        price: "$11.95"
    },
    {
        img: productimg,
        title: "Mastering the stock market",
        price: "$11.95"
    },
]

export default Market