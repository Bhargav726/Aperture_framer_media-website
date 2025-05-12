import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaStar, FaSyncAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image1 from '../assets/A1.avif';
import Image2 from '../assets/A2.avif';
import Image3 from '../assets/A3.avif';
import camera from '../assets/camera.png';
import G1 from '../assets/G1.avif';
import G2 from '../assets/G2.avif';
import hand from '../assets/hand1.avif';
import hand1 from '../assets/hand2.avif';
import eyes from '../assets/eyes.avif';
import Model from "../assets/Model.avif";
import Model1 from '../assets/Model1.avif';
const Benefits = () => {
    const [dividerX, setDividerX] = useState(50);
    const [isMovable, setIsMovable] = useState(false);
    const ref = useRef(null);
    const containerRef = useRef(null);
    const inView = useInView(ref, { threshold: 0.3 });
    const animation = useAnimation();
    // const [ref1, inView1] = useInView({
    //     triggerOnce: false,
    //     threshold: 0.3,
    // });

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring',
                    stiffness: 50,
                    damping: 12,
                    duration: 0.8,
                },
            });
        } else {
            animation.start({
                opacity: 1,
                y: 100, // Increased from 50 to 100 for a more dramatic slide
                transition: {
                    type: 'spring',
                    stiffness: 50,
                    damping: 15,
                    duration: 0.6,
                },
            });
        }
    }, [inView, animation]);

    const handleMove = (e) => {
        if (!isMovable) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percent = (x / rect.width) * 100;
        setDividerX(Math.min(100, Math.max(0, percent)));
    };

    const handleTouch = (e) => {
        if (!isMovable) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const percent = (x / rect.width) * 100;
        setDividerX(Math.min(100, Math.max(0, percent)));
    };

    const handleDoubleClick = () => {
        setIsMovable((prev) => !prev); // Toggle move mode on double click
    };

    useEffect(() => {
        if (inView) {
            animation.start("visible");
        }
    }, [inView, animation]);

    const imageVariants = (x, y, rotate) => ({
        hidden: { opacity: 1, x, y, rotate, scale: 0.8 },
        visible: {
            opacity: 1,
            x,
            y,
            rotate,
            scale: 1,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    });

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Transform scroll progress to scale value (1.2 → 1)
    const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
    return (

        <>
            <div className='pt-40'>
                <div className="py-4 px-2 text-center relative  ml-40">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium mb-2 inline-block">
                        Benefits
                    </span>
                    <h2 className="text-5xl font-medium my-6">Why work with me?</h2>
                    <p className="text-gray-500 max-w-xl mx-auto mb-10 text-2xl">
                        Great photography is more than a service—it is an <br />
                        experience built on collaboration, trust, and creativity.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        <div className="bg-gray-100 p-6 rounded-2xl text-center overflow-hidden">
                            <div ref={ref} className="relative w-full h-80 flex items-center justify-center mb-6">
                                {/* Corner Images */}
                                <motion.div
                                    className="absolute w-32 h-40 bg-white p-2 pb-6 rounded-xl shadow-lg z-10"
                                    variants={imageVariants(-80, -30, -10)}
                                    initial="hidden"
                                    animate={animation}
                                >
                                    <img src={Image1} alt="Top Left" className="w-full h-full object-cover rounded-md" />
                                </motion.div>

                                <motion.div
                                    className="absolute w-32 h-40 bg-white p-2 pb-6 rounded-xl shadow-lg z-20"
                                    variants={imageVariants(100, -30, 20)}
                                    initial="hidden"
                                    animate={animation}
                                >
                                    <img src={Image2} alt="Top Right" className="w-full h-full object-cover rounded-md" />
                                </motion.div>

                                <motion.div
                                    className="absolute w-32 h-40 bg-white p-2 pb-6 rounded-xl shadow-lg z-30"
                                    variants={imageVariants(-80, 60, -10)}
                                    initial="hidden"
                                    animate={animation}
                                >
                                    <img src={Image3} alt="Bottom Left" className="w-full h-full object-cover rounded-md" />
                                </motion.div>

                                <motion.div
                                    className="absolute w-32 h-40 bg-white p-2 pb-6 rounded-xl shadow-lg z-40"
                                    variants={imageVariants(80, 60, 10)}
                                    initial="hidden"
                                    animate={animation}
                                >
                                    <img src={Model1} alt="Bottom Right" className="w-full h-full object-cover rounded-md" />
                                </motion.div>

                                {/* Center Image */}
                                <motion.div
                                    className="z-50 w-36 h-44 bg-white p-2 pb-6 rounded-xl shadow-2xl"
                                    initial={{ scale: 0.9, opacity: 1 }}
                                    animate={animation}
                                    variants={{
                                        visible: {
                                            scale: 1,
                                            opacity: 1,
                                            transition: { duration: 0.6, ease: 'easeOut' },
                                        },
                                    }}
                                >
                                    <img src={Model} alt="Center" className="w-full h-full object-cover rounded-md" />
                                </motion.div>
                            </div>

                            {/* Caption */}
                            <h3 className="text-4xl font-medium">Over 10+ years<br />experience</h3>
                        </div>

                        <div className="bg-gray-200 p-4 rounded-2xl text-left">
                            <h3 className="text-3xl font-semibold pb-5 leading-tight">
                                Shot with the<br />
                                best camera gear
                            </h3>

                            <motion.img
                                ref={ref}
                                src={camera}
                                alt="Camera Gear"
                                className="rounded-xl w-full object-contain h-[500px]"
                                initial={{ opacity: 1, y: 50 }}
                                animate={animation}
                            />
                        </div>

                        <div className="rounded-2xl text-left bg-gray-200 text-black relative">
                            <div
                                ref={containerRef}
                                onMouseMove={handleMove}
                                onTouchMove={handleTouch}
                                onDoubleClick={handleDoubleClick}
                                className={`relative w-full h-full overflow-hidden rounded-xl ${isMovable ? 'cursor-ew-resize' : 'cursor-pointer'
                                    }`}
                            >
                                {/* After Image */}
                                <motion.img
                                    src={G1}
                                    alt="After"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    initial={{ scale: 1.1 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.8, ease: 'easeOut' }}
                                    viewport={{ once: false, amount: 0.3 }}
                                />

                                {/* Before Image Clipped */}
                                <motion.div
                                    className="absolute inset-0 h-full overflow-hidden"
                                    style={{ width: `${dividerX}%` }}
                                >
                                    <motion.img
                                        src={G2}
                                        alt="Before"
                                        className="w-full h-full object-cover"
                                        initial={{ scale: 1.1 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.8, ease: 'easeOut' }}
                                        viewport={{ once: false, amount: 0.3 }}
                                    />
                                </motion.div>

                                {/* Divider Handle */}
                                <div
                                    className="absolute top-0 bottom-0 w-1 bg-white opacity-80 z-20"
                                    style={{ left: `${dividerX}%`, transform: 'translateX(-50%)' }}
                                >
                                    <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 text-white text-2xl">
                                        <IoIosArrowBack />
                                    </div>
                                    <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 text-white text-2xl">
                                        <IoIosArrowForward />
                                    </div>
                                </div>
                            </div>

                            {/* Bottom-Centered Text */}
                            <h3 className="absolute bottom-6 left-36 transform -translate-x-1/2 text-white text-xl md:text-4xl font-semibold z-10 text-left bg-opacity-50 px-4 py-2 rounded">
                                Professional<br />
                                editing included
                            </h3>
                        </div>
                        <div className="bg-gray-200 rounded-2xl py-8 flex flex-col justify-between shadow-sm row-span-2">
                            <img src={hand} alt="Hands" className="rounded-xl object-cover w-full h-auto" />
                            <img src={hand1} alt="Hands" className="rounded-xl object-cover w-full h-auto" />
                            <h3 className="text-2xl font-semibold text-black leading-snug">
                                Seamless client experience
                            </h3>
                        </div>
                        <div
                            ref={ref}
                            className="bg-gray-200 rounded-2xl shadow-sm grid grid-cols-1 md:grid-cols-2 items-center gap-6 overflow-hidden col-span-2"
                        >
                            {/* Text Content */}
                            <div className="text-left">
                                <h3 className="text-3xl md:text-4xl font-semibold text-black leading-tight ml-8 mb-8">
                                    Tailored to<br /> your vision
                                </h3>
                            </div>

                            {/* Animated Image with Zoom Effect */}
                            <motion.img
                                src={eyes}
                                alt="Vision"
                                style={{
                                    scale,
                                    WebkitMaskImage:
                                        'linear-gradient(to left, black 40%, rgba(0, 0, 0, 0.5) 60%, transparent 100%)',
                                    maskImage:
                                        'linear-gradient(to left, black 40%, rgba(0, 0, 0, 0.5) 60%, transparent 100%)',
                                    WebkitMaskRepeat: 'no-repeat',
                                    maskRepeat: 'no-repeat',
                                    WebkitMaskSize: '100% 100%',
                                    maskSize: '100% 100%',
                                }}
                                className="w-full max-w-md h-full object-cover rounded-xl"
                            />
                        </div>
                        <div className="bg-gray-200 rounded-2xl p-5 shadow-sm flex justify-between">
                            <div>
                                <div className="flex items-center mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="text-orange-500 mr-1 " />
                                    ))}
                                </div>
                                <h3 className="text-5xl font-bold text-black mb-2 text-left">524</h3>
                                <p className="text-gray-500 text-lg">satisfied clients</p>
                            </div>
                            <div className="flex justify-center space-x-1 pt-10">
                                <img src="https://randomuser.me/api/portraits/women/1.jpg" className="w-10 h-10 rounded-full z-30" />
                                <img src="https://randomuser.me/api/portraits/men/2.jpg" className="w-10 h-10 rounded-full z-20" />
                                <img src="https://randomuser.me/api/portraits/women/3.jpg" className="w-10 h-10 rounded-full z-10" />
                            </div>
                        </div>
                        <div className="bg-gray-200 flex items-center gap-2 p-5 rounded-2xl">
                            <FaSyncAlt className="text-black text-lg" />
                            <span className="text-xl font-semibold text-black">7 day turnaround</span>
                            <img src={G1} alt="Clock" className="w-full rounded-xl object-cover h-32 mt-auto" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Benefits;