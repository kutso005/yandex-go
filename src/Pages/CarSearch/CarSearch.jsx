import React, { useEffect, useState } from "react";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { FaFlag } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Map from "../../Components/Map/Map";
import "aos/dist/aos.css";
import { MdErrorOutline } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
import { FaRepeat } from "react-icons/fa6";
import Aos from "aos";
import { AiOutlinePlus } from "react-icons/ai";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Global } from "@emotion/react";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import { IoIosArrowForward } from "react-icons/io";
import { PiMoney } from "react-icons/pi";
import { FaLocationArrow } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";
import { CgShapeCircle } from "react-icons/cg";
export default function CarSearch() {
  const navigate = useNavigate();
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [width, setWidth] = useState(0);
  const [isModalOpenOne, setIsModalOpenOne] = useState(false);
  const drawerBleeding = 52;
  const [isActiveOne, setIsActiveOne] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [allowRestart, setAllowRestart] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const toggleDrawertwo = () => {
    setIsModalOpenOne(!isModalOpenOne);
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
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
  useEffect(() => {
    let timer = 0;
    let interval;
  
    const startInterval = () => {
      interval = setInterval(() => {
        if (!isModalOpenOne && timer < 30) {
          setWidth((prevWidth) => prevWidth + 2);
          timer += 1;
          setTime(timer);
        } else if (timer >= 30) {
          setWidth(0);
          setIsModalOpenOne(true);
          timer = 0;
          clearInterval(interval);
          setAllowRestart(false); 
        }
      }, 1000);
    };
  
    startInterval(interval);
  
    return () => clearInterval(interval);
  }, [isModalOpenOne]);
  
  useEffect(() => {
    startStop();
    reset();
  }, []); 
  

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remainingSeconds}`;
  };
  const openModalOne = () => {
    setIsModalOpen(true);
  };
  const startStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };
  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };
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
  const handleDivClick = (text) => {
    setSelectedValue(text);
    setInputValue(text);
    setIsActiveOne(true);
  };

  const restartAnimation = () => {
    setIsModalOpenOne(false);
    setWidth(0);
    setTime(0);
    setIsRunning(false);
    reset();
  };

  useEffect(() => {
    Aos.init({ duration: 1200, once: false });
  }, []);

  useEffect(() => {
    let timer = 0;

    const interval = setInterval(() => {
      if (timer < 30) {
        setWidth((prevWidth) => prevWidth + 2);
        timer += 1;
        setTime(timer);
      } else {
        setWidth(0);
        setIsModalOpenOne(true);
        timer = 0;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="yandex-map-container">
        <Map />

        <SwipeableBottomSheet overflowHeight={340}>
          <div onClick={() => navigate(`/order`)} className="back-all">
            <IoMdArrowBack fontSize={"25px"} />
          </div>
          <div style={{ height: "600px" }}>
            <div className="loga"></div>
            <div style={{ padding: "12px" }}>
              <div className="second">
                <h3>Поиск машины</h3>
                <p>{formatTime(time)}</p>
              </div>
              <div
                style={{
                  width: `${width}px`,
                  height: "5px",
                  backgroundColor: "var(--app-main-color,#fcb900)",
                  marginTop: "12px",
                }}
              ></div>
              <div className="lin" style={{ marginTop: "-0.9px" }}></div>
              <div className="order-more">
                <div className="setin">
                  <AiOutlinePlus fontSize={"30px"} color="blue" />
                </div>
                <label>Заказать ещё</label>
              </div>
              <div>
                <div className="Where-poda">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="podacha">
                      <MdOutlineEmojiPeople fontSize={"25px"} />
                    </div>
                    <div style={{ marginLeft: "10px", lineHeight: "1.2" }}>
                      <label htmlFor="">Подача</label>
                      <p>пр. Манас 64/1</p>
                    </div>
                  </div>
                  <div>
                    <IoIosArrowForward fontSize={"20px"} color={"blue"} />
                  </div>
                </div>
                <div className="lin-one-top"></div>
                <div className="Where-poda">
                  <div onClick={openModalOne} style={{ display: "flex", alignItems: "center" }}>
                    <AiOutlinePlus fontSize={"30px"} />
                    <div style={{ marginLeft: "17px" }}>
                      <p>Добавить остановку</p>
                    </div>
                  </div>
                  <div>
                    <IoIosArrowForward fontSize={"20px"} color={"blue"} />
                  </div>
                </div>
                <div className="lin-one-top"></div>
                <div className="Where-poda">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FaFlag fontSize={"22px"} style={{ marginLeft: "5px" }} />

                    <div style={{ marginLeft: "19px", lineHeight: "1.2" }}>
                      <label htmlFor="">Прибытие</label>
                      <p>Гатчинский переулок ,28</p>
                    </div>
                  </div>
                  <div>
                    <IoIosArrowForward fontSize={"20px"} color={"blue"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="lin-one-erog"></div>
            <div style={{ padding: "9px" }}>
              <div className="Where-poda">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <PiMoney color={"green"} fontSize={"27px"} />
                  <div style={{ marginLeft: "17px" }}>
                    <p>Наличными</p>
                  </div>
                </div>
              </div>
              <div className="lin-one-top"></div>
              <div className="Where-poda">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaLocationArrow fontSize={"25px"} color="blue" />
                  <div style={{ marginLeft: "17px" }}>
                    <p>Показать водителю где я</p>
                  </div>
                </div>
                <div>
                  <input type="checkbox" />
                </div>
              </div>
              <div className="lin-one-top"></div>
              <div className="Where-poda">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <MdErrorOutline fontSize={"25px"} />

                  <div style={{ marginLeft: "17px" }}>
                    <p>Перевозчик и детали</p>
                  </div>
                </div>
                <div>
                  <IoIosArrowForward fontSize={"20px"} color={"blue"} />
                </div>
              </div>
            </div>
            <div className="lin-one-erog"></div>
            <div style={{ padding: "9px" }}>
              <div className="Where-poda">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <MdOutlineCancel fontSize={"23px"} color="red" />

                  <div style={{ marginLeft: "17px", color: "red" }}>
                    <p>Отменить поездку</p>
                  </div>
                </div>
                <div>
                  <IoIosArrowForward fontSize={"20px"} color={"red"} />
                </div>
              </div>
            </div>
          </div>
        </SwipeableBottomSheet>

        <div>
          <CssBaseline />
          <Global
            styles={{
              body: {},
              ".MuiPaper-root.MuiPaper-root": {
                height: `50%`,
                borderTopLeftRadius: `20px`,
                borderTopRightRadius: `20px`,
                overflow: "visible",
              },
            }}
          />
          <SwipeableDrawer
            anchor="bottom"
            open={isModalOpenOne}
            onClose={toggleDrawertwo}
            onOpen={toggleDrawertwo}
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
              <div className="loga"></div>
              <div style={{ padding: "12px" }}>
                <div className="repeat">
                  <FaRepeat fontSize={"40px"} />
                  <h3>Рядом нет машин, попробуйте заново</h3>
                </div>
                <div>
                  <button className="btn-yeallo" onClick={restartAnimation}>
                    Попробовать заново
                  </button>
                </div>
              </div>
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
              <div className="modal-content">
                <div className="adress-all">
                  <div className="log"></div>
                  <div className="adress-box">
                    {/* <div className="Where">
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
                    </div> */}
                    {/* <div className="lin-one"></div> */}
                    <div  className="Where">
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
              </Typography>
            </Box>
          </SwipeableDrawer>
        </div>
      </div>
    </div>
  );
}
