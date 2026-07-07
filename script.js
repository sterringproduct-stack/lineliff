const liffId = "2010567384-7VDFmpAy";

let profile = null;

async function main() {

    try {

        await liff.init({ liffId });

        if (!liff.isLoggedIn()) {

            liff.login();

            return;

        }

        profile = await liff.getProfile();

        document.getElementById("profile").innerHTML =

            "สวัสดี " + profile.displayName;

    } catch (err) {

        document.getElementById("profile").innerHTML =

            "Error : " + err.message;

    }

}

function submitForm() {

    if (!profile) {

        alert("ยังโหลดข้อมูล LINE ไม่เสร็จ");

        return;

    }

    const fullname = document.getElementById("fullname").value;

    const phone = document.getElementById("phone").value;

    const birthday = document.getElementById("birthday").value;

    const province = document.getElementById("province").value;

    const pettype = document.getElementById("pettype").value;

    if (fullname === "" || phone === "") {

        alert("กรุณากรอกชื่อและเบอร์โทร");

        return;

    }

    document.getElementById("result").innerHTML =

        `

        <h3>สมัครสมาชิกสำเร็จ 🎉</h3>

        <p><b>ชื่อ LINE :</b> ${profile.displayName}</p>

        <p><b>ชื่อ-นามสกุล :</b> ${fullname}</p>

        <p><b>เบอร์โทร :</b> ${phone}</p>

        <p><b>วันเกิด :</b> ${birthday}</p>

        <p><b>จังหวัด :</b> ${province}</p>

        <p><b>ประเภทสัตว์เลี้ยง :</b> ${pettype}</p>

        `;

    console.log({

        lineName: profile.displayName,

        userId: profile.userId,

        fullname,

        phone,

        birthday,

        province,

        pettype

    });

}

main()
