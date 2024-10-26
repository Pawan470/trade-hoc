"use client"

import { Container } from "react-bootstrap"
import { PlusIcon, SettingIcon, SolidRedArrowIcon } from "@/assets/svgIcons/SvgIcon"
import CommonButton from "@/components/common/Button/CommonButton"
import AdminHeading from "@/components/pages/Admin/AdminHeading/AdminHeading"
import CommonHead from "@/components/pages/Admin/CommonHead/CommonHead"
import "./TradeManager.scss"
import { useRouter } from "next/navigation"

const TradeManager = () => {
    const router = useRouter()
    const entrylist = [
        { title: "Entry Date Ticker", text: "Draft 4" },
        { title: "Entry Date Ticker", text: "Draft 3" },
        { title: "Entry Date Ticker", text: "Draft 2" },
        { title: "Entry Date Ticker", text: "Draft 1" },
    ];

    const entrydata = [
        { tarde: "Trade 2", entrydate: "Entry Date", ticker: "Ticker", entryprice: "Entry Price", exitprice: "Exit Price", position: "Position", pl: "P&L$" },
        { tarde: "Trade 1", entrydate: "Entry Date", ticker: "Ticker", entryprice: "Entry Price", exitprice: "Exit Price", position: "Position", pl: "P&L$" },
    ];
    return (
        <>
            <div className="trade_manager">
                <Container>
                    <CommonHead />
                    <div className="trade_head justify-content-center py-40">
                        <AdminHeading heading="Trade Manager" className="" centered />
                        <button className="setting_btn" type="button"><SettingIcon /></button>
                    </div>
                    <div className="trade_manager_btns d-sm-flex">
                        <CommonButton onClick={() => router.push("/trade-builder")} title="Manual Trade" onlyIcon={<PlusIcon />} className="w-50 mb-3 mb-sm-0 me-sm-2" />
                        <CommonButton onClick={() => router.push("/trade-importer")} title="Import Trade" onlyIcon={<PlusIcon />} className="w-50 ms-sm-2" />
                    </div>
                    <div className="trade_manager_entrylist">
                        {entrylist.map((item, index) => (
                            <div key={index} className="trade_manager_entrylist_box" onClick={() => router.push("/trade-builder")}>
                                <h5>{item?.title}</h5>
                                <h5>{item?.text}</h5>
                            </div>
                        ))}
                    </div>
                    <div className="trade_manager_trade_entry">
                        {entrydata.map((item , index) => (
                            <div key={index} className={`trade_manager_trade_entry_box Redgrandient ${index === 1 ? "greengrandient" : ""}`} onClick={() => router.push("/trade-builder")}>
                                <span className="solidArrow red_arrow me-3"><SolidRedArrowIcon /></span>
                                <div className="d-flex trade_manager_trade_entry_box_headtext align-items-center w-100 justify-content-between">
                                    <h5>{item?.tarde}</h5>
                                    <h5>{item?.entrydate}</h5>
                                    <h5>{item?.exiddate}</h5>
                                    <h5>{item?.ticker}</h5>
                                    <h5>{item?.entryprice}</h5>
                                    <h5>{item?.exitprice}</h5>
                                    <h5>{item?.position}</h5>
                                    <h5>{item?.pl}</h5>
                                </div>
                                <span className="solidArrow red_arrow endArrow ms-3"><SolidRedArrowIcon /></span>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </>
    )
}

export default TradeManager