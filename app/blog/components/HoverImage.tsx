'use client'

import { useRef } from "react"
import { motion, useMotionValue } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

type Props = {
    title: string,
    img: string,
    link: string,
}

const FramerImage = motion(Image);

const HoverImage = ({title, img, link}: Props) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    // const rotateX = useMotionValue(0)
    // const rotateY = useMotionValue(0)
    // const scale = useMotionValue(1)

    const imgRef = useRef(null)

    const handleMouseEnter = (e: any) => {
        if (imgRef.current) {
            imgRef.current.style.display = 'inline-block'
            // x.set(e.pageX - imgRef.current.offsetLeft - imgRef.current.offsetWidth / 2)
            x.set(e.pageX)
            // determain the y position of the image based on the mouse position and the distance from the top or buttom of the page: TODO

            y.set(-23)
        }
        // rotateX.set(0)
        // rotateY.set(0)
        // scale.set(1.2)
        
    }

    const handleMouseLeave = (e: any) => {
        if (imgRef.current) {
            imgRef.current.style.display = 'none'
            // x.set(e.pageX - imgRef.current.offsetLeft - imgRef.current.offsetWidth / 2)
            x.set(0)
            y.set(0)
        }
        // rotateX.set(0)
        // rotateY.set(0)
        // scale.set(1)
    }

  return (
    <Link href={link} target="_blank"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    >
        <h3 className="capitalize text-xl font-semibold hover:underline">{title}</h3>
        <FramerImage ref={imgRef} src={img} alt={title} className="z-10 w-88 h-auto hidden absolute rounded-lg"
        width={123} height={123} 
        style={{x, y}} 
        initial={{opacity: 0, scale: 1}}
        whileInView={{opacity: 1, scale: 1.2, transition: {duration: 0.5}}}
        />
    </Link>
  )
}

export default HoverImage