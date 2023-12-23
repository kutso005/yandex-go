import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { PiStarThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { Global } from "@emotion/react";
import { Box, CssBaseline, SwipeableDrawer, Typography } from "@material-ui/core";
export default function Family() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
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
  
  const drawerBleeding = 52;
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="family">
        <div style={{ padding: "12px 0 0 0" }}>
          <div className="trusted">
            <BiArrowBack fontSize={"25px"} onClick={() => navigate(`/`)} />
            <h4>Поездки для семьи</h4>
            <div></div>
          </div>
          <div className="and-family">
            <h2>Поездки для семьи</h2>
          </div>
          <div className="get-distracted">
            <p>
              не придется отвлекаться , чтобы заказывать машину детям или
              родителям. Они сами смогут оплачивать поездки с вашей карты
            </p>
          </div>
          <div className="grafting">
            <div className="thin">
              <PiStarThin fontSize={"25px"} />
            </div>
            <div style={{ marginLeft: "10px" }}>
              <p>Пригласите участников в акаунт: </p>
              <p> до трёх человек</p>
            </div>
          </div>
          <div className="grafting">
            <div className="thin">
              <PiStarThin fontSize={"25px"} />
            </div>
            <div style={{ marginLeft: "10px" }}>
              <p>Привяжите к аккаунту карту</p>
            </div>
          </div>
          <div className="grafting">
            <div className="thin">
              <PiStarThin fontSize={"25px"} />
            </div>
            <div style={{ marginLeft: "10px" }}>
              <p>У участников появится новый способ оплаты </p>
              <p>-- "cемейный акакунт"</p>
            </div>
          </div>
          <div className="add-people">
            <button className="btn-yeallo" onClick={openModal}>
              Пригласить участников
            </button>
          </div>
          
           <div>
          <CssBaseline/>
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
               
              <div className="modal-content-two">
              <div className="loga" ></div>
                <div className="people">
                  <h2>Пригласить участников</h2>
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
        </div>
      </div>
    </div>
  );
}
