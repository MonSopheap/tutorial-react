import React, { useRef, useState, useEffect } from 'react';
import './DocStyle.scss'
import { motion } from "framer-motion"
import {
    NavLink, useLocation,
    Outlet,
    useNavigate
} from 'react-router-dom';
import SubMenu from './SubMenu';
// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson, BsFolder2Open, BsShieldLock } from "react-icons/bs";
import { HiOutlineDatabase, HiOutlineDocument } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { MdMenu, MdHighlightAlt } from "react-icons/md";
import { GiFishingHook } from "react-icons/gi";
import { SiBisecthosting } from "react-icons/si";
import { FiUsers } from "react-icons/fi";
import { PropsX } from '../../config/PropsX';



function MyDocuments() {
    const navigate = useNavigate()

    let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
    const [open, setOpen] = useState(isTabletMid ? false : true);
    const sidebarRef = useRef();
    const { pathname } = useLocation();

    useEffect(() => {
        if (isTabletMid) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }, [isTabletMid]);

    useEffect(() => {
        isTabletMid && setOpen(false);
    }, [pathname]);

    const Nav_animation = isTabletMid
        ? {
            open: {
                x: 0,
                width: "16rem",
                transition: {
                    damping: 40,
                },
            },
            closed: {
                x: -250,
                width: 0,
                transition: {
                    damping: 40,
                    delay: 0.15,
                },
            },
        }
        : {
            open: {
                width: "16rem",
                transition: {
                    damping: 40,
                },
            },
            closed: {
                width: "4rem",
                transition: {
                    damping: 40,
                },
            },
        };

    const menuList = [
        {
            name: "Documents",
            icon: BsFolder2Open,
            route: '',
            submenu: [
                {
                    name: "Refs",
                    icon: IoDocumentTextOutline,
                    route: '/documents/refs',
                },
                {
                    name: "Form",
                    icon: IoDocumentTextOutline,
                    route: '/documents/form',
                },
            ]
        },
        {
            name: "Higher Order (HOCs)",
            icon: MdHighlightAlt,
            route: '',
            submenu: [
                {
                    name: "Custom Hooks",
                    icon: IoDocumentTextOutline,
                    route: '/documents/hooks/custom-hooks',
                },
            ]
        },
        {
            name: "Hooks",
            icon: GiFishingHook,
            route: '',
            submenu: [
                {
                    name: "Custom Hooks",
                    icon: HiOutlineDocument,
                    route: '/documents/hooks/custom-hooks',
                },
            ]
        },
        {
            name: "build",
            icon: RiBuilding3Line,
            route: '',
            submenu: [
                {
                    name: "auth",
                    icon: FiUsers,
                    route: '/documents/user-list',
                    submenu: null,
                },
                {
                    name: "App check",
                    icon: BsShieldLock,
                    route: '/app-settings',
                    submenu: null,
                },
                {
                    name: "storage",
                    icon: BsFolder2Open,
                    route: '/storage',
                    submenu: null,
                },
                {
                    name: "hosting",
                    icon: SiBisecthosting,
                    route: '/hosting',
                    submenu: null,
                }
            ],
        },
    ];

    return (
        <>
            <section className='flex sidebar-left'>
                <div onClick={() => setOpen(false)}
                    className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 hover:cursor-pointer ${open ? "block" : "hidden"}`}>

                </div>
                <motion.div
                    ref={sidebarRef}
                    variants={Nav_animation}
                    initial={{ x: isTabletMid ? -250 : 0 }}
                    animate={open ? "open" : "closed"}
                    className='w-72 contain-sidebar bg-white text-gray shadow-xl z-[999] max-w-[16rem]
                overflow-hidden md:relative fixed h-screen'>

                    {/* Logo */}
                    <div className='flex items-center gap-2.5 font-medium border-b border-slate-200 py-3 mx-3'>
                        <img
                            src="https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png"
                            alt='...'
                            width={45}
                        />
                        <span className='text-xl whitespace-pre'>Documents</span>
                    </div>

                    {/* Menu */}
                    <div className="flex flex-col  h-full">
                        <ul className="whitespace-pre px-2.5 py-2 text-[0.9rem] flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
                            <li>
                                <NavLink to={"/documents/p"} className="link hover:bg-blue-100">
                                    <AiOutlineAppstore size={23} className="min-w-max" />
                                    All Apps
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/authentication"} className="link hover:bg-blue-100">
                                    <BsPerson size={23} className="min-w-max" />
                                    Authentication
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/stroage"} className="link hover:bg-blue-100">
                                    <HiOutlineDatabase size={23} className="min-w-max" />
                                    Stroage
                                </NavLink>
                            </li>

                            {(open || isTabletMid) && (
                                <div className="border-y py-5 border-slate-200">
                                    <small className="pl-3 text-slate-500 inline-block mb-2">
                                        Product categories
                                    </small>
                                    {menuList?.map((menu) => (
                                        <div key={menu.name} className="flex flex-col gap-1">
                                            <SubMenu data={menu} />
                                        </div>
                                    ))}
                                </div>
                            )}
                            <li>
                                <NavLink to={"/setting"} className="link hover:bg-blue-100">
                                    <SlSettings size={23} className="min-w-max" />
                                    Settings
                                </NavLink>
                            </li>
                        </ul>
                        {open && (
                            <div className="flex-1 text-sm z-50  max-h-44 my-auto  whitespace-pre   w-full  font-medium  ">
                                <div className="flex border-y border-slate-200 p-2 items-center justify-between">
                                    <div>
                                        <p>Spark</p>
                                        <small>No-cost $0/month</small>
                                    </div>
                                    <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl">
                                        Upgrade
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Control button */}
                    <motion.div
                        onClick={() => {
                            setOpen(!open);
                        }}
                        animate={
                            open
                                ? {
                                    x: 0,
                                    y: 0,
                                    rotate: 0,
                                }
                                : {
                                    x: -10,
                                    y: -200,
                                    rotate: 180,
                                }
                        }
                        transition={{ duration: 0 }}
                        className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
                    >
                        <IoIosArrowBack size={25} color="#6f6f6f" />
                    </motion.div>

                </motion.div>
                <div className="m-3 md:hidden hover:cursor-pointer" onClick={() => setOpen(true)}>
                    <MdMenu size={25} />
                </div>
                <main className="flex-1 mx-auto px-3 py-3">
                    <Outlet />
                </main>
            </section>
        </>
    );
}

export default MyDocuments;










{/* <Greet name="Mr A" heroName="Bat Man">
                    <p className='text-green'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Greet>
                <Greet name="Mr B" heroName="Butterfly Man">
                    <div className="box-border h-32 w-32 p-4 border-4 m-auto">
                    </div>
                </Greet>
                <Greet name="Mr C" heroName="Rat Man" /> */}

{/* <Welcome name="Mr A1" heroName="Rat Man A1" />
                <Welcome name="Mr B1" heroName="Rat Man B1" />
                <Welcome name="Mr C1" heroName="Rat Man C1" /> */}
{/* <Memo /> */ }
{/* <MyMessage /> */ }
{/* <MyCounter /> */ }
{/* <FunctionClick /> */ }
{/* <ClassClick /> */ }
{/* <EventBind /> */ }
{/* <ParentComponent /> */ }
{/* <ArrayList /> */ }
{/* <FormCompoent /> */ }
{/* <LifecycleA /> */ }
{/* <UpdatingLifecycleA /> */ }
{/* <FragmentDemo /> */ }
{/* <MyTable /> */ }
{/* <XParentComponent /> */ }
{/* <ParentMemoComponent /> */ }
{/* <RefsDemo /> */ }
{/* <FocusInput /> */ }
{/* <FRParentInput /> */ }
{/* <PortalsDemo /> */ }
{/* <MainErrorBoundary /> */ }
{/* <MainHigherOrder /> */ }
{/* <MainRenderProps /> */ }
{/* <ContextComponent /> */ }
{/* <HttpReact /> */ }
{/* <ReactHooks /> */ }