import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";

const defaultValue = [
  {
    id: uuidv4(),
    nama: "Yoga",
    umur: 22,
    jenisKelamin: "Pria",
  },
  {
    id: uuidv4(),
    nama: "Ria",
    umur: 19,
    jenisKelamin: "Wanita",
  },
  {
    id: uuidv4(),
    nama: "Fahmi",
    umur: 25,
    jenisKelamin: "Pria",
  },
  {
    id: uuidv4(),
    nama: "Lala",
    umur: 21,
    jenisKelamin: "Wanita",
  },
  {
    id: uuidv4(),
    nama: "Ivan",
    umur: 25,
    jenisKelamin: "Pria",
  },
];
function Home() {
  const [data, setData] = useState(defaultValue);
  console.log("data", data);
  // console.log("setData", setData);

  const hapusPengunjung = (id) => {
    setData([
      ...data.filter((item) => {
        console.log("item", item);

        return item.id !== id;
      }),
    ]);
  };

  const tambahPengunjung = (newUser) => {
    const newData = {
      id: uuidv4(),
      ...newUser,
    };
    setData([...data, newData]);
  };

  return (
    <div>
      <Header />
      <ListPassenger data={data} hapusPengunjung={hapusPengunjung} />
      <PassengerInput tambahPengunjung={tambahPengunjung} />
    </div>
  );
}

export default Home;
