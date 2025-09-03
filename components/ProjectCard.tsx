import Image from "next/image";
import Link from "next/link";

type Props = {
    title: string;
    image: string;        
    href?: string;        
    tag?: string;        
    comingSoon?: boolean;
}