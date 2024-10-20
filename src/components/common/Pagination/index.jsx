import { Pagination } from 'react-bootstrap'
import { RightArrowIcon } from '@/assets/svgIcons/SvgIcon'
import "./CustomPagination.scss"

const CustomPagination = () => {
    return (
        <>
            <div className='customPagination'>
                <Pagination>
                    <Pagination.Prev disabled className='prevArrow'><RightArrowIcon /></Pagination.Prev>
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item>{6}</Pagination.Item>
                    <Pagination.Next active><RightArrowIcon /></Pagination.Next>
                </Pagination>
            </div>
        </>
    ) 
}

export default CustomPagination