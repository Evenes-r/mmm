<template>
  <div class="wrapper">
    <section class="main-screen">
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="20"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        navigation
        :pagination="{ clickable: true }"
      >
        <swiper-slide>
          <div class="slider-item">
            <div class="slider-bg">
              <div class="slider-content container">
                <ul class="slider-content-frwo mb60">
                  <li class="slider-content__title">
                    <h1 class="head1 pb20">ФИЛОСОФИЯ КРАСОТЫ</h1>
                    <h2 class="head3">
                      ЦЕНТР КОСМЕТОЛОГИИ В САМОМ СЕРДЦЕ ТОМСКА!
                    </h2>
                  </li>
                  <li class="slider-content__form">
                    <form action="">
                      <div class="slider-form-title mb20">
                        <p class="base1">
                          Мы перезвоним вам в течении 5 минут и подберем удобное
                          время посещения.
                        </p>
                      </div>
                      <img
                        src="@/assets/images/form/phone-flag.png"
                        alt=""
                        width="20"
                      />
                      <input type="text" placeholder="Ваше имя" class="mb20" />
                      <input
                        type="text"
                        placeholder="+7(999)999-99-99"
                        class="mb20"
                      />
                      <button type="button" class="head3">Записаться</button>
                    </form>
                  </li>
                </ul>
                <div class="slider-content-adventages">
                  <ul>
                    <li>
                      <img src="@/assets/images/main-slider/img_1.svg" alt="" />
                      <p class="base1">Более 15 лет опыта работы</p>
                    </li>
                    <li>
                      <img src="@/assets/images/main-slider/img_2.svg" alt="" />
                      <p class="base1">Медицинская лицензия</p>
                    </li>
                    <li>
                      <img src="@/assets/images/main-slider/img_3.svg" alt="" />
                      <p class="base1">
                        Косметологи с высшим медицинским образованием
                      </p>
                    </li>
                    <li>
                      <img src="@/assets/images/main-slider/img_4.svg" alt="" />
                      <p class="base1">Сертифицированные препараты</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slider-item">
            <div class="slider-bg">
              <div class="slider-content container">
                <ul class="slider-content-frwo mb60">
                  <li class="slider-content__title">
                    <h1 class="head1 pb20">ФИЛОСОФИЯ КРАСОТЫ</h1>
                    <h2 class="head3">
                      ЦЕНТР КОСМЕТОЛОГИИ В САМОМ СЕРДЦЕ ТОМСКА!
                    </h2>
                  </li>
                  <li class="slider-content__form">
                    <form action="">
                      <div class="slider-form-title mb20">
                        <p class="base1">
                          Мы перезвоним вам в течении 5 минут и подберем удобное
                          время посещения.
                        </p>
                      </div>
                      <img
                        src="@/assets/images/form/phone-flag.png"
                        alt=""
                        width="20"
                      />
                      <input type="text" placeholder="Ваше имя" class="mb20" />
                      <input
                        type="text"
                        placeholder="+7(999)999-99-99"
                        class="mb20"
                      />
                      <button type="button">Записаться</button>
                    </form>
                  </li>
                </ul>
                <div class="slider-content-adventages">
                  <ul>
                    <li>
                      <img src="@/assets/images/main-slider/img_1.svg" alt="" />
                      <p class="base1">Более 15 лет опыта работы</p>
                    </li>
                    <li>
                      <img src="@/assets/images/main-slider/img_2.svg" alt="" />
                      <p class="base1">Медицинская лицензия</p>
                    </li>
                    <li>
                      <img src="@/assets/images/main-slider/img_3.svg" alt="" />
                      <p class="base1">
                        Косметологи с высшим медицинским образованием
                      </p>
                    </li>
                    <li>
                      <img src="@/assets/images/main-slider/img_4.svg" alt="" />
                      <p class="base1">Сертифицированные препараты</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slider-item">
            <div class="slider-bg">
              <div class="slider-content container">
                <ul class="slider-content-frwo mb60">
                  <li class="slider-content__title">
                    <h1 class="head1 pb20">ФИЛОСОФИЯ КРАСОТЫ</h1>
                    <h2 class="head3">
                      ЦЕНТР КОСМЕТОЛОГИИ В САМОМ СЕРДЦЕ ТОМСКА!
                    </h2>
                  </li>
                  <li class="slider-content__form">
                    <form action="">
                      <div class="slider-form-title mb20">
                        <p class="base1">
                          Мы перезвоним вам в течении 5 минут и подберем удобное
                          время посещения.
                        </p>
                      </div>
                      <img
                        src="@/assets/images/form/phone-flag.png"
                        alt=""
                        width="20"
                      />
                      <input type="text" placeholder="Ваше имя" class="mb20" />
                      <input
                        type="text"
                        placeholder="+7(999)999-99-99"
                        class="mb20"
                      />
                      <button type="button">Записаться</button>
                    </form>
                  </li>
                </ul>
                <div class="slider-content-adventages">
                  <ul>
                    <li>
                      <img src="@/assets/images/main-slider/img_1.svg" alt="" />
                      <p class="base1">Более 15 лет опыта работы</p>
                    </li>
                    <li>
                      <img src="@/assets/images/main-slider/img_2.svg" alt="" />
                      <p class="base1">Медицинская лицензия</p>
                    </li>
                    <li>
                      <img src="@/assets/images/main-slider/img_3.svg" alt="" />
                      <p class="base1">
                        Косметологи с высшим медицинским образованием
                      </p>
                    </li>
                    <li>
                      <img src="@/assets/images/main-slider/img_4.svg" alt="" />
                      <p class="base1">Сертифицированные препараты</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slider-item">
            <div class="slider-bg">
              <div class="slider-content container">
                <ul class="slider-content-frwo mb60">
                  <li class="slider-content__title">
                    <h1 class="head1 pb20">ФИЛОСОФИЯ КРАСОТЫ</h1>
                    <h2 class="head3">
                      ЦЕНТР КОСМЕТОЛОГИИ В САМОМ СЕРДЦЕ ТОМСКА!
                    </h2>
                  </li>
                  <li class="slider-content__form">
                    <form action="">
                      <div class="slider-form-title mb20">
                        <p class="base1">
                          Мы перезвоним вам в течении 5 минут и подберем удобное
                          время посещения.
                        </p>
                      </div>
                      <img
                        src="@/assets/images/form/phone-flag.png"
                        alt=""
                        width="20"
                      />
                      <input type="text" placeholder="Ваше имя" class="mb20" />
                      <input
                        type="text"
                        placeholder="+7(999)999-99-99"
                        class="mb20"
                      />
                      <button type="button">Записаться</button>
                    </form>
                  </li>
                </ul>
                <div class="slider-content-adventages">
                  <ul>
                    <li>
                      <img src="@/assets/images/main-slider/img_1.svg" alt="" />
                      <p class="base1">Более 15 лет опыта работы</p>
                    </li>
                    <li>
                      <img src="@/assets/images/main-slider/img_2.svg" alt="" />
                      <p class="base1">Медицинская лицензия</p>
                    </li>
                    <li>
                      <img src="@/assets/images/main-slider/img_3.svg" alt="" />
                      <p class="base1">
                        Косметологи с высшим медицинским образованием
                      </p>
                    </li>
                    <li>
                      <img src="@/assets/images/main-slider/img_4.svg" alt="" />
                      <p class="base1">Сертифицированные препараты</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </section>
    <section class="services-block">
      <div class="services-title container">
        <div class="service-title__text">
          <h2 class="head1">Услуги</h2>
          <p class="base1">Записывайтесь на процедуры по выгодной цене</p>
        </div>
        <div class="service-title__line">
          <span></span>
        </div>
      </div>
      <div class="services-tile mb40 container">
        <ul class="mb20">
          <li class="service-item">
            <div class="service-item-img mb20">
              <img src="@/assets/images/services/service_1.png" alt="" />
            </div>
            <h3 class="head2">Терапевтическая косметология</h3>
            <p class="base1">
              Консультации, МКТ и миостимуляция, микродермабразия,
              ферментотерапия, массаж ли...
            </p>
          </li>
          <li class="service-item">
            <div class="service-item-img mb20">
              <img src="@/assets/images/services/service_2.png" alt="" />
            </div>
            <h3 class="head2">Эстетическая комсетология</h3>
            <p class="base1">
              Ботулинотерапия, биоревитализация, контурная пластика, мезотерапия
              лица и шеи, плазмотерапи...
            </p>
          </li>
        </ul>
        <ul class="mb80">
          <li class="service-item">
            <div class="service-item-img mb20">
              <img src="@/assets/images/services/service_3.png" alt="" />
            </div>
            <h3 class="head2">Уход за телом</h3>
            <p class="base1">
              Антицеллюлитные программы, антицеллюлитный массаж ног, баночный
              массаж, ферментотерапи...
            </p>
          </li>
          <li class="service-item">
            <div class="service-item-img mb20">
              <img src="@/assets/images/services/service_4.png" alt="" />
            </div>
            <h3 class="head2">Восточная косметология</h3>
            <p class="base1">
              Акупрессура, гармонизирующий массаж, массаж «Гуаша» с эфирными
              маслами, акупунктурный ма...
            </p>
          </li>
          <li class="service-item">
            <div class="service-item-img mb20">
              <img src="@/assets/images/services/service_5.png" alt="" />
            </div>
            <h3 class="head2">Уход за руками и ногами</h3>
            <p class="base1">
              Маникюр, педикюр, парафинотерапия, массаж рук, минеральное
              запечатывание, комбинированный...
            </p>
          </li>
        </ul>
      </div>
      <div class="services-link container">
        <router-link to="#" class="nav1">Посмотреть еще</router-link>
      </div>
    </section>
    <section class="about-block">
      <ul class="container">
        <li class="about-slider">
          <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="10"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :pagination="{ clickable: true }"
            style="max-width: 440px; height: 400px"
          >
            <swiper-slide>
              <img src="@/assets/images/about/slide_1.png" alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/about/slide_1.png" alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/about/slide_1.png" alt="" />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/about/slide_1.png" alt="" />
            </swiper-slide>
          </swiper>
        </li>
        <li class="about-text">
          <h2 class="head3 pb20">Центр косметологии в центре Томска</h2>
          <h3 class="head2 pb20">
            Более 15 лет мы делаем мир прекраснее, а значит, счастливее.
          </h3>
          <p class="base1 mb20">
            У нас нет общих типовых решений и шаблонов. Нашим гостям мы
            предлагаем комплексное лечение . Думаем наперед и находим
            индивидуальные методики до наступления видимых эстетических
            изменений.
          </p>
          <p class="base1 mb40">
            Каждое утро просыпайтесь со свежим румянцем, упругой, гладкой кожей
            и улыбайтесь своему молодому отражению в зеркале. Просто станьте
            счастливее. Приходите к нам в гости на травяной чай и ароматный
            кофе!
          </p>
          <div class="about-link">
            <router-link to="#" class="nav1">Посмотреть еще</router-link>
          </div>
        </li>
      </ul>
    </section>
    <section class="doctors-block">
      <div class="doctors-title container">
        <div class="doctors-title__text">
          <h2 class="head1">Врачи</h2>
          <p class="base1">Настоящие мастера и фанатики своего дела!</p>
        </div>
        <div class="doctors-title__line">
          <span></span>
        </div>
      </div>
      <div class="doctors-tile mb40 container">
        <ul>
          <li class="doctors-item">
            <div class="doctors-item-img mb20">
              <img
                src="@/assets/images/doctors/doctor_1.png"
                alt=""
                width="200"
                height="220"
              />
            </div>
            <div class="doctors-item-text">
              <div class="doctors-item-text-title">
                <h3 class="head3">Ким Ирина Висарионовна</h3>
                <div class="experience">
                  <p class="base1">Стаж 20+&nbsp;лет</p>
                </div>
              </div>
              <p class="base1">
                Главный врач, врач ТКМ, косметолог-эстетист, дерматолог
              </p>
              <p class="base1">
                Высшее медицинское образование: СИБГМУ, СГМУ,ГУ «Центральный НИИ
                кожно-венерологический институт» Минздрава России, г. Москва.
                Терапевтическая...
              </p>
              <a href="#" class="base1"
                >Подробнее<img
                  src="@/assets/images/doctors/btn_arrow.png"
                  alt=""
                  width="8"
              /></a>
            </div>
          </li>
          <li class="doctors-item">
            <div class="doctors-item-img mb20">
              <img
                src="@/assets/images/doctors/doctor_2.png"
                alt=""
                width="200"
                height="220"
              />
            </div>
            <div class="doctors-item-text">
              <div class="doctors-item-text-title">
                <h3 class="head3">Осадчий Сергей Павлович</h3>
                <div class="experience">
                  <p class="base1">Стаж 20+&nbsp;лет</p>
                </div>
              </div>
              <p class="base1">
                Заместитель директора, мастер электронного оборудования
              </p>
              <p class="base1">
                Высшее образование: Техническое училище, специальность –
                слесарь-сборщик авиадвигателей, ТУСУР, специальность -
                радиотехника...
              </p>
              <a href="#" class="base1"
                >Подробнее<img
                  src="@/assets/images/doctors/btn_arrow.png"
                  alt=""
                  width="8"
              /></a>
            </div>
          </li>
          <li class="doctors-item">
            <div class="doctors-item-img mb20">
              <img
                src="@/assets/images/doctors/doctor_3.png"
                alt=""
                width="200"
                height="220"
              />
            </div>
            <div class="doctors-item-text">
              <div class="doctors-item-text-title">
                <h3 class="head3">Бочкарева Елене Савельевна</h3>
                <div class="experience">
                  <p class="base1">Стаж 17+&nbsp;лет</p>
                </div>
              </div>
              <p class="base1">
                Врач, косметик-эстетист специалист по массажу Гуаша
              </p>
              <p class="base1">
                Высшее медицинское образование: СГМУ,Уральская Государственная
                Медицинская Академия, специализация по терапевтической
                косметологии лица и косметической химии...
              </p>
              <a href="#" class="base1"
                >Подробнее<img
                  src="@/assets/images/doctors/btn_arrow.png"
                  alt=""
                  width="8"
              /></a>
            </div>
          </li>
          <li class="doctors-item">
            <div class="doctors-item-img mb20">
              <img
                src="@/assets/images/doctors/doctor_4.png"
                alt=""
                width="200"
                height="220"
              />
            </div>
            <div class="doctors-item-text">
              <div class="doctors-item-text-title">
                <h3 class="head3">Долгова Светлана Анатольевна</h3>
                <div class="experience">
                  <p class="base1">Стаж 20+&nbsp;лет</p>
                </div>
              </div>
              <p class="base1">
                Медицинская сестра в косметологии, косметик-эстетист, специалист
                по массажу Гуаша
              </p>
              <p class="base1">
                Медицинское образование: Томский Базовый Медицинский Колледж.
                Специализация — медицинская сестра, ТОКПБ — медсестра по
                массажу, Учебный цент...
              </p>
              <a href="#" class="base1"
                >Подробнее<img
                  src="@/assets/images/doctors/btn_arrow.png"
                  alt=""
                  width="8"
              /></a>
            </div>
          </li>
          <li class="doctors-item">
            <div class="doctors-item-img mb20">
              <img
                src="@/assets/images/doctors/doctor_5.png"
                alt=""
                width="200"
                height="220"
              />
            </div>
            <div class="doctors-item-text">
              <div class="doctors-item-text-title">
                <h3 class="head3">Свешникова Анна Игоревна</h3>
                <div class="experience">
                  <p class="base1">Стаж 14+&nbsp;лет</p>
                </div>
              </div>
              <p class="base1">
                Мастер по маникюру, педикюру, шугарингу, специалист по массажу
                Гуаша
              </p>
              <p class="base1">
                Высшее медицинское образование: Сибирский институт интегративной
                медицины "Ли Вест" «Фундаментальные основы традиционной
                китайской медицины»...
              </p>
              <a href="#" class="base1"
                >Подробнее<img
                  src="@/assets/images/doctors/btn_arrow.png"
                  alt=""
                  width="8"
              /></a>
            </div>
          </li>
          <li class="doctors-item router-doctors">
            <h3 class="head2">
              В нашем центре работают специалисты высокого уровня с многолетним
              успешным опытом.
            </h3>
            <div class="doctors-link">
              <router-link to="#" class="nav1">Все врачи</router-link>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="online-form">
      <div class="online-form-wrapper container">
        <div class="form-text-side">
          <h3 class="head2 pb20">Запишитесь на консультацию</h3>
          <p class="base1 mb20">
            Мы перезвоним вам в течении 10 минут и согласуем удобное для вас
            время записи.
          </p>
          <p class="base1 mb20"><b>Длительность :</b>&nbsp;30 минут.</p>
          <p class="base1">
            <b>Что входит :</b>&nbsp;Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <div class="form-input-side">
          <form>
            <img src="@/assets/images/form/phone-flag.png" alt="" width="20" />
            <input type="text" placeholder="Ваше имя" class="mb20" />
            <input type="text" placeholder="+7(999) 999-99-99" class="mb20" />
            <button type="button" class="head3">Записаться</button>
            <div class="agreement">
              <div>
                <input type="checkbox" id="cb1" />
                <label for="cb1" class="base1"
                  >Нажимая кнопку «Записаться» я даю согласие на обработку своих
                  персональных данных в соответствии с пользовательским
                  соглашением.</label
                >
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    <section class="reviews-block">
      <div class="reviews-title container">
        <div class="reviews-title__text">
          <h2 class="head1">Отзывы</h2>
          <p class="base1">Отзывы от наших постоянных и новых клиентов.</p>
        </div>
        <div class="reviews-title__line">
          <span></span>
        </div>
      </div>
      <div class="rewiews-carousel container">
        <swiper
          :modules="modules"
          :slides-per-view="3"
          :space-between="45"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :pagination="{ clickable: true }"
        >
          <swiper-slide>
            <div class="rewiews-item">
              <div class="rewiews-text mb20">
                <p class="base1">
                  Спокойное и красивое место. Там работаю лишь мастера, которые
                  прекрасно знают своё дело и справляются со всеми
                  постав-ленными задачами. Не раз посещал про-цедуру по чистки
                  лица и ни разу не пожалел. Ставлю 5 звёзд без единого
                  сомнения.
                </p>
              </div>
              <div class="rewiews-info">
                <div class="rewiews-author">
                  <h3 class="head3">Алексей</h3>
                  <img
                    class="rating"
                    src="@/assets/images/rewiews/5_stars.png"
                    alt=""
                    width="100"
                  />
                </div>
                <h3 class="head3 date">13 июня 2023</h3>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="rewiews-item">
              <div class="rewiews-text mb20">
                <p class="base1">
                  Спокойное и красивое место. Там работаю лишь мастера, которые
                  прекрасно знают своё дело и справляются со всеми
                  постав-ленными задачами. Не раз посещал про-цедуру по чистки
                  лица и ни разу не пожалел. Ставлю 5 звёзд без единого
                  сомнения.
                </p>
              </div>
              <div class="rewiews-info">
                <div class="rewiews-author">
                  <h3 class="head3">Алексей</h3>
                  <img
                    class="rating"
                    src="@/assets/images/rewiews/5_stars.png"
                    alt=""
                    width="100"
                  />
                </div>
                <h3 class="head3 date">13 июня 2023</h3>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="rewiews-item">
              <div class="rewiews-text mb20">
                <p class="base1">
                  Спокойное и красивое место. Там работаю лишь мастера, которые
                  прекрасно знают своё дело и справляются со всеми
                  постав-ленными задачами. Не раз посещал про-цедуру по чистки
                  лица и ни разу не пожалел. Ставлю 5 звёзд без единого
                  сомнения.
                </p>
              </div>
              <div class="rewiews-info">
                <div class="rewiews-author">
                  <h3 class="head3">Алексей</h3>
                  <img
                    class="rating"
                    src="@/assets/images/rewiews/5_stars.png"
                    alt=""
                    width="100"
                  />
                </div>
                <h3 class="head3 date">13 июня 2023</h3>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="rewiews-item">
              <div class="rewiews-text mb20">
                <p class="base1">
                  Спокойное и красивое место. Там работаю лишь мастера, которые
                  прекрасно знают своё дело и справляются со всеми
                  постав-ленными задачами. Не раз посещал про-цедуру по чистки
                  лица и ни разу не пожалел. Ставлю 5 звёзд без единого
                  сомнения.
                </p>
              </div>
              <div class="rewiews-info">
                <div class="rewiews-author">
                  <h3 class="head3">Алексей</h3>
                  <img
                    class="rating"
                    src="@/assets/images/rewiews/5_stars.png"
                    alt=""
                    width="100"
                  />
                </div>
                <h3 class="head3 date">13 июня 2023</h3>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="rewiews-item">
              <div class="rewiews-text mb20">
                <p class="base1">
                  Спокойное и красивое место. Там работаю лишь мастера, которые
                  прекрасно знают своё дело и справляются со всеми
                  постав-ленными задачами. Не раз посещал про-цедуру по чистки
                  лица и ни разу не пожалел. Ставлю 5 звёзд без единого
                  сомнения.
                </p>
              </div>
              <div class="rewiews-info">
                <div class="rewiews-author">
                  <h3 class="head3">Алексей</h3>
                  <img
                    class="rating"
                    src="@/assets/images/rewiews/5_stars.png"
                    alt=""
                    width="100"
                  />
                </div>
                <h3 class="head3 date">13 июня 2023</h3>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="rewiews-item">
              <div class="rewiews-text mb20">
                <p class="base1">
                  Спокойное и красивое место. Там работаю лишь мастера, которые
                  прекрасно знают своё дело и справляются со всеми
                  постав-ленными задачами. Не раз посещал про-цедуру по чистки
                  лица и ни разу не пожалел. Ставлю 5 звёзд без единого
                  сомнения.
                </p>
              </div>
              <div class="rewiews-info">
                <div class="rewiews-author">
                  <h3 class="head3">Алексей</h3>
                  <img
                    class="rating"
                    src="@/assets/images/rewiews/5_stars.png"
                    alt=""
                    width="100"
                  />
                </div>
                <h3 class="head3 date">13 июня 2023</h3>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <section class="dock-block container">
      <div class="document-content">
        <div class="document-title mb20">
          <h3 class="head2">Медицинская лицензия</h3>
          <p class="base1">
            Наш центр является лицензированным учреждением. Мы прошли все
            необходимые проверки и доказали, что соответствуем высоким
            стандартам качества.
          </p>
        </div>
        <div class="document-img">
          <img src="@/assets/images/document/dock_1.png" alt="" />
          <img src="@/assets/images/document/dock_2.png" alt="" />
          <img src="@/assets/images/document/dock_3.png" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination],
    };
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  .main-screen {
    .slider-item {
      height: 480px;
      .slider-bg {
        background-image: url("@/assets/images/main-slider/slide_1.png");
        background-size: cover;
        height: 100%;
        .slider-content {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .slider-content-frwo {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .slider-content__title {
              h1 {
                font-size: 50px;
                color: var(--white);
              }
              h2 {
                font-size: 26px;
                color: var(--white);
                max-width: 319px;
                font-family: "Semi-Bold";
              }
            }
            .slider-content__form {
              form {
                display: flex;
                flex-direction: column;
                width: 360px;
                align-items: center;
                position: relative;
                img {
                  position: absolute;
                  top: 116px;
                  left: 20px;
                }
                input {
                  width: calc(100% - 20px);
                  height: 40px;
                  border-radius: 25px;
                  border: none;
                  padding: 0 0 0 20px;
                  font-family: "Medium";
                  &::placeholder {
                    color: var(--light-gray);
                  }
                }
                input:nth-child(4) {
                  width: calc(100% - 60px);
                  padding: 0 0 0 60px;
                }
                button {
                  width: 100%;
                  height: 40px;
                  background-color: var(--orange);
                  border-radius: 25px;
                  border: 2px solid var(--orange);
                  color: #ffffff;
                  font-size: 16px;
                  cursor: pointer;
                }
                .slider-form-title {
                  p {
                    font-size: 10px;
                    color: var(--white);
                    text-align: center;
                    max-width: 192px;
                  }
                }
              }
            }
          }
          .slider-content-adventages {
            ul {
              display: flex;
              gap: 40px;
              background-color: var(--light-blue);
              max-width: 1150px;
              border-radius: 50px;
              justify-content: center;
              padding: 20px 0;
              margin: 0 auto;
              li {
                display: flex;
                gap: 20px;
                align-items: center;
                p {
                  max-width: 196px;
                }
              }
              li:last-child {
                p {
                  max-width: 147px;
                }
              }
            }
          }
        }
      }
    }
  }
  .services-block {
    margin: 80px 0;
    .services-title {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .service-title__text {
        max-width: 208px;
        h2 {
          color: var(--orange);
        }
      }
      .service-title__line {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        span {
          display: block;
          width: calc(100% - 40px);
          height: 1px;
          background-color: var(--light-gray);
        }
      }
    }
    .services-tile {
      ul {
        display: flex;
        flex-wrap: wrap;
        gap: 40px 80px;
        justify-content: flex-end;

        .service-item {
          max-width: 360px;
          cursor: pointer;
          border-radius: 20px;
          transition: 0.2s;
          position: relative;
          .service-item-img {
            img {
              width: 360px;
            }
          }
          p {
            margin: 10px 0 0 0;
            color: var(--dark-gray);
          }
        }
      }
    }
    .services-link {
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        border: 2px solid var(--orange);
        border-radius: 50px;
        color: var(--orange);
        font-weight: 600;
        text-decoration: none;
        padding: 10px 65px;
        transition: 0.3s;
        &:hover {
          background-color: var(--orange);
          color: var(--white);
        }
      }
    }
  }
  .about-block {
    background-color: var(--light-blue);
    padding: 40px 0;
    ul {
      display: flex;
      gap: 80px;
      .about-slider {
        img {
          max-width: 440px;
        }
      }
      .about-text {
        h2 {
          font-size: 34px;
          max-width: 345px;
        }
        h3 {
        }
        p {
          max-width: 687px;
        }
        .about-link {
          a {
            padding: 10px 60px;
            border-radius: 50px;
            text-decoration: none;
            border: 2px solid var(--dark-gray);
            color: var(--dark-gray);
            font-weight: 600;
            transition: 0.3s;
            &:hover {
              background-color: var(--dark-gray);
              color: var(--white);
            }
          }
        }
      }
    }
  }
  .doctors-block {
    margin: 80px 0;
    .doctors-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;
      .doctors-title__text {
        max-width: 208px;
        h2 {
          color: var(--orange);
        }
      }
      .doctors-title__line {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        span {
          display: block;
          width: calc(100% - 40px);
          height: 1px;
          background-color: var(--light-gray);
        }
      }
    }
    .doctors-tile {
      ul {
        display: flex;
        flex-wrap: wrap;
        gap: 40px 60px;
        justify-content: flex-start;
        .doctors-item {
          display: flex;
          gap: 40px;
          img {
            border-radius: 20px;
          }
          .doctors-item-text {
            max-width: 350px;
            .doctors-item-text-title {
              margin-bottom: 10px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              h3 {
                font-size: 24px;
              }
              .experience {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background-color: var(--light-blue);
                display: flex;
                align-items: center;
                justify-content: center;
                p {
                  text-align: center;
                  font-size: 12px;
                  font-weight: 700;
                }
              }
            }
            p:nth-child(2) {
              color: var(--light-gray);
              margin-bottom: 10px;
            }
            p:nth-child(3) {
              color: var(--dark-gray);
              margin-bottom: 10px;
            }
            a {
              color: var(--dark-gray);
              text-underline-offset: 2px;
              img {
                margin: 0 0 0 5px;
              }
            }
          }
        }
        .router-doctors {
          display: flex;
          flex-direction: column;
          gap: 0;
          align-items: flex-start;
          justify-content: center;
          padding: 0 0 0 50px;
          h3 {
            max-width: 370px;
            margin-bottom: 25px;
          }
          .doctors-link {
          }
        }
      }
    }
    .doctors-link {
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        border: 2px solid var(--orange);
        border-radius: 50px;
        color: var(--orange);
        font-weight: 600;
        text-decoration: none;
        padding: 10px 65px;
        transition: 0.3s;
        &:hover {
          background-color: var(--orange);
          color: var(--white);
        }
      }
    }
  }
  .online-form {
    background-color: var(--light-blue);
    padding: 40px 0;
    .online-form-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .form-text-side {
        max-width: 625px;
        h3 {
        }
        p {
          color: var(--dark-gray);
        }
        b {
          font-weight: 700;
          font-size: 16px;
        }
      }
      .form-input-side {
        max-width: 460px;
        form {
          width: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          img {
            position: absolute;
            top: 70px;
            left: 20px;
          }
          input {
            width: calc(100% - 20px);
            height: 40px;
            border-radius: 25px;
            border: none;
            padding: 0 0 0 20px;
            font-family: "Medium";
            &::placeholder {
              color: var(--light-gray);
            }
          }
          input:nth-child(3) {
            width: calc(100% - 60px);
            padding: 0 0 0 60px;
          }
          button {
            width: 100%;
            height: 40px;
            background-color: var(--orange);
            border-radius: 25px;
            border: 2px solid var(--orange);
            color: #ffffff;
            font-size: 16px;
            cursor: pointer;
            font-family: "Medium";
            transition: 0.3s;
            &:hover {
              background-color: var(--light-blue);
              color: var(--black);
            }
          }
          .agreement {
            margin: 10px 0 0 0;
            div {
              text-align: center;
              input {
                width: 10px;
                height: 10px;
                border: 1px solid var(--light-gray);
              }
              label {
                margin: 0 0 0 10px;
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
  .reviews-block {
    margin: 80px 0;
    .reviews-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;
      .reviews-title__text {
        max-width: 208px;
        h2 {
          color: var(--orange);
        }
      }
      .reviews-title__line {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        span {
          display: block;
          width: calc(100% - 40px);
          height: 1px;
          background-color: var(--light-gray);
        }
      }
    }
    .rewiews-carousel {
      margin: 0 auto;
      display: flex;
      gap: 40px;
      justify-content: center;
      .rewiews-item {
        max-width: 318px;
        border-radius: 20px;
        border: 1px solid var(--light-gray);
        padding: 20px;
        cursor: pointer;
        .rewiews-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .rewiews-author {
            img {
              margin-left: calc(0px - 4px);
            }
          }
        }
      }
    }
  }
  .dock-block {
    margin-bottom: 80px;
    .document-content {
      max-width: 828px;
      background-color: var(--light-blue);
      border-radius: 20px;
      margin: 0 auto;
      padding: 40px;
      .document-title {
        display: flex;
        align-items: center;
        gap: 60px;

        h3 {
          text-transform: uppercase;
          font-size: 26px;
        }
        p {
        }
      }
      .document-img {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 80px;
        img {
          width: 170px;
        }
      }
    }
  }
}
</style>
