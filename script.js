const liffId = "2010567384-7VDFmpAy";

async function main() {
    await liff.init({ liffId });

    if (!liff.isLoggedIn()) {
        liff.login();
        return;
    }

    const profile = await liff.getProfile();

    document.getElementById("profile").innerHTML =
        profile.displayName;
}

main();