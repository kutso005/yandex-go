import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import yandexal from "./../../image/yandexal.png";
import { BsFilterLeft } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import { useState } from "react";
import { Box, CssBaseline, SwipeableDrawer, Typography } from "@material-ui/core";
import { Global } from "@emotion/react";
export default function HistoryAl() {
  const [isModalOpen, setIsModalOpen] = useState(false);



  const toggleDrawertwo = () => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsModalOpen(!isModalOpen);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const navigate = useNavigate();
  const drawerBleeding = 52;
  return (
    <div>
      <div className="happy-his">
        <BiArrowBack fontSize={"25px"} onClick={() => navigate(`/emergency`)} />
        <h4>История заказов</h4>
        <div></div>
      </div>
      <div className="bac-color" >
        <div>
          <div className="history">
            <h3>Мои заказы</h3>
          </div>
          <div className="lin"></div>
          <div className="filter" onClick={openModal}>
            <p>Фильтры</p>
            <BsFilterLeft fontSize={"25px"} />
          </div>

          <div className="lin"></div>
          <h2 className="today">Вчера</h2>
          <div style={{ padding: "0 10px" }}>
            <div className="history-all">
              <div className="all-histor">
                <div>
                  <h3>Поездка ночью , в 22:34</h3>
                  <p>Отменено</p>
                </div>
                <img className="yandexal_li" src={yandexal} alt="" />
              </div>
              <div className="lin"></div>
              <div className="telephone">
                <div>
                  <div className="Call">
                    <BsTelephone fontSize={"25px"} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label className="al-label">Звонок</label>
                    <label className="al-label">водителю</label>
                  </div>
                </div>
                <div>
                  <div className="Call">
                    <BsQuestionCircle fontSize={"25px"} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label className="al-label">Помощь</label>
                    <label className="al-label">с заказом</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="today">Вчера</h2>
          <div style={{ padding: "0 10px" }}>
            <div className="history-all">
              <div className="all-histor">
                <div>
                  <h3>Поездка ночью , в 03:30</h3>
                  <p> 189С , Гатчинсий переулок 28 ул...</p>
                </div>
                <img className="yandexal_li" src={yandexal} alt="" />
              </div>
            </div>
            <div className="history-all">
              <div className="all-histor">
                <div>
                  <h3>Поездка ночью , в 03:30</h3>
                  <p> 189С , Гатчинсий переулок 28 ул...</p>
                </div>
                <img className="yandexal_li" src={yandexal} alt="" />
              </div>
            </div>
            <div className="history-all">
              <div className="all-histor">
                <div>
                  <h3>Поездка ночью , в 03:30</h3>
                  <p> 189С , Гатчинсий переулок 28 ул...</p>
                </div>
                <img className="yandexal_li" src={yandexal} alt="" />
              </div>
            </div>
          </div>
          <h2 className="today">Сегодня</h2>
          <div style={{ padding: "0 10px" }}>
            <div className="history-all">
              <div className="all-histor">
                <div>
                  <h3>Поездка днём , в 13:33</h3>
                  <p>199С , проспект Манаса , 64/1 ул...</p>
                </div>
                <img className="yandexal_li" src={yandexal} alt="" />
              </div>
            </div>
          </div>
          <div style={{ padding: "0 10px" }}>
            <div className="history-all">
              <div className="all-histor">
                <div>
                  <h3>Поездка днём , в 13:33</h3>
                  <p>199С , проспект Манаса , 64/1 ул...</p>
                </div>
                <img className="yandexal_li" src={yandexal} alt="" />
              </div>
            </div>
          </div>
          <div style={{ padding: "0 10px" }}>
            <div className="history-all">
              <div className="all-histor">
                <div>
                  <h3>Поездка днём , в 13:33</h3>
                  <p>199С , проспект Манаса , 64/1 ул...</p>
                </div>
                <img className="yandexal_li" src={yandexal} alt="" />
              </div>
            </div>
          </div>
          <div style={{ padding: "0 10px" }}>
            <div className="history-all">
              <div className="all-histor">
                <div>
                  <h3>Поездка днём , в 13:33</h3>
                  <p>199С , проспект Манаса , 64/1 ул...</p>
                </div>
                <img className="yandexal_li" src={yandexal} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
     
            <div>
          <CssBaseline/>
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
            open={isModalOpen}
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
              <Typography sx={{ p: 2, color: "text.secondary" }}>
               
                   <div>
                  <div className="modal-content-all">
                    <div className="what-to-show">
                      <p>Что показывать</p>
                    </div>
                    <div className="lin"></div>
                    <div className="taxxi">
                      <p>Доставка</p>
                      <div>
                        <input type="checkbox" />
                      </div>
                    </div>
                    <div className="lin"></div>
                    <div className="taxxi">
                      <p>Шатлл</p>
                      <div>
                        <input type="checkbox" />
                      </div>
                    </div>
                    <div className="lin"></div>
                    <div className="taxxi">
                      <p>Такси</p>
                      <div>
                        <input type="checkbox" />
                      </div>
                    </div>
                    <div style={{ padding: "12px" }}>
                      <button className="btn-yeallo" onClick={closeModal}>
                        Готово
                      </button>
                    </div>
                  </div>
                </div>
              </Typography>
            </Box>
          </SwipeableDrawer>
        </div>
    </div>
  );
}
