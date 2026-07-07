const liffId = "2010567384-7VDFmpAy";
let userProfile = null;

async function main() {
  try {
    await liff.init({ liffId });

    if (!liff.isLoggedIn()) {
      liff.login();
      return;
    }

    userProfile = await liff.getProfile();

    document.getElementById("profile").innerHTML =
      "สวัสดี " + userProfile.displayName;

  } catch (err) {
    document.getElementById("profile").innerHTML =
      "Error : " + err;
  }
}

function submitForm() {
  const phone = document.getElementById("phone").value;
  const fullname = document.getElementById("petname").value;
  const pettype = document.getElementById("pettype").value;

  document.getElementById("result").innerHTML =
    "สมัครสำเร็จ<br>" +
    "ชื่อ LINE: " + userProfile.displayName + "<br>" +
    "เบอร์: " + phone + "<br>" +
    "ชื่อ-สกุล: " + fullname + "<br>" +
    "ประเภท: " + pettype;
}

main();
