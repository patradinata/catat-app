const getInitialData = () => [
  {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-siyrce yang digunakan untuk mengubah sintaks ECMASript 2015+ nmenjadi sintaks yang didukung oleh javascript engine versi lama. babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks jsx",
    createdAt: "2024-03-20t04:27:34.572Z",
    isArchieved: false,
  },
  {
    id: 2,
    title: "Functional Component",
    body: "Functional component merupakan React Component yang dibuat menggunakan fungsi javascript. Agar fungsi javascript dapat disebut component ia harus mengembalikan React Element dan dipanggil layaknya React Component",
    createdAt: "2024-03-20t04:27:34.572Z",
    isArchieved: false,
  },
  {
    id: 3,
    title: "Modularization",
    body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas javascript secara terpisah berdasarkan tanggung jawabnya masing-masing",
    createdAt: "2024-03-20t04:27:34.572Z",
    isArchieved: false,
  },
  {
    id: 4,
    title: "Lifecycle",
    body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidAmount) dan sebagainya",
    createdAt: "2024-03-20t04:27:34.572Z",
    isArchieved: false,
  },
  {
    id: 5,
    title: "ESM",
    body: "ESM (EcmaScript Module merupakan format modularisasi standar javascript)",
    createdAt: "2024-03-20t04:27:34.572Z",
    isArchieved: false,
  },
];

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getInitialData, showFormattedDate };
