import Footer from "@/components/Footer";
import MainHeader from "@/components/MainHeader";
import TopHeader from "@/components/TopHeader";



export default function Layout({children}:{children:React.ReactNode}){
    return (
        <div className="">
            <TopHeader></TopHeader>
            <MainHeader></MainHeader>
            {children}
            <Footer></Footer>
        </div>
    )
}