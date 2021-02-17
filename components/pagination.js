import React,{useState} from 'react'
import {Button, Icon} from "../styles/styles"
import {faCaretDown, faCaretLeft, faCaretRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useRouter} from "next/router"
function Pagination({data,page,size}) {
    const router = useRouter()
    //Varsayılan pagination dizisi...
    let [pageNumbers, setPageNumbers] = useState([1,2,3,4,5,6,7,8,9,10])
    // Pagination algoritması...
    let pageRange = (current,total) => {
        var list = [];
        var pageLimit = 10;
        var upperLimit, lowerLimit;
        var currentPage = lowerLimit = upperLimit = Math.min(current, total);
        for (var b = 1; b < pageLimit && b < total;) {
            if (lowerLimit > 1 ) {
                lowerLimit--; b++; 
            }
            if (b < pageLimit && upperLimit < total) {
                upperLimit++; b++; 
            }
        }
        // saydırılan limitlerden bir aralık oluşturup belirlen sayfa eşleştirdiğinde push işlemini gerçekleştir.
        for (var i = lowerLimit; i <= upperLimit; i++) {
            if (i == currentPage){
                list.push(i);
                router.push(`/passengers?page=${i-1}&size=${size}`)
            }
            else{
                list.push(i);
            }
        }
        // hook ile diziyi ata.
        setPageNumbers(list);
    }
    return (
        <>
        {/* bu bölüm altta yer alan kontrol sistemi. */}
        <div style={{ display:"flex", justifyContent: "center", marginBottom:20}}>
        {pageNumbers.map(e => {
            return(
                <Button disabled={e-1==page} onClick={() => pageRange((e),data["totalPages"])} style={{textAlign:"center"}}>{e}</Button>
            )
        })}
        </div>
            <div style={{display:"flex", justifyContent:"space-evenly", marginBottom:15}}>
                <Button disabled={page <= 0}  onClick={() => router.push(`/passengers?page=${page-1}&size=${size}`).then(() => window.scrollTo(0, 1000))}>
                    <Icon>
                        <FontAwesomeIcon icon={faCaretLeft} style={{width:20,marginRight:10}}/>Previous
                    </Icon>
                </Button>
                <Button onClick={() => router.push(`/passengers?page=${page}&size=${size+10}`)}>
                    <Icon>
                        <FontAwesomeIcon icon={faCaretDown} style={{width:30, marginRight:10}}/>Load
                    </Icon>
                </Button>
                <Button disabled={page+1 >= data.totalPages} onClick={() => router.push(`/passengers?page=${page+1}&size=${size}`)}>
                    <Icon>
                        <FontAwesomeIcon icon={faCaretRight} style={{width:20,marginRight:10}}/>Next
                    </Icon>
                </Button>
            </div>
        </>
    )
}

export default Pagination
