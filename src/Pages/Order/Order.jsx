import React, { useEffect, useState } from "react";
import { CgShapeCircle } from "react-icons/cg";
import { IoIosArrowForward, IoMdArrowBack } from "react-icons/io";
import scale from "./../../image/ynd.png";
import { useNavigate } from "react-router-dom";
import Map from "../../Components/Map/Map";
import "aos/dist/aos.css";
import Aos from "aos";
import { PiMoney } from "react-icons/pi";
import { BsFilterLeft } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import { FaLocationArrow } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Global } from "@emotion/react";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
export default function Order() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const [isTaxiActive, setIsTaxiActive] = useState(true);
  const [isDeliveryActive, setIsDeliveryActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isItemSelected, setIsItemSelected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenOne, setIsModalOpenOne] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isActiveOne, setIsActiveOne] = useState(false);
  const [isActiveTwo, setIsActiveTwo] = useState(false);
  const [isActiveThree, setIsActiveThree] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isModalOpenTwo, setIsModalOpenTwo] = useState(false);

  const openModalTwo = () => {
    setIsModalOpenTwo(true);
  };
  const toggleDrawerOne = () => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsModalOpenTwo(!isModalOpenTwo);
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
  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsModalOpen(!isModalOpen);
  };
  const handleDivClick = (text) => {
    setSelectedValue(text);
    setInputValue(text);
    setIsActiveOne(true);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const openModalOne = () => {
    setIsModalOpenOne(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };



  const handleItemClick = (index) => {
    setSelectedItem(index);
    setIsItemSelected(!isItemSelected);
  };

  const scaleItems = [
    { label: "Эконом", price: "от 90сом" },
    { label: "Эконом", price: "от 90сом" },
    { label: "Эконом", price: "от 90сом" },
    { label: "Эконом", price: "от 90сом" },
    { label: "Эконом", price: "от 90сом" },
    { label: "Эконом", price: "от 90сом" },
  ];
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
  const toggleTaxiActive = () => {
    setIsTaxiActive(!isTaxiActive);
    setIsDeliveryActive(false);
  };

  const toggleDeliveryActive = () => {
    setIsTaxiActive(false);
    setIsDeliveryActive(!isDeliveryActive);
  };

  useEffect(() => {
    Aos.init({ duration: 1200, once: false });
  }, []);
  const drawerBleeding = 52;
  return (
    <div>
      <div className="yandex-map-container">
        <Map />

        <SwipeableBottomSheet overflowHeight={340}>
          <div>
            <div onClick={() => navigate(`/`)} className="back-all-one">
              <IoMdArrowBack fontSize={"25px"} />
            
            </div>
            {/* <div className="back-all-one-to">
                <FaLocationArrow />
              </div> */}
          </div>
          <div className="container">
            <div className="loga"></div>
            <div style={{ height: "700px" }}>
              <div className="bac-color" style={{ padding: "12px 0" }}>
                <div onClick={openModalOne} className="Where">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <CgShapeCircle color="red" fontSize={"25px"} />
                    <input
                      className="Where-input"
                      type="text"
                      placeholder="пр. Манас 64/1 "
                    />
                  </div>
                  <div className="entrance">
                    <label>Подъезд</label>
                  </div>
                </div>
                <div className="lin-one"></div>

                <div onClick={openModalOne} className="Where">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <CgShapeCircle fontSize={"25px"} />

                    <input
                      onClick={openModalOne}
                      className="Where-input"
                      type="text"
                      placeholder="Куда?"
                    />
                  </div>
                </div>
                <div className="lin-one"></div>
                <div className="taxi-go-one">
                  <div
                    className={`taxi-go ${isTaxiActive ? "active" : ""}`}
                    onClick={() => toggleTaxiActive()}
                  >
                    <label>Такси</label>
                  </div>
                  <div
                    className={`taxi-go ${isDeliveryActive ? "active" : ""}`}
                    onClick={() => toggleDeliveryActive()}
                  >
                    <label>Доставка</label>
                  </div>
                </div>
                <div className="scale">
                  {scaleItems.map((item, index) => (
                    <div
                      onClick={() =>
                        setIsActiveThree(false) || setIsActiveTwo(true)
                      }
                      className={`scale-filter-one ${
                        selectedItem === index ? "selected" : ""
                      }`}
                    >
                      <div
                        className={`scale-filter ${
                          selectedItem === index
                            ? isItemSelected
                              ? "hidden"
                              : "selected"
                            : ""
                        }`}
                        onClick={() => handleItemClick(index)}
                      >
                        <img src={scale} alt="" />
                        <div className="second-min">
                          <label style={{ fontSize: "13px" }}>7мин</label>
                        </div>
                        <label style={{ fontSize: "13px", fontWeight: "500" }}>
                          {item.label}
                        </label>
                      </div>
                      <p style={{ fontSize: "14px", fontWeight: "600" }}>
                        {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="taxi-more-all">
                <div
                  className={`taxi-mone ${isClicked ? "zoom-in" : ""}`}
                  data-aos="zoom-in"
                >
                  <div>
                    <h4 style={{ fontSize: "35px" }}>Такси</h4>
                  </div>
                  <div>
                    <h2>От 148 сом</h2>
                    <label htmlFor="">4мин</label>
                  </div>
                </div>
                <div data-aos="zoom-in" className="scale-img-yandex">
                  <img src={scale} alt="" />
                </div>
              </div>
              <div>
                <div className="connection-one">
                  <div style={{ display: "flex", gap: "7px" }}>
                    <p>
                      Комфорт приедет быстрее <span>на 2 мин</span>{" "}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                  >
                    <img style={{ width: "60px" }} src={scale} alt="" />
                    <IoIosArrowForward fontSize={"20px"} color={"blue"} />
                  </div>
                </div>
                <div className="reviews">
                  <div className="connection-comment" onClick={openModal}>
                    <div>
                      <p>Коментарии водителю</p>
                    </div>
                    <div>
                      <IoIosArrowForward fontSize={"20px"} color={"blue"} />
                    </div>
                  </div>
                  <div className="lina"></div>
                  <div
                    style={{ marginTop: "12px" }}
                    className="connection-comment"
                  >
                    <div onClick={openModalTwo}>
                      <p>Заказ другому человеку</p>
                    </div>
                    <div>
                      <IoIosArrowForward fontSize={"20px"} color={"blue"} />
                    </div>
                  </div>
                  <div className="lina"></div>
                  <div className="air-conditioner">
                    <div>
                      <div
                        className="set-all-one"
                        style={{ marginTop: "12px" }}
                      >
                        <p>Кондиционер</p>
                        <input type="checkbox" />
                      </div>
                      <div className="lin"></div>
                    </div>
                    <div>
                      <div className="set-all-one">
                        <p>Перевозка домашного животного</p>
                        <input type="checkbox" />
                      </div>
                      <div className="lin"></div>
                    </div>
                    <div className="connection-comment">
                      <div>
                        <p>Специяльные вохможности</p>
                        <label htmlFor="">
                          Инвалидное кресло,с помощю в поиске машины и др.
                        </label>
                      </div>
                      <div>
                        <IoIosArrowForward fontSize={"20px"} color={"blue"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwipeableBottomSheet>
        <div className="Order-bottom">
          <div onClick={() => navigate(`/car-search`)} className="money-bottom">
            <PiMoney color={"green"} fontSize={"27px"} />
            <button className="btn-yeallow">Заказать</button>
            <BsFilterLeft fontSize={"25px"} />
          </div>
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
            open={isModalOpen}
            onClose={toggleDrawer()}
            onOpen={toggleDrawer()}
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
              <Typography sx={{ p: 2, color: "text.secondary" }}>
                <div>
                  <div>
                    <div className="coment-car-people">
                      <div className="log"></div>

                      <input type="text" placeholder="Коментарии водителю" />
                      <div>
                        <button className="btn-yeallo">Готово</button>
                      </div>
                    </div>
                  </div>
                </div>
              </Typography>
            </Box>
          </SwipeableDrawer>
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
            open={isModalOpenTwo}
            onClose={toggleDrawerOne()}
            onOpen={toggleDrawerOne()}
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
              <Typography sx={{ p: 2, color: "text.secondary" }}>
                <div>
                  <div className="log" style={{ marginTop: "8px" }}></div>
                  <div className="people">
                    <h3>Кто поедет на такси?</h3>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="input-from"
                      placeholder="Имя или номер телефона"
                    />
                  </div>
                  <div className="lina"></div>
                </div>
              </Typography>
            </Box>
          </SwipeableDrawer>
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
            <Box sx={{ mx: 9, mb: 9, height: "50%", overflow: "auto" }}>
              <div className="modal-content">
                <div className="adress-all">
                  <div className="log"></div>
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
                      <div
                        className="lin-one"
                        style={{ marginTop: "6px" }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </Box>
          </SwipeableDrawer>
        </div>
      </div>
    </div>
  );
}
