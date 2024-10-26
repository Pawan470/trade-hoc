"use client"
import { Container } from "react-bootstrap"
import { PlusIcon } from "@/assets/svgIcons/SvgIcon";
import CommonButton from "@/components/common/Button/CommonButton";
import CommonHead from "@/components/pages/Admin/CommonHead/CommonHead";
import AdminHeading from "@/components/pages/Admin/AdminHeading/AdminHeading";
import { useRouter } from "next/navigation";

const StrategyManager = () => {
    const router = useRouter()
    const entrylist = [
        { title: "Strategy 2", text: ">50% D/P" },
        { title: "Strategy 1", text: "Deviation Strict" },
    ];
    return (
        <>
            <div className="trade_manager">
                <Container>
                    <CommonHead />
                    <AdminHeading heading="Strategy Manager" className="pt-40 pb-60" centered />
                    <div className="trade_manager_btns">
                        <CommonButton onClick={() => router.push("/strategy-builder")} onlyIcon={<PlusIcon />} title="Add Strategy" className="w-100 me-2" />
                    </div>
                    <div className="trade_manager_entrylist">
                        {entrylist.map((item, index) => (
                            <div key={index} className="trade_manager_entrylist_box" onClick={() => router.push("/strategy-builder")}>
                                <h5>{item?.title}</h5>
                                <h5>{item?.text}</h5>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </>
    )
}

export default StrategyManager