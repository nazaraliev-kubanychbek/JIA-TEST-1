import { useEffect, useState } from "react";
import styles from "./ModalForm.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@hooks/usemedia/useMedia";
import { Value } from "sass";
import { ConfirmModal } from "@components/index";

export const ModalForm = ({ openModalForm, setOpenModalForm, setComplate }) => {
  const [isLegalVisible, setLegalVisible] = useState(false);
  const [isSectorVisible, setSectorVisible] = useState(false);
  const [legalChoice, setLegalChoice] = useState("");
  const [sectorChoice, setSectorChoice] = useState("");
  const [confirm,setConfirm] = useState(false)
  const [sendData, setSendData] = useState({
    full_name: "",
    name_company: "",
    legal_name: "",
    brief_description: "",
    sector: "",
  });
  const [data,setData]= useState({})

  console.log(data);

  useEffect(()=>{
    (async()=>{
      try{
        const res1 = await fetch('https://bif.webtm.ru/ru/api/v1/financing/legal-names/')
        const res_data1 =await res1.json()
        const res2 = await fetch('https://bif.webtm.ru/ru/api/v1/financing/sectors/')
        const res_data2 =await res2.json()
        setData({...data,legal_names:res_data1,sectors:res_data2})
      }catch(err){
        console.error(err);
      }
    })()
  },[])

  const hundlerLegalVisible = () => {
    setLegalVisible(!isLegalVisible);
  };
  const changeSendData = (value, target) => {
    setSendData((prew) => {
      prew[target] = value;
      console.log("prew", prew);
      return prew;
    });
  };

  const hundlerSectorVisible = () => {
    setSectorVisible(!isSectorVisible);
  };

  const submitForm = async (event) => {
    event.stopPropagation();
    console.log(sendData);

    const check =
      sendData.full_name.length &&
      sendData.name_company.length &&
      sendData.legal_name &&
      sendData.brief_description.length &&
      sendData.sector;
    console.log(check);
    if (!check) {
      alert("Вы не заполнили все поля !");
      return;
    }
    try {
      const params = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(sendData),
      };
      const res = await fetch(
        "https://bif.webtm.ru/ru/api/v1/financing/reach/",
        params
      );
      if(res.ok){
        setConfirm(true)
      }
      const data =await res.json();
      console.log(data);
    } catch {
      alert("Проблемы с сетью !");
    }
  };
  useEffect(() => {}, []);

  const w = useMediaQuery("(max-width: 700px)");
  const widthIcon = w ? "10" : "18";
  const heightIcon = w ? "26" : "34";

  if (!openModalForm) {
    return null;
  }
  console.log(sendData);
  return (
    <div
      onClick={() => setOpenModalForm(!openModalForm)}
      className={styles.open}
    >
      {
        confirm?
        <ConfirmModal setConfirm={setConfirm}/>
        :''
      }
      <div className={styles.open_wrap}>
      <div
        onClick={(event) => event.stopPropagation()}
        className={styles.block}
      >
        <div className={styles.container}>
          <form action="" className={styles.form}>
            <input
              type="text"
              placeholder="ФИО"
              onChange={(e) => changeSendData(e.target.value, "full_name")}
            />
            <input
              type="text"
              placeholder="Название вашей компании"
              onChange={(e) => changeSendData(e.target.value, "name_company")}
            />
            <textarea
              rows={2}
              type="textArea"
              placeholder="Краткое описание деятельности вашей компании"
              className={styles.textarea_modal}
              onChange={(e) =>
                changeSendData(e.target.value, "brief_description")
              }
            />

            <div onClick={hundlerLegalVisible} className={styles.select}>
              {legalChoice.length ? data.legal_names[0].name : "Юридическое название"}
              <span
                style={
                  isLegalVisible
                    ? { transform: "rotate(-180deg)", transition: ".3s" }
                    : { transition: ".3s" }
                }
              >
                <svg
                  width={widthIcon}
                  height={heightIcon}
                  viewBox="0 0 18 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.129969 3.44998L2.78247 0.799976L17.23 15.2425C17.4629 15.4739 17.6477 15.7491 17.7738 16.0522C17.8999 16.3553 17.9648 16.6804 17.9648 17.0087C17.9648 17.337 17.8999 17.6621 17.7738 17.9652C17.6477 18.2684 17.4629 18.5436 17.23 18.775L2.78247 33.225L0.132467 30.575L13.6925 17.0125L0.129969 3.44998Z"
                    fill="#000000"
                  />
                </svg>
              </span>
            </div>

            <AnimatePresence>
              {isLegalVisible && (
                <motion.div
                  className={styles.listItem}
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                >

                  {
                    data.legal_names?
                    data.legal_names.map((item,index)=>{
                      if(index!==0){
                        return    <p
                        onClick={() => {
                          setLegalChoice(item.name);
                          hundlerLegalVisible();
                          changeSendData(item.id, "legal_name");
                        }}
                      >
                        {item.name}
                      </p>
                      }

                    }):''
                  }
                </motion.div>
              )}
            </AnimatePresence>

            <div onClick={hundlerSectorVisible} className={styles.select}>
              {sectorChoice.length ? sectorChoice : "Укажите сектор"}
              <span
                style={
                  isSectorVisible
                    ? { transform: "rotate(-180deg)", transition: ".3s" }
                    : { transition: ".3s" }
                }
              >
                <svg
                  width={widthIcon}
                  height={heightIcon}
                  viewBox="0 0 18 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.129969 3.44998L2.78247 0.799976L17.23 15.2425C17.4629 15.4739 17.6477 15.7491 17.7738 16.0522C17.8999 16.3553 17.9648 16.6804 17.9648 17.0087C17.9648 17.337 17.8999 17.6621 17.7738 17.9652C17.6477 18.2684 17.4629 18.5436 17.23 18.775L2.78247 33.225L0.132467 30.575L13.6925 17.0125L0.129969 3.44998Z"
                    fill="#000000"
                  />
                </svg>
              </span>
            </div>
            <AnimatePresence>
              {isSectorVisible && (
                <motion.div
                  className={styles.listItem}
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                >
                  <p
                    onClick={() => {
                      setSectorChoice(
                        "Сельское хозяйство: растениеводство, животноводство, рыбоводство, птицеводство."
                      );
                      hundlerSectorVisible();
                      changeSendData(
                        "Сельское хозяйство: растениеводство, животноводство, рыбоводство, птицеводство.",
                        "sector"
                      );
                    }}
                  >
                    Сельское хозяйство: растениеводство, животноводство,
                    рыбоводство, птицеводство.
                  </p>
                {data.sectors?
                  data.sectors.map((item)=>{
                    return  <p
                    onClick={() => {
                      setSectorChoice(
                        item.name
                      );
                      hundlerSectorVisible();
                      changeSendData(
                        item.id,
                        "sector"
                      );
                    }}
                  >
                    {item.name}
                  </p>
                  })
                  :''
                }
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>

      </div>
      <div className={styles.button}>
        <button onClick={submitForm} className={styles.callButton}>
          Связаться
        </button>
      </div>
      </div>

    </div>
  );
};
