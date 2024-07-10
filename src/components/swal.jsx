import Swal from "sweetalert2";

const ShowSwal = (func) => {
  Swal.fire({
    title: "ثبت نام موفق",
    text: "عمل ثبت نام با موفقیت انجام شد",
    icon: "success",
    confirmButtonText: "متوجه شدم",
  }).then((c) => {
    func();
  });
};

export default ShowSwal;
