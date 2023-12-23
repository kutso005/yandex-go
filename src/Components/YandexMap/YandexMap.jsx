import React, { useState } from "react";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Box,
  CssBaseline,
  SwipeableDrawer,
  Typography,
} from "@material-ui/core";
import { Global } from "@emotion/react";

import Map from "../Map/Map";
import PlusOne from "../../Pages/PlusOpen/PlusOne";
import History from "../../Pages/History/History";

import { AiOutlineArrowRight } from "react-icons/ai";
import { RiMapPin2Fill } from "react-icons/ri";
import { AiOutlineSafety } from "react-icons/ai";
import { SlPresent } from "react-icons/sl";
import { PiMoney } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { LuLogIn, LuSearch } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";
import { CgShapeCircle } from "react-icons/cg";
import { FaLocationArrow } from "react-icons/fa";

import box from "./../../image/box.png";
import bus from "./../../image/bus.png";
import truck from "./../../image/truck.png";
import scale from "./../../image/ynd.png";
import love from "./../../image/love1.png";
import put from "./../../image/put.png";
import orig from "./../../image/orig.jfif";

export default function YandexMap() {
  const [isHovered, setIsHovered] = useState(false);
  const [menuBurger, setMenuBurger] = useState(false);
  const [isModalOpenOne, setIsModalOpenOne] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isActiveOne, setIsActiveOne] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] =
    useState(/* Проверка, зарегистрирован ли пользователь */);

  const handleDivClick = (text) => {
    setSelectedValue(text);
    setInputValue(text);
    setIsActiveOne(true);
  };

  const toggleDrawertwo = () => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsModalOpenOne(!isModalOpenOne);
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const navigate = useNavigate();
  const adrees = [
    {
      text: "Проспект Манас 64/1",
      label: "Бишкек",
    },
    {
      text: "Гатчинский переулок 28",
      label: "Бишкек",
    },
    {
      text: "проспект чуй 218",
      label: "Бишкек",
    },
    {
      text: "Проспект Манас ",
      label: "Бишкек",
    },
    {
      text: "Проспект Манас 64/1",
      label: "Бишкек",
    },
    {
      text: "Проспект Манас 64/1",
      label: "Бишкек",
    },
  ];
  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  const closeMenu = () => {
    setMenuBurger(false);
  };
  const openModalOne = () => {
    setIsModalOpenOne(true);
  };
  const drawerBleeding = 52;
  const token = localStorage.getItem("token_block");
  return (
    <div className="yandex-map-container">
      <div className="header">
        <div className="container">
          <div className="header_all">
            <div className="nomads">
              <form className="burger">
                <label
                  htmlFor="toggle"
                  className="hamburger"
                  id="toggle"
                  checked={menuBurger}
                  onClick={() => setMenuBurger(!menuBurger)}
                >
                  <div className="top-bun"></div>
                  <div className="meat"></div>
                  <div className="bottom-bun"></div>
                </label>
                <div>
                  <label> Ваш Адресс </label>
                  <p>пр.Манас64</p>
                </div>
                <div className="orig">
                  <img className="image" src={orig} alt="" />
                </div>
              </form>
            </div>
            <div className="container">
              {menuBurger && (
                <div className="nav_block">
                  <div className="login">
                    {token ? (
                      <div onClick={() => navigate(`/profile`)}>
                        <h3>{`${localStorage.getItem(
                          "first_name"
                        )} ${localStorage.getItem("name")}`}</h3>
                        <p>{localStorage.getItem("phone")}</p>
                      </div>
                    ) : (
                      <div
                        onClick={() => navigate(`/authorization`)}
                        className="authorization"
                      >
                        <div>
                          <h3>Войти</h3>
                          <p>Регистрация</p>
                        </div>
                        <div>
                          <LuLogIn fontSize={"25px"} />
                        </div>
                      </div>
                    )}
                    <RxCross1 fontSize={"25px"} onClick={closeMenu} />
                  </div>
                  <NavLink className="login_all" to="/payment-method">
                    <div>
                      <p className="oplata">Способ оплаты</p>
                      <label className="nalich">Наличные</label>
                    </div>
                    <PiMoney color={"green"} fontSize={"27px"} />
                  </NavLink>
                  <NavLink className="login_all_yelo" to="/add-card">
                    <p>Добавить карту</p>
                  </NavLink>

                  <PlusOne />
                  <a
                    target="_blank"
                    style={{ textDecoration: "none", color: "black" }}
                    className="login_all"
                    href="https://pro.yandex/signup/kg-ru/userapp?utm_source=userapp&utm_campaign=userapp_menu"
                  >
                    <p>Стать водителем</p>
                  </a>
                  <NavLink to="/family-account" className="login_all">
                    <p>Семейный аккаунт</p>
                  </NavLink>
                  <NavLink to="/safety" className="login_all">
                    <div>
                      <p>Безопасность</p>
                    </div>
                    <AiOutlineSafety fontSize={"25px"} />
                  </NavLink>
                  <NavLink className="login_all" to="/discount">
                    <div>
                      <p>Скидки и подарки</p>
                      <label className="nalich">Ввести промокод</label>
                    </div>
                    <SlPresent fontSize={"25px"} color={"yellow"} />
                  </NavLink>
                  <NavLink to="/my-adress" className="login_all">
                    <p>Мои адреса</p>
                  </NavLink>

                  <History />
                  <NavLink to="/settings" className="login_all">
                    <p>Настройка</p>
                  </NavLink>
                  <NavLink to="/support-service" className="login_all">
                    <p>Служба поддержки</p>
                  </NavLink>
                  <NavLink to="/information" className="login_all">
                    <p>Информация</p>
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Map />

      <div
        className={`order_all ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <SwipeableBottomSheet
          overflowHeight={350}
          style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
        >
          <div className=" container">
            <div>
              <div className="loga"></div>

              <div className="Where_we_go">
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  onClick={openModalOne}
                >
                  <img style={{ width: "50px" }} src={scale} alt="" />
                  <p>Куда едем?</p>
                </div>
                <AiOutlineArrowRight onClick={() => navigate(`/order`)} />
              </div>
              <div className="grid">
                <div className="Where_we" onClick={() => navigate(`/order`)}>
                  <div>
                    <p>Гатчинский переулок 28</p>
                    <label>23 мин</label>
                  </div>
                  <div className="fill" onClick={() => navigate(`/order`)}>
                    <img style={{ width: "50px" }} src={scale} alt="" />
                    <RiMapPin2Fill style={{ fontSize: "30px" }} />
                  </div>
                </div>
                <div className="Where_we">
                  <div>
                    <p>Гатчинский переулок 28</p>
                    <label>23 мин</label>
                  </div>
                  <div className="fill">
                    <img style={{ width: "50px" }} src={scale} alt="" />
                    <RiMapPin2Fill style={{ fontSize: "30px" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="all_box">
              <div className="box">
                <div>
                  <img src={box} alt="" />
                  <p>Доставка</p>
                </div>
                <div>
                  <img src={bus} alt="" />
                  <p>Грузовой</p>
                </div>
                <div>
                  <img src={truck} alt="" />
                  <p>Транспорт</p>
                </div>
              </div>
            </div>
            <div>
              <h3 style={{ marginTop: "12px", marginBottom: "5px" }}>
                Хорошей поездки
              </h3>
              <div className="shedryi_one">
                <div>
                  <p>Смотрети как быстро</p>
                  <label htmlFor="">Ваша посылка доедет к получателю</label>
                </div>
                <div className="put">
                  <img src={put} alt="" />
                </div>
              </div>
              <h3 style={{ marginTop: "12px", marginBottom: "5px" }}>
                Щедрый ноябрь в Yandex Go
              </h3>
              <div className="shedryi-top">
                <div className="shedryi">
                  <div>
                    <p>Как это работает</p>
                  </div>
                  <div className="put">
                    <img src={love} alt="" />
                  </div>
                </div>
                <div onClick={() => navigate(`/salam`)} className="shedryi">
                  <div className="">
                    <p>кому мы помогаем </p>
                  </div>
                  <div className="put">
                    <img src={love} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwipeableBottomSheet>
      </div>
      <div>
        <CssBaseline />
        <Global
          styles={{
            body: {},
            ".MuiPaper-root.MuiPaper-root": {
              height: `80%`,
              borderTopLeftRadius: `20px`,
              borderTopRightRadius: `20px`,
              overflow: "visible",
            },
          }}
        />
        <SwipeableDrawer
          anchor="bottom"
          open={isModalOpenOne}
          onClose={toggleDrawertwo()}
          onOpen={toggleDrawertwo()}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: -drawerBleeding,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              visibility: "visible",
              right: 0,
              left: 0,
              backgroundColor: "red",
            }}
          >
            <Box
              sx={{
                width: 30,
                height: 6,
                bgcolor: "grey.300",
                borderRadius: "3px",
                position: "absolute",
                top: 8,
                left: "calc(90% - 75px)",
              }}
            />
            <Typography sx={{ p: 2, color: "text.secondary" }}></Typography>
          </Box>
          <Box sx={{ mx: 2, mb: 2, height: "100%", overflow: "auto" }}>
            <div className="modal-content">
              <div className="adress-all">
                <div className="log" onClick></div>
                <div className="adress-box">
                  <div className="Where">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div>
                        {isActive ? (
                          <LuSearch color="red" fontSize={"20px"} />
                        ) : (
                          <CgShapeCircle
                            color={isActive ? "red" : "black"}
                            fontSize={"25px"}
                          />
                        )}
                      </div>

                      <input
                        className="Where-input"
                        type="text"
                        placeholder="пр. Манас 64/1"
                        onFocus={() => setIsActive(true)}
                        onBlur={() => setIsActive(false)}
                      />
                    </div>
                    {isActive && <label>| Карта</label>}
                  </div>
                  <div className="lin-one"></div>
                  <div onClick={openModalOne} className="Where">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div>
                        {isActiveOne ? (
                          <LuSearch color="red" fontSize={"20px"} />
                        ) : (
                          <CgShapeCircle
                            color={isActive ? "black" : "red"}
                            fontSize={"25px"}
                          />
                        )}
                      </div>
                      <input
                        onFocus={() => {
                          setIsActiveOne(true);
                          setInputValue(selectedValue);
                        }}
                        onBlur={() => setIsActiveOne(false)}
                        className="Where-input"
                        type="text"
                        placeholder="Куда?"
                        value={isActiveOne ? inputValue : ""}
                        onChange={handleInputChange}
                      />
                    </div>
                    {isActiveOne && <label>| Карта</label>}
                  </div>
                </div>
                <div className="location-arrow" style={{ marginTop: "12px" }}>
                  <FaLocationArrow />
                  <div style={{ marginLeft: "10px" }}>
                    <p>Ваша местоположение</p>
                    <label htmlFor="">Водитель найдет вас по GPS</label>
                  </div>
                </div>
              </div>
              <div className="location-all">
                {adrees.map((id) => (
                  <div>
                    <div
                      style={{ padding: "12px 12px 0 0 " }}
                      className="location-arrow-one"
                    >
                      <div
                        onClick={() => handleDivClick(id.text)}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <FiMapPin fontSize={"20px"} />
                        <div style={{ marginLeft: "10px" }}>
                          <p>{id.text}</p>
                          <label htmlFor="">{id.label}</label>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="">14.4м</label>
                      </div>
                    </div>
                    <div className="lin-one" style={{ marginTop: "6px" }}></div>
                  </div>
                ))}
              </div>
            </div>
          </Box>
        </SwipeableDrawer>
      </div>
    </div>
  );
}
