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
            "<b>ชื่อใน LINE :</b> " + profile.displayName;

    } catch (err) {

        document.getElementById("profile").innerHTML =
            err.message;

    }

}

function submitForm() {

    const data = {

        if (!profile){alert("ยังโหลดข้อมูล LINE ไม่เสร็จ");return;}

        fullname: document.getElementById("fullname").value,

        phone: document.getElementById("phone").value,

        birthday: document.getElementById("birthday").value,

        province: document.getElementById("province").value,

        pettype: document.getElementById("pettype").value

    };

    console.log(data);

    document.getElementById("result").innerHTML =
        "สมัครสมาชิกเรียบร้อยแล้ว";

}

main();
