import React from "react";
import bgImg from '../assets/bg.png';
import { useDebounce } from "../hook/useDebaunse";
import { useNavigate } from 'react-router-dom';
import { useSearch } from "../service/useSearch";

export const Hero = () => {

    const [input, setinput] = React.useState("");
    const debounceValue = useDebounce(input);

    const { data, isLoading } = useSearch(debounceValue);
    const navigate = useNavigate();

    const handleShow = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <section className="bg-[url('/src/assets/bg.png')] py-[250px] bg-cover">
            <div className="container">
                <div className="hero__block">
                    <div className="about_block flex items-center gap-[15px] justify-center mb-[45px]">
                        <a className="text-[16px] font-normal leading-[125%] text-white rounded-[50px] py-[16px] px-[21px] bg-slate-500" href="#">Discover</a>
                        <a className="text-[16px] font-normal leading-[125%] text-white rounded-[50px] py-[16px] px-[21px] bg-slate-500" href="#">Animation</a>
                        <a className="text-[16px] font-normal leading-[125%] text-white rounded-[50px] py-[16px] px-[21px] bg-slate-500" href="#">Branding</a>
                        <a className="text-[16px] font-normal leading-[125%] text-white rounded-[50px] py-[16px] px-[21px] bg-slate-500" href="#">Illustration</a>
                        <a className="text-[16px] font-normal leading-[125%] text-white rounded-[50px] py-[16px] px-[21px] bg-slate-500" href="#">Mobile</a>
                        <a className="text-[16px] font-normal leading-[125%] text-white rounded-[50px] py-[16px] px-[21px] bg-slate-500" href="#">Print</a>
                        <a className="text-[16px] font-normal leading-[125%] text-white rounded-[50px] py-[16px] px-[21px] bg-slate-500" href="#">Product Design</a>
                        <a className="text-[16px] font-normal leading-[125%] text-white rounded-[50px] py-[16px] px-[21px] bg-slate-500" href="#">Typography</a>
                        <a className="text-[16px] font-normal leading-[125%] text-white rounded-[50px] py-[16px] px-[21px] bg-slate-500" href="#">Web Design</a>
                    </div>

                    <div className="title_block mb-[41px]">
                        <h1 className="text-[32px] font-bold leading-[125%] text-white mb-[16px] text-center w-[411px] ml-auto mr-auto">
                            Explore the world’s leading design portfolios
                        </h1>
                        <p className="text-[16px] font-normal leading-[175%] text-white text-center w-[611px] ml-auto mr-auto">
                            Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the world’s best design and creative professionals.
                        </p>
                    </div>

                    <div className="inp_block">
                        <form className="ml-auto mr-auto w-[650px]" method="post">
                            <input className="text-[18px] bg-white text-[#6e6d7a] border border-gray-300 rounded-lg w-full  p-[10px] " value={input} onChange={(e) => setinput(e.target.value)} />
                            {isLoading ? (
                                <div>Loading...</div>
                            ) : (
                                <div style={{ boxShadow: "0px 0px 99px -9px rgba(161,137,161,1)" }}>
                                    {data.map((item) => (
                                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "20px", border: "1px solid #c8c6c6", gap: "20px", borderRadius: "10px", marginTop: "10px" }} key={item.id}>
                                            <img style={{ width: "150px" }} src={item.img} alt={item.title} />
                                            <div>
                                                <h3>{item.title}</h3>
                                                <strong style={{ color: '#01842d', fontSize: '16px', marginTop: '12px' }}>{item.price} sum</strong>
                                            </div>
                                            <button
                                                variant="contained"
                                                color="primary"
                                                onClick={() => handleShow(item.id)}
                                                style={{ marginLeft: '10px', alignSelf: 'center' }}
                                            >
                                                SHOW
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
