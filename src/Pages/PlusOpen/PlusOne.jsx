import React, { useState } from "react";
import hi from "./../../image/hi-23.jpg";
import origin from "./../../image/orign.png";
import vsee from "./../../image/width.webp";
import orig from "./../../image/orig.jfif";
import { RxCross1 } from "react-icons/rx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Global } from "@emotion/react";
function PlusOne() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const drawerBleeding = 52;
  return (
    <div>
      <div onClick={openModal} className="login_all">
        <div style={{ cursor: "pointer" }}>
          <p>Плюс</p>
        </div>

        <img className="image" src={orig} alt="" />
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
            <Typography sx={{ p: 2, color: "text.secondary" }}></Typography>
          </Box>
          <Box sx={{ mx: 2, mb: 2, height: "100%", overflow: "auto" }}>
            {isModalOpen && (
              <div>
                <div className="modal-content-two">
                  <div className="yandex-plus">
          <div className="log" style={{marginTop:"10px"}}></div>

                    <div className="plus-yandex">
                    
                      <img src={hi} alt="" />
                    </div>
                    <div className="skidka">
                      <div>
                        <img className="hi-my" src={origin} alt="" />
                      </div>
                      <div>
                        <p>Будьте в Плюсе</p>
                        <label className="al-label">
                          Вас ждут кино,музыка и такси со скидкой
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="discount">
                    <div>
                      <h4>Скидки</h4>
                    </div>
                    <div className="busines">
                      <div className="busines_all">
                        <h4>10% в Комфорте и Бизнесе</h4>
                        <label className="al-label">
                          Назначайте встречи с друзьями и близкими,
                        </label>
                        <label className="al-label">
                          а Плюс поможет Сэкономить на такси
                        </label>
                      </div>
                      <div className="vsee_image">
                        <img className="vsee" src={vsee} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="besplatno">
                    <p> Первый месяц -- бесплатно</p>
                    <label className="al-label">
                      далее 199KGZ в месяц, условия подпискаи
                    </label>
                    <button className="all-btn">Попробовать бесплатно</button>
                  </div>
                </div>
              </div>
            )}
          </Box>
        </SwipeableDrawer>
      </div>
    </div>
  );
}

export default PlusOne;
