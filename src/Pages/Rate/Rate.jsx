import React, { useEffect, useRef, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import yandex from "../../image/pngi.png";

export default function Rate() {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const [isTaxiActive, setIsTaxiActive] = useState(true);
  const [activeIndex, setActiveIndex] = useState(1);
  const [isDeliveryActive, setIsDeliveryActive] = useState(false);

  const toggleTaxiActive = () => {
    setIsTaxiActive(!isTaxiActive);
    setIsDeliveryActive(false);
  };

  const toggleDeliveryActive = () => {
    setIsTaxiActive(false);
    setIsDeliveryActive(!isDeliveryActive);
  };

  useEffect(() => {
    const updateDotsAndText = () => {
      const activeIndex = sliderRef.current.innerSlider.state.current;
      const dots = document.querySelectorAll(".slick-dots");
      dots.forEach((dot, index) => {
        const isActive = index === activeIndex;
        const parent = dot.parentNode;
        if (parent) {
          parent.removeChild(dot);
          parent.appendChild(customPaging(index, isActive));
        }
      });

      const items = document.querySelectorAll(".slick-slide");
      items.forEach((item, index) => {
        const text = item.querySelector("h2").textContent;
        document.querySelector(".heading" + index).textContent = text;
      });
    };
    sliderRef.current.addEventListener("afterChange", updateDotsAndText);
  }, []);

  const customPagingText = [
    "Эконом",
    "Комфорт",
    "Бизнес",
    "Минивен",
    "Минивен",
    "Минивен",
    "Минивен",
    "Минивен",
    "Доставка",
  ];

  const customPaging = (i) => {
    const text = customPagingText[i];
    const isActive = i === activeIndex;

    const handleDotClick = () => {
      setActiveIndex(i);
    };
    return (
      <div
        onClick={handleDotClick}
        className={`dots-slider ${isActive ? "active" : ""}`}
      >
        <span> {text}</span>
      </div>
    );
  };
  const settings = {
    dots: true,
    customPaging: customPaging,
    focusOnSelect: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "30px",
    beforeChange: (next) => {
      setActiveIndex(next);
    },
  };

  return (
    <div>
      <div className="container">
        <div className="trusted" style={{ padding: "12px 0 0 0 " }}>
          <BiArrowBack fontSize={"25px"} onClick={() => navigate(`/information`)} />
          <p h4>Тарифы</p>
          <div></div>
        </div>
      </div>
      <div className="around-town">
        <h3>По городу (Бишкек) от 48 сом</h3>
        <section className="slick-section">
          <div className="slick-container">
            <div className="slick-wrap" ref={sliderRef}>
              <Slider {...settings}>
                <div className="slider-img">
                  <img src={yandex} alt="" />
                </div>
                <div className="slider-img">
                  <img src={yandex} alt="" />
                </div>
                <div className="slider-img">
                  <img src={yandex} alt="" />
                </div>
                <div className="slider-img">
                  <img src={yandex} alt="" />
                </div>
                <div className="slider-img">
                  <img src={yandex} alt="" />
                </div>
                <div className="slider-img">
                  <img src={yandex} alt="" />
                </div>
                <div className="slider-img">
                  <img src={yandex} alt="" />
                </div>
                <div className="slider-img">
                  <img src={yandex} alt="" />
                </div>
                <div className="slider-img">
                  <img src={yandex} alt="" />
                </div>
                <div className="slider-img">
                  <img src={yandex} alt="" />
                </div>
                <div className="slider-img">
                  <img src={yandex} alt="" />
                </div>
              </Slider>
            </div>
          </div>
        </section>
      </div>
      <div className="order-by-phone">
        <div
          style={{ padding: "7px" }}
          className={`order-taxi ${isTaxiActive ? "active" : ""}`}
          onClick={toggleTaxiActive}
        >
          <label htmlFor="">Заказ из приложения или сайта</label>
        </div>
        <div className="lina"></div>
        <div
          style={{ padding: "7px" }}
          className={`order-taxi ${isDeliveryActive ? "active" : ""}`}
          onClick={toggleDeliveryActive}
        >
          <label htmlFor="">Заказ по телефону</label>
        </div>
      </div>
      <div className="round-rate">
        <p>Тариф "Круглосуточно"</p>
        <label htmlFor="">ежедневно</label>
      </div>
      <div className="landing">
        <h2> Посадка в авто - 48 сом</h2>
        <div className="free-waiting">
          <label htmlFor="">
            Бесплатное ожидание — 3 мин <br /> Платное ожидание — не более 5
            сом/мин <br />
            Стоимость поездки по городу — не более 8,5 сом/км, <br /> не более
            3,9 сом/мин
          </label>
        </div>
      </div>
      <div className="outside">
        <div className="outside-one">
          <label htmlFor="">
            Стоимость поездки за пределами <br /> города
          </label>
          <label htmlFor="">не более 23 сом/км</label>
        </div>
        <div className="lin"></div>
        <div className="outside-one">
          <label htmlFor="">
            Стоимость поездки за пределами <br /> города
          </label>
          <label htmlFor="">не более 3,9 сом/мин</label>
        </div>
        <div className="lin"></div>
        <div className="outside-one">
          <label htmlFor="">Перевозка домашнего животного</label>
          <label htmlFor="">не более 30 сом</label>
        </div>
        <div className="lin"></div>
        <div className="outside-one">
          <label htmlFor="">Общаюсь только текстом</label>
          <label htmlFor="">не более 0 сом</label>
        </div>
        <div className="lin"></div>
        <div className="outside-one">
          <label htmlFor="">Кондиционер</label>
          <label htmlFor="">не более 30 сом</label>
        </div>
        <div className="lin"></div>
        <div className="outside-one">
          <label htmlFor="">Буду с инвалидным креслом</label>
          <label htmlFor="">не более 0 сом</label>
        </div>
        <div className="lin"></div>
        <div className="outside-one">
          <label htmlFor="">Не говорю, но слышу</label>
          <label htmlFor="">не более 0 сом</label>
        </div>
        <div className="lin"></div>
        <div className="outside-one">
          <label htmlFor="">Помогите найти машину</label>
          <label htmlFor="">не более 0 сом</label>
        </div>
        <div className="lin"></div>
        <div className="outside-one">
          <label htmlFor="">Ожидание в пути</label>
          <label htmlFor="">не более 4 сом/мин</label>
        </div>
      </div>
      <div className="service-tariffs">
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="">
            Тарифы Служб Такси могут отличаться. Указана максимальная стоимость
            услуг без учёта понижающего и повышающего («Горячие часы»)
            коэффициентов.
          </label>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="">
            Указанная на сервисе расчётная стоимость поездки может быть изменена
            в зависимости от тарифов Служб Такси, применения понижающего или
            повышающего («Горячие часы») коэффициентов, в случаях, указанных в
            Условиях использования сервиса, а также в случае изменения пункта
            назначения во время поездки, остановок по требованию пассажира и в
            иных случаях.
          </label>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="">
            Стоимость поездки может быть увеличена с учетом коэффициента
            «Горячие часы», в случаях, указанных в Условиях использования
            сервиса.
          </label>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="">
            Подача автомобиля может быть платной. Стоимость платной подачи
            прибавляется к стоимости перевозки и рассчитывается, исходя из
            расстояния между соответствующим автомобилем и местонахождением
            Пользователя и времени, необходимого для такого автомобиля, чтобы
            преодолеть это расстояние.
          </label>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="">
            Отмена заказа может быть платной. Платная отмена применяется в
            случаях: (1) отмены заказа средствами функциональности сервиса после
            подачи автомобиля либо невыхода к поданному автомобилю. Стоимость
            платной отмены рассчитывается аналогично стоимости перевозки за
            период времени с момента фактического прибытия автомобиля на место
            подачи или с момента подачи, указанного в информации • заказе (в
            зависимости от того, что наступило позднее), до момента отмены
            заказа или в размере минимальной стоимости перевозки в рамках
            соответствующего тарифа. При платной отмене заказа в аэропорт
            применяются расценки тарифа по городу, за исключением стоимости
            подачи, которая рассчитывается как подача автомобиля за город
            согласно тарифу. При этом максимальная стоимость отмены в любом
            случае не может превышать стоимость перевозки продолжительностью 10
            минут (включая время бесплатного ожидания по тарифу, если
            применимо), (2) отмены средствами функциональности сервиса заказа с
            платной подачей автомобиля по истечении 3 (трёх) минут с момента его
            подтверждения в интерфейсе сервиса. Стоимость платной отмены при
            платной подаче равна стоимости платной подачи.
          </label>
        </div>
        <div style={{ marginBottom: "30px" }}>
          <label htmlFor="">Тариф действителен до 14.11.2023.</label>
        </div>
      </div>
    </div>
  );
}
