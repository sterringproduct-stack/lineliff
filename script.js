const liffId = "2010567384-7VDFmpAy";

async function main() {
  try {
    await liff.init({ liffId });

    if (!liff.isLoggedIn()) {
      liff.login();
      return;
    }

    const profile = await liff.getProfile();

    document.getElementById("profile").innerHTML =
      "สวัสดี " + profile.displayName;

  } catch (err) {
    document.getElementById("profile").innerHTML =
      "Error : " + err;
  }
}

main();
